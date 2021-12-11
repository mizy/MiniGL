export default ViewPort;
/**
 * @class
 */
declare class ViewPort {
    constructor(config: any);
    miniGL: any;
    gl: any;
    config: any;
    transform: mat3;
    convertTransform: mat3;
    scale: number;
    translate: number[];
    rotation: number;
    /**
     * @param  {} x=0
     * @param  {} y=0
     */
    convertScreenToClip(x?: any, y?: any): {
        x: number;
        y: number;
    };
    /**
     * @param  {} x=0
     * @param  {} y=0
     */
    convertClipToScreen(x?: any, y?: any): {
        x: number;
        y: number;
    };
    /**
     * 重新布局
     */
    resize(): void;
    pixelRatio: number;
    renderWidth: number;
    renderHeight: number;
    width: any;
    height: any;
    ratio: number;
    makeMatrix(): void;
    matrix: mat3;
}
import { mat3 } from "gl-matrix";
