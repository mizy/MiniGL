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
     * - The properties of the object carry basic information about an event,
     * which are passed as parameter or parameter's parameter to event listeners when an event occurs.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - 事件对象，包含有关事件的基本信息，当发生事件时，该实例将作为参数或参数的参数传递给事件侦听器。
     * @version DragonBones 4.5
     * @language zh_CN
     */
    class EventObject extends dragonBones.BaseObject {
        /**
         * @internal
         * @private
         */
        static actionDataToInstance(data, instance, armature) {
            if (data.type === 0 /* Play */) {
                instance.type = EventObject.FRAME_EVENT;
            }
            else {
                instance.type = data.type === 10 /* Frame */ ? EventObject.FRAME_EVENT : EventObject.SOUND_EVENT;
            }
            instance.name = data.name;
            instance.armature = armature;
            instance.actionData = data;
            instance.data = data.data;
            if (data.bone !== null) {
                instance.bone = armature.getBone(data.bone.name);
            }
            if (data.slot !== null) {
                instance.slot = armature.getSlot(data.slot.name);
            }
        }
        static toString() {
            return "[class dragonBones.EventObject]";
        }
        _onClear() {
            this.time = 0.0;
            this.type = "";
            this.name = "";
            this.armature = null;
            this.bone = null;
            this.slot = null;
            this.animationState = null;
            this.actionData = null;
            this.data = null;
        }
    }
    /**
     * - Animation start play.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - 动画开始播放。
     * @version DragonBones 4.5
     * @language zh_CN
     */
    EventObject.START = "start";
    /**
     * - Animation loop play complete once.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - 动画循环播放完成一次。
     * @version DragonBones 4.5
     * @language zh_CN
     */
    EventObject.LOOP_COMPLETE = "loopComplete";
    /**
     * - Animation play complete.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - 动画播放完成。
     * @version DragonBones 4.5
     * @language zh_CN
     */
    EventObject.COMPLETE = "complete";
    /**
     * - Animation fade in start.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - 动画淡入开始。
     * @version DragonBones 4.5
     * @language zh_CN
     */
    EventObject.FADE_IN = "fadeIn";
    /**
     * - Animation fade in complete.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - 动画淡入完成。
     * @version DragonBones 4.5
     * @language zh_CN
     */
    EventObject.FADE_IN_COMPLETE = "fadeInComplete";
    /**
     * - Animation fade out start.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - 动画淡出开始。
     * @version DragonBones 4.5
     * @language zh_CN
     */
    EventObject.FADE_OUT = "fadeOut";
    /**
     * - Animation fade out complete.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - 动画淡出完成。
     * @version DragonBones 4.5
     * @language zh_CN
     */
    EventObject.FADE_OUT_COMPLETE = "fadeOutComplete";
    /**
     * - Animation frame event.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - 动画帧事件。
     * @version DragonBones 4.5
     * @language zh_CN
     */
    EventObject.FRAME_EVENT = "frameEvent";
    /**
     * - Animation frame sound event.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - 动画帧声音事件。
     * @version DragonBones 4.5
     * @language zh_CN
     */
    EventObject.SOUND_EVENT = "soundEvent";
    dragonBones.EventObject = EventObject;
})(dragonBones || (dragonBones = {}));
