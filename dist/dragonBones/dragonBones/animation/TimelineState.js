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
     * @internal
     */
    class ActionTimelineState extends dragonBones.TimelineState {
        static toString() {
            return "[class dragonBones.ActionTimelineState]";
        }
        _onCrossFrame(frameIndex) {
            const eventDispatcher = this._armature.eventDispatcher;
            if (this._animationState.actionEnabled) {
                const frameOffset = this._animationData.frameOffset + this._timelineArray[this._timelineData.offset + 5 /* TimelineFrameOffset */ + frameIndex];
                const actionCount = this._frameArray[frameOffset + 1];
                const actions = this._animationData.parent.actions; // May be the animaton data not belong to this armature data.
                for (let i = 0; i < actionCount; ++i) {
                    const actionIndex = this._frameArray[frameOffset + 2 + i];
                    const action = actions[actionIndex];
                    if (action.type === 0 /* Play */) {
                        const eventObject = dragonBones.BaseObject.borrowObject(dragonBones.EventObject);
                        // eventObject.time = this._frameArray[frameOffset] * this._frameRateR; // Precision problem
                        eventObject.time = this._frameArray[frameOffset] / this._frameRate;
                        eventObject.animationState = this._animationState;
                        dragonBones.EventObject.actionDataToInstance(action, eventObject, this._armature);
                        this._armature._bufferAction(eventObject, true);
                    }
                    else {
                        const eventType = action.type === 10 /* Frame */ ? dragonBones.EventObject.FRAME_EVENT : dragonBones.EventObject.SOUND_EVENT;
                        if (action.type === 11 /* Sound */ || eventDispatcher.hasDBEventListener(eventType)) {
                            const eventObject = dragonBones.BaseObject.borrowObject(dragonBones.EventObject);
                            // eventObject.time = this._frameArray[frameOffset] * this._frameRateR; // Precision problem
                            eventObject.time = this._frameArray[frameOffset] / this._frameRate;
                            eventObject.animationState = this._animationState;
                            dragonBones.EventObject.actionDataToInstance(action, eventObject, this._armature);
                            this._armature._dragonBones.bufferEvent(eventObject);
                        }
                    }
                }
            }
        }
        _onArriveAtFrame() { }
        _onUpdateFrame() { }
        update(passedTime) {
            const prevState = this.playState;
            let prevPlayTimes = this.currentPlayTimes;
            let prevTime = this.currentTime;
            if (this._setCurrentTime(passedTime)) {
                const eventActive = this._animationState._parent === null && this._animationState.actionEnabled;
                const eventDispatcher = this._armature.eventDispatcher;
                if (prevState < 0) {
                    if (this.playState !== prevState) {
                        if (this._animationState.displayControl && this._animationState.resetToPose) { // Reset zorder to pose.
                            this._armature._sortZOrder(null, 0);
                        }
                        // prevPlayTimes = this.currentPlayTimes; // TODO
                        if (eventActive && eventDispatcher.hasDBEventListener(dragonBones.EventObject.START)) {
                            const eventObject = dragonBones.BaseObject.borrowObject(dragonBones.EventObject);
                            eventObject.type = dragonBones.EventObject.START;
                            eventObject.armature = this._armature;
                            eventObject.animationState = this._animationState;
                            this._armature._dragonBones.bufferEvent(eventObject);
                        }
                    }
                    else {
                        return;
                    }
                }
                const isReverse = this._animationState.timeScale < 0.0;
                let loopCompleteEvent = null;
                let completeEvent = null;
                if (eventActive && this.currentPlayTimes !== prevPlayTimes) {
                    if (eventDispatcher.hasDBEventListener(dragonBones.EventObject.LOOP_COMPLETE)) {
                        loopCompleteEvent = dragonBones.BaseObject.borrowObject(dragonBones.EventObject);
                        loopCompleteEvent.type = dragonBones.EventObject.LOOP_COMPLETE;
                        loopCompleteEvent.armature = this._armature;
                        loopCompleteEvent.animationState = this._animationState;
                    }
                    if (this.playState > 0) {
                        if (eventDispatcher.hasDBEventListener(dragonBones.EventObject.COMPLETE)) {
                            completeEvent = dragonBones.BaseObject.borrowObject(dragonBones.EventObject);
                            completeEvent.type = dragonBones.EventObject.COMPLETE;
                            completeEvent.armature = this._armature;
                            completeEvent.animationState = this._animationState;
                        }
                    }
                }
                if (this._frameCount > 1) {
                    const timelineData = this._timelineData;
                    const timelineFrameIndex = Math.floor(this.currentTime * this._frameRate); // uint
                    const frameIndex = this._frameIndices[timelineData.frameIndicesOffset + timelineFrameIndex];
                    if (this._frameIndex !== frameIndex) { // Arrive at frame.                   
                        let crossedFrameIndex = this._frameIndex;
                        this._frameIndex = frameIndex;
                        if (this._timelineArray !== null) {
                            this._frameOffset = this._animationData.frameOffset + this._timelineArray[timelineData.offset + 5 /* TimelineFrameOffset */ + this._frameIndex];
                            if (isReverse) {
                                if (crossedFrameIndex < 0) {
                                    const prevFrameIndex = Math.floor(prevTime * this._frameRate);
                                    crossedFrameIndex = this._frameIndices[timelineData.frameIndicesOffset + prevFrameIndex];
                                    if (this.currentPlayTimes === prevPlayTimes) { // Start.
                                        if (crossedFrameIndex === frameIndex) { // Uncrossed.
                                            crossedFrameIndex = -1;
                                        }
                                    }
                                }
                                while (crossedFrameIndex >= 0) {
                                    const frameOffset = this._animationData.frameOffset + this._timelineArray[timelineData.offset + 5 /* TimelineFrameOffset */ + crossedFrameIndex];
                                    // const framePosition = this._frameArray[frameOffset] * this._frameRateR; // Precision problem
                                    const framePosition = this._frameArray[frameOffset] / this._frameRate;
                                    if (this._position <= framePosition &&
                                        framePosition <= this._position + this._duration) { // Support interval play.
                                        this._onCrossFrame(crossedFrameIndex);
                                    }
                                    if (loopCompleteEvent !== null && crossedFrameIndex === 0) { // Add loop complete event after first frame.
                                        this._armature._dragonBones.bufferEvent(loopCompleteEvent);
                                        loopCompleteEvent = null;
                                    }
                                    if (crossedFrameIndex > 0) {
                                        crossedFrameIndex--;
                                    }
                                    else {
                                        crossedFrameIndex = this._frameCount - 1;
                                    }
                                    if (crossedFrameIndex === frameIndex) {
                                        break;
                                    }
                                }
                            }
                            else {
                                if (crossedFrameIndex < 0) {
                                    const prevFrameIndex = Math.floor(prevTime * this._frameRate);
                                    crossedFrameIndex = this._frameIndices[timelineData.frameIndicesOffset + prevFrameIndex];
                                    const frameOffset = this._animationData.frameOffset + this._timelineArray[timelineData.offset + 5 /* TimelineFrameOffset */ + crossedFrameIndex];
                                    // const framePosition = this._frameArray[frameOffset] * this._frameRateR; // Precision problem
                                    const framePosition = this._frameArray[frameOffset] / this._frameRate;
                                    if (this.currentPlayTimes === prevPlayTimes) { // Start.
                                        if (prevTime <= framePosition) { // Crossed.
                                            if (crossedFrameIndex > 0) {
                                                crossedFrameIndex--;
                                            }
                                            else {
                                                crossedFrameIndex = this._frameCount - 1;
                                            }
                                        }
                                        else if (crossedFrameIndex === frameIndex) { // Uncrossed.
                                            crossedFrameIndex = -1;
                                        }
                                    }
                                }
                                while (crossedFrameIndex >= 0) {
                                    if (crossedFrameIndex < this._frameCount - 1) {
                                        crossedFrameIndex++;
                                    }
                                    else {
                                        crossedFrameIndex = 0;
                                    }
                                    const frameOffset = this._animationData.frameOffset + this._timelineArray[timelineData.offset + 5 /* TimelineFrameOffset */ + crossedFrameIndex];
                                    // const framePosition = this._frameArray[frameOffset] * this._frameRateR; // Precision problem
                                    const framePosition = this._frameArray[frameOffset] / this._frameRate;
                                    if (this._position <= framePosition &&
                                        framePosition <= this._position + this._duration //
                                    ) { // Support interval play.
                                        this._onCrossFrame(crossedFrameIndex);
                                    }
                                    if (loopCompleteEvent !== null && crossedFrameIndex === 0) { // Add loop complete event before first frame.
                                        this._armature._dragonBones.bufferEvent(loopCompleteEvent);
                                        loopCompleteEvent = null;
                                    }
                                    if (crossedFrameIndex === frameIndex) {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                else if (this._frameIndex < 0) {
                    this._frameIndex = 0;
                    if (this._timelineData !== null) {
                        this._frameOffset = this._animationData.frameOffset + this._timelineArray[this._timelineData.offset + 5 /* TimelineFrameOffset */];
                        // Arrive at frame.
                        const framePosition = this._frameArray[this._frameOffset] / this._frameRate;
                        if (this.currentPlayTimes === prevPlayTimes) { // Start.
                            if (prevTime <= framePosition) {
                                this._onCrossFrame(this._frameIndex);
                            }
                        }
                        else if (this._position <= framePosition) { // Loop complete.
                            if (!isReverse && loopCompleteEvent !== null) { // Add loop complete event before first frame.
                                this._armature._dragonBones.bufferEvent(loopCompleteEvent);
                                loopCompleteEvent = null;
                            }
                            this._onCrossFrame(this._frameIndex);
                        }
                    }
                }
                if (loopCompleteEvent !== null) {
                    this._armature._dragonBones.bufferEvent(loopCompleteEvent);
                }
                if (completeEvent !== null) {
                    this._armature._dragonBones.bufferEvent(completeEvent);
                }
            }
        }
        setCurrentTime(value) {
            this._setCurrentTime(value);
            this._frameIndex = -1;
        }
    }
    dragonBones.ActionTimelineState = ActionTimelineState;
    /**
     * @internal
     */
    class ZOrderTimelineState extends dragonBones.TimelineState {
        static toString() {
            return "[class dragonBones.ZOrderTimelineState]";
        }
        _onArriveAtFrame() {
            if (this.playState >= 0) {
                const count = this._frameArray[this._frameOffset + 1];
                if (count > 0) {
                    this._armature._sortZOrder(this._frameArray, this._frameOffset + 2);
                }
                else {
                    this._armature._sortZOrder(null, 0);
                }
            }
        }
        _onUpdateFrame() { }
    }
    dragonBones.ZOrderTimelineState = ZOrderTimelineState;
    /**
     * @internal
     */
    class BoneAllTimelineState extends dragonBones.MutilpleValueTimelineState {
        static toString() {
            return "[class dragonBones.BoneAllTimelineState]";
        }
        _onArriveAtFrame() {
            super._onArriveAtFrame();
            if (this._isTween && this._frameIndex === this._frameCount - 1) {
                this._rd[2] = dragonBones.Transform.normalizeRadian(this._rd[2]);
                this._rd[3] = dragonBones.Transform.normalizeRadian(this._rd[3]);
            }
            if (this._timelineData === null) { // Pose.
                this._rd[4] = 1.0;
                this._rd[5] = 1.0;
            }
        }
        init(armature, animationState, timelineData) {
            super.init(armature, animationState, timelineData);
            this._valueOffset = this._animationData.frameFloatOffset;
            this._valueCount = 6;
            this._valueArray = this._animationData.parent.parent.frameFloatArray;
        }
        fadeOut() {
            this.dirty = false;
            this._rd[2] = dragonBones.Transform.normalizeRadian(this._rd[2]);
            this._rd[3] = dragonBones.Transform.normalizeRadian(this._rd[3]);
        }
        blend(isDirty) {
            const valueScale = this._armature.armatureData.scale;
            const rd = this._rd;
            //
            const blendState = this.target;
            const bone = blendState.target;
            const blendWeight = blendState.blendWeight;
            const result = bone.animationPose;
            if (blendState.dirty > 1) {
                result.x += rd[0] * blendWeight * valueScale;
                result.y += rd[1] * blendWeight * valueScale;
                result.rotation += rd[2] * blendWeight;
                result.skew += rd[3] * blendWeight;
                result.scaleX += (rd[4] - 1.0) * blendWeight;
                result.scaleY += (rd[5] - 1.0) * blendWeight;
            }
            else {
                result.x = rd[0] * blendWeight * valueScale;
                result.y = rd[1] * blendWeight * valueScale;
                result.rotation = rd[2] * blendWeight;
                result.skew = rd[3] * blendWeight;
                result.scaleX = (rd[4] - 1.0) * blendWeight + 1.0; // 
                result.scaleY = (rd[5] - 1.0) * blendWeight + 1.0; //
            }
            if (isDirty || this.dirty) {
                this.dirty = false;
                bone._transformDirty = true;
            }
        }
    }
    dragonBones.BoneAllTimelineState = BoneAllTimelineState;
    /**
     * @internal
     */
    class BoneTranslateTimelineState extends dragonBones.DoubleValueTimelineState {
        static toString() {
            return "[class dragonBones.BoneTranslateTimelineState]";
        }
        init(armature, animationState, timelineData) {
            super.init(armature, animationState, timelineData);
            this._valueOffset = this._animationData.frameFloatOffset;
            this._valueScale = this._armature.armatureData.scale;
            this._valueArray = this._animationData.parent.parent.frameFloatArray;
        }
        blend(isDirty) {
            const blendState = this.target;
            const bone = blendState.target;
            const blendWeight = blendState.blendWeight;
            const result = bone.animationPose;
            if (blendState.dirty > 1) {
                result.x += this._resultA * blendWeight;
                result.y += this._resultB * blendWeight;
            }
            else if (blendWeight !== 1.0) {
                result.x = this._resultA * blendWeight;
                result.y = this._resultB * blendWeight;
            }
            else {
                result.x = this._resultA;
                result.y = this._resultB;
            }
            if (isDirty || this.dirty) {
                this.dirty = false;
                bone._transformDirty = true;
            }
        }
    }
    dragonBones.BoneTranslateTimelineState = BoneTranslateTimelineState;
    /**
     * @internal
     */
    class BoneRotateTimelineState extends dragonBones.DoubleValueTimelineState {
        static toString() {
            return "[class dragonBones.BoneRotateTimelineState]";
        }
        _onArriveAtFrame() {
            super._onArriveAtFrame();
            if (this._isTween && this._frameIndex === this._frameCount - 1) {
                this._differenceA = dragonBones.Transform.normalizeRadian(this._differenceA);
                this._differenceB = dragonBones.Transform.normalizeRadian(this._differenceB);
            }
        }
        init(armature, animationState, timelineData) {
            super.init(armature, animationState, timelineData);
            this._valueOffset = this._animationData.frameFloatOffset;
            this._valueArray = this._animationData.parent.parent.frameFloatArray;
        }
        fadeOut() {
            this.dirty = false;
            this._resultA = dragonBones.Transform.normalizeRadian(this._resultA);
            this._resultB = dragonBones.Transform.normalizeRadian(this._resultB);
        }
        blend(isDirty) {
            const blendState = this.target;
            const bone = blendState.target;
            const blendWeight = blendState.blendWeight;
            const result = bone.animationPose;
            if (blendState.dirty > 1) {
                result.rotation += this._resultA * blendWeight;
                result.skew += this._resultB * blendWeight;
            }
            else if (blendWeight !== 1.0) {
                result.rotation = this._resultA * blendWeight;
                result.skew = this._resultB * blendWeight;
            }
            else {
                result.rotation = this._resultA;
                result.skew = this._resultB;
            }
            if (isDirty || this.dirty) {
                this.dirty = false;
                bone._transformDirty = true;
            }
        }
    }
    dragonBones.BoneRotateTimelineState = BoneRotateTimelineState;
    /**
     * @internal
     */
    class BoneScaleTimelineState extends dragonBones.DoubleValueTimelineState {
        static toString() {
            return "[class dragonBones.BoneScaleTimelineState]";
        }
        _onArriveAtFrame() {
            super._onArriveAtFrame();
            if (this._timelineData === null) { // Pose.
                this._resultA = 1.0;
                this._resultB = 1.0;
            }
        }
        init(armature, animationState, timelineData) {
            super.init(armature, animationState, timelineData);
            this._valueOffset = this._animationData.frameFloatOffset;
            this._valueArray = this._animationData.parent.parent.frameFloatArray;
        }
        blend(isDirty) {
            const blendState = this.target;
            const bone = blendState.target;
            const blendWeight = blendState.blendWeight;
            const result = bone.animationPose;
            if (blendState.dirty > 1) {
                result.scaleX += (this._resultA - 1.0) * blendWeight;
                result.scaleY += (this._resultB - 1.0) * blendWeight;
            }
            else if (blendWeight !== 1.0) {
                result.scaleX = (this._resultA - 1.0) * blendWeight + 1.0;
                result.scaleY = (this._resultB - 1.0) * blendWeight + 1.0;
            }
            else {
                result.scaleX = this._resultA;
                result.scaleY = this._resultB;
            }
            if (isDirty || this.dirty) {
                this.dirty = false;
                bone._transformDirty = true;
            }
        }
    }
    dragonBones.BoneScaleTimelineState = BoneScaleTimelineState;
    /**
     * @internal
     */
    class SurfaceTimelineState extends dragonBones.MutilpleValueTimelineState {
        static toString() {
            return "[class dragonBones.SurfaceTimelineState]";
        }
        _onClear() {
            super._onClear();
            this._deformCount = 0;
            this._deformOffset = 0;
            this._sameValueOffset = 0;
        }
        init(armature, animationState, timelineData) {
            super.init(armature, animationState, timelineData);
            if (this._timelineData !== null) {
                const dragonBonesData = this._animationData.parent.parent;
                const frameIntArray = dragonBonesData.frameIntArray;
                const frameIntOffset = this._animationData.frameIntOffset + this._timelineArray[this._timelineData.offset + 3 /* TimelineFrameValueCount */];
                this._valueOffset = this._animationData.frameFloatOffset;
                this._valueCount = frameIntArray[frameIntOffset + 2 /* DeformValueCount */];
                this._deformCount = frameIntArray[frameIntOffset + 1 /* DeformCount */];
                this._deformOffset = frameIntArray[frameIntOffset + 3 /* DeformValueOffset */];
                this._sameValueOffset = frameIntArray[frameIntOffset + 4 /* DeformFloatOffset */] + this._animationData.frameFloatOffset;
                this._valueScale = this._armature.armatureData.scale;
                this._valueArray = dragonBonesData.frameFloatArray;
                this._rd.length = this._valueCount * 2;
            }
            else {
                this._deformCount = this.target.target._deformVertices.length;
            }
        }
        blend(isDirty) {
            const blendState = this.target;
            const surface = blendState.target;
            const blendWeight = blendState.blendWeight;
            const result = surface._deformVertices;
            const valueArray = this._valueArray;
            if (valueArray !== null) {
                const valueCount = this._valueCount;
                const deformOffset = this._deformOffset;
                const sameValueOffset = this._sameValueOffset;
                const rd = this._rd;
                for (let i = 0; i < this._deformCount; ++i) {
                    let value = 0.0;
                    if (i < deformOffset) {
                        value = valueArray[sameValueOffset + i];
                    }
                    else if (i < deformOffset + valueCount) {
                        value = rd[i - deformOffset];
                    }
                    else {
                        value = valueArray[sameValueOffset + i - valueCount];
                    }
                    if (blendState.dirty > 1) {
                        result[i] += value * blendWeight;
                    }
                    else {
                        result[i] = value * blendWeight;
                    }
                }
            }
            else if (blendState.dirty === 1) {
                for (let i = 0; i < this._deformCount; ++i) {
                    result[i] = 0.0;
                }
            }
            if (isDirty || this.dirty) {
                this.dirty = false;
                surface._transformDirty = true;
            }
        }
    }
    dragonBones.SurfaceTimelineState = SurfaceTimelineState;
    /**
     * @internal
     */
    class AlphaTimelineState extends dragonBones.SingleValueTimelineState {
        static toString() {
            return "[class dragonBones.AlphaTimelineState]";
        }
        _onArriveAtFrame() {
            super._onArriveAtFrame();
            if (this._timelineData === null) { // Pose.
                this._result = 1.0;
            }
        }
        init(armature, animationState, timelineData) {
            super.init(armature, animationState, timelineData);
            this._valueOffset = this._animationData.frameIntOffset;
            this._valueScale = 0.01;
            this._valueArray = this._animationData.parent.parent.frameIntArray;
        }
        blend(isDirty) {
            const blendState = this.target;
            const alphaTarget = blendState.target;
            const blendWeight = blendState.blendWeight;
            if (blendState.dirty > 1) {
                alphaTarget._alpha += this._result * blendWeight;
                if (alphaTarget._alpha > 1.0) {
                    alphaTarget._alpha = 1.0;
                }
            }
            else {
                alphaTarget._alpha = this._result * blendWeight;
            }
            if (isDirty || this.dirty) {
                this.dirty = false;
                this._armature._alphaDirty = true;
            }
        }
    }
    dragonBones.AlphaTimelineState = AlphaTimelineState;
    /**
     * @internal
     */
    class SlotDisplayTimelineState extends dragonBones.TimelineState {
        static toString() {
            return "[class dragonBones.SlotDisplayTimelineState]";
        }
        _onArriveAtFrame() {
            if (this.playState >= 0) {
                const slot = this.target;
                const displayIndex = this._timelineData !== null ? this._frameArray[this._frameOffset + 1] : slot._slotData.displayIndex;
                if (slot.displayIndex !== displayIndex) {
                    slot._setDisplayIndex(displayIndex, true);
                }
            }
        }
        _onUpdateFrame() {
        }
    }
    dragonBones.SlotDisplayTimelineState = SlotDisplayTimelineState;
    /**
     * @internal
     */
    class SlotColorTimelineState extends dragonBones.TweenTimelineState {
        constructor() {
            super(...arguments);
            this._current = [0, 0, 0, 0, 0, 0, 0, 0];
            this._difference = [0, 0, 0, 0, 0, 0, 0, 0];
            this._result = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
        }
        static toString() {
            return "[class dragonBones.SlotColorTimelineState]";
        }
        _onArriveAtFrame() {
            super._onArriveAtFrame();
            if (this._timelineData !== null) {
                const dragonBonesData = this._animationData.parent.parent;
                const colorArray = dragonBonesData.colorArray;
                const frameIntArray = dragonBonesData.frameIntArray;
                const valueOffset = this._animationData.frameIntOffset + this._frameValueOffset + this._frameIndex;
                let colorOffset = frameIntArray[valueOffset];
                if (colorOffset < 0) {
                    colorOffset += 65536; // Fixed out of bounds bug. 
                }
                if (this._isTween) {
                    this._current[0] = colorArray[colorOffset++];
                    this._current[1] = colorArray[colorOffset++];
                    this._current[2] = colorArray[colorOffset++];
                    this._current[3] = colorArray[colorOffset++];
                    this._current[4] = colorArray[colorOffset++];
                    this._current[5] = colorArray[colorOffset++];
                    this._current[6] = colorArray[colorOffset++];
                    this._current[7] = colorArray[colorOffset++];
                    if (this._frameIndex === this._frameCount - 1) {
                        colorOffset = frameIntArray[this._animationData.frameIntOffset + this._frameValueOffset];
                    }
                    else {
                        colorOffset = frameIntArray[valueOffset + 1];
                    }
                    if (colorOffset < 0) {
                        colorOffset += 65536; // Fixed out of bounds bug. 
                    }
                    this._difference[0] = colorArray[colorOffset++] - this._current[0];
                    this._difference[1] = colorArray[colorOffset++] - this._current[1];
                    this._difference[2] = colorArray[colorOffset++] - this._current[2];
                    this._difference[3] = colorArray[colorOffset++] - this._current[3];
                    this._difference[4] = colorArray[colorOffset++] - this._current[4];
                    this._difference[5] = colorArray[colorOffset++] - this._current[5];
                    this._difference[6] = colorArray[colorOffset++] - this._current[6];
                    this._difference[7] = colorArray[colorOffset++] - this._current[7];
                }
                else {
                    this._result[0] = colorArray[colorOffset++] * 0.01;
                    this._result[1] = colorArray[colorOffset++] * 0.01;
                    this._result[2] = colorArray[colorOffset++] * 0.01;
                    this._result[3] = colorArray[colorOffset++] * 0.01;
                    this._result[4] = colorArray[colorOffset++];
                    this._result[5] = colorArray[colorOffset++];
                    this._result[6] = colorArray[colorOffset++];
                    this._result[7] = colorArray[colorOffset++];
                }
            }
            else { // Pose.
                const slot = this.target;
                const color = slot.slotData.color;
                this._result[0] = color.alphaMultiplier;
                this._result[1] = color.redMultiplier;
                this._result[2] = color.greenMultiplier;
                this._result[3] = color.blueMultiplier;
                this._result[4] = color.alphaOffset;
                this._result[5] = color.redOffset;
                this._result[6] = color.greenOffset;
                this._result[7] = color.blueOffset;
            }
        }
        _onUpdateFrame() {
            super._onUpdateFrame();
            if (this._isTween) {
                this._result[0] = (this._current[0] + this._difference[0] * this._tweenProgress) * 0.01;
                this._result[1] = (this._current[1] + this._difference[1] * this._tweenProgress) * 0.01;
                this._result[2] = (this._current[2] + this._difference[2] * this._tweenProgress) * 0.01;
                this._result[3] = (this._current[3] + this._difference[3] * this._tweenProgress) * 0.01;
                this._result[4] = this._current[4] + this._difference[4] * this._tweenProgress;
                this._result[5] = this._current[5] + this._difference[5] * this._tweenProgress;
                this._result[6] = this._current[6] + this._difference[6] * this._tweenProgress;
                this._result[7] = this._current[7] + this._difference[7] * this._tweenProgress;
            }
        }
        fadeOut() {
            this._isTween = false;
        }
        update(passedTime) {
            super.update(passedTime);
            // Fade animation.
            if (this._isTween || this.dirty) {
                const slot = this.target;
                const result = slot._colorTransform;
                if (this._animationState._fadeState !== 0 || this._animationState._subFadeState !== 0) {
                    if (result.alphaMultiplier !== this._result[0] ||
                        result.redMultiplier !== this._result[1] ||
                        result.greenMultiplier !== this._result[2] ||
                        result.blueMultiplier !== this._result[3] ||
                        result.alphaOffset !== this._result[4] ||
                        result.redOffset !== this._result[5] ||
                        result.greenOffset !== this._result[6] ||
                        result.blueOffset !== this._result[7]) {
                        const fadeProgress = Math.pow(this._animationState._fadeProgress, 4);
                        result.alphaMultiplier += (this._result[0] - result.alphaMultiplier) * fadeProgress;
                        result.redMultiplier += (this._result[1] - result.redMultiplier) * fadeProgress;
                        result.greenMultiplier += (this._result[2] - result.greenMultiplier) * fadeProgress;
                        result.blueMultiplier += (this._result[3] - result.blueMultiplier) * fadeProgress;
                        result.alphaOffset += (this._result[4] - result.alphaOffset) * fadeProgress;
                        result.redOffset += (this._result[5] - result.redOffset) * fadeProgress;
                        result.greenOffset += (this._result[6] - result.greenOffset) * fadeProgress;
                        result.blueOffset += (this._result[7] - result.blueOffset) * fadeProgress;
                        slot._colorDirty = true;
                    }
                }
                else if (this.dirty) {
                    this.dirty = false;
                    if (result.alphaMultiplier !== this._result[0] ||
                        result.redMultiplier !== this._result[1] ||
                        result.greenMultiplier !== this._result[2] ||
                        result.blueMultiplier !== this._result[3] ||
                        result.alphaOffset !== this._result[4] ||
                        result.redOffset !== this._result[5] ||
                        result.greenOffset !== this._result[6] ||
                        result.blueOffset !== this._result[7]) {
                        result.alphaMultiplier = this._result[0];
                        result.redMultiplier = this._result[1];
                        result.greenMultiplier = this._result[2];
                        result.blueMultiplier = this._result[3];
                        result.alphaOffset = this._result[4];
                        result.redOffset = this._result[5];
                        result.greenOffset = this._result[6];
                        result.blueOffset = this._result[7];
                        slot._colorDirty = true;
                    }
                }
            }
        }
    }
    dragonBones.SlotColorTimelineState = SlotColorTimelineState;
    /**
     * @internal
     */
    class SlotZIndexTimelineState extends dragonBones.SingleValueTimelineState {
        static toString() {
            return "[class dragonBones.SlotZIndexTimelineState]";
        }
        _onArriveAtFrame() {
            super._onArriveAtFrame();
            if (this._timelineData === null) { // Pose.
                const blendState = this.target;
                const slot = blendState.target;
                this._result = slot.slotData.zIndex;
            }
        }
        init(armature, animationState, timelineData) {
            super.init(armature, animationState, timelineData);
            this._valueOffset = this._animationData.frameIntOffset;
            this._valueArray = this._animationData.parent.parent.frameIntArray;
        }
        blend(isDirty) {
            const blendState = this.target;
            const slot = blendState.target;
            const blendWeight = blendState.blendWeight;
            if (blendState.dirty > 1) {
                slot._zIndex += this._result * blendWeight;
            }
            else {
                slot._zIndex = this._result * blendWeight;
            }
            if (isDirty || this.dirty) {
                this.dirty = false;
                this._armature._zIndexDirty = true;
            }
        }
    }
    dragonBones.SlotZIndexTimelineState = SlotZIndexTimelineState;
    /**
     * @internal
     */
    class DeformTimelineState extends dragonBones.MutilpleValueTimelineState {
        static toString() {
            return "[class dragonBones.DeformTimelineState]";
        }
        _onClear() {
            super._onClear();
            this.displayFrame = null;
            this._deformCount = 0;
            this._deformOffset = 0;
            this._sameValueOffset = 0;
        }
        init(armature, animationState, timelineData) {
            super.init(armature, animationState, timelineData);
            if (this._timelineData !== null) {
                const frameIntOffset = this._animationData.frameIntOffset + this._timelineArray[this._timelineData.offset + 3 /* TimelineFrameValueCount */];
                const dragonBonesData = this._animationData.parent.parent;
                const frameIntArray = dragonBonesData.frameIntArray;
                this._valueOffset = this._animationData.frameFloatOffset;
                this._valueCount = frameIntArray[frameIntOffset + 2 /* DeformValueCount */];
                this._deformCount = frameIntArray[frameIntOffset + 1 /* DeformCount */];
                this._deformOffset = frameIntArray[frameIntOffset + 3 /* DeformValueOffset */];
                this._sameValueOffset = frameIntArray[frameIntOffset + 4 /* DeformFloatOffset */];
                if (this._sameValueOffset < 0) {
                    this._sameValueOffset += 65536; // Fixed out of bounds bug. 
                }
                this._sameValueOffset += this._animationData.frameFloatOffset;
                this._valueScale = this._armature.armatureData.scale;
                this._valueArray = dragonBonesData.frameFloatArray;
                this._rd.length = this._valueCount * 2;
            }
            else {
                this._deformCount = this.displayFrame.deformVertices.length;
            }
        }
        blend(isDirty) {
            const blendState = this.target;
            const slot = blendState.target;
            const blendWeight = blendState.blendWeight;
            const result = this.displayFrame.deformVertices;
            const valueArray = this._valueArray;
            if (valueArray !== null) {
                const valueCount = this._valueCount;
                const deformOffset = this._deformOffset;
                const sameValueOffset = this._sameValueOffset;
                const rd = this._rd;
                for (let i = 0; i < this._deformCount; ++i) {
                    let value = 0.0;
                    if (i < deformOffset) {
                        value = valueArray[sameValueOffset + i];
                    }
                    else if (i < deformOffset + valueCount) {
                        value = rd[i - deformOffset];
                    }
                    else {
                        value = valueArray[sameValueOffset + i - valueCount];
                    }
                    if (blendState.dirty > 1) {
                        result[i] += value * blendWeight;
                    }
                    else {
                        result[i] = value * blendWeight;
                    }
                }
            }
            else if (blendState.dirty === 1) {
                for (let i = 0; i < this._deformCount; ++i) {
                    result[i] = 0.0;
                }
            }
            if (isDirty || this.dirty) {
                this.dirty = false;
                if (slot._geometryData === this.displayFrame.getGeometryData()) {
                    slot._verticesDirty = true;
                }
            }
        }
    }
    dragonBones.DeformTimelineState = DeformTimelineState;
    /**
     * @internal
     */
    class IKConstraintTimelineState extends dragonBones.DoubleValueTimelineState {
        static toString() {
            return "[class dragonBones.IKConstraintTimelineState]";
        }
        _onUpdateFrame() {
            super._onUpdateFrame();
            const ikConstraint = this.target;
            if (this._timelineData !== null) {
                ikConstraint._bendPositive = this._currentA > 0.0;
                ikConstraint._weight = this._currentB;
            }
            else {
                const ikConstraintData = ikConstraint._constraintData;
                ikConstraint._bendPositive = ikConstraintData.bendPositive;
                ikConstraint._weight = ikConstraintData.weight;
            }
            ikConstraint.invalidUpdate();
            this.dirty = false;
        }
        init(armature, animationState, timelineData) {
            super.init(armature, animationState, timelineData);
            this._valueOffset = this._animationData.frameIntOffset;
            this._valueScale = 0.01;
            this._valueArray = this._animationData.parent.parent.frameIntArray;
        }
    }
    dragonBones.IKConstraintTimelineState = IKConstraintTimelineState;
    /**
     * @internal
     */
    class AnimationProgressTimelineState extends dragonBones.SingleValueTimelineState {
        static toString() {
            return "[class dragonBones.AnimationProgressTimelineState]";
        }
        _onUpdateFrame() {
            super._onUpdateFrame();
            const animationState = this.target;
            if (animationState._parent !== null) {
                animationState.currentTime = this._result * animationState.totalTime;
            }
            this.dirty = false;
        }
        init(armature, animationState, timelineData) {
            super.init(armature, animationState, timelineData);
            this._valueOffset = this._animationData.frameIntOffset;
            this._valueScale = 0.0001;
            this._valueArray = this._animationData.parent.parent.frameIntArray;
        }
    }
    dragonBones.AnimationProgressTimelineState = AnimationProgressTimelineState;
    /**
     * @internal
     */
    class AnimationWeightTimelineState extends dragonBones.SingleValueTimelineState {
        static toString() {
            return "[class dragonBones.AnimationWeightTimelineState]";
        }
        _onUpdateFrame() {
            super._onUpdateFrame();
            const animationState = this.target;
            if (animationState._parent !== null) {
                animationState.weight = this._result;
            }
            this.dirty = false;
        }
        init(armature, animationState, timelineData) {
            super.init(armature, animationState, timelineData);
            this._valueOffset = this._animationData.frameIntOffset;
            this._valueScale = 0.0001;
            this._valueArray = this._animationData.parent.parent.frameIntArray;
        }
    }
    dragonBones.AnimationWeightTimelineState = AnimationWeightTimelineState;
    /**
     * @internal
     */
    class AnimationParametersTimelineState extends dragonBones.DoubleValueTimelineState {
        static toString() {
            return "[class dragonBones.AnimationParametersTimelineState]";
        }
        _onUpdateFrame() {
            super._onUpdateFrame();
            const animationState = this.target;
            if (animationState._parent !== null) {
                animationState.parameterX = this._resultA;
                animationState.parameterY = this._resultB;
            }
            this.dirty = false;
        }
        init(armature, animationState, timelineData) {
            super.init(armature, animationState, timelineData);
            this._valueOffset = this._animationData.frameIntOffset;
            this._valueScale = 0.0001;
            this._valueArray = this._animationData.parent.parent.frameIntArray;
        }
    }
    dragonBones.AnimationParametersTimelineState = AnimationParametersTimelineState;
})(dragonBones || (dragonBones = {}));
