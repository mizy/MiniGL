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
     * - 2D Transform.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - 2D 变换。
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class Transform {
        /**
         * @private
         */
        constructor(x = 0.0, y = 0.0, skew = 0.0, rotation = 0.0, scaleX = 1.0, scaleY = 1.0) {
            this.x = x;
            this.y = y;
            this.skew = skew;
            this.rotation = rotation;
            this.scaleX = scaleX;
            this.scaleY = scaleY;
        }
        /**
         * @private
         */
        static normalizeRadian(value) {
            value = (value + Math.PI) % (Math.PI * 2.0);
            value += value > 0.0 ? -Math.PI : Math.PI;
            return value;
        }
        toString() {
            return "[object dragonBones.Transform] x:" + this.x + " y:" + this.y + " skewX:" + this.skew * 180.0 / Math.PI + " skewY:" + this.rotation * 180.0 / Math.PI + " scaleX:" + this.scaleX + " scaleY:" + this.scaleY;
        }
        /**
         * @private
         */
        copyFrom(value) {
            this.x = value.x;
            this.y = value.y;
            this.skew = value.skew;
            this.rotation = value.rotation;
            this.scaleX = value.scaleX;
            this.scaleY = value.scaleY;
            return this;
        }
        /**
         * @private
         */
        identity() {
            this.x = this.y = 0.0;
            this.skew = this.rotation = 0.0;
            this.scaleX = this.scaleY = 1.0;
            return this;
        }
        /**
         * @private
         */
        add(value) {
            this.x += value.x;
            this.y += value.y;
            this.skew += value.skew;
            this.rotation += value.rotation;
            this.scaleX *= value.scaleX;
            this.scaleY *= value.scaleY;
            return this;
        }
        /**
         * @private
         */
        minus(value) {
            this.x -= value.x;
            this.y -= value.y;
            this.skew -= value.skew;
            this.rotation -= value.rotation;
            this.scaleX /= value.scaleX;
            this.scaleY /= value.scaleY;
            return this;
        }
        /**
         * @private
         */
        fromMatrix(matrix) {
            const backupScaleX = this.scaleX, backupScaleY = this.scaleY;
            const PI_Q = Transform.PI_Q;
            this.x = matrix.tx;
            this.y = matrix.ty;
            this.rotation = Math.atan(matrix.b / matrix.a);
            let skewX = Math.atan(-matrix.c / matrix.d);
            this.scaleX = (this.rotation > -PI_Q && this.rotation < PI_Q) ? matrix.a / Math.cos(this.rotation) : matrix.b / Math.sin(this.rotation);
            this.scaleY = (skewX > -PI_Q && skewX < PI_Q) ? matrix.d / Math.cos(skewX) : -matrix.c / Math.sin(skewX);
            if (backupScaleX >= 0.0 && this.scaleX < 0.0) {
                this.scaleX = -this.scaleX;
                this.rotation = this.rotation - Math.PI;
            }
            if (backupScaleY >= 0.0 && this.scaleY < 0.0) {
                this.scaleY = -this.scaleY;
                skewX = skewX - Math.PI;
            }
            this.skew = skewX - this.rotation;
            return this;
        }
        /**
         * @private
         */
        toMatrix(matrix) {
            if (this.rotation === 0.0) {
                matrix.a = 1.0;
                matrix.b = 0.0;
            }
            else {
                matrix.a = Math.cos(this.rotation);
                matrix.b = Math.sin(this.rotation);
            }
            if (this.skew === 0.0) {
                matrix.c = -matrix.b;
                matrix.d = matrix.a;
            }
            else {
                matrix.c = -Math.sin(this.skew + this.rotation);
                matrix.d = Math.cos(this.skew + this.rotation);
            }
            if (this.scaleX !== 1.0) {
                matrix.a *= this.scaleX;
                matrix.b *= this.scaleX;
            }
            if (this.scaleY !== 1.0) {
                matrix.c *= this.scaleY;
                matrix.d *= this.scaleY;
            }
            matrix.tx = this.x;
            matrix.ty = this.y;
            return this;
        }
    }
    /**
     * @private
     */
    Transform.PI = Math.PI;
    /**
     * @private
     */
    Transform.PI_D = Math.PI * 2.0;
    /**
     * @private
     */
    Transform.PI_H = Math.PI / 2.0;
    /**
     * @private
     */
    Transform.PI_Q = Math.PI / 4.0;
    /**
     * @private
     */
    Transform.RAD_DEG = 180.0 / Math.PI;
    /**
     * @private
     */
    Transform.DEG_RAD = Math.PI / 180.0;
    dragonBones.Transform = Transform;
})(dragonBones || (dragonBones = {}));
