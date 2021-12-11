export default DragonBoneObject;
declare const DragonBoneObject_base: any;
declare class DragonBoneObject extends DragonBoneObject_base {
    [x: string]: any;
    constructor(miniGL: any);
    miniGL: any;
    display: MiniGLArmatureDisplay;
    addFrameEvent(): void;
    getDragonBonesInstance(): void;
    _dragonBonesInstance: any;
    buildArmatureDisplay(armatureName: any, dragonBonesName?: string, skinName?: string, textureAtlasName?: string): any;
    /**
     * @override 复现方法
     * @param {*} dataPackage
     */
    override _buildArmature(dataPackage: any): any;
    _buildSlot(_dataPackage: any, slotData: any, armature: any): any;
    _buildTextureAtlasData(textureAtlasData: any, textureAtlas: any): any;
    destroy(): void;
}
declare namespace DragonBoneObject {
    export function update(delta: any): void;
    export { MiniGLArmatureDisplay };
}
import MiniGLArmatureDisplay from "./MiniGLArmatureDisplay";
