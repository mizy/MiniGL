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
     * @private
     */
    class GeometryData {
        constructor() {
            this.weight = null; // Initial value.
        }
        clear() {
            if (!this.isShared && this.weight !== null) {
                this.weight.returnToPool();
            }
            this.isShared = false;
            this.inheritDeform = false;
            this.offset = 0;
            this.data = null;
            this.weight = null;
        }
        shareFrom(value) {
            this.isShared = true;
            this.offset = value.offset;
            this.weight = value.weight;
        }
        get vertexCount() {
            const intArray = this.data.intArray;
            return intArray[this.offset + 0 /* GeometryVertexCount */];
        }
        get triangleCount() {
            const intArray = this.data.intArray;
            return intArray[this.offset + 1 /* GeometryTriangleCount */];
        }
    }
    dragonBones.GeometryData = GeometryData;
    /**
     * @private
     */
    class DisplayData extends dragonBones.BaseObject {
        constructor() {
            super(...arguments);
            this.transform = new dragonBones.Transform();
        }
        _onClear() {
            this.name = "";
            this.path = "";
            this.transform.identity();
            this.parent = null; //
        }
    }
    dragonBones.DisplayData = DisplayData;
    /**
     * @private
     */
    class ImageDisplayData extends DisplayData {
        constructor() {
            super(...arguments);
            this.pivot = new dragonBones.Point();
        }
        static toString() {
            return "[class dragonBones.ImageDisplayData]";
        }
        _onClear() {
            super._onClear();
            this.type = 0 /* Image */;
            this.pivot.clear();
            this.texture = null;
        }
    }
    dragonBones.ImageDisplayData = ImageDisplayData;
    /**
     * @private
     */
    class ArmatureDisplayData extends DisplayData {
        constructor() {
            super(...arguments);
            this.actions = [];
        }
        static toString() {
            return "[class dragonBones.ArmatureDisplayData]";
        }
        _onClear() {
            super._onClear();
            for (const action of this.actions) {
                action.returnToPool();
            }
            this.type = 1 /* Armature */;
            this.inheritAnimation = false;
            this.actions.length = 0;
            this.armature = null;
        }
        /**
         * @private
         */
        addAction(value) {
            this.actions.push(value);
        }
    }
    dragonBones.ArmatureDisplayData = ArmatureDisplayData;
    /**
     * @private
     */
    class MeshDisplayData extends DisplayData {
        constructor() {
            super(...arguments);
            this.geometry = new GeometryData();
        }
        static toString() {
            return "[class dragonBones.MeshDisplayData]";
        }
        _onClear() {
            super._onClear();
            this.type = 2 /* Mesh */;
            this.geometry.clear();
            this.texture = null;
        }
    }
    dragonBones.MeshDisplayData = MeshDisplayData;
    /**
     * @private
     */
    class BoundingBoxDisplayData extends DisplayData {
        constructor() {
            super(...arguments);
            this.boundingBox = null; // Initial value.
        }
        static toString() {
            return "[class dragonBones.BoundingBoxDisplayData]";
        }
        _onClear() {
            super._onClear();
            if (this.boundingBox !== null) {
                this.boundingBox.returnToPool();
            }
            this.type = 3 /* BoundingBox */;
            this.boundingBox = null;
        }
    }
    dragonBones.BoundingBoxDisplayData = BoundingBoxDisplayData;
    /**
     * @private
     */
    class PathDisplayData extends DisplayData {
        constructor() {
            super(...arguments);
            this.geometry = new GeometryData();
            this.curveLengths = [];
        }
        static toString() {
            return "[class dragonBones.PathDisplayData]";
        }
        _onClear() {
            super._onClear();
            this.type = 4 /* Path */;
            this.closed = false;
            this.constantSpeed = false;
            this.geometry.clear();
            this.curveLengths.length = 0;
        }
    }
    dragonBones.PathDisplayData = PathDisplayData;
    /**
     * @private
     */
    class WeightData extends dragonBones.BaseObject {
        constructor() {
            super(...arguments);
            this.bones = [];
        }
        static toString() {
            return "[class dragonBones.WeightData]";
        }
        _onClear() {
            this.count = 0;
            this.offset = 0;
            this.bones.length = 0;
        }
        addBone(value) {
            this.bones.push(value);
        }
    }
    dragonBones.WeightData = WeightData;
})(dragonBones || (dragonBones = {}));
