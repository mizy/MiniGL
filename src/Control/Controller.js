import {mat3} from 'gl-matrix';
class Controller {
    constructor(config) {
        this.miniGL = config.miniGL;
        this.viewport = this.miniGL.viewport;
		this.gl = this.miniGL.gl;
		this.config = Object.assign({
            // 默认参数
        }, config.config);
        if (!config.disableController) {
            this.addEvents();
        }
        this.matrix = mat3.create();
    }

    addEvents() {
        const {container} = this.miniGL;
        container.addEventListener('mousedown', (e)=>{
            if (e.ctrlKey) {e.preventDefault();return;}
            this.startXY = {
                x: e.offsetX,
                y: e.offsetY,
                startX: this.viewport.translate[0],
                startY: this.viewport.translate[1]
            };
            this.addMoveEvents();
        });
        container.addEventListener('wheel', (e)=>{
            e.preventDefault();
            this.zoom(e.deltaY > 0 ? 0.99 : 1.01, e.pageX, e.pageY);
        });
    }

    addMoveEvents() {
        const {container} = this.miniGL;
        container.addEventListener('mousemove', this.onMouseMove);
        container.addEventListener('mouseup', this.onMouseUp);
    }

    onMouseMove = (e)=>{

        const x = e.offsetX - this.startXY.x + this.startXY.startX;
        const y = e.offsetY - this.startXY.y + this.startXY.startY;
        this.moveTo(x, y);
    }

    onMouseUp=()=>{
        const {container} = this.miniGL;
        container.removeEventListener('mousemove', this.onMouseMove);
        container.removeEventListener('mouseup', this.onMouseUp);
    }
    /**
     * @param  {} scale
     * @param  {} cx
     * @param  {} cy
     */
    zoomTo(scale, cx, cy) {

        let changeScale = scale / this.viewport.scale;
        this.zoom(changeScale, cx, cy);
    }

    /**
     * @param  {} scale
     * @param  {} cx
     * @param  {} cy
     */
    zoom(scale, cx, cy) {
        // 求变换前的屏幕坐标
        const canvasPos = [
            (cx - this.viewport.translate[0]) / this.viewport.scale,
            (cy - this.viewport.translate[1]) / this.viewport.scale
        ];
        const nextScale = scale * this.viewport.scale;
        // 求出变换后的偏移坐标
        const x = cx - canvasPos[0] * nextScale;
        const y = cy - canvasPos[1] * nextScale;
        this.transform(nextScale, x, y);
    }

    // 这个x,y是当前屏幕的x,y,变换后的
    /**
     * @param  {} x
     * @param  {} y
     */
    moveTo(x, y) {
        const {scale} = this.viewport;
        this.transform(scale, x, y);
    }

    move(x, y) {
        const {scale} = this.viewport;
        x = x + this.viewport.translate[0];
        y = y + this.viewport.translate[1];
        this.transform(scale, x, y);
    }

    /** 转换到指定情形，先放大后平移，然后注入到viewport.transform
     * @param  {} scale
     * @param  {} x
     * @param  {} y
     */
    transform(scale, x, y) {
        this.viewport.translate = [x, y];
        this.viewport.scale = scale;
        this.matrix = mat3.create();
        mat3.translate(this.matrix, this.matrix, this.viewport.translate);
        mat3.scale(this.matrix, this.matrix, [scale, scale]);
        mat3.mul(this.viewport.transform, this.viewport.matrix, this.matrix);
        console.log(this.viewport.transform)
    }

    /**
     * @param  {} rad
     * @param  {} cx=this.viewport.width/2
     * @param  {} cy=this.viewport.height/2
     */
    rotateTo(rad, cx = this.viewport.width / 2, cy = this.viewport.height / 2) {
        let changeRad = rad - this.viewport.rotation || 0;
        this.rotate(changeRad, cx, cy);
    }

    rotate(rad, cx = this.viewport.width / 2, cy = this.viewport.height / 2) {
        const {transform} = this.viewport;
        this.viewport.rotation += rad;
        mat3.translate(transform, transform, [cx, cy]);// 再平移回去
        mat3.rotate(transform, transform, rad);// 再平移回去
        mat3.translate(transform, transform, [-cx, -cy]);// 先平移到原点
    }
}
export default Controller;
