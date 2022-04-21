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
     * - Worldclock provides clock support for animations, advance time for each IAnimatable object added to the instance.
     * @see dragonBones.IAnimateble
     * @see dragonBones.Armature
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - WorldClock 对动画提供时钟支持，为每个加入到该实例的 IAnimatable 对象更新时间。
     * @see dragonBones.IAnimateble
     * @see dragonBones.Armature
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class WorldClock implements IAnimatable {
        /**
         * - Current time. (In seconds)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 当前的时间。 (以秒为单位)
         * @version DragonBones 3.0
         * @language zh_CN
         */
        time: number;
        /**
         * - The play speed, used to control animation speed-shift play.
         * [0: Stop play, (0~1): Slow play, 1: Normal play, (1~N): Fast play]
         * @default 1.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 播放速度，用于控制动画变速播放。
         * [0: 停止播放, (0~1): 慢速播放, 1: 正常播放, (1~N): 快速播放]
         * @default 1.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        timeScale: number;
        private _systemTime;
        private readonly _animatebles;
        private _clock;
        /**
         * - Creating a Worldclock instance. Typically, you do not need to create Worldclock instance.
         * When multiple Worldclock instances are running at different speeds, can achieving some specific animation effects, such as bullet time.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 创建一个 WorldClock 实例。通常并不需要创建 WorldClock 实例。
         * 当多个 WorldClock 实例使用不同的速度运行时，可以实现一些特殊的动画效果，比如子弹时间等。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        constructor(time?: number);
        /**
         * - Advance time for all IAnimatable instances.
         * @param passedTime - Passed time. [-1: Automatically calculates the time difference between the current frame and the previous frame, [0~N): Passed time] (In seconds)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 为所有的 IAnimatable 实例更新时间。
         * @param passedTime - 前进的时间。 [-1: 自动计算当前帧与上一帧的时间差, [0~N): 前进的时间] (以秒为单位)
         * @version DragonBones 3.0
         * @language zh_CN
         */
        advanceTime(passedTime: number): void;
        /**
         * - Check whether contains a specific instance of IAnimatable.
         * @param value - The IAnimatable instance.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 检查是否包含特定的 IAnimatable 实例。
         * @param value - IAnimatable 实例。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        contains(value: IAnimatable): boolean;
        /**
         * - Add IAnimatable instance.
         * @param value - The IAnimatable instance.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 添加 IAnimatable 实例。
         * @param value - IAnimatable 实例。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        add(value: IAnimatable): void;
        /**
         * - Removes a specified IAnimatable instance.
         * @param value - The IAnimatable instance.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 移除特定的 IAnimatable 实例。
         * @param value - IAnimatable 实例。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        remove(value: IAnimatable): void;
        /**
         * - Clear all IAnimatable instances.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 清除所有的 IAnimatable 实例。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        clear(): void;
        /**
         * @inheritDoc
         */
        get clock(): WorldClock | null;
        set clock(value: WorldClock | null);
    }
}
