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
    abstract class Constraint extends BaseObject {
        protected static readonly _helpMatrix: Matrix;
        protected static readonly _helpTransform: Transform;
        protected static readonly _helpPoint: Point;
        /**
         * - For timeline state.
         * @internal
         */
        _constraintData: ConstraintData;
        protected _armature: Armature;
        /**
         * - For sort bones.
         * @internal
         */
        _target: Bone;
        /**
         * - For sort bones.
         * @internal
         */
        _root: Bone;
        protected _bone: Bone | null;
        protected _onClear(): void;
        abstract init(constraintData: ConstraintData, armature: Armature): void;
        abstract update(): void;
        abstract invalidUpdate(): void;
        get name(): string;
    }
    /**
     * @internal
     */
    class IKConstraint extends Constraint {
        static toString(): string;
        /**
         * - For timeline state.
         * @internal
         */
        _bendPositive: boolean;
        /**
         * - For timeline state.
         * @internal
         */
        _weight: number;
        protected _onClear(): void;
        private _computeA;
        private _computeB;
        init(constraintData: ConstraintData, armature: Armature): void;
        update(): void;
        invalidUpdate(): void;
    }
    /**
     * @internal
     */
    class PathConstraint extends Constraint {
        dirty: boolean;
        pathOffset: number;
        position: number;
        spacing: number;
        rotateOffset: number;
        rotateMix: number;
        translateMix: number;
        private _pathSlot;
        private _bones;
        private _spaces;
        private _positions;
        private _curves;
        private _boneLengths;
        private _pathGlobalVertices;
        private _segments;
        static toString(): string;
        protected _onClear(): void;
        protected _updatePathVertices(verticesData: GeometryData): void;
        protected _computeVertices(start: number, count: number, offset: number, out: Array<number>): void;
        protected _computeBezierCurve(pathDisplayDta: PathDisplayData, spaceCount: number, tangents: boolean, percentPosition: boolean, percentSpacing: boolean): void;
        private addCurvePosition;
        init(constraintData: ConstraintData, armature: Armature): void;
        update(): void;
        invalidUpdate(): void;
    }
}
