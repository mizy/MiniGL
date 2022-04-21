import {BinaryOffset, BoneType, BlendMode} from './Enum';
import MiniGLTextureAtlasData from './MiniGLTextureAtlasData';
import {mat3} from 'gl-matrix';

/**
 * 骨骼插槽
 * @class
 */
class MiniGLSlot extends dragonBones.Slot {
    private _armatureDisplay: any;
    private _renderDisplay: any;
    private _colorFilter: any;

    _onClear() {
        super._onClear.call(this);
        this._armatureDisplay = null; //
        this._renderDisplay = null; //
        this._colorFilter = null;
    }

    _initDisplay(value, isRetain) {

    }

    _disposeDisplay(value, isRelease) {
        // value.destroy();
        value.parent.remove(value);
        value.destroy();
    }

    // 更新前函数
    _onUpdateDisplay() {
        this._armatureDisplay = this._armature.display;
        this._renderDisplay = this._display ? this._display : this._rawDisplay ;
    }

    // 添加到骨架容器中
    _addDisplay() {
        if (this._renderDisplay.parent) {this._renderDisplay.parent.removeChild(this._renderDisplay);}
        this._armature.display.addChild(this._renderDisplay);
    }

    _replaceDisplay(value) {
        this._renderDisplay.parent && this._renderDisplay.parent.removeChild(this._renderDisplay);
        this._armatureDisplay.addChild(this._renderDisplay);
        this._armatureDisplay.swapChildren(this._renderDisplay, value);
        this._armatureDisplay.removeChild(value);
        value.destroy();
    }

     _removeDisplay() {
        this._armatureDisplay.removeChild(this._renderDisplay);
    }

    _updateZOrder() {
        const index = this._renderDisplay.zOrder;
        if (index === this._zOrder) {
            return;
        }
        this._armatureDisplay.removeChild(this._renderDisplay);
        this._armatureDisplay.addChildAt(this._renderDisplay, this._zOrder);
    }

    _updateVisible() {
        const visible = this._parent.visible && this._visible;
        this._renderDisplay.visible = visible;
    }

     _updateBlendMode() {
        const {miniGL: {gl}} = this._armatureDisplay;
        switch (this._blendMode) {
            case BlendMode.Normal:
                this._renderDisplay.blendMode = gl.ONE_MINUS_SRC_ALPHA;
                break;

            case BlendMode.Add:
                this._renderDisplay.blendMode = gl.ONE_MINUS_DST_ALPHA;
                break;

            case BlendMode.Erase:
                this._renderDisplay.blendMode = gl.DST_ALPHA;
                break;

            default:
                break;
        }
    }

    _updateColor() {
        const alpha = this._colorTransform.alphaMultiplier * this._globalAlpha;
        try {
            this._renderDisplay.uniformData.alpha.value = alpha;
        } catch (e) {}
    }

    _updateFrame() {
        let currentTextureData = this._textureData;
        this._renderDisplay.textureData = this._textureData;

        if (this._displayFrame !== null && this._display !== null && currentTextureData !== null) {
            let currentTextureAtlasData = currentTextureData.parent;

            if (this._armature.replacedTexture !== null) { // Update replaced texture atlas.
                if (this._armature._replaceTextureAtlasData === null) {
                    currentTextureAtlasData = new MiniGLTextureAtlasData();
                    currentTextureAtlasData.copyFrom(currentTextureData.parent);
                    currentTextureAtlasData.texture = this._armature.replacedTexture;
                    this._armature._replaceTextureAtlasData = currentTextureAtlasData;
                } else {
                    currentTextureAtlasData = this._armature._replaceTextureAtlasData;
                }

                currentTextureData = currentTextureAtlasData.getTexture(currentTextureData.name);
            }

            if (currentTextureData.renderTexture !== null) {
                if (this._geometryData !== null) { // Mesh.
                    const data = this._geometryData.data;
                    const intArray = data.intArray;
                    const floatArray = data.floatArray;
                    const vertexCount = intArray[this._geometryData.offset + BinaryOffset.GeometryVertexCount];
                    const triangleCount = intArray[this._geometryData.offset + BinaryOffset.GeometryTriangleCount];
                    let vertexOffset = intArray[this._geometryData.offset + BinaryOffset.GeometryFloatOffset];

                    if (vertexOffset < 0) {
                        vertexOffset += 65536; // Fixed out of bounds bug.
                    }

                    const uvOffset = vertexOffset + vertexCount * 2;
                    const scale = this._armature._armatureData.scale;

                    const meshDisplay = this._renderDisplay;

                    // 这一步生成所需要的点和uv和索引
                    const uvs = [];const vertices = [];const indices = [];

                    for (let i = 0, l = vertexCount * 2; i < l; ++i) {
                        vertices[i] = floatArray[vertexOffset + i] * scale;
                        uvs[i] = floatArray[uvOffset + i];
                    }

                    for (let i = 0; i < triangleCount * 3; ++i) {
                        indices[i] = intArray[this._geometryData.offset + BinaryOffset.GeometryVertexIndices + i];
                    }

                    meshDisplay.dispose();
                    meshDisplay.setTexture(currentTextureData.renderTexture);
                    meshDisplay.setBufferData(vertices, 'position', 2);
                    meshDisplay.setBufferData(uvs, 'uv', 2);
                    meshDisplay.setIndices(indices);

                    meshDisplay.vertex = vertices;

                    const isSkinned = this._geometryData.weight !== null;
                    const isSurface = this._parent._boneData.type !== BoneType.Bone;
                    if (isSkinned || isSurface) {
                        this._identityTransform();
                    }
                } else { // Normal texture.
                    const scale = currentTextureData.parent.scale * this._armature._armatureData.scale;
                    const textureWidth = currentTextureData.region.width * scale;
                    const textureHeight = currentTextureData.region.height * scale;
                    const normalDisplay = this._renderDisplay;
                    const texture = currentTextureData.renderTexture;
                    normalDisplay.setData({
                        texture,
                        width: textureWidth, height: textureHeight
                    });
                }
                this._visibleDirty = true;

                return;
            }
        }
        this._renderDisplay.visible = false;
    }

