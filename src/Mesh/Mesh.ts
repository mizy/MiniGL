import meshShader from '../Shaders/mesh';
import Base, { BaseMeshConfig } from './BaseMesh';
export interface PointData{
    position: {
        x: number,
        y: number,
    },
    size?: number,
    color?: [number, number, number, number],
    [key: string]: any,
}
class Mesh extends Base {
    drawType = 'TRIANGLES';
    data:PointData[]
    offset = 0;// array.BYTES_PER_ELEMENT * indicesEachLength

    constructor(config: BaseMeshConfig = {
        wireFrame: false
    }) {
        super();
        this.shaders = {
            vertex: meshShader.vertexShader,
            fragment: meshShader.fragmentShader
        };
        this.uniformData.z = {
            value: config.z || 1,
            type: 'uniform1f'
        };
        this.init(config);
        this.vSize = 2;

    }

    setData(data:PointData[], indices:number[]) {
        this.dispose();
        const points = [];
        const colors = [];
        this.data = data;
        data.forEach(item => {
            const coord = [item.position.x, item.position.y];
            const color = item.color || [1, 1, 0, 1];
            colors.push(...color);
            points.push(...coord);
        });
        this.vertex = points;
        this.setBufferData(points, 'position', 2);
        this.setBufferData(colors, 'color', 4);
        this.setIndices(indices);
    }

    setBufferDatas({
        position, color, indices, uvs
    }: {
        position:number[],color:number[],indices:number[],uvs:number[]
    }) {
        const {
            miniGL: { viewport }
        } = this;
        this.dispose();

        this.vertex = position;
        this.setBufferData(position, 'position', 2);
        this.setBufferData(color, 'color', 4);
        this.setBufferData(uvs, 'uv', 2);
        this.setIndices(indices);
    }

    setIndices(input:number[]) {
        let indices = [];
        // 支持显示网格线
        if (this.config.wireFrame && this.drawType === 'TRIANGLES') {
            for (let i = 0; i < input.length - 2; i += 3) {
                indices.push(input[i], input[i + 1], input[i + 1], input[i + 2], input[i + 2], input[i]);
            }
        } else {
            indices = input;
        }
        this.indices = indices;
        // 顶点buffer
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this.gl.STATIC_DRAW);
    }

    render() {
        // 2D 只需要两个坐标轴标识位置
        const offset = 0;// 从数据第几位开始偏移
        const normalize = false;

        // 分别绑定数据到shader程序中
        for (let key in this.buffers) {
            const bufferData = this.buffers[key];
            const bufferPosition = this.getAttribLocation(key);
            // 分别绑定数据到shader程序中
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
            this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, offset);
            this.gl.enableVertexAttribArray(bufferPosition);
        }

        // 使用顶点数据
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);

        // 加载shader程序
        this.gl.useProgram(this.shaderProgram);

        this.setUniformData();

        // 渲染
        if (this.indices.length) {
            const drawType = this.config.wireFrame ? 'LINES' : this.gl[this.drawType];
            // offset必须乘以类型数组的长度，意味着要从内存中数据的对应字节数开始算 根据类型乘对应的BYTES_PER_ELEMENT
            this.gl.drawElements(drawType, this.indices.length, this.gl.UNSIGNED_SHORT, this.offset);
        }
    }
}
export default Mesh;
