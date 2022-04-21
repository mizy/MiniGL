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
     * - The armature data.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - 骨架数据。
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class ArmatureData extends dragonBones.BaseObject {
        constructor() {
            super(...arguments);
            /**
             * @private
             */
            this.aabb = new dragonBones.Rectangle();
            /**
             * - The names of all the animation data.
             * @version DragonBones 3.0
             * @language en_US
             */
            /**
             * - 所有的动画数据名称。
             * @version DragonBones 3.0
             * @language zh_CN
             */
            this.animationNames = [];
            /**
             * @private
             */
            this.sortedBones = [];
            /**
             * @private
             */
            this.sortedSlots = [];
            /**
             * @private
             */
            this.defaultActions = [];
            /**
             * @private
             */
            this.actions = [];
            /**
             * @private
             */
            this.bones = {};
            /**
             * @private
             */
            this.slots = {};
            /**
             * @private
             */
            this.constraints = {};
            /**
             * @private
             */
            this.skins = {};
            /**
             * @private
             */
            this.animations = {};
            /**
             * @private
             */
            this.canvas = null; // Initial value.
            /**
             * @private
             */
            this.userData = null; // Initial value.
        }
        static toString() {
            return "[class dragonBones.ArmatureData]";
        }
        _onClear() {
            for (const action of this.defaultActions) {
                action.returnToPool();
            }
            for (const action of this.actions) {
                action.returnToPool();
            }
            for (let k in this.bones) {
                this.bones[k].returnToPool();
                delete this.bones[k];
            }
            for (let k in this.slots) {
                this.slots[k].returnToPool();
                delete this.slots[k];
            }
            for (let k in this.constraints) {
                this.constraints[k].returnToPool();
                delete this.constraints[k];
            }
            for (let k in this.skins) {
                this.skins[k].returnToPool();
                delete this.skins[k];
            }
            for (let k in this.animations) {
                this.animations[k].returnToPool();
                delete this.animations[k];
            }
            if (this.canvas !== null) {
                this.canvas.returnToPool();
            }
            if (this.userData !== null) {
                this.userData.returnToPool();
            }
            this.type = 0 /* Armature */;
            this.frameRate = 0;
            this.cacheFrameRate = 0;
            this.scale = 1.0;
            this.name = "";
            this.aabb.clear();
            this.animationNames.length = 0;
            this.sortedBones.length = 0;
            this.sortedSlots.length = 0;
            this.defaultActions.length = 0;
            this.actions.length = 0;
            // this.bones.clear();
            // this.slots.clear();
            // this.constraints.clear();
            // this.skins.clear();
            // this.animations.clear();
            this.defaultSkin = null;
            this.defaultAnimation = null;
            this.canvas = null;
            this.userData = null;
            this.parent = null; //
        }
        /**
         * @internal
         */
        sortBones() {
            const total = this.sortedBones.length;
            if (total <= 0) {
                return;
            }
            const sortHelper = this.sortedBones.concat();
            let index = 0;
            let count = 0;
            this.sortedBones.length = 0;
            while (count < total) {
                const bone = sortHelper[index++];
                if (index >= total) {
                    index = 0;
                }
                if (this.sortedBones.indexOf(bone) >= 0) {
                    continue;
                }
                let flag = false;
                for (let k in this.constraints) { // Wait constraint.
                    const constraint = this.constraints[k];
                    if (constraint.root === bone && this.sortedBones.indexOf(constraint.target) < 0) {
                        flag = true;
                        break;
                    }
                }
                if (flag) {
                    continue;
                }
                if (bone.parent !== null && this.sortedBones.indexOf(bone.parent) < 0) { // Wait parent.
                    continue;
                }
                this.sortedBones.push(bone);
                count++;
            }
        }
        /**
         * @internal
         */
        cacheFrames(frameRate) {
            if (this.cacheFrameRate > 0) { // TODO clear cache.
                return;
            }
            this.cacheFrameRate = frameRate;
            for (let k in this.animations) {
                this.animations[k].cacheFrames(this.cacheFrameRate);
            }
        }
        /**
         * @internal
         */
        setCacheFrame(globalTransformMatrix, transform) {
            const dataArray = this.parent.cachedFrames;
            let arrayOffset = dataArray.length;
            dataArray.length += 10;
            dataArray[arrayOffset] = globalTransformMatrix.a;
            dataArray[arrayOffset + 1] = globalTransformMatrix.b;
            dataArray[arrayOffset + 2] = globalTransformMatrix.c;
            dataArray[arrayOffset + 3] = globalTransformMatrix.d;
            dataArray[arrayOffset + 4] = globalTransformMatrix.tx;
            dataArray[arrayOffset + 5] = globalTransformMatrix.ty;
            dataArray[arrayOffset + 6] = transform.rotation;
            dataArray[arrayOffset + 7] = transform.skew;
            dataArray[arrayOffset + 8] = transform.scaleX;
            dataArray[arrayOffset + 9] = transform.scaleY;
            return arrayOffset;
        }
        /**
         * @internal
         */
        getCacheFrame(globalTransformMatrix, transform, arrayOffset) {
            const dataArray = this.parent.cachedFrames;
            globalTransformMatrix.a = dataArray[arrayOffset];
            globalTransformMatrix.b = dataArray[arrayOffset + 1];
            globalTransformMatrix.c = dataArray[arrayOffset + 2];
            globalTransformMatrix.d = dataArray[arrayOffset + 3];
            globalTransformMatrix.tx = dataArray[arrayOffset + 4];
            globalTransformMatrix.ty = dataArray[arrayOffset + 5];
            transform.rotation = dataArray[arrayOffset + 6];
            transform.skew = dataArray[arrayOffset + 7];
            transform.scaleX = dataArray[arrayOffset + 8];
            transform.scaleY = dataArray[arrayOffset + 9];
            transform.x = globalTransformMatrix.tx;
            transform.y = globalTransformMatrix.ty;
        }
        /**
         * @internal
         */
        addBone(value) {
            if (value.name in this.bones) {
                console.warn("Same bone: " + value.name);
                return;
            }
            this.bones[value.name] = value;
            this.sortedBones.push(value);
        }
        /**
         * @internal
         */
        addSlot(value) {
            if (value.name in this.slots) {
                console.warn("Same slot: " + value.name);
                return;
            }
            this.slots[value.name] = value;
            this.sortedSlots.push(value);
        }
        /**
         * @internal
         */
        addConstraint(value) {
            if (value.name in this.constraints) {
                console.warn("Same constraint: " + value.name);
                return;
            }
            this.constraints[value.name] = value;
        }
        /**
         * @internal
         */
        addSkin(value) {
            if (value.name in this.skins) {
                console.warn("Same skin: " + value.name);
                return;
            }
            value.parent = this;
            this.skins[value.name] = value;
            if (this.defaultSkin === null) {
                this.defaultSkin = value;
            }
            if (value.name === "default") {
                this.defaultSkin = value;
            }
        }
        /**
         * @internal
         */
        addAnimation(value) {
            if (value.name in this.animations) {
                console.warn("Same animation: " + value.name);
                return;
            }
            value.parent = this;
            this.animations[value.name] = value;
            this.animationNames.push(value.name);
            if (this.defaultAnimation === null) {
                this.defaultAnimation = value;
            }
        }
        /**
         * @internal
         */
        addAction(value, isDefault) {
            if (isDefault) {
                this.defaultActions.push(value);
            }
            else {
                this.actions.push(value);
            }
        }
        /**
         * - Get a specific done data.
         * @param boneName - The bone name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 获取特定的骨骼数据。
         * @param boneName - 骨骼名称。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getBone(boneName) {
            return boneName in this.bones ? this.bones[boneName] : null;
        }
        /**
         * - Get a specific slot data.
         * @param slotName - The slot name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 获取特定的插槽数据。
         * @param slotName - 插槽名称。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getSlot(slotName) {
            return slotName in this.slots ? this.slots[slotName] : null;
        }
        /**
         * @private
         */
        getConstraint(constraintName) {
            return constraintName in this.constraints ? this.constraints[constraintName] : null;
        }
        /**
         * - Get a specific skin data.
         * @param skinName - The skin name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 获取特定皮肤数据。
         * @param skinName - 皮肤名称。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getSkin(skinName) {
            return skinName in this.skins ? this.skins[skinName] : null;
        }
        /**
         * @private
         */
        getMesh(skinName, slotName, meshName) {
            const skin = this.getSkin(skinName);
            if (skin === null) {
                return null;
            }
            return skin.getDisplay(slotName, meshName);
        }
        /**
         * - Get a specific animation data.
         * @param animationName - The animation animationName.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 获取特定的动画数据。
         * @param animationName - 动画名称。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getAnimation(animationName) {
            return animationName in this.animations ? this.animations[animationName] : null;
        }
    }
    dragonBones.ArmatureData = ArmatureData;
    /**
     * - The bone data.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - 骨骼数据。
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class BoneData extends dragonBones.BaseObject {
        constructor() {
            super(...arguments);
            /**
             * @private
             */
            this.transform = new dragonBones.Transform();
            /**
             * @private
             */
            this.userData = null; // Initial value.
        }
        static toString() {
            return "[class dragonBones.BoneData]";
        }
        _onClear() {
            if (this.userData !== null) {
                this.userData.returnToPool();
            }
            this.inheritTranslation = false;
            this.inheritRotation = false;
            this.inheritScale = false;
            this.inheritReflection = false;
            this.type = 0 /* Bone */;
            this.length = 0.0;
            this.alpha = 1.0;
            this.name = "";
            this.transform.identity();
            this.userData = null;
            this.parent = null;
        }
    }
    dragonBones.BoneData = BoneData;
    /**
     * @internal
     */
    class SurfaceData extends BoneData {
        constructor() {
            super(...arguments);
            this.geometry = new dragonBones.GeometryData();
        }
        static toString() {
            return "[class dragonBones.SurfaceData]";
        }
        _onClear() {
            super._onClear();
            this.type = 1 /* Surface */;
            this.segmentX = 0;
            this.segmentY = 0;
            this.geometry.clear();
        }
    }
    dragonBones.SurfaceData = SurfaceData;
    /**
     * - The slot data.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - 插槽数据。
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class SlotData extends dragonBones.BaseObject {
        constructor() {
            super(...arguments);
            /**
             * @private
             */
            this.color = null; // Initial value.
            /**
             * @private
             */
            this.userData = null; // Initial value.
        }
        /**
         * @internal
         */
        static createColor() {
            return new dragonBones.ColorTransform();
        }
        static toString() {
            return "[class dragonBones.SlotData]";
        }
        _onClear() {
            if (this.userData !== null) {
                this.userData.returnToPool();
            }
            this.blendMode = 0 /* Normal */;
            this.displayIndex = 0;
            this.zOrder = 0;
            this.zIndex = 0;
            this.alpha = 1.0;
            this.name = "";
            this.color = null; //
            this.userData = null;
            this.parent = null; //
        }
    }
    /**
     * @internal
     */
    SlotData.DEFAULT_COLOR = new dragonBones.ColorTransform();
    dragonBones.SlotData = SlotData;
})(dragonBones || (dragonBones = {}));
