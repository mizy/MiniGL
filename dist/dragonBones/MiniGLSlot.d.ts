/**
 * 骨骼插槽
 * @class
 */
declare class MiniGLSlot extends dragonBones.Slot {
    private _armatureDisplay;
    private _renderDisplay;
    private _colorFilter;
    _onClear(): void;
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
    _updateMesh(): void;
    _identityTransform(): void;
    _updateTransform(): void;
}
export default MiniGLSlot;
