import BaseMesh, { BaseMeshConfig } from '../Mesh/BaseMesh';
import MiniGL from '..';
/**
 * 进行批量渲染
 * @class
 */
declare class Group extends BaseMesh {
    depthMask: boolean;
    depthTest: boolean;
    transparent: boolean;
    children: (BaseMesh | Group)[];
    childId: number;
    static dispose: any;
    constructor(config?: BaseMeshConfig);
    dispose(): void;
    onAdd(miniGL: MiniGL): void;
    addChild(child: BaseMesh): void;
    addChildAt(child: BaseMesh, index: number): void;
    removeChild(child: BaseMesh): void;
    swapChildren(a: BaseMesh, b: BaseMesh): void;
}
export default Group;
