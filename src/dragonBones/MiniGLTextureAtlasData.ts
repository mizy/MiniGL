import Texture from '../Texture/Texture';

class MiniGLTextureAtlasData extends (window.dragonBones ? dragonBones.TextureAtlasData :null) {
  scale = 1;
  disposeEnabled: boolean;
  private _renderTexture: any;
  _onClear() {
    super._onClear();

    if (this.disposeEnabled && this._renderTexture !== null) {
      this._renderTexture.dispose();
    }

    this.disposeEnabled = false;
    this._renderTexture = null;
  }

  createTexture() {
    const texture = dragonBones.BaseObject.borrowObject(MiniTextureData);
    return texture;
  }
  setRenderTexture(texture, miniGL) {
    this._renderTexture = texture;

    if (this._renderTexture !== null) {
      for (let k in this.textures) {
        const textureData = this.textures[k];

        const renderTexture = new Texture(miniGL);
        renderTexture.create({ image: texture, rect: textureData.region, reverseY: false, name: textureData.name });
        (textureData as any).renderTexture = renderTexture;
      }
    } else {
      for (let k in this.textures) {
        const textureData = this.textures[k];
        (textureData as any).renderTexture = null;
      }
    }
    return texture;
  }

}

/**
 * @internal
 */
class MiniTextureData extends (window.dragonBones ? dragonBones.TextureData : null) {
  renderTexture = null; // Initial value.
  _onClear() {
    super._onClear.call(this);
    if (this.renderTexture !== null) {
      this.renderTexture.destroy(false);
    }
    this.renderTexture = null;
  }
}

MiniTextureData.toString = function () {
  return '[class dragonBones.MiniTextureData]';
};
MiniGLTextureAtlasData.toString = function () {
  return '[class dragonBones.MiniAtlasData]';
};
export default MiniGLTextureAtlasData;
