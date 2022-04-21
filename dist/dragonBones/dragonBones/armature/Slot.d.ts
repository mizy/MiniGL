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
    class DisplayFrame extends BaseObject {
        static toString(): string;
        rawDisplayData: DisplayData | null;
        displayData: DisplayData | null;
        textureData: TextureData | null;
        display: any | Armature | null;
        readonly deformVertices: Array<number>;
        protected _onClear(): void;
        updateDeformVertices(): void;
        getGeometryData(): GeometryData | null;
        getBoundingBox(): BoundingBoxData | null;
        getTextureData(): TextureData | null;
    }
    /**
     * - The slot attached to the armature, controls the display status and properties of the display object.
     * A bone can contain multiple slots.
     * A slot can contain multiple display objects, displaying only one of the display objects at a time,
     * but you can toggle the display object into frame animation while the animation is playing.
     * The display object can be a normal texture, or it can be a display of a child armature, a grid display object,
     * and a custom other display object.
     * @see dragonBones.Armature
     * @see dragonBones.Bone
     * @see dragonBones.SlotData
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - 插槽附着在骨骼上，控制显示对象的显示状态和属性。
     * 一个骨骼上可以包含多个插槽。
     * 一个插槽中可以包含多个显示对象，同一时间只能显示其中的一个显示对象，但可以在动画播放的过程中切换显示对象实现帧动画。
     * 显示对象可以是普通的图片纹理，也可以是子骨架的显示容器，网格显示对象，还可以是自定义的其他显示对象。
     * @see dragonBones.Armature
     * @see dragonBones.Bone
     * @see dragonBones.SlotData
     * @version DragonBones 3.0
     * @language zh_CN
     */
    abstract class Slot extends TransformObject {
        /**
         * - Displays the animated state or mixed group name controlled by the object, set to null to be controlled by all animation states.
         * @default null
         * @see dragonBones.AnimationState#displayControl
         * @see dragonBones.AnimationState#name
         * @see dragonBones.AnimationState#group
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - 显示对象受到控制的动画状态或混合组名称，设置为 null 则表示受所有的动画状态控制。
         * @default null
         * @see dragonBones.AnimationState#displayControl
         * @see dragonBones.AnimationState#name
         * @see dragonBones.AnimationState#group
         * @version DragonBones 4.5
         * @language zh_CN
         */
        displayController: string | null;
        protected _displayDataDirty: boolean;
        protected _displayDirty: boolean;
        protected _geometryDirty: boolean;
        protected _textureDirty: boolean;
        protected _visibleDirty: boolean;
        protected _blendModeDirty: boolean;
        protected _zOrderDirty: boolean;
        /**
         * @internal
         */
        _colorDirty: boolean;
        /**
         * @internal
         */
        _verticesDirty: boolean;
        protected _transformDirty: boolean;
        protected _visible: boolean;
        protected _blendMode: BlendMode;
        protected _displayIndex: number;
        protected _animationDisplayIndex: number;
        protected _cachedFrameIndex: number;
        /**
         * @internal
         */
        _zOrder: number;
        /**
         * @internal
         */
        _zIndex: number;
        /**
         * @internal
         */
        _pivotX: number;
        /**
         * @internal
         */
        _pivotY: number;
        protected readonly _localMatrix: Matrix;
        /**
         * @internal
         */
        readonly _colorTransform: ColorTransform;
        /**
         * @internal
         */
        readonly _displayFrames: Array<DisplayFrame>;
        /**
         * @internal
         */
        readonly _geometryBones: Array<Bone | null>;
        /**
         * @internal
         */
        _slotData: SlotData;
        /**
         * @internal
         */
        _displayFrame: DisplayFrame | null;
        /**
         * @internal
         */
        _geometryData: GeometryData | null;
        protected _boundingBoxData: BoundingBoxData | null;
        protected _textureData: TextureData | null;
        protected _rawDisplay: any;
        protected _meshDisplay: any;
        protected _display: any | null;
        protected _childArmature: Armature | null;
        /**
         * @private
         */
        protected _parent: Bone;
        /**
         * @internal
         */
        _cachedFrameIndices: Array<number> | null;
        protected _onClear(): void;
        protected abstract _initDisplay(value: any, isRetain: boolean): void;
        protected abstract _disposeDisplay(value: any, isRelease: boolean): void;
        protected abstract _onUpdateDisplay(): void;
        protected abstract _addDisplay(): void;
        protected abstract _replaceDisplay(value: any): void;
        protected abstract _removeDisplay(): void;
        protected abstract _updateZOrder(): void;
        /**
         * @internal
         */
        abstract _updateVisible(): void;
        protected abstract _updateBlendMode(): void;
        protected abstract _updateColor(): void;
        protected abstract _updateFrame(): void;
        protected abstract _updateMesh(): void;
        protected abstract _updateTransform(): void;
        protected abstract _identityTransform(): void;
        protected _hasDisplay(display: any): boolean;
        /**
         * @internal
         */
        _isBonesUpdate(): boolean;
        /**
         * @internal
         */
        _updateAlpha(): void;
        protected _updateDisplayData(): void;
        protected _updateDisplay(): void;
        protected _updateGlobalTransformMatrix(isCache: boolean): void;
        /**
         * @internal
         */
        _setDisplayIndex(value: number, isAnimation?: boolean): void;
        /**
         * @internal
         */
        _setZOrder(value: number): boolean;
        /**
         * @internal
         */
        _setColor(value: ColorTransform): boolean;
        /**
         * @internal
         */
        init(slotData: SlotData, armatureValue: Armature, rawDisplay: any, meshDisplay: any): void;
        /**
         * @internal
         */
        update(cacheFrameIndex: number): void;
        /**
         * - Forces the slot to update the state of the display object in the next frame.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - 强制插槽在下一帧更新显示对象的状态。
         * @version DragonBones 4.5
         * @language zh_CN
         */
        invalidUpdate(): void;
        /**
         * @private
         */
        updateTransformAndMatrix(): void;
        /**
         * @private
         */
        replaceRawDisplayData(displayData: DisplayData | null, index?: number): void;
        /**
         * @private
         */
        replaceDisplayData(displayData: DisplayData | null, index?: number): void;
        /**
         * @private
         */
        replaceTextureData(textureData: TextureData | null, index?: number): void;
        /**
         * @private
         */
        replaceDisplay(value: any | Armature | null, index?: number): void;
        /**
         * - Check whether a specific point is inside a custom bounding box in the slot.
         * The coordinate system of the point is the inner coordinate system of the armature.
         * Custom bounding boxes need to be customized in Dragonbones Pro.
         * @param x - The horizontal coordinate of the point.
         * @param y - The vertical coordinate of the point.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - 检查特定点是否在插槽的自定义边界框内。
         * 点的坐标系为骨架内坐标系。
         * 自定义边界框需要在 DragonBones Pro 中自定义。
         * @param x - 点的水平坐标。
         * @param y - 点的垂直坐标。
         * @version DragonBones 5.0
         * @language zh_CN
         */
        containsPoint(x: number, y: number): boolean;
        /**
         * - Check whether a specific segment intersects a custom bounding box for the slot.
         * The coordinate system of the segment and intersection is the inner coordinate system of the armature.
         * Custom bounding boxes need to be customized in Dragonbones Pro.
         * @param xA - The horizontal coordinate of the beginning of the segment.
         * @param yA - The vertical coordinate of the beginning of the segment.
         * @param xB - The horizontal coordinate of the end point of the segment.
         * @param yB - The vertical coordinate of the end point of the segment.
         * @param intersectionPointA - The first intersection at which a line segment intersects the bounding box from the beginning to the end. (If not set, the intersection point will not calculated)
         * @param intersectionPointB - The first intersection at which a line segment intersects the bounding box from the end to the beginning. (If not set, the intersection point will not calculated)
         * @param normalRadians - The normal radians of the tangent of the intersection boundary box. [x: Normal radian of the first intersection tangent, y: Normal radian of the second intersection tangent] (If not set, the normal will not calculated)
         * @returns Intersection situation. [1: Disjoint and segments within the bounding box, 0: Disjoint, 1: Intersecting and having a nodal point and ending in the bounding box, 2: Intersecting and having a nodal point and starting at the bounding box, 3: Intersecting and having two intersections, N: Intersecting and having N intersections]
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - 检查特定线段是否与插槽的自定义边界框相交。
         * 线段和交点的坐标系均为骨架内坐标系。
         * 自定义边界框需要在 DragonBones Pro 中自定义。
         * @param xA - 线段起点的水平坐标。
         * @param yA - 线段起点的垂直坐标。
         * @param xB - 线段终点的水平坐标。
         * @param yB - 线段终点的垂直坐标。
         * @param intersectionPointA - 线段从起点到终点与边界框相交的第一个交点。 （如果未设置，则不计算交点）
         * @param intersectionPointB - 线段从终点到起点与边界框相交的第一个交点。 （如果未设置，则不计算交点）
         * @param normalRadians - 交点边界框切线的法线弧度。 [x: 第一个交点切线的法线弧度, y: 第二个交点切线的法线弧度] （如果未设置，则不计算法线）
         * @returns 相交的情况。 [-1: 不相交且线段在包围盒内, 0: 不相交, 1: 相交且有一个交点且终点在包围盒内, 2: 相交且有一个交点且起点在包围盒内, 3: 相交且有两个交点, N: 相交且有 N 个交点]
         * @version DragonBones 5.0
         * @language zh_CN
         */
        intersectsSegment(xA: number, yA: number, xB: number, yB: number, intersectionPointA?: {
            x: number;
            y: number;
        } | null, intersectionPointB?: {
            x: number;
            y: number;
        } | null, normalRadians?: {
            x: number;
            y: number;
        } | null): number;
        /**
         * @private
         */
        getDisplayFrameAt(index: number): DisplayFrame;
        /**
         * - The visible of slot's display object.
         * @default true
         * @version DragonBones 5.6
         * @language en_US
         */
        /**
         * - 插槽的显示对象的可见。
         * @default true
         * @version DragonBones 5.6
         * @language zh_CN
         */
        get visible(): boolean;
        set visible(value: boolean);
        /**
         * @private
         */
        get displayFrameCount(): number;
        set displayFrameCount(value: number);
        /**
         * - The index of the display object displayed in the display list.
         * @example
         * <pre>
         *     let slot = armature.getSlot("weapon");
         *     slot.displayIndex = 3;
         *     slot.displayController = "none";
         * </pre>
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - 此时显示的显示对象在显示列表中的索引。
         * @example
         * <pre>
         *     let slot = armature.getSlot("weapon");
         *     slot.displayIndex = 3;
         *     slot.displayController = "none";
         * </pre>
         * @version DragonBones 4.5
         * @language zh_CN
         */
        get displayIndex(): number;
        set displayIndex(value: number);
        /**
         * - The slot name.
         * @see dragonBones.SlotData#name
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 插槽名称。
         * @see dragonBones.SlotData#name
         * @version DragonBones 3.0
         * @language zh_CN
         */
        get name(): string;
        /**
         * - Contains a display list of display objects or child armatures.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 包含显示对象或子骨架的显示列表。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        get displayList(): Array<any>;
        set displayList(value: Array<any>);
        /**
         * - The slot data.
         * @see dragonBones.SlotData
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - 插槽数据。
         * @see dragonBones.SlotData
         * @version DragonBones 4.5
         * @language zh_CN
         */
        get slotData(): SlotData;
        /**
         * - The custom bounding box data for the slot at current time.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - 插槽此时的自定义包围盒数据。
         * @version DragonBones 5.0
         * @language zh_CN
         */
        get boundingBoxData(): BoundingBoxData | null;
        /**
         * @private
         */
        get rawDisplay(): any;
        /**
         * @private
         */
        get meshDisplay(): any;
        /**
         * - The display object that the slot displays at this time.
         * @example
         * <pre>
         *     let slot = armature.getSlot("text");
         *     slot.display = new yourEngine.TextField();
         * </pre>
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 插槽此时显示的显示对象。
         * @example
         * <pre>
         *     let slot = armature.getSlot("text");
         *     slot.display = new yourEngine.TextField();
         * </pre>
         * @version DragonBones 3.0
         * @language zh_CN
         */
        get display(): any;
        set display(value: any);
        /**
         * - The child armature that the slot displayed at current time.
         * @example
         * <pre>
         *     let slot = armature.getSlot("weapon");
         *     let prevChildArmature = slot.childArmature;
         *     if (prevChildArmature) {
         *         prevChildArmature.dispose();
         *     }
         *     slot.childArmature = factory.buildArmature("weapon_blabla", "weapon_blabla_project");
         * </pre>
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 插槽此时显示的子骨架。
         * 注意，被替换的对象或子骨架并不会被回收，根据语言和引擎的不同，需要额外处理。
         * @example
         * <pre>
         *     let slot = armature.getSlot("weapon");
         *     let prevChildArmature = slot.childArmature;
         *     if (prevChildArmature) {
         *         prevChildArmature.dispose();
         *     }
         *     slot.childArmature = factory.buildArmature("weapon_blabla", "weapon_blabla_project");
         * </pre>
         * @version DragonBones 3.0
         * @language zh_CN
         */
        get childArmature(): Armature | null;
        set childArmature(value: Armature | null);
        /**
         * - The parent bone to which it belongs.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 所属的父骨骼。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        get parent(): Bone;
        /**
         * - Deprecated, please refer to {@link #display}.
         * @deprecated
         * @language en_US
         */
        /**
         * - 已废弃，请参考 {@link #display}。
         * @deprecated
         * @language zh_CN
         */
        getDisplay(): any;
        /**
         * - Deprecated, please refer to {@link #display}.
         * @deprecated
         * @language en_US
         */
        /**
         * - 已废弃，请参考 {@link #display}。
         * @deprecated
         * @language zh_CN
         */
        setDisplay(value: any): void;
    }
}
