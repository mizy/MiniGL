import Base from './Base';
import Viewport from './View/Viewport';
import Canvas from './View/Canvas.js';
import Controller from './Control/Controller';
export interface MiniGLConfig {
    container: HTMLElement;
    contextOption: WebGLContextAttributes;
    miniGL: MiniGL;
    [key: string]: any;
}
declare class MiniGL extends Base {
    autoUpdate: boolean;
    container: HTMLElement;
    config: MiniGLConfig;
    canvasDOM: HTMLCanvasElement;
    gl: WebGL2RenderingContext;
    viewport: Viewport;
    canvas: Canvas;
    controller: Controller;
    /**
     *
     * @param {any} config
     * @param {HTMLDivElement} config.container
     */
    constructor(config: MiniGLConfig);
    init(): void;
}
export default MiniGL;
