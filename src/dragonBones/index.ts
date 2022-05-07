import MiniGLSlot from "./MiniGLSlot";
import MiniGLTextureAtlasData from "./MiniGLTextureAtlasData";
import MiniGLArmatureDisplay from "./MiniGLArmatureDisplay";
import MiniGL from "../MiniGL";
import Image from "../Mesh/Image";

class DragonBoneObject extends (window.dragonBones ? dragonBones.BaseFactory : null) {
  miniGL: MiniGL;
  display: MiniGLArmatureDisplay;
  _dragonBonesInstance: dragonBones.DragonBones;
  constructor(miniGL) {
    super();
    this.miniGL = miniGL;
    this.getDragonBonesInstance();
    this.display = new MiniGLArmatureDisplay();
  }

  addFrameEvent() {
    this.miniGL.on("beforerender", this.update);
  }
  update = (delta) => {
    this._dragonBonesInstance.advanceTime(delta * 0.001);
  };

  getDragonBonesInstance = () => {
    if (!this._dragonBonesInstance) {
      this._dragonBonesInstance = new dragonBones.DragonBones({
        hasDBEventListener: (event) => {
          return this.miniGL._listeners[event];
        },
        // 转发事件
        dispatchDBEvent: (event, data) => {
          this.miniGL.fire(event, data);
        },
        addDBEventListener: (type, func) => { },
        removeDBEventListener: (type, func) => { },
      });
      this.addFrameEvent();
    }
    this._dragonBonesInstance = this._dragonBonesInstance;
  };

  // 构建对象
  buildArmatureDisplay(
    armatureName,
    dragonBonesName = "",
    skinName = "",
    textureAtlasName = ""
  ) {
    const armature = this.buildArmature(
      armatureName,
      dragonBonesName,
      skinName,
      textureAtlasName
    );
    this._dragonBonesInstance.clock.add(armature);
    return armature.display;
  }

  /**
   * @override 复现方法
   * @param {*} dataPackage
   */
  _buildArmature(dataPackage) {
    const armature = dragonBones.BaseObject.borrowObject(dragonBones.Armature);
    const armatureDisplay = new MiniGLArmatureDisplay({
      miniGL: this.miniGL,
    });
    armature.init(
      dataPackage.armature,
      armatureDisplay,
      armatureDisplay,
      this._dragonBones
    );

    return armature;
  }

  _buildSlot(_dataPackage, slotData, armature) {
    const slot = dragonBones.BaseObject.borrowObject(MiniGLSlot);
    const sprite = new Image();
    slot.init(slotData, armature, sprite, sprite);
    return slot;
  }

  _buildTextureAtlasData(textureAtlasData, textureAtlas) {
    if (textureAtlasData) {
      textureAtlasData.setRenderTexture(textureAtlas, this.miniGL);
    } else {
      textureAtlasData = dragonBones.BaseObject.borrowObject(MiniGLTextureAtlasData);
    }

    return textureAtlasData;
  }

  destroy() { }
}
export default DragonBoneObject;
