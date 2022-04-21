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
     * - The skin data, typically a armature data instance contains at least one skinData.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - 皮肤数据，通常一个骨架数据至少包含一个皮肤数据。
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class SkinData extends BaseObject {
        static toString(): string;
        /**
         * - The skin name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - 皮肤名称。
         * @version DragonBones 3.0
         * @language zh_CN
         */
        name: string;
        /**
         * @private
         */
        readonly displays: Map<Array<DisplayData | null>>;
        /**
         * @private
         */
        parent: ArmatureData;
        protected _onClear(): void;
        /**
         * @internal
         */
        addDisplay(slotName: string, value: DisplayData | null): void;
        /**
         * @private
         */
        getDisplay(slotName: string, displayName: string): DisplayData | null;
        /**
         * @private
         */
        getDisplays(slotName: string): Array<DisplayData | null> | null;
    }
}
