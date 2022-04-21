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
declare namespace dragonBones {
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
        static readonly PI: number;
        /**
         * @private
         */
        static readonly PI_D: number;
        /**
         * @private
         */
        static readonly PI_H: number;
        /**
         * @private
         */
        static readonly PI_Q: number;
        /**
         * @private
         */
        static readonly RAD_DEG: number;
        /**
         * @private
         */
        static readonly DEG_RAD: number;
        /**
         * @private
         */
        static normalizeRadian(value: number): number;
        /**
         * - Horizontal translate.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 水平位移。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        x: number;
        /**
         * - Vertical translate.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 垂直位移。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        y: number;
        /**
         * - Skew. (In radians)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 倾斜。 （以弧度为单位）
         * @version DragonBones 3.0
         * @language zh_CN
         */
        skew: number;
        /**
         * - rotation. (In radians)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 旋转。 （以弧度为单位）
         * @version DragonBones 3.0
         * @language zh_CN
         */
        rotation: number;
        /**
         * - Horizontal Scaling.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 水平缩放。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        scaleX: number;
        /**
         * - Vertical scaling.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 垂直缩放。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        scaleY: number;
        /**
         * @private
         */
        constructor(x?: number, y?: number, skew?: number, rotation?: number, scaleX?: number, scaleY?: number);
        toString(): string;
        /**
         * @private
         */
        copyFrom(value: Transform): Transform;
        /**
         * @private
         */
        identity(): Transform;
        /**
         * @private
         */
        add(value: Transform): Transform;
        /**
         * @private
         */
        minus(value: Transform): Transform;
        /**
         * @private
         */
        fromMatrix(matrix: Matrix): Transform;
        /**
         * @private
         */
        toMatrix(matrix: Matrix): Transform;
    }
}
