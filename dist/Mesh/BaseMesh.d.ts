import Group from '@/Group/Group';
import Texture from '@/Texture/Texture';
import { mat3 } from 'gl-matrix';
import MiniGL from '..';
export interface BaseMeshConfig {
    [key: string]: any;
}
/**
 * Base 基类方便继承以实现其他类型的情况
 */
declare class BaseMesh {
    config: BaseMeshConfig;
    vSize: number;
    offset: number;
    depthMask: boolean;
    depthTest: boolean;
    transparent: boolean;
    uniformsNeedUpdate: boolean;
    uniformLocations: {};
    visible: boolean;
    uniformData: Record<string, {
        value: number | number[] | Float32Array;
        type: string;
        texture?: WebGLTexture;
    }>;
    vertex: any[];
    buffers: Record<string, WebGLBuffer>;
    buffersSize: Record<string, number>;
    indices: number[];
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
    constructor();
    init(config?: BaseMeshConfig): void;
    setMatrix(matrix: any): void;
    setUniformData(): void;
    /**
     * @param  {} texture
     * @param  {} key='u_Sampler'
     */
    setTexture(texture: Texture | WebGLTexture, key?: string): void;
    setUniform(key: any, item: any): void;
    /**
     * 新的缓存数据
     * @param  {} data
     * @param  {} name
     */
    setBufferData(data: number[], name: string, size: number, bufferType?: string): void;
    /**
     * 更新缓冲区数据
     * @param {Array} data
     * @param {string} name
     * @param {number} offset
     */
    updateBufferData(data: number[], name: string, offset?: number): void;
    setIndices(indices: number[]): void;
    initShader(): void;
    addLineNumbers(string: any): any;
    getAttribLocation(name: any): number;
    getUniformLocation(name: any): any;
    loadShader(shaderStr: any, type: any): WebGLShader;
    render(): void;
    afterRender(): void;
    onAdd(miniGL: any): void;
    afterAdd(): void;
    translate(x: any, y: any): void;
    scale(x: any, y: any): void;
    destroy(): void;
    dispose(): void;
}
export default BaseMesh;
