export default Canvas;
/**
 * @class
 */
declare class Canvas {
    constructor(config: any);
    index: number;
    meshes: any[];
    miniGL: any;
    gl: any;
    mesh: Mesh;
    point: Point;
    line: Line;
    widthLine: WidthLine;
    dispose(): void;
    toDataUrl(): any;
    status: string;
    update: () => void;
    beforeTime: number;
    /**
     * @param  {} mesh
     * @param  {} [key]
     * @returns {String} key
     */
    add(mesh: any): string;
    remove(child: any): void;
    addChild(...args: any[]): void;
    removeChild(...args: any[]): void;
    render(delta: any): void;
    /**
     * @param  {} mesh
     * @param  {} delta
     * @param  {} parentMatrix 一级级传下来的矩阵
     */
    renderMesh(mesh: any, delta: any, parentMatrix: any): void;
    makeNeedUniform(item: any): void;
    makeTransform(item: any, parentMatrix: any): void;
}
import Mesh from "../Mesh/Mesh";
import Point from "../Mesh/Point";
import Line from "../Mesh/Line";
import WidthLine from "../Mesh/WidthLine";
