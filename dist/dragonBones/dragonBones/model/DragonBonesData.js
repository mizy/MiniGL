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
     * - The DragonBones data.
     * A DragonBones data contains multiple armature data.
     * @see dragonBones.ArmatureData
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - 龙骨数据。
     * 一个龙骨数据包含多个骨架数据。
     * @see dragonBones.ArmatureData
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class DragonBonesData extends dragonBones.BaseObject {
        constructor() {
            super(...arguments);
            /**
             * @internal
             */
            this.frameIndices = [];
            /**
             * @internal
             */
            this.cachedFrames = [];
            /**
             * - All armature data names.
             * @version DragonBones 3.0
             * @language en_US
             */
            /**
             * - 所有的骨架数据名称。
             * @version DragonBones 3.0
             * @language zh_CN
             */
            this.armatureNames = [];
            /**
             * @private
             */
            this.armatures = {};
            /**
             * @private
             */
            this.userData = null; // Initial value.
        }
        static toString() {
            return "[class dragonBones.DragonBonesData]";
        }
        _onClear() {
            for (let k in this.armatures) {
                this.armatures[k].returnToPool();
                delete this.armatures[k];
            }
            if (this.userData !== null) {
                this.userData.returnToPool();
            }
            this.autoSearch = false;
            this.frameRate = 0;
            this.version = "";
            this.name = "";
            this.stage = null;
            this.frameIndices.length = 0;
            this.cachedFrames.length = 0;
            this.armatureNames.length = 0;
            //this.armatures.clear();
            this.binary = null; //
            this.intArray = null; //
            this.floatArray = null; //
            this.frameIntArray = null; //
            this.frameFloatArray = null; //
            this.frameArray = null; //
            this.timelineArray = null; //
            this.colorArray = null; //
            this.userData = null;
        }
        /**
         * @internal
         */
        addArmature(value) {
            if (value.name in this.armatures) {
                console.warn("Same armature: " + value.name);
                return;
            }
            value.parent = this;
            this.armatures[value.name] = value;
            this.armatureNames.push(value.name);
        }
        /**
         * - Get a specific armature data.
         * @param armatureName - The armature data name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 获取特定的骨架数据。
         * @param armatureName - 骨架数据名称。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getArmature(armatureName) {
            return armatureName in this.armatures ? this.armatures[armatureName] : null;
        }
    }
    dragonBones.DragonBonesData = DragonBonesData;
})(dragonBones || (dragonBones = {}));
