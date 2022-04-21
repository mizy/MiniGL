import Group from "../Group/Group";
import Texture from "../Texture/Texture";
import { mat3 } from "gl-matrix";
import MiniGL from "..";
export interface BaseMeshConfig {
    [key: string]: any;
}
/**
 * Base 基类方便继承以实现其他类型的情况
 */
class BaseMesh {
    config: BaseMeshConfig;
    vSize = 2;
    offset = 0;
    depthMask = true;
    depthTest = true;
    transparent = true;
    uniformsNeedUpdate = true;
    uniformLocations = {};
    visible = true; // 是否需要重绘
    uniformData: Record<
        string,
        {
            value: number | number[] | Float32Array;
            type: string;
            texture?: WebGLTexture;
        }
    > = {
        z: {
            value: 1,
            type: "uniform1f",
        },
    };
    vertex = [];
    buffers: Record<string, WebGLBuffer> = {};
    buffersSize: Record<string, number> = {};
    indices: number[] = [];
    matrix: mat3;
    shaders: {
        vertex: string;
        fragment: string;
    };
    texture: WebGLTexture;
    gl: WebGL2RenderingContext;
    bufferType: string;
    count: number;
    indicesPointer: WebGLBuffer;
    shaderProgram: WebGLProgram;
    drawType: string;
    miniGL: MiniGL;
    parent: Group;
    zOrder: number;
    childId: number;

    constructor() {}
    init(config: BaseMeshConfig = {}) {
        this.config = Object.assign(
            {
                type: "ok",
            },
            config
        );

        // 初始化模型转换矩阵，这个矩阵按需引用
        this.matrix = mat3.create();

        if (config.shaders) {
            this.shaders = { ...this.shaders, ...config.shaders };
        }

        if (config.miniGL) {
            config.miniGL.canvas.add(this);
        }
    }

    setMatrix(matrix) {
        mat3.copy(this.matrix, matrix);
    }

    setUniformData() {
        if (!this.uniformData || !this.uniformsNeedUpdate) return;
        for (let key in this.uniformData) {
            const item = this.uniformData[key];
            this.setUniform(key, item);
        }
        // this.uniformsNeedUpdate = false;
    }
    /**
     * @param  {} texture
     * @param  {} key='u_Sampler'
     */
    setTexture(texture: Texture | WebGLTexture, key = "u_Sampler") {
        this.uniformData[key] = {
            type: "uniform1i", // image
            value: 0, // 0号纹理传递
            texture: (<Texture>texture).webglTexture
                ? (<Texture>texture).webglTexture
                : texture,
        };
        this.texture = texture;
        this.uniformsNeedUpdate = true;
    }

    setUniform(key, item) {
        const { gl } = this;
        const { value, type, texture, textureUnit = 0 } = item;
        // 矩阵
        if (type.indexOf("uniformMatrix") > -1) {
            gl[type](this.getUniformLocation(key), false, value);

            // 图形数据
        } else if (texture) {
            // 激活纹理单元0，这里可以配置激活多个纹理单元，用来完成一个shader里多个纹理叠加处理的后期效果
            gl.activeTexture(gl[`TEXTURE${textureUnit}`]);
            // 绑定纹理到单元0上
            gl.bindTexture(gl.TEXTURE_2D, item.texture);
            // 传值
            gl[type](this.getUniformLocation(key), value);

            // 行列数据
        } else if (type.slice(-1) === "v" || typeof value !== "object") {
            gl[type](this.getUniformLocation(key), value);
        } else {
            gl[type](
                this.getUniformLocation(key),
                value[0] || value,
                value[1],
                value[2],
                value[3]
            );
        }
        this.uniformData[key] = item;
    }

    /**
     * 新的缓存数据
     * @param  {} data
     * @param  {} name
     */
    setBufferData(
        data: number[],
        name: string,
        size: number,
        bufferType = this.bufferType
    ) {
        // 没有的话初始化复用一个
        if (!this.buffers[name]) {
            this.buffers[name] = this.gl.createBuffer();
        }
        this.buffersSize[name] = size;

        // 顶点buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[name]);
        this.gl.bufferData(
            this.gl.ARRAY_BUFFER,
            new Float32Array(data),
            this.gl[bufferType || "STATIC_DRAW"]
        );
    }

    /**
     * 更新缓冲区数据
     * @param {Array} data
     * @param {string} name
     * @param {number} offset
     */
    updateBufferData(data: number[], name: string, offset = 0) {
        // 顶点buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[name]);
        this.gl.bufferSubData(
            this.gl.ARRAY_BUFFER,
            offset,
            new Float32Array(data)
        );
    }

