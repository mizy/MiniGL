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
     * - The DragonBones data.
     * A DragonBones data contains multiple armature data.
     * @see dragonBones.ArmatureData
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - 龙骨数据。
     * 一个龙骨数据包含多个骨架数据。
     * @see dragonBones.ArmatureData
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class DragonBonesData extends BaseObject {
        static toString(): string;
        /**
         * @private
         */
        autoSearch: boolean;
        /**
         * - The animation frame rate.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 动画帧频。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        frameRate: number;
        /**
         * - The data version.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 数据版本。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        version: string;
        /**
         * - The DragonBones data name.
         * The name is consistent with the DragonBones project name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 龙骨数据名称。
         * 该名称与龙骨项目名保持一致。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        name: string;
        /**
         * @private
         */
        stage: ArmatureData | null;
        /**
         * @internal
         */
        readonly frameIndices: Array<number>;
        /**
         * @internal
         */
        readonly cachedFrames: Array<number>;
        /**
         * - All armature data names.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 所有的骨架数据名称。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly armatureNames: Array<string>;
        /**
         * @private
         */
        readonly armatures: Map<ArmatureData>;
        /**
         * @internal
         */
        binary: ArrayBuffer;
        /**
         * @internal
         */
        intArray: Int16Array;
        /**
         * @internal
         */
        floatArray: Float32Array;
        /**
         * @internal
         */
        frameIntArray: Int16Array;
        /**
         * @internal
         */
        frameFloatArray: Float32Array;
        /**
         * @internal
         */
        frameArray: Int16Array;
        /**
         * @internal
         */
        timelineArray: Uint16Array;
        /**
         * @internal
         */
        colorArray: Int16Array | Uint16Array;
        /**
         * @private
         */
        userData: UserData | null;
        protected _onClear(): void;
        /**
         * @internal
         */
        addArmature(value: ArmatureData): void;
        /**
         * - Get a specific armature data.
         * @param armatureName - The armature data name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 获取特定的骨架数据。
         * @param armatureName - 骨架数据名称。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getArmature(armatureName: string): ArmatureData | null;
    }
}
