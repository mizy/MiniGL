import { mat3 } from 'gl-matrix';
import MiniGL, { MiniGLConfig } from '..';
declare class Controller {
    miniGL: MiniGL;
    viewport: import("/Users/mizy/projects/MiniGL/src/View/Viewport").default;
    gl: WebGL2RenderingContext;
    status: string;
    config: MiniGLConfig;
    matrix: mat3;
    startXY: {
        x: number;
        y: number;
        startX: number;
        startY: number;
    };
    constructor(config: MiniGLConfig);
    disable(): void;
    enable(): void;
    addEvents(): void;
    addMoveEvents(): void;
    onMouseMove: (e: MouseEvent) => void;
    onMouseUp: () => void;
    /**
     * 放大到制定的倍率
     * @param scale
     * @param cx
     * @param cy
     */
    zoomTo(scale: number, cx: number, cy: number): void;
    /**
     * 当前基础的放大倍率
     * @param  {number} scale
     * @param  {number} cx
     * @param  {number} cy
     */
    zoom(scale: number, cx: number, cy: number): void;
    /**
     * 这个x,y是当前屏幕的x,y,变换后的
     * @param  {number} x
     * @param  {number} y
     */
    moveTo(x: number, y: number): void;
    /**
     * 移动到指定的坐标
     * @param x
     * @param y
     */
    move(x: number, y: number): void;
    /**
     *  转换到指定情形，先放大后平移，然后注入到viewport.transform
     * @param scale
     * @param x
     * @param y
     */
    transform(scale: any, x: any, y: any): void;
    /**
     * @param  {number} rad
     * @param  {number} cx=this.viewport.width/2
     * @param  {number} cy=this.viewport.height/2
     */
    rotateTo(rad: number, cx?: number, cy?: number): void;
    /**
     *
     * @param rad
     * @param cx
     * @param cy
     */
    rotate(rad: number, cx?: number, cy?: number): void;
}
export default Controller;
