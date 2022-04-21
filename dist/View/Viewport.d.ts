import { mat3 } from 'gl-matrix';
import MiniGL, { MiniGLConfig } from '..';
/**
 * @class
 */
declare class ViewPort {
    miniGL: MiniGL;
    gl: WebGL2RenderingContext;
    config: MiniGLConfig;
    transform: mat3;
    convertTransform: mat3;
    scale: number;
    translate: number[];
    rotation: number;
    width: number;
    height: number;
    pixelRatio: number;
    renderWidth: number;
    renderHeight: number;
    ratio: number;
    matrix: mat3;
    constructor(config: MiniGLConfig);
    convertScreenToWorld(x?: number, y?: number): {
        x: number;
        y: number;
    };
    convertWorldToScreen(x?: number, y?: number): {
        x: number;
        y: number;
    };
    /**
     * @param  {} x=0
     * @param  {} y=0
     */
    convertScreenToClip(x?: number, y?: number): {
        x: number;
        y: number;
    };
    /**
     * @param  {} x=0
     * @param  {} y=0
     */
    convertClipToScreen(x?: number, y?: number): {
        x: number;
        y: number;
    };
    /**
     * 重新布局
     */
    resize(): void;
    makeMatrix(): void;
}
export default ViewPort;
