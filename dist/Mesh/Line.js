import lineShader from '../Shaders/line';
import Base from './BaseMesh';
class Line extends Base {
    constructor(config) {
        super();
        this.drawType = 'LINE_STRIP';
        this.shaders = {
            vertex: lineShader.vertexShader,
            fragment: lineShader.fragmentShader
        };
        this.offset = 0;
        config = Object.assign({
            z: 1
        }, config);
        this.uniformData = {
            z: {
                value: Math.min(config.z, 1),
                type: 'uniform1f'
            }
        };
        this.init(config);
    }
    setData(data) {
        this.dispose();
        const points = [];
        this.data = data;
        const colors = [];
        data.forEach(item => {
            points.push(item.position.x, item.position.y);
            colors.push(...(item.color || this.config.color || [1, 0, 1, 1]));
        });
        this.vertex = points;
        this.setBufferData(points, 'position', 2);
        this.setBufferData(colors, 'color', 4);
    }
    /**
     *
     * @param {any} param 入参
     */
    setBufferDatas({ position, color }) {
        this.dispose();
        this.vertex = position;
        position && this.setBufferData(position, 'position', 2);
        color && this.setBufferData(color, 'color', 4);
    }
}
export default Line;
