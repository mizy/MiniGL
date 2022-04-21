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
    abstract class TimelineState extends BaseObject {
        dirty: boolean;
        /**
         * -1: start, 0: play, 1: complete;
         */
        playState: number;
        currentPlayTimes: number;
        currentTime: number;
        target: BaseObject;
        protected _isTween: boolean;
        protected _valueOffset: number;
        protected _frameValueOffset: number;
        protected _frameOffset: number;
        protected _frameRate: number;
        protected _frameCount: number;
        protected _frameIndex: number;
        protected _frameRateR: number;
        protected _position: number;
        protected _duration: number;
        protected _timeScale: number;
        protected _timeOffset: number;
        protected _animationData: AnimationData;
        protected _timelineData: TimelineData | null;
        protected _armature: Armature;
        protected _animationState: AnimationState;
        protected _actionTimeline: TimelineState;
        protected _timelineArray: Array<number> | Uint16Array;
        protected _frameArray: Array<number> | Int16Array;
        protected _valueArray: Array<number> | Int16Array | Float32Array;
        protected _frameIndices: Array<number>;
        protected _onClear(): void;
        protected abstract _onArriveAtFrame(): void;
        protected abstract _onUpdateFrame(): void;
        protected _setCurrentTime(passedTime: number): boolean;
        init(armature: Armature, animationState: AnimationState, timelineData: TimelineData | null): void;
        fadeOut(): void;
        update(passedTime: number): void;
        blend(_isDirty: boolean): void;
    }
    /**
     * @internal
     */
    abstract class TweenTimelineState extends TimelineState {
        private static _getEasingValue;
        private static _getEasingCurveValue;
        protected _tweenType: TweenType;
        protected _curveCount: number;
        protected _framePosition: number;
        protected _frameDurationR: number;
        protected _tweenEasing: number;
        protected _tweenProgress: number;
        protected _valueScale: number;
        protected _onClear(): void;
        protected _onArriveAtFrame(): void;
        protected _onUpdateFrame(): void;
    }
    /**
     * @internal
     */
    abstract class SingleValueTimelineState extends TweenTimelineState {
        protected _current: number;
        protected _difference: number;
        protected _result: number;
        protected _onClear(): void;
        protected _onArriveAtFrame(): void;
        protected _onUpdateFrame(): void;
    }
    /**
     * @internal
     */
    abstract class DoubleValueTimelineState extends TweenTimelineState {
        protected _currentA: number;
        protected _currentB: number;
        protected _differenceA: number;
        protected _differenceB: number;
        protected _resultA: number;
        protected _resultB: number;
        protected _onClear(): void;
        protected _onArriveAtFrame(): void;
        protected _onUpdateFrame(): void;
    }
    /**
     * @internal
     */
    abstract class MutilpleValueTimelineState extends TweenTimelineState {
        protected _valueCount: number;
        protected readonly _rd: Array<number>;
        protected _onClear(): void;
        protected _onArriveAtFrame(): void;
        protected _onUpdateFrame(): void;
    }
}
