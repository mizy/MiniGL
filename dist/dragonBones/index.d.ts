import MiniGLSlot from './MiniGLSlot';
import MiniGLArmatureDisplay from './MiniGLArmatureDisplay';
import MiniGL from '../index';
declare class DragonBoneObject extends dragonBones.BaseFactory {
    miniGL: MiniGL;
    display: MiniGLArmatureDisplay;
    _dragonBonesInstance: dragonBones.DragonBones;
    constructor(miniGL: any);
    addFrameEvent(): void;
    update: (delta: any) => void;
    getDragonBonesInstance: () => void;
    buildArmatureDisplay(armatureName: any, dragonBonesName?: string, skinName?: string, textureAtlasName?: string): any;
    /**
     * @override 复现方法
     * @param {*} dataPackage
     */
    _buildArmature(dataPackage: any): dragonBones.Armature;
    _buildSlot(_dataPackage: any, slotData: any, armature: any): MiniGLSlot;
    _buildTextureAtlasData(textureAtlasData: any, textureAtlas: any): any;
    destroy(): void;
}
export default DragonBoneObject;
