import Base from "./Base.js";
import Viewport from "./View/Viewport.js";
import Canvas from "./View/Canvas.js";
import Controller from "./Utils/Controller.js";
export interface MiniGLConfig {
    container: HTMLElement;
    contextOption: WebGLContextAttributes;
    miniGL: MiniGL;
    [key: string]: any;
}
class MiniGL extends Base {
    autoUpdate = false;
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
    constructor(config: MiniGLConfig) {
        super();
        this.container = config.container;
        this.config = Object.assign(
            {
                contextOption: {
                    alpha: true,
                    antialias: true,
                    antialiasSamples: 16,
                    stencil: true,
                    powerPreference: "high-performance",
                    preserveDrawingBuffer: true,
                },
                pointConfig: {},
            },
            config
        );
    }

    init() {
        const { contextOption = {} } = this.config;
        this.canvasDOM = document.createElement("canvas");
        this.container.appendChild(this.canvasDOM);

        this.gl = this.canvasDOM.getContext("webgl2", contextOption);
        if (this.gl == null) {
            return console.error(
                "你的浏览器不支持webgl2,请更新使用chrome浏览器"
            );
        }
        this.container.style.overflow = "hidden";
        this.viewport = new Viewport({ miniGL: this, ...this.config });
        this.viewport.resize();
        this.canvas = new Canvas({ miniGL: this, ...this.config });
        this.controller = new Controller({ miniGL: this, ...this.config });

        this.canvas.update();
    }
}
export default MiniGL;
