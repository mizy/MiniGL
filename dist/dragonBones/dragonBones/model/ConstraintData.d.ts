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
     * @private
     */
    abstract class ConstraintData extends BaseObject {
        order: number;
        name: string;
        type: ConstraintType;
        target: BoneData;
        root: BoneData;
        bone: BoneData | null;
        protected _onClear(): void;
    }
    /**
     * @internal
     */
    class IKConstraintData extends ConstraintData {
        static toString(): string;
        scaleEnabled: boolean;
        bendPositive: boolean;
        weight: number;
        protected _onClear(): void;
    }
    /**
     * @internal
     */
    class PathConstraintData extends ConstraintData {
        static toString(): string;
        pathSlot: SlotData;
        pathDisplayData: PathDisplayData;
        bones: Array<BoneData>;
        positionMode: PositionMode;
        spacingMode: SpacingMode;
        rotateMode: RotateMode;
        position: number;
        spacing: number;
        rotateOffset: number;
        rotateMix: number;
        translateMix: number;
        protected _onClear(): void;
        AddBone(value: BoneData): void;
    }
}
