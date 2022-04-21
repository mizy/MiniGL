import Group from '../Group/Group.js';
import EventListener from '../Base';
import Line from '../Mesh/Line';
/**
 * 骨架显示
 * @class
 */
class MiniGLArmatureDisplay extends Group {
    constructor() {
        super(...arguments);
        this._armature = null;
    }
    dispatchDBEvent(type, eventObject) {
        this.listener.fire(type, eventObject);
    }
    hasDBEventListener(type) {
        return this.listener._listeners[type]; // .d.ts bug
    }
    addDBEventListener(type, func) {
        this.listener.on(type, func);
    }
    removeDBEventListener(type, func) {
        this.listener.off(type, func);
    }
    dbInit(armature) {
        this._armature = armature;
        this.listener = new EventListener();
        const mesh = new Line({ color: [0, 0.1, 0.2, 1] });
        mesh.drawType = 'LINES';
        this.drawer = mesh;
        this.addChild(mesh);
    }
    dbClear() {
        this.destroy();
    }
    dbUpdate() {
        if (!this.mesh)
            return;
        const bones = this._armature.getBones();
        const data = [];
        for (let i = 0, l = bones.length; i < l; ++i) {
            const bone = bones[i];
            const boneLength = bone.boneData.length;
            const startX = bone.globalTransformMatrix.tx;
            const startY = bone.globalTransformMatrix.ty;
            const endX = startX + bone.globalTransformMatrix.a * boneLength;
            const endY = startY + bone.globalTransformMatrix.b * boneLength;
            data.push({
                position: { x: startX, y: startY }
            }, {
                position: { x: endX, y: endY }
            });
        }
        this.drawer.setData(data);
    }
    dispose() {
        if (this._armature !== null) {
            this._armature.dispose();
            this._armature = null;
        }
        this.drawer.destroy();
        super.dispose.call(this);
    }
    destroy() {
        this.dispose();
    }
    getArmature() {
        return this._armature;
    }
    getAnimation() {
        return this._armature.animation;
    }
}
export default MiniGLArmatureDisplay;
