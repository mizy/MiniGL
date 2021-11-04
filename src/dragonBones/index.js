const { DragonBones, BaseFactory = null, BuildArmaturePackage, BaseObject, Armature } = window.dragonBones || {};
import MiniGLSlot from './MiniGLSlot';
import MiniGLTextureAtlasData from './MiniGLTextureAtlasData';
import MiniGLArmatureDisplay from './MiniGLArmatureDisplay';
import MiniGL from '../index';

class DragonBoneObject extends BaseFactory {
    constructor(miniGL) {
        super();
        if (!BaseFactory) {
            throw new Error('请先加载DragonBones基础JS库！');
        }

        this.miniGL = miniGL;
        this.getDragonBonesInstance();
        this.display = new MiniGLArmatureDisplay();
    }

    addFrameEvent() {
        this.miniGL.on('beforerender', DragonBoneObject.update);
    }

    getDragonBonesInstance() {
        if (!DragonBoneObject._dragonBonesInstance) {
            DragonBoneObject._dragonBonesInstance = new DragonBones({
                hasDBEventListener: (event) => {
                    return this.miniGL._listeners[event];
                },
                // 转发事件
                dispatchDBEvent: (event, data) => {
                    this.miniGL.fire(event, data);
                }
            });
            this.addFrameEvent();
        }
        this._dragonBonesInstance = DragonBoneObject._dragonBonesInstance;
    }

    // 构建对象
    buildArmatureDisplay(armatureName, dragonBonesName = '', skinName = '', textureAtlasName = '') {
        const armature = this.buildArmature(armatureName, dragonBonesName, skinName, textureAtlasName);
        this._dragonBonesInstance.clock.add(armature);
        return armature.display;
    }

    /**
     * @override 复现方法
     * @param {*} dataPackage
     */
    _buildArmature(dataPackage) {
        const armature = BaseObject.borrowObject(Armature);
        const armatureDisplay = new MiniGLArmatureDisplay({miniGL: this.miniGL});
        armature.init(
            dataPackage.armature,
            armatureDisplay, armatureDisplay, this._dragonBones
        );

        return armature;
    }

    _buildSlot(_dataPackage, slotData, armature) {
        const slot = BaseObject.borrowObject(MiniGLSlot);
        const sprite = new MiniGL.Image();
        slot.init(
            slotData, armature, sprite, sprite
        );
        return slot;
    }

    _buildTextureAtlasData(textureAtlasData, textureAtlas) {
        if (textureAtlasData) {
            textureAtlasData.setRenderTexture(textureAtlas, this.miniGL);
        } else {
            textureAtlasData = BaseObject.borrowObject(MiniGLTextureAtlasData);
        }

        return textureAtlasData;
    }

    destroy() {
    }
}
DragonBoneObject.update = (delta) => {
    DragonBoneObject._dragonBonesInstance.advanceTime(delta * 0.001);
};
DragonBoneObject.MiniGLArmatureDisplay = MiniGLArmatureDisplay;
export default DragonBoneObject;
