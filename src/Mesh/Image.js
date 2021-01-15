import shader from '../Shaders/image';
import Base from './Base';
import loadTexture from '../Utils/LoadTexture';

class Image extends Base {
    drawType = 'TRIANGLES';

    offset = 0;// array.BYTES_PER_ELEMENT * indicesEachLength

    constructor(config = {}) {
        super(config);
        this.shaders = {
            vertex: shader.vertexShader,
            fragment: shader.fragmentShader
        };
        this.uniformData = {
            z: {
                value: config.z || 1,
                type: 'uniform1f'
            },
            alphaColor: {
                value: config.alphaColor || [1, 1, 1, 1],
                type: 'uniform4fv'
            }
        };
        this.init(config);
        this.vSize = 2;
    }

    setMap(imagePath) {
        loadTexture(this.gl, imagePath).then((texture) => {
           this.setTexture(texture);
        });
    }

    setData(data) {
        if (!this.miniGL) {
            throw new Error('请先将组件通过miniGL.canvas.add()加入实例中');
        }
        // 释放内存空间
        this.dispose();

        this.data = data;

        const { width, height, src, texture, x = 0, y = 0 } = data;

        // 设置纹理
        if (src) {
            this.setMap(src);
        }
        if (texture) {
            this.setTexture(texture);
        }

        // 计算uv
        const points = [
            x, y,
            x, y + height,
            x + width, y,
            x + width, y + height
        ];
        const indices = [0, 1, 2, 2, 1, 3];
        const uv = [
            0, 0,
            0, 1,
            1, 0,
            1, 1
        ];

        this.vertex = points;
        this.setBufferData(points, 'position', 2);
        this.setBufferData(uv, 'uv', 2);
        this.setIndices(indices);
        this.uniformsNeedUpdate = true;
    }

    // 设置纹理数据
    setTexture(texture, key = 'u_Sampler') {
        this.uniformData[key] = {
            type: 'uniform1i', // image
            value: 0, // 0号纹理传递
            texture: texture.webglTexture ? texture.webglTexture : texture
        };
        this.texture = texture;
        this.uniformsNeedUpdate = true;
    }

    render() {
        // 2D 只需要两个坐标轴标识位置
        const offset = 0;// 从数据第几位开始偏移
        const normalize = false;
        const { gl } = this;

        // 图片加载完了再说
        if (!this.uniformData || !this.uniformData['u_Sampler']) {
            return;
        }

        // 分别绑定数据到shader程序中
        for (let key in this.buffers) {
            const bufferData = this.buffers[key];
            const bufferPosition = this.getAttribLocation(key);
            // 分别绑定数据到shader程序中
            gl.bindBuffer(gl.ARRAY_BUFFER, bufferData);
            gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], gl.FLOAT, normalize, 0, offset);
            gl.enableVertexAttribArray(bufferPosition);
        }

        // 使用顶点数据
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);

        // 加载shader程序
        gl.useProgram(this.shaderProgram);

        this.setUniformData();

        // offset必须乘以类型数组的长度，意味着要从内存中数据的对应字节数开始算 根据类型乘对应的BYTES_PER_ELEMENT
        // 渲染
        if (this.indices.length) {
            gl.drawElements(gl[this.drawType], this.indices.length, gl.UNSIGNED_SHORT, this.offset);
        }
    }

}
export default Image;
