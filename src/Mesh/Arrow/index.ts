import { BaseMeshConfig } from '../BaseMesh';
import InstanceMesh from '../InstanceMesh';
import { PointData } from '../Mesh';

interface InstanceData {
    instanceOffset: PointData[],
    instanceColor:PointData[]
}
/**
 * @class
 */
class Arrow extends InstanceMesh {
    arrowInstanceData: InstanceData[];

    constructor(config:BaseMeshConfig = {
        // 一个值对应几个对象
        instanceDivisor: 1
    }) {
        super(config);
        this.shaders = {
            vertex: `
            precision highp float;
            attribute vec2 position;
            attribute vec2 instanceOffset;
            attribute vec4 instanceColor;
	        varying vec4 vColor;
            uniform mat3 transform;
            uniform float z;
            void main()
            {
                vColor = instanceColor;
                vec3 mPosition = transform * vec3(position+instanceOffset.xy,z);
                gl_Position = vec4(mPosition.xy,z,1.0);
            }`,
            fragment: `
            precision highp float;
            varying vec4 vColor;
            void main()
            {
                gl_FragColor = vColor;
            }
            `
        };
        this.uniformData = {
            z: {
                value: config.z || 1,
                type: 'uniform1f'
            }
        };
        this.init(config);
        this.vSize = 2;
    }

    setData(data:PointData[], indices:number[]) {

        this.dispose();

        const points = [];
        this.data = data;
        data.forEach(item => {
            const coord = [item.position.x, item.position.y];
            const color = item.color || [0, 0.1, 0.2, 1];
            points.push(...coord);
        });
        this.vertex = points;
        this.setBufferData(points, 'position', 2);
        this.setIndices(indices);
    }

    afterAdd() {
        this.setData([
            { position: { x: -10, y: 20 } },
            { position: { x: 0, y: 0 } },
            { position: { x: 10, y: 20 } },
        ], [0, 1, 2])
    }

    // 设置实例数组
    setArrowInstanceData(instanceData:InstanceData[]) {
        this.disposeInstanceData();
        this.arrowInstanceData = instanceData;
        const instanceOffset = [];
        const instanceColor = [];
        this.arrowInstanceData.forEach(item => {
            instanceOffset.push(...item.instanceOffset);
            instanceColor.push(...item.instanceColor);
        });
        this.setInstanceBufferData(instanceOffset, 'instanceOffset', 2);
        this.setInstanceBufferData(instanceColor, 'instanceColor', 4);
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
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);// 绑定数据
            // 挂载到对应的指针上
            this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, offset);
            this.gl.enableVertexAttribArray(bufferPosition);
        }
        // 加载实例偏移数组，这里写死instanceOffset的数据指针名，注意不要导致命名冲突了
        for (let key in this.instanceDataBuffers) {
            this.gl.vertexAttribDivisor(this.getAttribLocation(key), this.instanceDataBuffers[key]);
        }

        // 使用顶点数据
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);

        // 加载shader程序
        this.gl.useProgram(this.shaderProgram);
        // 配置uniform
        this.setUniformData();

        // 渲染
        if (this.indices.length) {
            const drawType = this.config.wireFrame ? 'LINES' : this.gl[this.drawType];
            // offset必须乘以类型数组的长度，意味着要从内存中数据的对应字节数开始算 根据类型乘对应的TypeArray.BYTES_PER_ELEMENT
            this.gl.drawElementsInstanced(drawType, this.count, this.gl.UNSIGNED_SHORT, this.offset, this.instanceData.length);
        }
    }
}
export default Arrow;
