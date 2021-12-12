export default Controller;
declare class Controller {
    constructor(config: any);
    miniGL: any;
    viewport: any;
    gl: any;
    status: string;
    config: any;
    matrix: mat3;
    disable(): void;
    enable(): void;
    addEvents(): void;
    startXY: {
        x: any;
        y: any;
        startX: any;
        startY: any;
    };
    addMoveEvents(): void;
    onMouseMove: (e: any) => void;
    onMouseUp: () => void;
    /**
     * @param  {} scale
     * @param  {} cx
     * @param  {} cy
     */
    zoomTo(scale: any, cx: any, cy: any): void;
    /**
     * @param  {number} scale 当前基础的放大倍率
     * @param  {number} cx
     * @param  {number} cy
     */
    zoom(scale: number, cx: number, cy: number): void;
    /**
     * @param  {} x
     * @param  {} y
     */
    moveTo(x: any, y: any): void;
    move(x: any, y: any): void;
    /** 转换到指定情形，先放大后平移，然后注入到viewport.transform
     * @param  {} scale
     * @param  {} x
     * @param  {} y
     */
    transform(scale: any, x: any, y: any): void;
    /**
     * @param  {} rad
     * @param  {} cx=this.viewport.width/2
     * @param  {} cy=this.viewport.height/2
     */
    rotateTo(rad: any, cx?: any, cy?: any): void;
    rotate(rad: any, cx?: number, cy?: number): void;
}
import { mat3 } from "gl-matrix";
