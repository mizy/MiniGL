import Mesh from '../Mesh/Mesh';
import Point from '../Mesh/Point';
import Line from '../Mesh/Line';
import WidthLine from '../Mesh/WidthLine';
import MiniGL, { MiniGLConfig } from '..';
/**
 * @class
 */
declare class Canvas {
    index: number;
    meshes: any[];
    miniGL: MiniGL;
    gl: WebGL2RenderingContext;
    mesh: Mesh;
    point: Point;
    line: Line;
    widthLine: WidthLine;
    beforeTime: number;
    constructor(config: MiniGLConfig);
    dispose(): void;
    toDataUrl(): string;
    status: string;
    update: () => void;
    /**
     * @param  {} mesh
     * @param  {} [key]
     * @returns {String} key
     */
    add(mesh: any): any;
    remove(child: any): void;
    addChild(): void;
    removeChild(): void;
    render(delta: number): void;
    /**
     * @param  {} mesh
     * @param  {} delta
     * @param  {} parentMatrix 一级级传下来的矩阵
     */
    renderMesh(mesh: any, delta: any, parentMatrix?: any): void;
    makeNeedUniform(item: any): void;
    makeTransform(item: any, parentMatrix: any): void;
}
export default Canvas;
