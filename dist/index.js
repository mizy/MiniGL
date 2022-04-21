import Base from './Base';
import Viewport from './View/Viewport';
import Canvas from './View/Canvas.js';
import Controller from './Control/Controller';
class MiniGL extends Base {
    /**
     *
     * @param {any} config
     * @param {HTMLDivElement} config.container
     */
    constructor(config) {
        super();
        this.autoUpdate = false;
        this.container = config.container;
        this.config = Object.assign({
            contextOption: {
                alpha: true,
                antialias: true,
                antialiasSamples: 16,
                stencil: true,
                powerPreference: 'high-performance',
                preserveDrawingBuffer: true
            },
            pointConfig: {}
        }, config);
    }
    init() {
        const { contextOption = {} } = this.config;
        this.canvasDOM = document.createElement('canvas');
        this.container.appendChild(this.canvasDOM);
        this.gl = this.canvasDOM.getContext('webgl2', contextOption);
        if (this.gl == null) {
            return console.error('你的浏览器不支持webgl2,请更新使用chrome浏览器');
        }
        this.viewport = new Viewport(Object.assign({ miniGL: this }, this.config));
        this.viewport.resize();
        this.canvas = new Canvas(Object.assign({ miniGL: this }, this.config));
        this.controller = new Controller(Object.assign({ miniGL: this }, this.config));
        this.canvas.update();
    }
}
export default MiniGL;