    setIndices(indices: number[]) {
        this.indices = indices;
        this.count = !this.count ? indices.length : this.count;
        // 顶点buffer
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);
        this.gl.bufferData(
            this.gl.ELEMENT_ARRAY_BUFFER,
            new Uint16Array(indices),
            this.gl.STATIC_DRAW
        );
    }

    // 生成shader程序
    initShader() {
        const { gl } = this;

        // 加载shader
        const vertexShaderObject = this.loadShader(
            this.shaders.vertex,
            this.gl.VERTEX_SHADER
        );
        const fragmentShaderObject = this.loadShader(
            this.shaders.fragment,
            this.gl.FRAGMENT_SHADER
        );

        // 创建程序
        const shaderProgram = this.gl.createProgram();
        this.gl.attachShader(shaderProgram, vertexShaderObject);
        this.gl.attachShader(shaderProgram, fragmentShaderObject);
        this.gl.linkProgram(shaderProgram);

        if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) {
            console.error(
                "shaderProgram Error: ",
                gl.getError(),
                gl.getProgramParameter(shaderProgram, 35715),
                gl.getProgramInfoLog(shaderProgram).trim()
            );
            console.error(
                "fragmentLog:",
                gl.getShaderInfoLog(vertexShaderObject).trim(),
                this.addLineNumbers(gl.getShaderSource(vertexShaderObject))
            );
            console.error(
                "vertexLog:",
                gl.getShaderInfoLog(fragmentShaderObject).trim(),
                this.addLineNumbers(gl.getShaderSource(fragmentShaderObject))
            );
            return;
        }

        this.shaderProgram = shaderProgram;
    }

    addLineNumbers(string) {
        var lines = string.split("\n");

        for (var i = 0; i < lines.length; i++) {
            lines[i] = i + 1 + ": " + lines[i];
        }
        return lines.join("\n");
    }

    // 获取顶点变量地址
    getAttribLocation(name) {
        return this.gl.getAttribLocation(this.shaderProgram, name);
    }

    // 获取uniform变量地址
    getUniformLocation(name) {
        // 缓存会每秒快20ms左右，节省一帧的时机
        if (this.uniformLocations[name]) return this.uniformLocations[name];
        this.uniformLocations[name] = this.gl.getUniformLocation(
            this.shaderProgram,
            name
        );
        return this.uniformLocations[name];
    }

    // 加载shader
    loadShader(shaderStr, type) {
        let shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, shaderStr);
        this.gl.compileShader(shader);
        return shader;
    }

    render() {
        if (!this.shaders) return;
        // 2D 只需要两个坐标轴标识位置
        const vLen = Math.ceil(this.vertex.length / this.vSize); // 几个点
        const offset = 0; // 从数据第几位开始偏移
        const normalize = false;

        for (let key in this.buffers) {
            const bufferData = this.buffers[key];
            const bufferPosition = this.getAttribLocation(key);
            // 分别绑定数据到shader程序中
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
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

        // 加载shader程序
        this.gl.useProgram(this.shaderProgram);

        this.setUniformData();

        // 渲染
        if (this.vertex.length) {
            this.gl.drawArrays(this.gl[this.drawType], this.offset, vLen);
        }
    }

    afterRender() {}

    onAdd(miniGL) {
        this.miniGL = miniGL;
        // 获取顶点数据内存里的指针
        this.gl = miniGL.gl;
        // 没有初始化的情况
        if (!this.indicesPointer) {
            this.indicesPointer = this.gl.createBuffer();
        }
        if (this.shaders && !this.shaderProgram) {
            this.initShader();
        }
        this.afterAdd();
    }

    afterAdd() {}

    translate(x, y) {
        mat3.translate(this.matrix, this.matrix, [x, y]);
    }
    scale(x, y) {
        y = y || x;
        mat3.scale(this.matrix, this.matrix, [x, y]);
    }

    // 销毁shader
    destroy() {
        const shaders = this.gl.getAttachedShaders(this.shaderProgram);
        shaders.forEach((item) => {
            this.gl.deleteShader(item);
        });
        this.gl.deleteBuffer(this.indicesPointer);
        this.gl.deleteProgram(this.shaderProgram);
        this.parent = undefined;
        this.dispose();
    }

    // 释放buffer空间
    dispose() {
        for (let key in this.buffers) {
            this.gl.disableVertexAttribArray(this.getAttribLocation(key));
            this.gl.deleteBuffer(this.buffers[key]);
        }
        for (let key in this.uniformData) {
            if (this.uniformData[key].texture) {
                this.gl.deleteTexture(this.uniformData[key].texture);
            }
        }
        this.buffers = {};
    }
}

export default BaseMesh;
