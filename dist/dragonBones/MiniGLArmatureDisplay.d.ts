export default MiniGLArmatureDisplay;
/**
 * 骨架显示
 * @class
 */
declare class MiniGLArmatureDisplay extends Group {
    _armature: any;
    dispatchDBEvent(type: any, eventObject: any): void;
    hasDBEventListener(type: any): any;
    addDBEventListener(type: any, func: any): void;
    removeDBEventListener(type: any, func: any): void;
    dbInit(armature: any): void;
    listener: EventListener;
    drawer: Line;
    dbClear(): void;
    dbUpdate(): void;
    getArmature(): any;
    getAnimation(): any;
}
import Group from "../Group/Group.js";
import EventListener from "../Base";
import Line from "../Mesh/Line";
