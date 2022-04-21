import { BaseMeshConfig } from '../BaseMesh';
import InstanceMesh from '../InstanceMesh';
import { PointData } from '../Mesh';
interface InstanceData {
    instanceOffset: PointData[];
    instanceColor: PointData[];
}
/**
 * @class
 */
declare class Arrow extends InstanceMesh {
    arrowInstanceData: InstanceData[];
    constructor(config?: BaseMeshConfig);
    setData(data: PointData[], indices: number[]): void;
    afterAdd(): void;
    setArrowInstanceData(instanceData: InstanceData[]): void;
    render(): void;
}
export default Arrow;
