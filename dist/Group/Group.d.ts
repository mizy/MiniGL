export default Group;
/**
 * 进行批量渲染
 * @class
 */
declare class Group extends Base {
    children: any[];
    childId: number;
    addChild(child: any): void;
    addChildAt(child: any, index: any): void;
    removeChild(child: any): void;
    swapChildren(a: any, b: any): void;
}
import Base from "../Mesh/Base";
