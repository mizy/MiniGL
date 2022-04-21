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
    class ActionTimelineState extends TimelineState {
        static toString(): string;
        private _onCrossFrame;
        protected _onArriveAtFrame(): void;
        protected _onUpdateFrame(): void;
        update(passedTime: number): void;
        setCurrentTime(value: number): void;
    }
    /**
     * @internal
     */
    class ZOrderTimelineState extends TimelineState {
        static toString(): string;
        protected _onArriveAtFrame(): void;
        protected _onUpdateFrame(): void;
    }
    /**
     * @internal
     */
    class BoneAllTimelineState extends MutilpleValueTimelineState {
        static toString(): string;
        protected _onArriveAtFrame(): void;
        init(armature: Armature, animationState: AnimationState, timelineData: TimelineData | null): void;
        fadeOut(): void;
        blend(isDirty: boolean): void;
    }
    /**
     * @internal
     */
    class BoneTranslateTimelineState extends DoubleValueTimelineState {
        static toString(): string;
        init(armature: Armature, animationState: AnimationState, timelineData: TimelineData | null): void;
        blend(isDirty: boolean): void;
    }
    /**
     * @internal
     */
    class BoneRotateTimelineState extends DoubleValueTimelineState {
        static toString(): string;
        protected _onArriveAtFrame(): void;
        init(armature: Armature, animationState: AnimationState, timelineData: TimelineData | null): void;
        fadeOut(): void;
        blend(isDirty: boolean): void;
    }
    /**
     * @internal
     */
    class BoneScaleTimelineState extends DoubleValueTimelineState {
        static toString(): string;
        protected _onArriveAtFrame(): void;
        init(armature: Armature, animationState: AnimationState, timelineData: TimelineData | null): void;
        blend(isDirty: boolean): void;
    }
    /**
     * @internal
     */
    class SurfaceTimelineState extends MutilpleValueTimelineState {
        static toString(): string;
        private _deformCount;
        private _deformOffset;
        private _sameValueOffset;
        protected _onClear(): void;
        init(armature: Armature, animationState: AnimationState, timelineData: TimelineData | null): void;
        blend(isDirty: boolean): void;
    }
    /**
     * @internal
     */
    class AlphaTimelineState extends SingleValueTimelineState {
        static toString(): string;
        protected _onArriveAtFrame(): void;
        init(armature: Armature, animationState: AnimationState, timelineData: TimelineData | null): void;
        blend(isDirty: boolean): void;
    }
    /**
     * @internal
     */
    class SlotDisplayTimelineState extends TimelineState {
        static toString(): string;
        protected _onArriveAtFrame(): void;
        protected _onUpdateFrame(): void;
    }
    /**
     * @internal
     */
    class SlotColorTimelineState extends TweenTimelineState {
        static toString(): string;
        private readonly _current;
        private readonly _difference;
        private readonly _result;
        protected _onArriveAtFrame(): void;
        protected _onUpdateFrame(): void;
        fadeOut(): void;
        update(passedTime: number): void;
    }
    /**
     * @internal
     */
    class SlotZIndexTimelineState extends SingleValueTimelineState {
        static toString(): string;
        protected _onArriveAtFrame(): void;
        init(armature: Armature, animationState: AnimationState, timelineData: TimelineData | null): void;
        blend(isDirty: boolean): void;
    }
    /**
     * @internal
     */
    class DeformTimelineState extends MutilpleValueTimelineState {
        static toString(): string;
        displayFrame: DisplayFrame;
        private _deformCount;
        private _deformOffset;
        private _sameValueOffset;
        protected _onClear(): void;
        init(armature: Armature, animationState: AnimationState, timelineData: TimelineData | null): void;
        blend(isDirty: boolean): void;
    }
    /**
     * @internal
     */
    class IKConstraintTimelineState extends DoubleValueTimelineState {
        static toString(): string;
        protected _onUpdateFrame(): void;
        init(armature: Armature, animationState: AnimationState, timelineData: TimelineData | null): void;
    }
    /**
     * @internal
     */
    class AnimationProgressTimelineState extends SingleValueTimelineState {
        static toString(): string;
        protected _onUpdateFrame(): void;
        init(armature: Armature, animationState: AnimationState, timelineData: TimelineData | null): void;
    }
    /**
     * @internal
     */
    class AnimationWeightTimelineState extends SingleValueTimelineState {
        static toString(): string;
        protected _onUpdateFrame(): void;
        init(armature: Armature, animationState: AnimationState, timelineData: TimelineData | null): void;
    }
    /**
     * @internal
     */
    class AnimationParametersTimelineState extends DoubleValueTimelineState {
        static toString(): string;
        protected _onUpdateFrame(): void;
        init(armature: Armature, animationState: AnimationState, timelineData: TimelineData | null): void;
    }
}
