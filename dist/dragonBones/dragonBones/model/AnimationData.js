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
     * - The animation data.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - 动画数据。
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class AnimationData extends dragonBones.BaseObject {
        constructor() {
            super(...arguments);
            /**
             * @private
             */
            this.cachedFrames = [];
            /**
             * @private
             */
            this.boneTimelines = {};
            /**
             * @private
             */
            this.slotTimelines = {};
            /**
             * @private
             */
            this.constraintTimelines = {};
            /**
             * @private
             */
            this.animationTimelines = {};
            /**
             * @private
             */
            this.boneCachedFrameIndices = {};
            /**
             * @private
             */
            this.slotCachedFrameIndices = {};
            /**
             * @private
             */
            this.actionTimeline = null; // Initial value.
            /**
             * @private
             */
            this.zOrderTimeline = null; // Initial value.
        }
        static toString() {
            return "[class dragonBones.AnimationData]";
        }
        _onClear() {
            for (let k in this.boneTimelines) {
                for (const timeline of this.boneTimelines[k]) {
                    timeline.returnToPool();
                }
                delete this.boneTimelines[k];
            }
            for (let k in this.slotTimelines) {
                for (const timeline of this.slotTimelines[k]) {
                    timeline.returnToPool();
                }
                delete this.slotTimelines[k];
            }
            for (let k in this.constraintTimelines) {
                for (const timeline of this.constraintTimelines[k]) {
                    timeline.returnToPool();
                }
                delete this.constraintTimelines[k];
            }
            for (let k in this.animationTimelines) {
                for (const timeline of this.animationTimelines[k]) {
                    timeline.returnToPool();
                }
                delete this.animationTimelines[k];
            }
            for (let k in this.boneCachedFrameIndices) {
                delete this.boneCachedFrameIndices[k];
            }
            for (let k in this.slotCachedFrameIndices) {
                delete this.slotCachedFrameIndices[k];
            }
            if (this.actionTimeline !== null) {
                this.actionTimeline.returnToPool();
            }
            if (this.zOrderTimeline !== null) {
                this.zOrderTimeline.returnToPool();
            }
            this.frameIntOffset = 0;
            this.frameFloatOffset = 0;
            this.frameOffset = 0;
            this.blendType = 0 /* None */;
            this.frameCount = 0;
            this.playTimes = 0;
            this.duration = 0.0;
            this.scale = 1.0;
            this.fadeInTime = 0.0;
            this.cacheFrameRate = 0.0;
            this.name = "";
            this.cachedFrames.length = 0;
            // this.boneTimelines.clear();
            // this.slotTimelines.clear();
            // this.constraintTimelines.clear();
            // this.animationTimelines.clear();
            // this.boneCachedFrameIndices.clear();
            // this.slotCachedFrameIndices.clear();
            this.actionTimeline = null;
            this.zOrderTimeline = null;
            this.parent = null; //
        }
        /**
         * @internal
         */
        cacheFrames(frameRate) {
            if (this.cacheFrameRate > 0.0) { // TODO clear cache.
                return;
            }
            this.cacheFrameRate = Math.max(Math.ceil(frameRate * this.scale), 1.0);
            const cacheFrameCount = Math.ceil(this.cacheFrameRate * this.duration) + 1; // Cache one more frame.
            this.cachedFrames.length = cacheFrameCount;
            for (let i = 0, l = this.cacheFrames.length; i < l; ++i) {
                this.cachedFrames[i] = false;
            }
            for (const bone of this.parent.sortedBones) {
                const indices = new Array(cacheFrameCount);
                for (let i = 0, l = indices.length; i < l; ++i) {
                    indices[i] = -1;
                }
                this.boneCachedFrameIndices[bone.name] = indices;
            }
            for (const slot of this.parent.sortedSlots) {
                const indices = new Array(cacheFrameCount);
                for (let i = 0, l = indices.length; i < l; ++i) {
                    indices[i] = -1;
                }
                this.slotCachedFrameIndices[slot.name] = indices;
            }
        }
        /**
         * @private
         */
        addBoneTimeline(timelineName, timeline) {
            const timelines = timelineName in this.boneTimelines ? this.boneTimelines[timelineName] : (this.boneTimelines[timelineName] = []);
            if (timelines.indexOf(timeline) < 0) {
                timelines.push(timeline);
            }
        }
        /**
         * @private
         */
        addSlotTimeline(timelineName, timeline) {
            const timelines = timelineName in this.slotTimelines ? this.slotTimelines[timelineName] : (this.slotTimelines[timelineName] = []);
            if (timelines.indexOf(timeline) < 0) {
                timelines.push(timeline);
            }
        }
        /**
         * @private
         */
        addConstraintTimeline(timelineName, timeline) {
            const timelines = timelineName in this.constraintTimelines ? this.constraintTimelines[timelineName] : (this.constraintTimelines[timelineName] = []);
            if (timelines.indexOf(timeline) < 0) {
                timelines.push(timeline);
            }
        }
        /**
         * @private
         */
        addAnimationTimeline(timelineName, timeline) {
            const timelines = timelineName in this.animationTimelines ? this.animationTimelines[timelineName] : (this.animationTimelines[timelineName] = []);
            if (timelines.indexOf(timeline) < 0) {
                timelines.push(timeline);
            }
        }
        /**
         * @private
         */
        getBoneTimelines(timelineName) {
            return timelineName in this.boneTimelines ? this.boneTimelines[timelineName] : null;
        }
        /**
         * @private
         */
        getSlotTimelines(timelineName) {
            return timelineName in this.slotTimelines ? this.slotTimelines[timelineName] : null;
        }
        /**
         * @private
         */
        getConstraintTimelines(timelineName) {
            return timelineName in this.constraintTimelines ? this.constraintTimelines[timelineName] : null;
        }
        /**
         * @private
         */
        getAnimationTimelines(timelineName) {
            return timelineName in this.animationTimelines ? this.animationTimelines[timelineName] : null;
        }
        /**
         * @private
         */
        getBoneCachedFrameIndices(boneName) {
            return boneName in this.boneCachedFrameIndices ? this.boneCachedFrameIndices[boneName] : null;
        }
        /**
         * @private
         */
        getSlotCachedFrameIndices(slotName) {
            return slotName in this.slotCachedFrameIndices ? this.slotCachedFrameIndices[slotName] : null;
        }
    }
    dragonBones.AnimationData = AnimationData;
    /**
     * @private
     */
    class TimelineData extends dragonBones.BaseObject {
        static toString() {
            return "[class dragonBones.TimelineData]";
        }
        _onClear() {
            this.type = 10 /* BoneAll */;
            this.offset = 0;
            this.frameIndicesOffset = -1;
        }
    }
    dragonBones.TimelineData = TimelineData;
    /**
     * @internal
     */
    class AnimationTimelineData extends TimelineData {
        static toString() {
            return "[class dragonBones.AnimationTimelineData]";
        }
        _onClear() {
            super._onClear();
            this.x = 0.0;
            this.y = 0.0;
        }
    }
    dragonBones.AnimationTimelineData = AnimationTimelineData;
})(dragonBones || (dragonBones = {}));
