export default MiniGLTextureAtlasData;
declare const MiniGLTextureAtlasData_base: any;
declare class MiniGLTextureAtlasData extends MiniGLTextureAtlasData_base {
    [x: string]: any;
    scale: number;
    _onClear(): void;
    disposeEnabled: boolean;
    _renderTexture: any;
    createTexture(): any;
    setRenderTexture(texture: any, miniGL: any): any;
}
declare namespace MiniGLTextureAtlasData {
    function toString(): string;
}
