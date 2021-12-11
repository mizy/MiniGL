export default MiniGLSlot;
declare const MiniGLSlot_base: any;
/**
 * 骨骼插槽
 * @class
 */
declare class MiniGLSlot extends MiniGLSlot_base {
    [x: string]: any;
    _onClear(): void;
    _armatureDisplay: any;
    _renderDisplay: any;
    _colorFilter: any;
    _initDisplay(value: any, isRetain: any): void;
    _disposeDisplay(value: any, isRelease: any): void;
    _onUpdateDisplay(): void;
    _addDisplay(): void;
    _replaceDisplay(value: any): void;
    _removeDisplay(): void;
    _updateZOrder(): void;
    _updateVisible(): void;
    _updateBlendMode(): void;
    _updateColor(): void;
    _updateFrame(): void;
    _visibleDirty: boolean;
    _updateMesh(): void;
    _identityTransform(): void;
    _updateTransform(): void;
}
declare namespace MiniGLSlot {
    function toString(): string;
}
