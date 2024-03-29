import { mat3 } from "gl-matrix";
import MiniGL, { MiniGLConfig } from "../MiniGL.js";
import ViewPort from '../View/Viewport.js';
class Controller {
    miniGL: MiniGL;
    viewport: ViewPort;
    gl: WebGL2RenderingContext;
    status: string;
    config: MiniGLConfig;
    matrix: mat3;
    startXY: { x: number; y: number; startX: number; startY: number };
    constructor(config: MiniGLConfig) {
        this.miniGL = config.miniGL;
        this.viewport = this.miniGL.viewport;
        this.gl = this.miniGL.gl;
        this.status = "enable";
        this.config = Object.assign(
            {
                // 默认参数
            },
            config.config
        );
        if (!config.disableController) {
            this.addEvents();
        }
        this.matrix = mat3.create();
    }

    disable() {
        this.status = "disable";
    }

    enable() {
        this.status = "enable";
    }

    addEvents() {
        const { container } = this.miniGL;
        container.addEventListener("mousedown", (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
                return;
            }
            this.startXY = {
                x: e.offsetX,
                y: e.offsetY,
                startX: this.viewport.translate[0],
                startY: this.viewport.translate[1],
            };
            this.addMoveEvents();
        });
        container.addEventListener(
            "wheel",
            (e) => {
                this.zoom(e.deltaY > 0 ? 0.99 : 1.01, e.pageX, e.pageY);
            },
            { passive: true }
        );
    }

    addMoveEvents() {
        const { container } = this.miniGL;
        container.addEventListener("mousemove", this.onMouseMove);
        container.addEventListener("mouseup", this.onMouseUp);
    }

    onMouseMove = (e: MouseEvent) => {
        if (this.status === "disable") return;
        const x = e.offsetX - this.startXY.x + this.startXY.startX;
        const y = e.offsetY - this.startXY.y + this.startXY.startY;
        this.moveTo(x, y);
    };

    onMouseUp = () => {
        const { container } = this.miniGL;
        container.removeEventListener("mousemove", this.onMouseMove);
        container.removeEventListener("mouseup", this.onMouseUp);
    };

    /**
     * 放大到制定的倍率
     * @param scale
     * @param cx
     * @param cy
     */
    zoomTo(scale: number, cx: number, cy: number) {
        let changeScale = scale / this.viewport.scale;
        this.zoom(changeScale, cx, cy);
    }

    /**
     * 当前基础的放大倍率
     * @param  {number} scale
     * @param  {number} cx
     * @param  {number} cy
     */
    zoom(scale: number, cx: number, cy: number) {
        // 求世界坐标
        const canvasPos = this.viewport.convertScreenToWorld(cx, cy);
        const nextScale = scale * this.viewport.scale;
        // 求出变换后的偏移坐标
        const x = cx - canvasPos.x * nextScale;
        const y = cy - canvasPos.y * nextScale;
        this.transform(nextScale, x, y);
    }

    /**
     * 这个x,y是当前屏幕的x,y,变换后的
     * @param  {number} x
     * @param  {number} y
     */
    moveTo(x: number, y: number) {
        const { scale } = this.viewport;
        this.transform(scale, x, y);
    }

    /**
     * 移动到指定的坐标
     * @param x
     * @param y
     */
    move(x: number, y: number) {
        const { scale } = this.viewport;
        x = x + this.viewport.translate[0];
        y = y + this.viewport.translate[1];
        this.transform(scale, x, y);
    }

    /**
     *  转换到指定情形，先放大后平移，然后注入到viewport.transform
     * @param scale
     * @param x
     * @param y
     */
    transform(scale, x, y) {
        this.viewport.translate = [x, y];
        this.viewport.scale = scale;
        this.matrix = mat3.create();
        mat3.translate(
            this.matrix,
            this.matrix,
            new Float32Array(this.viewport.translate)
        );
        mat3.scale(this.matrix, this.matrix, [scale, scale]);
        mat3.mul(this.viewport.transform, this.viewport.matrix, this.matrix);
    }

    /**
     * @param  {number} rad
     * @param  {number} cx=this.viewport.width/2
     * @param  {number} cy=this.viewport.height/2
     */
    rotateTo(
        rad: number,
        cx = this.viewport.width / 2,
        cy = this.viewport.height / 2
    ) {
        let changeRad = rad - this.viewport.rotation || 0;
        this.rotate(changeRad, cx, cy);
    }

    /**
     *
     * @param rad
     * @param cx
     * @param cy
     */
    rotate(
        rad: number,
        cx = this.viewport.width / 2,
        cy = this.viewport.height / 2
    ) {
        const { transform } = this.viewport;
        this.viewport.rotation += rad;
        mat3.translate(transform, transform, [cx, cy]); // 再平移回去
        mat3.rotate(transform, transform, rad); // 再平移回去
        mat3.translate(transform, transform, [-cx, -cy]); // 先平移到原点
    }
}
export default Controller;
