import Base, { BaseMeshConfig } from './BaseMesh';
import { PointData } from './Mesh';
declare class InstanceMesh extends Base {
    drawType: string;
    offset: number;
    data: PointData[];
    instanceData: PointData[][];
    constructor(config?: BaseMeshConfig);
    setMap(src: string): Promise<void>;
    setData(data: PointData[], indices: number[]): void;
    setBufferDatas({ position, color, indices, uvs }: {
        position: number[];
        color: number[];
        indices: number[];
        uvs: number[];
    }): void;
    setInstanceData(instanceData: PointData[][]): void;
    instanceDataBuffers: Record<string, number>;
    setInstanceBufferData(data: any, name: any, length: any, instanceDivisor?: number): void;
    disposeInstanceData(): void;
    render(): void;
}
export default InstanceMesh;
