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
     * @internal
     */
    class Surface extends Bone {
        static toString(): string;
        private _dX;
        private _dY;
        private _k;
        private _kX;
        private _kY;
        readonly _vertices: Array<number>;
        readonly _deformVertices: Array<number>;
        /**
         * - x1, y1, x2, y2, x3, y3, x4, y4, d1X, d1Y, d2X, d2Y
         */
        private readonly _hullCache;
        /**
         * - Inside [flag, a, b, c, d, tx, ty], Outside [flag, a, b, c, d, tx, ty]
         */
        private readonly _matrixCahce;
        _bone: Bone | null;
        protected _onClear(): void;
        private _getAffineTransform;
        private _updateVertices;
        protected _updateGlobalTransformMatrix(isCache: boolean): void;
        _getGlobalTransformMatrix(x: number, y: number): Matrix;
        /**
         * @internal
         * @private
         */
        init(surfaceData: SurfaceData, armatureValue: Armature): void;
        /**
         * @internal
         */
        update(cacheFrameIndex: number): void;
    }
}
