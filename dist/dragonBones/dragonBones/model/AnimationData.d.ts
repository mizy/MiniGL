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
     * - The animation data.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - 动画数据。
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class AnimationData extends BaseObject {
        static toString(): string;
        /**
         * - FrameIntArray.
         * @internal
         */
        frameIntOffset: number;
        /**
         * - FrameFloatArray.
         * @internal
         */
        frameFloatOffset: number;
        /**
         * - FrameArray.
         * @internal
         */
        frameOffset: number;
        /**
         * @private
         */
        blendType: AnimationBlendType;
        /**
         * - The frame count of the animation.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 动画的帧数。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        frameCount: number;
        /**
         * - The play times of the animation. [0: Loop play, [1~N]: Play N times]
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 动画的播放次数。 [0: 无限循环播放, [1~N]: 循环播放 N 次]
         * @version DragonBones 3.0
         * @language zh_CN
         */
        playTimes: number;
        /**
         * - The duration of the animation. (In seconds)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 动画的持续时间。 （以秒为单位）
         * @version DragonBones 3.0
         * @language zh_CN
         */
        duration: number;
        /**
         * @private
         */
        scale: number;
        /**
         * - The fade in time of the animation. (In seconds)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 动画的淡入时间。 （以秒为单位）
         * @version DragonBones 3.0
         * @language zh_CN
         */
        fadeInTime: number;
        /**
         * @private
         */
        cacheFrameRate: number;
        /**
         * - The animation name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 动画名称。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        name: string;
        /**
         * @private
         */
        readonly cachedFrames: Array<boolean>;
        /**
         * @private
         */
        readonly boneTimelines: Map<Array<TimelineData>>;
        /**
         * @private
         */
        readonly slotTimelines: Map<Array<TimelineData>>;
        /**
         * @private
         */
        readonly constraintTimelines: Map<Array<TimelineData>>;
        /**
         * @private
         */
        readonly animationTimelines: Map<Array<TimelineData>>;
        /**
         * @private
         */
        readonly boneCachedFrameIndices: Map<Array<number>>;
        /**
         * @private
         */
        readonly slotCachedFrameIndices: Map<Array<number>>;
        /**
         * @private
         */
        actionTimeline: TimelineData | null;
        /**
         * @private
         */
        zOrderTimeline: TimelineData | null;
        /**
         * @private
         */
        parent: ArmatureData;
        protected _onClear(): void;
        /**
         * @internal
         */
        cacheFrames(frameRate: number): void;
        /**
         * @private
         */
        addBoneTimeline(timelineName: string, timeline: TimelineData): void;
        /**
         * @private
         */
        addSlotTimeline(timelineName: string, timeline: TimelineData): void;
        /**
         * @private
         */
        addConstraintTimeline(timelineName: string, timeline: TimelineData): void;
        /**
         * @private
         */
        addAnimationTimeline(timelineName: string, timeline: TimelineData): void;
        /**
         * @private
         */
        getBoneTimelines(timelineName: string): Array<TimelineData> | null;
        /**
         * @private
         */
        getSlotTimelines(timelineName: string): Array<TimelineData> | null;
        /**
         * @private
         */
        getConstraintTimelines(timelineName: string): Array<TimelineData> | null;
        /**
         * @private
         */
        getAnimationTimelines(timelineName: string): Array<TimelineData> | null;
        /**
         * @private
         */
        getBoneCachedFrameIndices(boneName: string): Array<number> | null;
        /**
         * @private
         */
        getSlotCachedFrameIndices(slotName: string): Array<number> | null;
    }
    /**
     * @private
     */
    class TimelineData extends BaseObject {
        static toString(): string;
        type: TimelineType;
        offset: number;
        frameIndicesOffset: number;
        protected _onClear(): void;
    }
    /**
     * @internal
     */
    class AnimationTimelineData extends TimelineData {
        static toString(): string;
        x: number;
        y: number;
        protected _onClear(): void;
    }
}
