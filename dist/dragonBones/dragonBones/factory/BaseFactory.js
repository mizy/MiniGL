/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var dragonBones;
(function (dragonBones) {
    /**
     * - Base class for the factory that create the armatures. (Typically only one global factory instance is required)
     * The factory instance create armatures by parsed and added DragonBonesData instances and TextureAtlasData instances.
     * Once the data has been parsed, it has been cached in the factory instance and does not need to be parsed again until it is cleared by the factory instance.
     * @see dragonBones.DragonBonesData
     * @see dragonBones.TextureAtlasData
     * @see dragonBones.ArmatureData
     * @see dragonBones.Armature
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - 创建骨架的工厂基类。 （通常只需要一个全局工厂实例）
     * 工厂通过解析并添加的 DragonBonesData 实例和 TextureAtlasData 实例来创建骨架。
     * 当数据被解析过之后，已经添加到工厂中，在没有被工厂清理之前，不需要再次解析。
     * @see dragonBones.DragonBonesData
     * @see dragonBones.TextureAtlasData
     * @see dragonBones.ArmatureData
     * @see dragonBones.Armature
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class BaseFactory {
        /**
         * - Create a factory instance. (typically only one global factory instance is required)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 创建一个工厂实例。 （通常只需要一个全局工厂实例）
         * @version DragonBones 3.0
         * @language zh_CN
         */
        constructor(dataParser = null) {
            /**
             * @private
             */
            this.autoSearch = false;
            this._dragonBonesDataMap = {};
            this._textureAtlasDataMap = {};
            this._dragonBones = null;
            this._dataParser = null;
            if (BaseFactory._objectParser === null) {
                BaseFactory._objectParser = new dragonBones.ObjectDataParser();
            }
            if (BaseFactory._binaryParser === null) {
                BaseFactory._binaryParser = new dragonBones.BinaryDataParser();
            }
            this._dataParser = dataParser !== null ? dataParser : BaseFactory._objectParser;
        }
        _isSupportMesh() {
            return true;
        }
        _getTextureData(textureAtlasName, textureName) {
            if (textureAtlasName in this._textureAtlasDataMap) {
                for (const textureAtlasData of this._textureAtlasDataMap[textureAtlasName]) {
                    const textureData = textureAtlasData.getTexture(textureName);
                    if (textureData !== null) {
                        return textureData;
                    }
                }
            }
            if (this.autoSearch) { // Will be search all data, if the autoSearch is true.
                for (let k in this._textureAtlasDataMap) {
                    for (const textureAtlasData of this._textureAtlasDataMap[k]) {
                        if (textureAtlasData.autoSearch) {
                            const textureData = textureAtlasData.getTexture(textureName);
                            if (textureData !== null) {
                                return textureData;
                            }
                        }
                    }
                }
            }
            return null;
        }
        _fillBuildArmaturePackage(dataPackage, dragonBonesName, armatureName, skinName, textureAtlasName) {
            let dragonBonesData = null;
            let armatureData = null;
            if (dragonBonesName.length > 0) {
                if (dragonBonesName in this._dragonBonesDataMap) {
                    dragonBonesData = this._dragonBonesDataMap[dragonBonesName];
                    armatureData = dragonBonesData.getArmature(armatureName);
                }
            }
            if (armatureData === null && (dragonBonesName.length === 0 || this.autoSearch)) { // Will be search all data, if do not give a data name or the autoSearch is true.
                for (let k in this._dragonBonesDataMap) {
                    dragonBonesData = this._dragonBonesDataMap[k];
                    if (dragonBonesName.length === 0 || dragonBonesData.autoSearch) {
                        armatureData = dragonBonesData.getArmature(armatureName);
                        if (armatureData !== null) {
                            dragonBonesName = k;
                            break;
                        }
                    }
                }
            }
            if (armatureData !== null) {
                dataPackage.dataName = dragonBonesName;
                dataPackage.textureAtlasName = textureAtlasName;
                dataPackage.data = dragonBonesData;
                dataPackage.armature = armatureData;
                dataPackage.skin = null;
                if (skinName.length > 0) {
                    dataPackage.skin = armatureData.getSkin(skinName);
                    if (dataPackage.skin === null && this.autoSearch) {
                        for (let k in this._dragonBonesDataMap) {
                            const skinDragonBonesData = this._dragonBonesDataMap[k];
                            const skinArmatureData = skinDragonBonesData.getArmature(skinName);
                            if (skinArmatureData !== null) {
                                dataPackage.skin = skinArmatureData.defaultSkin;
                                break;
                            }
                        }
                    }
                }
                if (dataPackage.skin === null) {
                    dataPackage.skin = armatureData.defaultSkin;
                }
                return true;
            }
            return false;
        }
        _buildBones(dataPackage, armature) {
            for (const boneData of dataPackage.armature.sortedBones) {
                const bone = dragonBones.BaseObject.borrowObject(boneData.type === 0 /* Bone */ ? dragonBones.Bone : dragonBones.Surface);
                bone.init(boneData, armature);
            }
        }
        /**
         * @private
         */
        _buildSlots(dataPackage, armature) {
            const currentSkin = dataPackage.skin;
            const defaultSkin = dataPackage.armature.defaultSkin;
            if (currentSkin === null || defaultSkin === null) {
                return;
            }
            const skinSlots = {};
            for (let k in defaultSkin.displays) {
                const displays = defaultSkin.getDisplays(k);
                skinSlots[k] = displays;
            }
            if (currentSkin !== defaultSkin) {
                for (let k in currentSkin.displays) {
                    const displays = currentSkin.getDisplays(k);
                    skinSlots[k] = displays;
                }
            }
            for (const slotData of dataPackage.armature.sortedSlots) {
                const displayDatas = slotData.name in skinSlots ? skinSlots[slotData.name] : null;
                const slot = this._buildSlot(dataPackage, slotData, armature);
                if (displayDatas !== null) {
                    slot.displayFrameCount = displayDatas.length;
                    for (let i = 0, l = slot.displayFrameCount; i < l; ++i) {
                        const displayData = displayDatas[i];
                        slot.replaceRawDisplayData(displayData, i);
                        if (displayData !== null) {
                            if (dataPackage.textureAtlasName.length > 0) {
                                const textureData = this._getTextureData(dataPackage.textureAtlasName, displayData.path);
                                slot.replaceTextureData(textureData, i);
                            }
                            const display = this._getSlotDisplay(dataPackage, displayData, slot);
                            slot.replaceDisplay(display, i);
                        }
                        else {
                            slot.replaceDisplay(null);
                        }
                    }
                }
                slot._setDisplayIndex(slotData.displayIndex, true);
            }
        }
        _buildConstraints(dataPackage, armature) {
            const constraints = dataPackage.armature.constraints;
            for (let k in constraints) {
                const constraintData = constraints[k];
                // TODO more constraint type.
                switch (constraintData.type) {
                    case 0 /* IK */:
                        const ikConstraint = dragonBones.BaseObject.borrowObject(dragonBones.IKConstraint);
                        ikConstraint.init(constraintData, armature);
                        armature._addConstraint(ikConstraint);
                        break;
                    case 1 /* Path */:
                        const pathConstraint = dragonBones.BaseObject.borrowObject(dragonBones.PathConstraint);
                        pathConstraint.init(constraintData, armature);
                        armature._addConstraint(pathConstraint);
                        break;
                    default:
                        const constraint = dragonBones.BaseObject.borrowObject(dragonBones.IKConstraint);
                        constraint.init(constraintData, armature);
                        armature._addConstraint(constraint);
                        break;
                }
            }
        }
        _buildChildArmature(dataPackage, _slot, displayData) {
            return this.buildArmature(displayData.path, dataPackage !== null ? dataPackage.dataName : "", "", dataPackage !== null ? dataPackage.textureAtlasName : "");
        }
        _getSlotDisplay(dataPackage, displayData, slot) {
            const dataName = dataPackage !== null ? dataPackage.dataName : displayData.parent.parent.parent.name;
            let display = null;
            switch (displayData.type) {
                case 0 /* Image */: {
                    const imageDisplayData = displayData;
                    if (imageDisplayData.texture === null) {
                        imageDisplayData.texture = this._getTextureData(dataName, displayData.path);
                    }
                    display = slot.rawDisplay;
                    break;
                }
                case 2 /* Mesh */: {
                    const meshDisplayData = displayData;
                    if (meshDisplayData.texture === null) {
                        meshDisplayData.texture = this._getTextureData(dataName, meshDisplayData.path);
                    }
                    if (this._isSupportMesh()) {
                        display = slot.meshDisplay;
                    }
                    else {
                        display = slot.rawDisplay;
                    }
                    break;
                }
                case 1 /* Armature */: {
                    const armatureDisplayData = displayData;
                    const childArmature = this._buildChildArmature(dataPackage, slot, armatureDisplayData);
                    if (childArmature !== null) {
                        childArmature.inheritAnimation = armatureDisplayData.inheritAnimation;
                        if (!childArmature.inheritAnimation) {
                            const actions = armatureDisplayData.actions.length > 0 ? armatureDisplayData.actions : childArmature.armatureData.defaultActions;
                            if (actions.length > 0) {
                                for (const action of actions) {
                                    const eventObject = dragonBones.BaseObject.borrowObject(dragonBones.EventObject);
                                    dragonBones.EventObject.actionDataToInstance(action, eventObject, slot.armature);
                                    eventObject.slot = slot;
                                    slot.armature._bufferAction(eventObject, false);
                                }
                            }
                            else {
                                childArmature.animation.play();
                            }
                        }
                        armatureDisplayData.armature = childArmature.armatureData; // 
                    }
                    display = childArmature;
                    break;
                }
                case 3 /* BoundingBox */:
                    break;
                default:
                    break;
            }
            return display;
        }
        /**
         * - Parse the raw data to a DragonBonesData instance and cache it to the factory.
         * @param rawData - The raw data.
         * @param name - Specify a cache name for the instance so that the instance can be obtained through this name. (If not set, use the instance name instead)
         * @param scale - Specify a scaling value for all armatures. (Default: 1.0)
         * @returns DragonBonesData instance
         * @see #getDragonBonesData()
         * @see #addDragonBonesData()
         * @see #removeDragonBonesData()
         * @see dragonBones.DragonBonesData
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - 将原始数据解析为 DragonBonesData 实例，并缓存到工厂中。
         * @param rawData - 原始数据。
         * @param name - 为该实例指定一个缓存名称，以便可以通过此名称获取该实例。 （如果未设置，则使用该实例中的名称）
         * @param scale - 为所有的骨架指定一个缩放值。 （默认: 1.0）
         * @returns DragonBonesData 实例
         * @see #getDragonBonesData()
         * @see #addDragonBonesData()
         * @see #removeDragonBonesData()
         * @see dragonBones.DragonBonesData
         * @version DragonBones 4.5
         * @language zh_CN
         */
        parseDragonBonesData(rawData, name = null, scale = 1.0) {
            const dataParser = rawData instanceof ArrayBuffer ? BaseFactory._binaryParser : this._dataParser;
            const dragonBonesData = dataParser.parseDragonBonesData(rawData, scale);
            while (true) {
                const textureAtlasData = this._buildTextureAtlasData(null, null);
                if (dataParser.parseTextureAtlasData(null, textureAtlasData, scale)) {
                    this.addTextureAtlasData(textureAtlasData, name);
                }
                else {
                    textureAtlasData.returnToPool();
                    break;
                }
            }
            if (dragonBonesData !== null) {
                this.addDragonBonesData(dragonBonesData, name);
            }
            return dragonBonesData;
        }
        /**
         * - Parse the raw texture atlas data and the texture atlas object to a TextureAtlasData instance and cache it to the factory.
         * @param rawData - The raw texture atlas data.
         * @param textureAtlas - The texture atlas object.
         * @param name - Specify a cache name for the instance so that the instance can be obtained through this name. (If not set, use the instance name instead)
         * @param scale - Specify a scaling value for the map set. (Default: 1.0)
         * @returns TextureAtlasData instance
         * @see #getTextureAtlasData()
         * @see #addTextureAtlasData()
         * @see #removeTextureAtlasData()
         * @see dragonBones.TextureAtlasData
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - 将原始贴图集数据和贴图集对象解析为 TextureAtlasData 实例，并缓存到工厂中。
         * @param rawData - 原始贴图集数据。
         * @param textureAtlas - 贴图集对象。
         * @param name - 为该实例指定一个缓存名称，以便可以通过此名称获取该实例。 （如果未设置，则使用该实例中的名称）
         * @param scale - 为贴图集指定一个缩放值。 （默认: 1.0）
         * @returns TextureAtlasData 实例
         * @see #getTextureAtlasData()
         * @see #addTextureAtlasData()
         * @see #removeTextureAtlasData()
         * @see dragonBones.TextureAtlasData
         * @version DragonBones 4.5
         * @language zh_CN
         */
        parseTextureAtlasData(rawData, textureAtlas, name = null, scale = 1.0) {
            const textureAtlasData = this._buildTextureAtlasData(null, null);
            this._dataParser.parseTextureAtlasData(rawData, textureAtlasData, scale);
            this._buildTextureAtlasData(textureAtlasData, textureAtlas || null);
            this.addTextureAtlasData(textureAtlasData, name);
            return textureAtlasData;
        }
        /**
         * - Update texture atlases.
         * @param textureAtlases - The texture atlas objects.
         * @param name - The texture atlas name.
         * @version DragonBones 5.7
         * @language en_US
         */
        /**
         * - 更新贴图集对象。
         * @param textureAtlases - 多个贴图集对象。
         * @param name - 贴图集名称。
         * @version DragonBones 5.7
         * @language zh_CN
         */
        updateTextureAtlases(textureAtlases, name) {
            const textureAtlasDatas = this.getTextureAtlasData(name);
            if (textureAtlasDatas !== null) {
                for (let i = 0, l = textureAtlasDatas.length; i < l; ++i) {
                    if (i < textureAtlases.length) {
                        this._buildTextureAtlasData(textureAtlasDatas[i], textureAtlases[i]);
                    }
                }
            }
        }
        /**
         * - Get a specific DragonBonesData instance.
         * @param name - The DragonBonesData instance cache name.
         * @returns DragonBonesData instance
         * @see #parseDragonBonesData()
         * @see #addDragonBonesData()
         * @see #removeDragonBonesData()
         * @see dragonBones.DragonBonesData
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 获取特定的 DragonBonesData 实例。
         * @param name - DragonBonesData 实例的缓存名称。
         * @returns DragonBonesData 实例
         * @see #parseDragonBonesData()
         * @see #addDragonBonesData()
         * @see #removeDragonBonesData()
         * @see dragonBones.DragonBonesData
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getDragonBonesData(name) {
            return (name in this._dragonBonesDataMap) ? this._dragonBonesDataMap[name] : null;
        }
        /**
         * - Cache a DragonBonesData instance to the factory.
         * @param data - The DragonBonesData instance.
         * @param name - Specify a cache name for the instance so that the instance can be obtained through this name. (if not set, use the instance name instead)
         * @see #parseDragonBonesData()
         * @see #getDragonBonesData()
         * @see #removeDragonBonesData()
         * @see dragonBones.DragonBonesData
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 将 DragonBonesData 实例缓存到工厂中。
         * @param data - DragonBonesData 实例。
         * @param name - 为该实例指定一个缓存名称，以便可以通过此名称获取该实例。 （如果未设置，则使用该实例中的名称）
         * @see #parseDragonBonesData()
         * @see #getDragonBonesData()
         * @see #removeDragonBonesData()
         * @see dragonBones.DragonBonesData
         * @version DragonBones 3.0
         * @language zh_CN
         */
        addDragonBonesData(data, name = null) {
            name = name !== null ? name : data.name;
            if (name in this._dragonBonesDataMap) {
                if (this._dragonBonesDataMap[name] === data) {
                    return;
                }
                console.warn("Can not add same name data: " + name);
                return;
            }
            this._dragonBonesDataMap[name] = data;
        }
        /**
         * - Remove a DragonBonesData instance.
         * @param name - The DragonBonesData instance cache name.
         * @param disposeData - Whether to dispose data. (Default: true)
         * @see #parseDragonBonesData()
         * @see #getDragonBonesData()
         * @see #addDragonBonesData()
         * @see dragonBones.DragonBonesData
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 移除 DragonBonesData 实例。
         * @param name - DragonBonesData 实例缓存名称。
         * @param disposeData - 是否释放数据。 （默认: true）
         * @see #parseDragonBonesData()
         * @see #getDragonBonesData()
         * @see #addDragonBonesData()
         * @see dragonBones.DragonBonesData
         * @version DragonBones 3.0
         * @language zh_CN
         */
        removeDragonBonesData(name, disposeData = true) {
            if (name in this._dragonBonesDataMap) {
                if (disposeData) {
                    this._dragonBones.bufferObject(this._dragonBonesDataMap[name]);
                }
                delete this._dragonBonesDataMap[name];
            }
        }
        /**
         * - Get a list of specific TextureAtlasData instances.
         * @param name - The TextureAtlasData cahce name.
         * @see #parseTextureAtlasData()
         * @see #addTextureAtlasData()
         * @see #removeTextureAtlasData()
         * @see dragonBones.TextureAtlasData
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 获取特定的 TextureAtlasData 实例列表。
         * @param name - TextureAtlasData 实例缓存名称。
         * @see #parseTextureAtlasData()
         * @see #addTextureAtlasData()
         * @see #removeTextureAtlasData()
         * @see dragonBones.TextureAtlasData
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getTextureAtlasData(name) {
            return (name in this._textureAtlasDataMap) ? this._textureAtlasDataMap[name] : null;
        }
        /**
         * - Cache a TextureAtlasData instance to the factory.
         * @param data - The TextureAtlasData instance.
         * @param name - Specify a cache name for the instance so that the instance can be obtained through this name. (if not set, use the instance name instead)
         * @see #parseTextureAtlasData()
         * @see #getTextureAtlasData()
         * @see #removeTextureAtlasData()
         * @see dragonBones.TextureAtlasData
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 将 TextureAtlasData 实例缓存到工厂中。
         * @param data - TextureAtlasData 实例。
         * @param name - 为该实例指定一个缓存名称，以便可以通过此名称获取该实例。 （如果未设置，则使用该实例中的名称）
         * @see #parseTextureAtlasData()
         * @see #getTextureAtlasData()
         * @see #removeTextureAtlasData()
         * @see dragonBones.TextureAtlasData
         * @version DragonBones 3.0
         * @language zh_CN
         */
        addTextureAtlasData(data, name = null) {
            name = name !== null ? name : data.name;
            const textureAtlasList = (name in this._textureAtlasDataMap) ? this._textureAtlasDataMap[name] : (this._textureAtlasDataMap[name] = []);
            if (textureAtlasList.indexOf(data) < 0) {
                textureAtlasList.push(data);
            }
        }
        /**
         * - Remove a TextureAtlasData instance.
         * @param name - The TextureAtlasData instance cache name.
         * @param disposeData - Whether to dispose data.
         * @see #parseTextureAtlasData()
         * @see #getTextureAtlasData()
         * @see #addTextureAtlasData()
         * @see dragonBones.TextureAtlasData
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 移除 TextureAtlasData 实例。
         * @param name - TextureAtlasData 实例的缓存名称。
         * @param disposeData - 是否释放数据。
         * @see #parseTextureAtlasData()
         * @see #getTextureAtlasData()
         * @see #addTextureAtlasData()
         * @see dragonBones.TextureAtlasData
         * @version DragonBones 3.0
         * @language zh_CN
         */
        removeTextureAtlasData(name, disposeData = true) {
            if (name in this._textureAtlasDataMap) {
                const textureAtlasDataList = this._textureAtlasDataMap[name];
                if (disposeData) {
                    for (const textureAtlasData of textureAtlasDataList) {
                        this._dragonBones.bufferObject(textureAtlasData);
                    }
                }
                delete this._textureAtlasDataMap[name];
            }
        }
        /**
         * - Get a specific armature data.
         * @param name - The armature data name.
         * @param dragonBonesName - The cached name for DragonbonesData instance.
         * @see dragonBones.ArmatureData
         * @version DragonBones 5.1
         * @language en_US
         */
        /**
         * - 获取特定的骨架数据。
         * @param name - 骨架数据名称。
         * @param dragonBonesName - DragonBonesData 实例的缓存名称。
         * @see dragonBones.ArmatureData
         * @version DragonBones 5.1
         * @language zh_CN
         */
        getArmatureData(name, dragonBonesName = "") {
            const dataPackage = new BuildArmaturePackage();
            if (!this._fillBuildArmaturePackage(dataPackage, dragonBonesName, name, "", "")) {
                return null;
            }
            return dataPackage.armature;
        }
        /**
         * - Clear all cached DragonBonesData instances and TextureAtlasData instances.
         * @param disposeData - Whether to dispose data.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - 清除缓存的所有 DragonBonesData 实例和 TextureAtlasData 实例。
         * @param disposeData - 是否释放数据。
         * @version DragonBones 4.5
         * @language zh_CN
         */
        clear(disposeData = true) {
            for (let k in this._dragonBonesDataMap) {
                if (disposeData) {
                    this._dragonBones.bufferObject(this._dragonBonesDataMap[k]);
                }
                delete this._dragonBonesDataMap[k];
            }
            for (let k in this._textureAtlasDataMap) {
                if (disposeData) {
                    const textureAtlasDataList = this._textureAtlasDataMap[k];
                    for (const textureAtlasData of textureAtlasDataList) {
                        this._dragonBones.bufferObject(textureAtlasData);
                    }
                }
                delete this._textureAtlasDataMap[k];
            }
        }
        /**
         * - Create a armature from cached DragonBonesData instances and TextureAtlasData instances.
         * Note that when the created armature that is no longer in use, you need to explicitly dispose {@link #dragonBones.Armature#dispose()}.
         * @param armatureName - The armature data name.
         * @param dragonBonesName - The cached name of the DragonBonesData instance. (If not set, all DragonBonesData instances are retrieved, and when multiple DragonBonesData instances contain a the same name armature data, it may not be possible to accurately create a specific armature)
         * @param skinName - The skin name, you can set a different ArmatureData name to share it's skin data. (If not set, use the default skin data)
         * @returns The armature.
         * @example
         * <pre>
         *     let armature = factory.buildArmature("armatureName", "dragonBonesName");
         *     armature.clock = factory.clock;
         * </pre>
         * @see dragonBones.DragonBonesData
         * @see dragonBones.ArmatureData
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 通过缓存的 DragonBonesData 实例和 TextureAtlasData 实例创建一个骨架。
         * 注意，创建的骨架不再使用时，需要显式释放 {@link #dragonBones.Armature#dispose()}。
         * @param armatureName - 骨架数据名称。
         * @param dragonBonesName - DragonBonesData 实例的缓存名称。 （如果未设置，将检索所有的 DragonBonesData 实例，当多个 DragonBonesData 实例中包含同名的骨架数据时，可能无法准确的创建出特定的骨架）
         * @param skinName - 皮肤名称，可以设置一个其他骨架数据名称来共享其皮肤数据。（如果未设置，则使用默认的皮肤数据）
         * @returns 骨架。
         * @example
         * <pre>
         *     let armature = factory.buildArmature("armatureName", "dragonBonesName");
         *     armature.clock = factory.clock;
         * </pre>
         * @see dragonBones.DragonBonesData
         * @see dragonBones.ArmatureData
         * @version DragonBones 3.0
         * @language zh_CN
         */
        buildArmature(armatureName, dragonBonesName = "", skinName = "", textureAtlasName = "") {
            const dataPackage = new BuildArmaturePackage();
            if (!this._fillBuildArmaturePackage(dataPackage, dragonBonesName || "", armatureName, skinName || "", textureAtlasName || "")) {
                console.warn("No armature data: " + armatureName + ", " + (dragonBonesName !== null ? dragonBonesName : ""));
                return null;
            }
            const armature = this._buildArmature(dataPackage);
            this._buildBones(dataPackage, armature);
            this._buildSlots(dataPackage, armature);
            this._buildConstraints(dataPackage, armature);
            armature.invalidUpdate(null, true);
            armature.advanceTime(0.0); // Update armature pose.
            return armature;
        }
        /**
         * @private
         */
        replaceDisplay(slot, displayData, displayIndex = -1) {
            if (displayIndex < 0) {
                displayIndex = slot.displayIndex;
            }
            if (displayIndex < 0) {
                displayIndex = 0;
            }
            slot.replaceDisplayData(displayData, displayIndex);
            if (displayData !== null) {
                let display = this._getSlotDisplay(null, displayData, slot);
                if (displayData.type === 0 /* Image */) {
                    const rawDisplayData = slot.getDisplayFrameAt(displayIndex).rawDisplayData;
                    if (rawDisplayData !== null &&
                        rawDisplayData.type === 2 /* Mesh */) {
                        display = slot.meshDisplay;
                    }
                }
                slot.replaceDisplay(display, displayIndex);
            }
            else {
                slot.replaceDisplay(null, displayIndex);
            }
        }
        /**
         * - Replaces the current display data for a particular slot with a specific display data.
         * Specify display data with "dragonBonesName/armatureName/slotName/displayName".
         * @param dragonBonesName - The DragonBonesData instance cache name.
         * @param armatureName - The armature data name.
         * @param slotName - The slot data name.
         * @param displayName - The display data name.
         * @param slot - The slot.
         * @param displayIndex - The index of the display data that is replaced. (If it is not set, replaces the current display data)
         * @example
         * <pre>
         *     let slot = armature.getSlot("weapon");
         *     factory.replaceSlotDisplay("dragonBonesName", "armatureName", "slotName", "displayName", slot);
         * </pre>
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - 用特定的显示对象数据替换特定插槽当前的显示对象数据。
         * 用 "dragonBonesName/armatureName/slotName/displayName" 指定显示对象数据。
         * @param dragonBonesName - DragonBonesData 实例的缓存名称。
         * @param armatureName - 骨架数据名称。
         * @param slotName - 插槽数据名称。
         * @param displayName - 显示对象数据名称。
         * @param slot - 插槽。
         * @param displayIndex - 被替换的显示对象数据的索引。 （如果未设置，则替换当前的显示对象数据）
         * @example
         * <pre>
         *     let slot = armature.getSlot("weapon");
         *     factory.replaceSlotDisplay("dragonBonesName", "armatureName", "slotName", "displayName", slot);
         * </pre>
         * @version DragonBones 4.5
         * @language zh_CN
         */
        replaceSlotDisplay(dragonBonesName, armatureName, slotName, displayName, slot, displayIndex = -1) {
            const armatureData = this.getArmatureData(armatureName, dragonBonesName || "");
            if (armatureData === null || armatureData.defaultSkin === null) {
                return false;
            }
            const displayData = armatureData.defaultSkin.getDisplay(slotName, displayName);
            this.replaceDisplay(slot, displayData, displayIndex);
            return true;
        }
        /**
         * @private
         */
        replaceSlotDisplayList(dragonBonesName, armatureName, slotName, slot) {
            const armatureData = this.getArmatureData(armatureName, dragonBonesName || "");
            if (!armatureData || !armatureData.defaultSkin) {
                return false;
            }
            const displayDatas = armatureData.defaultSkin.getDisplays(slotName);
            if (!displayDatas) {
                return false;
            }
            slot.displayFrameCount = displayDatas.length;
            for (let i = 0, l = slot.displayFrameCount; i < l; ++i) {
                const displayData = displayDatas[i];
                this.replaceDisplay(slot, displayData, i);
            }
            return true;
        }
        /**
         * - Share specific skin data with specific armature.
         * @param armature - The armature.
         * @param skin - The skin data.
         * @param isOverride - Whether it completely override the original skin. (Default: false)
         * @param exclude - A list of slot names that do not need to be replace.
         * @example
         * <pre>
         *     let armatureA = factory.buildArmature("armatureA", "dragonBonesA");
         *     let armatureDataB = factory.getArmatureData("armatureB", "dragonBonesB");
         *     if (armatureDataB && armatureDataB.defaultSkin) {
         *     factory.replaceSkin(armatureA, armatureDataB.defaultSkin, false, ["arm_l", "weapon_l"]);
         *     }
         * </pre>
         * @see dragonBones.Armature
         * @see dragonBones.SkinData
         * @version DragonBones 5.6
         * @language en_US
         */
        /**
         * - 将特定的皮肤数据共享给特定的骨架使用。
         * @param armature - 骨架。
         * @param skin - 皮肤数据。
         * @param isOverride - 是否完全覆盖原来的皮肤。 （默认: false）
         * @param exclude - 不需要被替换的插槽名称列表。
         * @example
         * <pre>
         *     let armatureA = factory.buildArmature("armatureA", "dragonBonesA");
         *     let armatureDataB = factory.getArmatureData("armatureB", "dragonBonesB");
         *     if (armatureDataB && armatureDataB.defaultSkin) {
         *     factory.replaceSkin(armatureA, armatureDataB.defaultSkin, false, ["arm_l", "weapon_l"]);
         *     }
         * </pre>
         * @see dragonBones.Armature
         * @see dragonBones.SkinData
         * @version DragonBones 5.6
         * @language zh_CN
         */
        replaceSkin(armature, skin, isOverride = false, exclude = null) {
            let success = false;
            const defaultSkin = skin.parent.defaultSkin;
            for (const slot of armature.getSlots()) {
                if (exclude !== null && exclude.indexOf(slot.name) >= 0) {
                    continue;
                }
                let displayDatas = skin.getDisplays(slot.name);
                if (displayDatas === null) {
                    if (defaultSkin !== null && skin !== defaultSkin) {
                        displayDatas = defaultSkin.getDisplays(slot.name);
                    }
                    if (displayDatas === null) {
                        if (isOverride) {
                            slot.displayFrameCount = 0;
                        }
                        continue;
                    }
                }
                slot.displayFrameCount = displayDatas.length;
                for (let i = 0, l = slot.displayFrameCount; i < l; ++i) {
                    const displayData = displayDatas[i];
                    slot.replaceRawDisplayData(displayData, i);
                    if (displayData !== null) {
                        slot.replaceDisplay(this._getSlotDisplay(null, displayData, slot), i);
                    }
                    else {
                        slot.replaceDisplay(null, i);
                    }
                }
                success = true;
            }
            return success;
        }
        /**
         * - Replaces the existing animation data for a specific armature with the animation data for the specific armature data.
         * This enables you to make a armature template so that other armature without animations can share it's animations.
         * @param armature - The armtaure.
         * @param armatureData - The armature data.
         * @param isOverride - Whether to completely overwrite the original animation. (Default: false)
         * @example
         * <pre>
         *     let armatureA = factory.buildArmature("armatureA", "dragonBonesA");
         *     let armatureDataB = factory.getArmatureData("armatureB", "dragonBonesB");
         *     if (armatureDataB) {
         *     factory.replaceAnimation(armatureA, armatureDataB);
         *     }
         * </pre>
         * @see dragonBones.Armature
         * @see dragonBones.ArmatureData
         * @version DragonBones 5.6
         * @language en_US
         */
        /**
         * - 用特定骨架数据的动画数据替换特定骨架现有的动画数据。
         * 这样就能实现制作一个骨架动画模板，让其他没有制作动画的骨架共享该动画。
         * @param armature - 骨架。
         * @param armatureData - 骨架数据。
         * @param isOverride - 是否完全覆盖原来的动画。（默认: false）
         * @example
         * <pre>
         *     let armatureA = factory.buildArmature("armatureA", "dragonBonesA");
         *     let armatureDataB = factory.getArmatureData("armatureB", "dragonBonesB");
         *     if (armatureDataB) {
         *     factory.replaceAnimation(armatureA, armatureDataB);
         *     }
         * </pre>
         * @see dragonBones.Armature
         * @see dragonBones.ArmatureData
         * @version DragonBones 5.6
         * @language zh_CN
         */
        replaceAnimation(armature, armatureData, isOverride = true) {
            const skinData = armatureData.defaultSkin;
            if (skinData === null) {
                return false;
            }
            if (isOverride) {
                armature.animation.animations = armatureData.animations;
            }
            else {
                const rawAnimations = armature.animation.animations;
                const animations = {};
                for (let k in rawAnimations) {
                    animations[k] = rawAnimations[k];
                }
                for (let k in armatureData.animations) {
                    animations[k] = armatureData.animations[k];
                }
                armature.animation.animations = animations;
            }
            for (const slot of armature.getSlots()) {
                let index = 0;
                for (const display of slot.displayList) {
                    if (display instanceof dragonBones.Armature) {
                        const displayDatas = skinData.getDisplays(slot.name);
                        if (displayDatas !== null && index < displayDatas.length) {
                            const displayData = displayDatas[index];
                            if (displayData !== null && displayData.type === 1 /* Armature */) {
                                const childArmatureData = this.getArmatureData(displayData.path, displayData.parent.parent.parent.name);
                                if (childArmatureData) {
                                    this.replaceAnimation(display, childArmatureData, isOverride);
                                }
                            }
                        }
                    }
                    index++;
                }
            }
            return true;
        }
        /**
         * @private
         */
        getAllDragonBonesData() {
            return this._dragonBonesDataMap;
        }
        /**
         * @private
         */
        getAllTextureAtlasData() {
            return this._textureAtlasDataMap;
        }
        /**
         * - An Worldclock instance updated by engine.
         * @version DragonBones 5.7
         * @language en_US
         */
        /**
         * - 由引擎驱动的 WorldClock 实例。
         * @version DragonBones 5.7
         * @language zh_CN
         */
        get clock() {
            return this._dragonBones.clock;
        }
        /**
         * @private
         */
        get dragonBones() {
            return this._dragonBones;
        }
    }
    BaseFactory._objectParser = null;
    BaseFactory._binaryParser = null;
    dragonBones.BaseFactory = BaseFactory;
    /**
     * @private
     */
    class BuildArmaturePackage {
        constructor() {
            this.dataName = "";
            this.textureAtlasName = "";
            this.skin = null;
        }
    }
    dragonBones.BuildArmaturePackage = BuildArmaturePackage;
})(dragonBones || (dragonBones = {}));
