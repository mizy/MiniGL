import MiniGL from "..";
declare class Texture {
    /**
     * @param {Boolean} 是否支持预乘，默认为true，会提前乘好rgb*a，不需要再次乘alpha
     */
    premultiplyAlpha: boolean;
    miniGL: MiniGL;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    webglTexture: WebGLTexture;
    constructor(miniGL: MiniGL);
    lg2(n: any): number;
    create({ image, rect, reverseY, name }: {
        image: CanvasImageSource;
        rect: any;
        reverseY: boolean;
        name: string;
    }): WebGLTexture;
    /**
     * 更新材质数据
     * @param {*} texture
     * @param {*} image
     */
    update(texture: WebGLTexture, image: HTMLImageElement): void;
}
export default Texture;
