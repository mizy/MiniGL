import instanceMeshShader from "../Shaders/instanceMeshShader";
import loadTexture from "../Utils/LoadTexture";
import Base, { BaseMeshConfig } from "./BaseMesh";
import { PointData } from "./Mesh";
class InstanceMesh extends Base {
    drawType = "TRIANGLES";
    offset = 0; // array.BYTES_PER_ELEMENT * indicesEachLength
    data: PointData[];
    instanceData: number[][];
    instanceDataBuffers: Record<string, number> = {};

    constructor(
        config: BaseMeshConfig = {
            // 一个值对应几个对象
            instanceDivisor: 1,
        }
    ) {
        super();
        this.shaders = {
            vertex: instanceMeshShader.vertexShader,
            fragment: instanceMeshShader.fragmentShader,
        };
        this.uniformData = {
            z: {
                value: config.z || 1,
                type: "uniform1f",
            },
        };
        this.init(config);
        this.vSize = 2;
    }

    setMap(src: string) {
        return loadTexture(this.gl, src).then((texture) => {
            this.uniformData["map"] = {
                type: "uniform1i", // image
                value: 0, // 0号纹理传递
                texture,
            };
            this.uniformsNeedUpdate = true;
        });
    }

    setData(data: PointData[], indices: number[]) {
        this.dispose();

        const points = [];
        const colors = [];
        this.data = data;
        data.forEach((item) => {
            const coord = [item.position.x, item.position.y];
            const color = item.color || [0, 0.1, 0.2, 1];
            colors.push(...color);
            points.push(...coord);
        });
        this.vertex = points;
        this.setBufferData(points, "position", 2);
        this.setBufferData(colors, "color", 4);
        this.setIndices(indices);
    }

    setBufferDatas({
        position,
        color,
        indices,
        uvs,
    }: {
        position: number[];
        color: number[];
        indices: number[];
        uvs: number[];
    }) {
        const {
            miniGL: { viewport },
        } = this;
        this.dispose();

        this.vertex = position;
        this.setBufferData(position, "position", 2);
        this.setBufferData(color, "color", 4);
        this.setBufferData(uvs, "uv", 2);
        this.setIndices(indices);
    }

    // 设置实例数组
    setInstanceData(instanceData: number[][], name = "instanceOffset") {
        this.disposeInstanceData();
        this.instanceData = instanceData;
        const instanceNums = instanceData[0].length;
        const arr: number[] = [];
        this.instanceData.forEach((item) => {
            arr.push(...item);
        });
        this.setInstanceBufferData(arr, name, instanceNums);
    }

    setInstanceBufferData(data, name, length, instanceDivisor = 1) {
        this.setBufferData(data, name, length);
        this.instanceDataBuffers[name] = instanceDivisor;
    }

    disposeInstanceData() {
        for (let key in this.instanceDataBuffers) {
            this.gl.disableVertexAttribArray(this.buffersSize[key]);
            this.gl.deleteBuffer(this.buffers[key]);
        }
        this.instanceDataBuffers = {};
    }

    render() {
        // 2D 只需要两个坐标轴标识位置
        const offset = 0; // 从数据第几位开始偏移
        const normalize = false;

        // 分别绑定数据到shader程序中
        for (let key in this.buffers) {
            const bufferData = this.buffers[key];
            const bufferPosition = this.getAttribLocation(key);
            // 分别绑定数据到shader程序中
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData); // 绑定数据
            // 挂载到对应的指针上
            this.gl.vertexAttribPointer(
                bufferPosition,
                this.buffersSize[key],
                this.gl.FLOAT,
                normalize,
                0,
                offset
            );
            this.gl.enableVertexAttribArray(bufferPosition);
        }
        // 加载实例偏移数组，这里写死instanceOffset的数据指针名，注意不要导致命名冲突了
        for (let key in this.instanceDataBuffers) {
            this.gl.vertexAttribDivisor(
                this.getAttribLocation(key),
                this.instanceDataBuffers[key]
            );
        }

        // 使用顶点数据
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);

        // 加载shader程序
        this.gl.useProgram(this.shaderProgram);
        // 配置uniform
        this.setUniformData();

        // 渲染
        if (this.indices.length) {
            const drawType = this.config.wireFrame
                ? "LINES"
                : this.gl[this.drawType];
            // offset必须乘以类型数组的长度，意味着要从内存中数据的对应字节数开始算 根据类型乘对应的TypeArray.BYTES_PER_ELEMENT
            this.gl.drawElementsInstanced(
                drawType,
                this.count,
                this.gl.UNSIGNED_SHORT,
                this.offset,
                this.instanceData.length
            );
        }
    }
}
export default InstanceMesh;
