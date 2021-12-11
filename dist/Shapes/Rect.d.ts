export default Rect;
/**
 * @class
 */
declare class Rect {
    /**
     * @param  {} width
     * @param  {} height
     * @param  {} x
     * @param  {} y
     */
    constructor(x: any, y: any, width: any, height: any);
    /**
     * 数据
     */
    data: any[];
    /**
     * 索引
     */
    indices: any[];
    width: any;
    height: any;
    x: any;
    y: any;
    makeData(): void;
    addTo(app: any): void;
    mesh: Mesh;
    meshKey: any;
}
import Mesh from "../Mesh/Mesh";
