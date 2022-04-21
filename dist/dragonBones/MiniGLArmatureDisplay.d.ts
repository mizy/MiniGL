import Group from '../Group/Group.js';
import EventListener from '../Base';
import Line from '../Mesh/Line';
/**
 * 骨架显示
 * @class
 */
declare class MiniGLArmatureDisplay extends Group implements dragonBones.IArmatureProxy {
    armature: dragonBones.Armature;
    animation: dragonBones.Animation;
    _armature: any;
    listener: EventListener;
    drawer: Line;
    mesh: any;
    dispatchDBEvent(type: any, eventObject: any): void;
    hasDBEventListener(type: any): any;
    addDBEventListener(type: any, func: any): void;
    removeDBEventListener(type: any, func: any): void;
    dbInit(armature: any): void;
    dbClear(): void;
    dbUpdate(): void;
    dispose(): void;
    destroy(): void;
    getArmature(): any;
    getAnimation(): any;
}
export default MiniGLArmatureDisplay;
