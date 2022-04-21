import pointShader from '../Shaders/point';
import Base from './BaseMesh';
class Point extends Base {
    constructor(config) {
        super();
        this.drawType = 'POINTS';
        this.vertex = [];
        this.offset = 0;
        this.vSize = 2;
        this.bufferType = 'DYNAMIC_DRAW';
        config = Object.assign({
            isRound: true,
            initTime: false,
            sizeAttenuation: true,
        }, config);
        this.shaders = {
            vertex: config.vertexShader || pointShader.vertexShader(config),
            fragment: config.fragmentShader || pointShader.fragmentShader(config)
        };
        this.uniformData = {
            z: {
                value: 1,
                type: 'uniform1f'
            },
            t: {
                value: 1,
                type: 'uniform1f'
            },
            antialias: {
                value: 0.1,
                type: 'uniform1f'
            }
        };
        this.init(config);
    }
    setData(data) {
        this.dispose();
        const points = [];
        const colors = [];
        const size = [];
        const vTime = [];
        data.forEach(item => {
            points.push(item.position.x, item.position.y);
            colors.push(...(item.color || [1, 0, 0, 1]));
            size.push(item.size || 10);
            vTime.push(item.initTime || this.config.initTime || 2 * Math.random() * Math.PI);
        });
        this.vertex = points;
        this.setBufferData(points, 'position', 2);
        this.setBufferData(colors, 'color', 4);
        this.setBufferData(size, 'size', 1);
        this.setBufferData(vTime, 'initTime', 1);
    }
    /**
     *
     * @param {any} param 入参
     */
    setBufferDatas({ position, color, size, initTime }) {
        const { miniGL: { viewport } } = this;
        this.dispose();
        this.uniformData.transform = {
            value: viewport.transform,
            type: 'uniformMatrix3fv'
        };
        this.vertex = position;
        position && this.setBufferData(position, 'position', 2);
        color && this.setBufferData(color, 'color', 4);
        size && this.setBufferData(size, 'size', 1);
        if (initTime) {
            this.setBufferData(initTime, 'initTime', 1);
        }
    }
}
export default Point;
