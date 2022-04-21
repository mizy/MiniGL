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
    const enum FrameValueType {
        Step = 0,
        Int = 1,
        Float = 2
    }
    /**
     * @private
     */
    class ObjectDataParser extends DataParser {
        protected static _getBoolean(rawData: any, key: string, defaultValue: boolean): boolean;
        protected static _getNumber(rawData: any, key: string, defaultValue: number): number;
        protected static _getString(rawData: any, key: string, defaultValue: string): string;
        protected _rawTextureAtlasIndex: number;
        protected readonly _rawBones: Array<BoneData>;
        protected _data: DragonBonesData;
        protected _armature: ArmatureData;
        protected _bone: BoneData;
        protected _geometry: GeometryData;
        protected _slot: SlotData;
        protected _skin: SkinData;
        protected _mesh: MeshDisplayData;
        protected _animation: AnimationData;
        protected _timeline: TimelineData;
        protected _rawTextureAtlases: Array<any> | null;
        private _frameValueType;
        private _defaultColorOffset;
        private _prevClockwise;
        private _prevRotation;
        private _frameDefaultValue;
        private _frameValueScale;
        private readonly _helpMatrixA;
        private readonly _helpMatrixB;
        private readonly _helpTransform;
        private readonly _helpColorTransform;
        private readonly _helpPoint;
        private readonly _helpArray;
        private readonly _intArray;
        private readonly _floatArray;
        private readonly _frameIntArray;
        private readonly _frameFloatArray;
        private readonly _frameArray;
        private readonly _timelineArray;
        private readonly _colorArray;
        private readonly _cacheRawMeshes;
        private readonly _cacheMeshes;
        private readonly _actionFrames;
        private readonly _weightSlotPose;
        private readonly _weightBonePoses;
        private readonly _cacheBones;
        private readonly _slotChildActions;
        private _getCurvePoint;
        private _samplingEasingCurve;
        private _parseActionDataInFrame;
        private _mergeActionFrame;
        protected _parseArmature(rawData: any, scale: number): ArmatureData;
        protected _parseBone(rawData: any): BoneData;
        protected _parseIKConstraint(rawData: any): ConstraintData | null;
        protected _parsePathConstraint(rawData: any): ConstraintData | null;
        protected _parseSlot(rawData: any, zOrder: number): SlotData;
        protected _parseSkin(rawData: any): SkinData;
        protected _parseDisplay(rawData: any): DisplayData | null;
        protected _parsePath(rawData: any, display: PathDisplayData): void;
        protected _parsePivot(rawData: any, display: ImageDisplayData): void;
        protected _parseMesh(rawData: any, mesh: MeshDisplayData): void;
        protected _parseBoundingBox(rawData: any): BoundingBoxData | null;
        protected _parsePolygonBoundingBox(rawData: any): PolygonBoundingBoxData;
        protected _parseAnimation(rawData: any): AnimationData;
        protected _parseTimeline(rawData: any, rawFrames: Array<any> | null, framesKey: string, timelineType: TimelineType, frameValueType: FrameValueType, frameValueCount: number, frameParser: (rawData: any, frameStart: number, frameCount: number) => number, timeline?: TimelineData | null): TimelineData | null;
        protected _parseBoneTimeline(rawData: any): void;
        protected _parseSlotTimeline(rawData: any): void;
        protected _parseFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseTweenFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseSingleValueFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseDoubleValueFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseActionFrame(frame: ActionFrame, frameStart: number, frameCount: number): number;
        protected _parseZOrderFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseBoneAllFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseBoneTranslateFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseBoneRotateFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseBoneScaleFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseSlotDisplayFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseSlotColorFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseSlotDeformFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseIKConstraintFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseActionData(rawData: any, type: ActionType, bone: BoneData | null, slot: SlotData | null): Array<ActionData>;
        protected _parseDeformFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseTransform(rawData: any, transform: Transform, scale: number): void;
        protected _parseColorTransform(rawData: any, color: ColorTransform): void;
        protected _parseGeometry(rawData: any, geometry: GeometryData): void;
        protected _parseArray(rawData: any): void;
        protected _modifyArray(): void;
        parseDragonBonesData(rawData: any, scale?: number): DragonBonesData | null;
        parseTextureAtlasData(rawData: any, textureAtlasData: TextureAtlasData, scale?: number): boolean;
        private static _objectDataParserInstance;
        /**
         * - Deprecated, please refer to {@link dragonBones.BaseFactory#parseDragonBonesData()}.
         * @deprecated
         * @language en_US
         */
        /**
         * - 已废弃，请参考 {@link dragonBones.BaseFactory#parseDragonBonesData()}。
         * @deprecated
         * @language zh_CN
         */
        static getInstance(): ObjectDataParser;
    }
    /**
     * @private
     */
    class ActionFrame {
        frameStart: number;
        readonly actions: Array<number>;
    }
}
