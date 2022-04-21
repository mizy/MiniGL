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
    class ConstraintData extends dragonBones.BaseObject {
        _onClear() {
            this.order = 0;
            this.name = "";
            this.type = 0 /* IK */;
            this.target = null; //
            this.root = null; //
            this.bone = null;
        }
    }
    dragonBones.ConstraintData = ConstraintData;
    /**
     * @internal
     */
    class IKConstraintData extends ConstraintData {
        static toString() {
            return "[class dragonBones.IKConstraintData]";
        }
        _onClear() {
            super._onClear();
            this.scaleEnabled = false;
            this.bendPositive = false;
            this.weight = 1.0;
        }
    }
    dragonBones.IKConstraintData = IKConstraintData;
    /**
     * @internal
     */
    class PathConstraintData extends ConstraintData {
        constructor() {
            super(...arguments);
            this.bones = [];
        }
        static toString() {
            return "[class dragonBones.PathConstraintData]";
        }
        _onClear() {
            super._onClear();
            this.pathSlot = null;
            this.pathDisplayData = null;
            this.bones.length = 0;
            this.positionMode = 0 /* Fixed */;
            this.spacingMode = 1 /* Fixed */;
            this.rotateMode = 1 /* Chain */;
            this.position = 0.0;
            this.spacing = 0.0;
            this.rotateOffset = 0.0;
            this.rotateMix = 0.0;
            this.translateMix = 0.0;
        }
        AddBone(value) {
            this.bones.push(value);
        }
    }
    dragonBones.PathConstraintData = PathConstraintData;
})(dragonBones || (dragonBones = {}));