    _updateMesh() {
        const scale = this._armature._armatureData.scale;
        const deformVertices = this._displayFrame.deformVertices;
        const bones = this._geometryBones;
        const geometryData = this._geometryData;
        const weightData = geometryData.weight;

        const hasDeform = deformVertices.length > 0 && geometryData.inheritDeform;
        const meshDisplay = this._renderDisplay;

        if (weightData !== null) {
            const data = geometryData.data;
            const intArray = data.intArray;
            const floatArray = data.floatArray;
            const vertexCount = intArray[geometryData.offset + BinaryOffset.GeometryVertexCount];
            let weightFloatOffset = intArray[weightData.offset + BinaryOffset.WeigthFloatOffset];

            if (weightFloatOffset < 0) {
                weightFloatOffset += 65536; // Fixed out of bounds bug.
            }

            for (
                let i = 0, iD = 0, iB = weightData.offset + BinaryOffset.WeigthBoneIndices + bones.length, iV = weightFloatOffset, iF = 0;
                i < vertexCount;
                ++i
            ) {
                const boneCount = intArray[iB++];
                let xG = 0.0; let yG = 0.0;

                for (let j = 0; j < boneCount; ++j) {
                    const boneIndex = intArray[iB++];
                    const bone = bones[boneIndex];

                    if (bone !== null) {
                        const matrix = bone.globalTransformMatrix;
                        const weight = floatArray[iV++];
                        let xL = floatArray[iV++] * scale;
                        let yL = floatArray[iV++] * scale;

                        if (hasDeform) {
                            xL += deformVertices[iF++];
                            yL += deformVertices[iF++];
                        }

                        xG += (matrix.a * xL + matrix.c * yL + matrix.tx) * weight;
                        yG += (matrix.b * xL + matrix.d * yL + matrix.ty) * weight;
                    }
                }

                meshDisplay.vertex[iD++] = xG;
                meshDisplay.vertex[iD++] = yG;
            }

            meshDisplay.setBufferData(meshDisplay.vertex, 'position', 2);

        } else {
            const isSurface = this._parent._boneData.type !== BoneType.Bone;
            const data = geometryData.data;
            const intArray = data.intArray;
            const floatArray = data.floatArray;
            const vertexCount = intArray[geometryData.offset + BinaryOffset.GeometryVertexCount];
            let vertexOffset = intArray[geometryData.offset + BinaryOffset.GeometryFloatOffset];

            if (vertexOffset < 0) {
                vertexOffset += 65536; // Fixed out of bounds bug.
            }

            for (let i = 0, l = vertexCount * 2; i < l; i += 2) {
                let x = floatArray[vertexOffset + i] * scale;
                let y = floatArray[vertexOffset + i + 1] * scale;

                if (hasDeform) {
                    x += deformVertices[i];
                    y += deformVertices[i + 1];
                }

                if (isSurface) {
                    const matrix = (this._parent as dragonBones.Surface)._getGlobalTransformMatrix(x, y);
                    meshDisplay.vertex[i] = matrix.a * x + matrix.c * y + matrix.tx;
                    meshDisplay.vertex[i + 1] = matrix.b * x + matrix.d * y + matrix.ty;
                } else {
                    meshDisplay.vertex[i] = x;
                    meshDisplay.vertex[i + 1] = y;
                }
            }
            meshDisplay.setBufferData(meshDisplay.vertex, 'position', 2);
        }

    }

    _identityTransform() {
        this._renderDisplay.setMatrix(mat3.create());
    }

    _updateTransform() {
        const matrix = this.globalTransformMatrix;
        const newMatrix = mat3.fromValues(
            matrix.a, matrix.b, 0,
            matrix.c, matrix.d, 0,
            matrix.tx, matrix.ty, 1);
        mat3.translate(newMatrix, newMatrix, [-this._pivotX, -this._pivotY]);
        this._renderDisplay.setMatrix(newMatrix);
    }
}
MiniGLSlot.toString = function() {
    return '[class dragonBones.MiniSlot]';
};

export default MiniGLSlot;
