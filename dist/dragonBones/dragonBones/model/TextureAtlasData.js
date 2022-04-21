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
     * - The texture atlas data.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - 贴图集数据。
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class TextureAtlasData extends dragonBones.BaseObject {
        constructor() {
            super(...arguments);
            /**
             * @private
             */
            this.textures = {};
        }
        _onClear() {
            for (let k in this.textures) {
                this.textures[k].returnToPool();
                delete this.textures[k];
            }
            this.autoSearch = false;
            this.width = 0;
            this.height = 0;
            this.scale = 1.0;
            // this.textures.clear();
            this.name = "";
            this.imagePath = "";
        }
        /**
         * @private
         */
        copyFrom(value) {
            this.autoSearch = value.autoSearch;
            this.scale = value.scale;
            this.width = value.width;
            this.height = value.height;
            this.name = value.name;
            this.imagePath = value.imagePath;
            for (let k in this.textures) {
                this.textures[k].returnToPool();
                delete this.textures[k];
            }
            // this.textures.clear();
            for (let k in value.textures) {
                const texture = this.createTexture();
                texture.copyFrom(value.textures[k]);
                this.textures[k] = texture;
            }
        }
        /**
         * @internal
         */
        addTexture(value) {
            if (value.name in this.textures) {
                console.warn("Same texture: " + value.name);
                return;
            }
            value.parent = this;
            this.textures[value.name] = value;
        }
        /**
         * @private
         */
        getTexture(textureName) {
            return textureName in this.textures ? this.textures[textureName] : null;
        }
    }
    dragonBones.TextureAtlasData = TextureAtlasData;
    /**
     * @private
     */
    class TextureData extends dragonBones.BaseObject {
        constructor() {
            super(...arguments);
            this.region = new dragonBones.Rectangle();
            this.frame = null; // Initial value.
        }
        static createRectangle() {
            return new dragonBones.Rectangle();
        }
        _onClear() {
            this.rotated = false;
            this.name = "";
            this.region.clear();
            this.parent = null; //
            this.frame = null;
        }
        copyFrom(value) {
            this.rotated = value.rotated;
            this.name = value.name;
            this.region.copyFrom(value.region);
            this.parent = value.parent;
            if (this.frame === null && value.frame !== null) {
                this.frame = TextureData.createRectangle();
            }
            else if (this.frame !== null && value.frame === null) {
                this.frame = null;
            }
            if (this.frame !== null && value.frame !== null) {
                this.frame.copyFrom(value.frame);
            }
        }
    }
    dragonBones.TextureData = TextureData;
})(dragonBones || (dragonBones = {}));
