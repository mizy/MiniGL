import shader from '../Shaders/widthLine';
import Base from './BaseMesh';
class WidthLine extends Base {
    constructor(config) {
        super();
        this.drawType = 'TRIANGLES'; // "TRIANGLE_STRIP";
        this.shaders = {
            vertex: shader.vertexShader,
            fragment: shader.fragmentShader
        };
        this.offset = 0;
        this.data = [];
        config = Object.assign({
            width: 20,
            z: 1,
            offset: 0
        }, config);
        this.uniformData = {
            z: {
                value: config.z || 1,
                type: 'uniform1f'
            }
        };
        this.init(config);
    }
    setData(data) {
        if (!data.length && data.length < 2)
            return console.warn('need input data.length >= 2');
        this.uniformData.color = {
            value: this.config.color || [1, 0, 1, 1],
            type: 'uniform4fv'
        };
        this.uniformData.width = {
            value: 2 * this.config.width / this.miniGL.viewport.height,
            type: 'uniform1f'
        };
        this.uniformData.offset = {
            value: 2 * this.config.offset / this.miniGL.viewport.height,
            type: 'uniform1f'
        };
        this.data = data;
        const points = [];
        data.forEach(item => {
            points.push(item.position.x, item.position.y);
        });
        // 生产双倍点for两个边
        const res = this.calcSidePoints(points);
        this.setBufferData(res.nowData, 'now', 2);
        this.setBufferData(res.preData, 'pre', 2);
        this.setBufferData(res.nextData, 'next', 2);
        this.setBufferData(res.side, 'side', 1);
        // 生成顶点
        const indices = [];
        const indicesLength = res.nowData.length / 2;
        // TRIANGLES情况
        for (let i = 0; i < indicesLength - 2; i += 2) {
            indices.push(i);
            indices.push(i + 1);
            indices.push(i + 2);
            indices.push(i + 2);
            indices.push(i + 1);
            indices.push(i + 3);
        }
        // Strip退化方案太反人类，不hack 了
        // for (let i = 0; i < indicesLength; i++) {
        // 	//012 213 233 336 366 667 678
        // 	// 4 =>3 5=>6 //退化过程
        // 	// data[length - 1],
        // 	indices.push(i);
        // }
        this.setIndices(indices);
        this.res = res;
    }
    addData(data) {
    }
    calcSidePoints(data = []) {
        const length = data.length;
        let side = [];
        let nextData = [];
        let preData = [];
        let nowData = [];
        // 生产双倍点for两个边
        for (let i = 0; i < length; i += 2) {
            side.push(1, -1);
            nowData.push(data[i], data[i + 1], data[i], data[i + 1]);
        }
        const next = [2 * data[length - 2] - data[length - 4], 2 * data[length - 1] - data[length - 3]];
        nextData = [
            ...nowData,
            ...next, ...next
        ];
        nextData.splice(0, 4);
        const pre = [2 * data[0] - data[2], 2 * data[1] - data[3]];
        preData = [
            ...pre,
            ...pre,
            ...nowData
        ];
        return {
            nowData,
            preData,
            side,
            nextData
        };
    }
    render() {
        // 2D 只需要两个坐标轴标识位置
        const offset = 0; // 从数据第几位开始偏移
        const normalize = false;
        for (let key in this.buffers) {
            const bufferData = this.buffers[key];
            const bufferPosition = this.getAttribLocation(key);
            // 分别绑定数据到shader程序中
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
            this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, offset);
            // todo:webgl2.0 实例数组能减少同样形状但渲染不同的高性能方案
            this.gl.enableVertexAttribArray(bufferPosition);
        }
        // 使用顶点数据
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);
        // 加载shader程序
        this.gl.useProgram(this.shaderProgram);
        this.setUniformData();
        // 渲染
        if (this.indices.length) {
            this.gl.drawElements(this.gl[this.drawType], this.indices.length, this.gl.UNSIGNED_SHORT, this.offset);
        }
    }
}
export default WidthLine;
