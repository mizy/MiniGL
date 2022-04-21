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
     * - 2D Transform matrix.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - 2D 转换矩阵。
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class Matrix {
        /**
         * - The value that affects the positioning of pixels along the x axis when scaling or rotating an image.
         * @default 1.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 缩放或旋转图像时影响像素沿 x 轴定位的值。
         * @default 1.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        a: number;
        /**
         * - The value that affects the positioning of pixels along the y axis when rotating or skewing an image.
         * @default 0.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 旋转或倾斜图像时影响像素沿 y 轴定位的值。
         * @default 0.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        b: number;
        /**
         * - The value that affects the positioning of pixels along the x axis when rotating or skewing an image.
         * @default 0.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 旋转或倾斜图像时影响像素沿 x 轴定位的值。
         * @default 0.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        c: number;
        /**
         * - The value that affects the positioning of pixels along the y axis when scaling or rotating an image.
         * @default 1.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 缩放或旋转图像时影响像素沿 y 轴定位的值。
         * @default 1.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        d: number;
        /**
         * - The distance by which to translate each point along the x axis.
         * @default 0.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 沿 x 轴平移每个点的距离。
         * @default 0.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        tx: number;
        /**
         * - The distance by which to translate each point along the y axis.
         * @default 0.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 沿 y 轴平移每个点的距离。
         * @default 0.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        ty: number;
        /**
         * @private
         */
        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
        toString(): string;
        /**
         * @private
         */
        copyFrom(value: Matrix): Matrix;
        /**
         * @private
         */
        copyFromArray(value: Array<number>, offset?: number): Matrix;
        /**
         * - Convert to unit matrix.
         * The resulting matrix has the following properties: a=1, b=0, c=0, d=1, tx=0, ty=0.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 转换为单位矩阵。
         * 该矩阵具有以下属性：a=1、b=0、c=0、d=1、tx=0、ty=0。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        identity(): Matrix;
        /**
         * - Multiplies the current matrix with another matrix.
         * @param value - The matrix that needs to be multiplied.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 将当前矩阵与另一个矩阵相乘。
         * @param value - 需要相乘的矩阵。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        concat(value: Matrix): Matrix;
        /**
         * - Convert to inverse matrix.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 转换为逆矩阵。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        invert(): Matrix;
        /**
         * - Apply a matrix transformation to a specific point.
         * @param x - X coordinate.
         * @param y - Y coordinate.
         * @param result - The point after the transformation is applied.
         * @param delta - Whether to ignore tx, ty's conversion to point.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 将矩阵转换应用于特定点。
         * @param x - 横坐标。
         * @param y - 纵坐标。
         * @param result - 应用转换之后的点。
         * @param delta - 是否忽略 tx，ty 对点的转换。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        transformPoint(x: number, y: number, result: {
            x: number;
            y: number;
        }, delta?: boolean): void;
        /**
         * @private
         */
        transformRectangle(rectangle: {
            x: number;
            y: number;
            width: number;
            height: number;
        }, delta?: boolean): void;
    }
}
