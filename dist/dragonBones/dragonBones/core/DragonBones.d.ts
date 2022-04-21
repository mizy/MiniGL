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
    const enum BinaryOffset {
        WeigthBoneCount = 0,
        WeigthFloatOffset = 1,
        WeigthBoneIndices = 2,
        GeometryVertexCount = 0,
        GeometryTriangleCount = 1,
        GeometryFloatOffset = 2,
        GeometryWeightOffset = 3,
        GeometryVertexIndices = 4,
        TimelineScale = 0,
        TimelineOffset = 1,
        TimelineKeyFrameCount = 2,
        TimelineFrameValueCount = 3,
        TimelineFrameValueOffset = 4,
        TimelineFrameOffset = 5,
        FramePosition = 0,
        FrameTweenType = 1,
        FrameTweenEasingOrCurveSampleCount = 2,
        FrameCurveSamples = 3,
        DeformVertexOffset = 0,
        DeformCount = 1,
        DeformValueCount = 2,
        DeformValueOffset = 3,
        DeformFloatOffset = 4
    }
    /**
     * @private
     */
    const enum ArmatureType {
        Armature = 0,
        MovieClip = 1,
        Stage = 2
    }
    /**
     * @private
     */
    const enum BoneType {
        Bone = 0,
        Surface = 1
    }
    /**
     * @private
     */
    const enum DisplayType {
        Image = 0,
        Armature = 1,
        Mesh = 2,
        BoundingBox = 3,
        Path = 4
    }
    /**
     * - Bounding box type.
     * @version DragonBones 5.0
     * @language en_US
     */
    /**
     * - 边界框类型。
     * @version DragonBones 5.0
     * @language zh_CN
     */
    const enum BoundingBoxType {
        Rectangle = 0,
        Ellipse = 1,
        Polygon = 2
    }
    /**
     * @private
     */
    const enum ActionType {
        Play = 0,
        Frame = 10,
        Sound = 11
    }
    /**
     * @private
     */
    const enum BlendMode {
        Normal = 0,
        Add = 1,
        Alpha = 2,
        Darken = 3,
        Difference = 4,
        Erase = 5,
        HardLight = 6,
        Invert = 7,
        Layer = 8,
        Lighten = 9,
        Multiply = 10,
        Overlay = 11,
        Screen = 12,
        Subtract = 13
    }
    /**
     * @private
     */
    const enum TweenType {
        None = 0,
        Line = 1,
        Curve = 2,
        QuadIn = 3,
        QuadOut = 4,
        QuadInOut = 5
    }
    /**
     * @private
     */
    const enum TimelineType {
        Action = 0,
        ZOrder = 1,
        BoneAll = 10,
        BoneTranslate = 11,
        BoneRotate = 12,
        BoneScale = 13,
        Surface = 50,
        BoneAlpha = 60,
        SlotDisplay = 20,
        SlotColor = 21,
        SlotDeform = 22,
        SlotZIndex = 23,
        SlotAlpha = 24,
        IKConstraint = 30,
        AnimationProgress = 40,
        AnimationWeight = 41,
        AnimationParameter = 42
    }
    /**
     * - Offset mode.
     * @version DragonBones 5.5
     * @language en_US
     */
    /**
     * - 偏移模式。
     * @version DragonBones 5.5
     * @language zh_CN
     */
    const enum OffsetMode {
        None = 0,
        Additive = 1,
        Override = 2
    }
    /**
     * - Animation fade out mode.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - 动画淡出模式。
     * @version DragonBones 4.5
     * @language zh_CN
     */
    const enum AnimationFadeOutMode {
        /**
         * - Fade out the animation states of the same layer.
         * @language en_US
         */
        /**
         * - 淡出同层的动画状态。
         * @language zh_CN
         */
        SameLayer = 1,
        /**
         * - Fade out the animation states of the same group.
         * @language en_US
         */
        /**
         * - 淡出同组的动画状态。
         * @language zh_CN
         */
        SameGroup = 2,
        /**
         * - Fade out the animation states of the same layer and group.
         * @language en_US
         */
        /**
         * - 淡出同层并且同组的动画状态。
         * @language zh_CN
         */
        SameLayerAndGroup = 3,
        /**
         * - Fade out of all animation states.
         * @language en_US
         */
        /**
         * - 淡出所有的动画状态。
         * @language zh_CN
         */
        All = 4,
        /**
         * - Does not replace the animation state with the same name.
         * @language en_US
         */
        /**
         * - 不替换同名的动画状态。
         * @language zh_CN
         */
        Single = 5
    }
    /**
     * @private
     */
    const enum AnimationBlendType {
        None = 0,
        E1D = 1
    }
    /**
     * @private
     */
    const enum AnimationBlendMode {
        Additive = 0,
        Override = 1
    }
    /**
     * @private
     */
    const enum ConstraintType {
        IK = 0,
        Path = 1
    }
    /**
     * @private
     */
    const enum PositionMode {
        Fixed = 0,
        Percent = 1
    }
    /**
     * @private
     */
    const enum SpacingMode {
        Length = 0,
        Fixed = 1,
        Percent = 2
    }
    /**
     * @private
     */
    const enum RotateMode {
        Tangent = 0,
        Chain = 1,
        ChainScale = 2
    }
    /**
     * @private
     */
    interface Map<T> {
        [key: string]: T;
    }
    /**
     * @private
     */
    class DragonBones {
        static readonly VERSION: string;
        static yDown: boolean;
        static debug: boolean;
        static debugDraw: boolean;
        private readonly _clock;
        private readonly _events;
        private readonly _objects;
        private _eventManager;
        constructor(eventManager: IEventDispatcher);
        advanceTime(passedTime: number): void;
        bufferEvent(value: EventObject): void;
        bufferObject(object: BaseObject): void;
        get clock(): WorldClock;
        get eventManager(): IEventDispatcher;
    }
}
declare var __extends: any;
declare var exports: any;
declare var define: any;
