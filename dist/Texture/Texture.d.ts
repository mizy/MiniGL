export default Texture;
declare class Texture {
    constructor(miniGL: any);
    /**
     * @param {Boolean} 是否支持预乘，默认为true，会提前乘好rgb*a，不需要再次乘alpha
     */
    premultiplyAlpha: boolean;
    miniGL: any;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    lg2(n: any): number;
    create({ image, rect, reverseY, name }: {
        image: any;
        rect: any;
        reverseY?: boolean;
        name: any;
    }): any;
    webglTexture: any;
    /**
     * 更新材质数据
     * @param {*} texture
     * @param {*} image
     */
    update(texture: any, image: any): void;
}
