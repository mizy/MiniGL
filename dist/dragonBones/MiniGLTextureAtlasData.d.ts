declare class MiniGLTextureAtlasData extends dragonBones.TextureAtlasData {
    scale: number;
    disposeEnabled: boolean;
    private _renderTexture;
    _onClear(): void;
    createTexture(): MiniTextureData;
    setRenderTexture(texture: any, miniGL: any): any;
}
/**
 * @internal
 */
declare class MiniTextureData extends dragonBones.TextureData {
    renderTexture: any;
    _onClear(): void;
}
export default MiniGLTextureAtlasData;
