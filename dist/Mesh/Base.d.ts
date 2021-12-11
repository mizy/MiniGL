export default Base;
/**
 * Base 基类方便继承以实现其他类型的情况
 */
declare class Base {
    /**
     *
     * @param {any} config
     */
    constructor(config: any);
    vSize: number;
    offset: number;
    depthMask: boolean;
    depthTest: boolean;
    transparent: boolean;
    uniformsNeedUpdate: boolean;
    uniformLocations: {};
    visible: boolean;
    uniformData: {
        z: {
            value: number;
            type: string;
        };
    };
    vertex: any[];
    init(config?: {}): void;
    config: {
        type: string;
    };
    buffers: {};
    buffersSize: any[];
    indices: any;
    matrix: mat3;
    shaders: any;
    setMatrix(matrix: any): void;
    setData(data: any): void;
    setUniformData(): void;
    /**
     * @param  {} texture
     * @param  {} key='u_Sampler'
     */
    setTexture(texture: any, key?: any): void;
    texture: any;
    setUniform(key: any, item: any): void;
    /**
     * 新的缓存数据
     * @param  {} data
     * @param  {} name
     */
    setBufferData(data: any, name: any, size: any, bufferType: any): void;
    /**
     * 更新缓冲区数据
     * @param {Array} data
     * @param {string} name
     * @param {number} offset
     */
    updateBufferData(data: any[], name: string, offset?: number): void;
    setIndices(indices: any): void;
    initShader(): void;
    shaderProgram: any;
    addLineNumbers(string: any): any;
    getAttribLocation(name: any): any;
    getUniformLocation(name: any): any;
    loadShader(shaderStr: any, type: any): any;
    render(): void;
    afterRender(): void;
    onAdd(miniGL: any): void;
    miniGL: any;
    gl: any;
    indicesPointer: any;
    translate(x: any, y: any): void;
    scale(x: any, y: any): void;
    destroy(): void;
    parent: any;
    dispose(): void;
}
import { mat3 } from "gl-matrix";
