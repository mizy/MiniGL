import Mesh from '../Mesh/Mesh';
/**
 * @class
 */
class Rect {
    constructor(x, y, width, height) {
        /**
         * 数据
         */
        this.data = [];
        /**
         * 索引
         */
        this.indices = [];
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.makeData();
    }
    makeData() {
        this.data = [
            { position: { x: this.x, y: this.y } },
            { position: { x: this.x, y: this.y + this.height } },
            { position: { x: this.x + this.width, y: this.y } },
            { position: { x: this.x + this.width, y: this.y + this.height } }
        ];
        this.indices = [0, 1, 2, 2, 1, 3];
    }
    addTo(app) {
        if (this.meshKey) {
            app.canvas.remove(this.meshKey);
        }
        this.mesh = new Mesh();
        this.meshKey = app.canvas.add(this.mesh);
        this.mesh.setData(this.data, this.indices);
    }
}
export default Rect;
