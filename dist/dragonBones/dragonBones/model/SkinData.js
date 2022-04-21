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
     * - The skin data, typically a armature data instance contains at least one skinData.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - 皮肤数据，通常一个骨架数据至少包含一个皮肤数据。
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class SkinData extends dragonBones.BaseObject {
        constructor() {
            super(...arguments);
            /**
             * @private
             */
            this.displays = {};
        }
        static toString() {
            return "[class dragonBones.SkinData]";
        }
        _onClear() {
            for (let k in this.displays) {
                const slotDisplays = this.displays[k];
                for (const display of slotDisplays) {
                    if (display !== null) {
                        display.returnToPool();
                    }
                }
                delete this.displays[k];
            }
            this.name = "";
            // this.displays.clear();
            this.parent = null; //
        }
        /**
         * @internal
         */
        addDisplay(slotName, value) {
            if (!(slotName in this.displays)) {
                this.displays[slotName] = [];
            }
            if (value !== null) {
                value.parent = this;
            }
            const slotDisplays = this.displays[slotName]; // TODO clear prev
            slotDisplays.push(value);
        }
        /**
         * @private
         */
        getDisplay(slotName, displayName) {
            const slotDisplays = this.getDisplays(slotName);
            if (slotDisplays !== null) {
                for (const display of slotDisplays) {
                    if (display !== null && display.name === displayName) {
                        return display;
                    }
                }
            }
            return null;
        }
        /**
         * @private
         */
        getDisplays(slotName) {
            if (!(slotName in this.displays)) {
                return null;
            }
            return this.displays[slotName];
        }
    }
    dragonBones.SkinData = SkinData;
})(dragonBones || (dragonBones = {}));
