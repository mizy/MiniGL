import Mesh from '../Mesh/Mesh';
/**
 * @class
 */
declare class Rect {
    /**
     * 数据
     */
    data: any[];
    /**
     * 索引
     */
    indices: any[];
    height: number;
    width: number;
    x: number;
    y: number;
    meshKey: any;
    mesh: Mesh;
    constructor(x: number, y: number, width: number, height: number);
    makeData(): void;
    addTo(app: any): void;
}
export default Rect;
