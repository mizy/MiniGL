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
    class GeometryData {
        isShared: boolean;
        inheritDeform: boolean;
        offset: number;
        data: DragonBonesData;
        weight: WeightData | null;
        clear(): void;
        shareFrom(value: GeometryData): void;
        get vertexCount(): number;
        get triangleCount(): number;
    }
    /**
     * @private
     */
    abstract class DisplayData extends BaseObject {
        type: DisplayType;
        name: string;
        path: string;
        readonly transform: Transform;
        parent: SkinData;
        protected _onClear(): void;
    }
    /**
     * @private
     */
    class ImageDisplayData extends DisplayData {
        static toString(): string;
        readonly pivot: Point;
        texture: TextureData | null;
        protected _onClear(): void;
    }
    /**
     * @private
     */
    class ArmatureDisplayData extends DisplayData {
        static toString(): string;
        inheritAnimation: boolean;
        readonly actions: Array<ActionData>;
        armature: ArmatureData | null;
        protected _onClear(): void;
        /**
         * @private
         */
        addAction(value: ActionData): void;
    }
    /**
     * @private
     */
    class MeshDisplayData extends DisplayData {
        static toString(): string;
        readonly geometry: GeometryData;
        texture: TextureData | null;
        protected _onClear(): void;
    }
    /**
     * @private
     */
    class BoundingBoxDisplayData extends DisplayData {
        static toString(): string;
        boundingBox: BoundingBoxData | null;
        protected _onClear(): void;
    }
    /**
     * @private
     */
    class PathDisplayData extends DisplayData {
        static toString(): string;
        closed: boolean;
        constantSpeed: boolean;
        readonly geometry: GeometryData;
        readonly curveLengths: Array<number>;
        protected _onClear(): void;
    }
    /**
     * @private
     */
    class WeightData extends BaseObject {
        static toString(): string;
        count: number;
        offset: number;
        readonly bones: Array<BoneData>;
        protected _onClear(): void;
        addBone(value: BoneData): void;
    }
}
