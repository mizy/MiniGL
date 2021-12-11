export default InstanceMesh;
declare class InstanceMesh extends Base {
    constructor(config?: {
        instanceDivisor: number;
    });
    drawType: string;
    setMap(src: any): Promise<void>;
    data: any;
    setBufferDatas({ position, color, indices, uvs }: {
        position: any;
        color: any;
        indices: any;
        uvs: any;
    }): void;
    count: any;
    setInstanceData(instanceData: any): void;
    instanceData: any;
}
import Base from "./Base";
