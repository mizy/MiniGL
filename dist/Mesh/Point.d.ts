import Base, { BaseMeshConfig } from './BaseMesh';
import { PointData } from './Mesh';
declare class Point extends Base {
    drawType: string;
    vertex: any[];
    offset: number;
    vSize: number;
    bufferType: string;
    constructor(config: BaseMeshConfig);
    setData(data: PointData[]): void;
    /**
     *
     * @param {any} param 入参
     */
    setBufferDatas({ position, color, size, initTime }: {
        position: number[];
        color: number[];
        size: number[];
        initTime: number[];
    }): void;
}
export default Point;
