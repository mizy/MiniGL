import Base from './BaseMesh';
import { PointData } from './Mesh';
declare class Line extends Base {
    drawType: string;
    shaders: {
        vertex: string;
        fragment: string;
    };
    offset: number;
    data: PointData[];
    constructor(config: any);
    setData(data: PointData[]): void;
    /**
     *
     * @param {any} param 入参
     */
    setBufferDatas({ position, color }: {
        position: number[];
        color: number[];
    }): void;
}
export default Line;
