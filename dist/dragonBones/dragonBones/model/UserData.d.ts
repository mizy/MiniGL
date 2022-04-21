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
     * - The user custom data.
     * @version DragonBones 5.0
     * @language en_US
     */
    /**
     * - 用户自定义数据。
     * @version DragonBones 5.0
     * @language zh_CN
     */
    class UserData extends BaseObject {
        static toString(): string;
        /**
         * - The custom int numbers.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - 自定义整数。
         * @version DragonBones 5.0
         * @language zh_CN
         */
        readonly ints: Array<number>;
        /**
         * - The custom float numbers.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - 自定义浮点数。
         * @version DragonBones 5.0
         * @language zh_CN
         */
        readonly floats: Array<number>;
        /**
         * - The custom strings.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - 自定义字符串。
         * @version DragonBones 5.0
         * @language zh_CN
         */
        readonly strings: Array<string>;
        protected _onClear(): void;
        /**
         * @internal
         */
        addInt(value: number): void;
        /**
         * @internal
         */
        addFloat(value: number): void;
        /**
         * @internal
         */
        addString(value: string): void;
        /**
         * - Get the custom int number.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - 获取自定义整数。
         * @version DragonBones 5.0
         * @language zh_CN
         */
        getInt(index?: number): number;
        /**
         * - Get the custom float number.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - 获取自定义浮点数。
         * @version DragonBones 5.0
         * @language zh_CN
         */
        getFloat(index?: number): number;
        /**
         * - Get the custom string.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - 获取自定义字符串。
         * @version DragonBones 5.0
         * @language zh_CN
         */
        getString(index?: number): string;
    }
    /**
     * @private
     */
    class ActionData extends BaseObject {
        static toString(): string;
        type: ActionType;
        name: string;
        bone: BoneData | null;
        slot: SlotData | null;
        data: UserData | null;
        protected _onClear(): void;
    }
}
