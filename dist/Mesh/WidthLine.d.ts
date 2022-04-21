import Base, { BaseMeshConfig } from './BaseMesh';
import { PointData } from './Mesh';
declare class WidthLine extends Base {
    drawType: string;
    shaders: {
        vertex: string;
        fragment: string;
    };
    offset: number;
    data: PointData[];
    res: {
        nowData: number[];
        preData: number[];
        side: number[];
        nextData: number[];
    };
    constructor(config: BaseMeshConfig);
    setData(data: PointData[]): void;
    addData(data: any): void;
    calcSidePoints(data?: number[]): {
        nowData: number[];
        preData: number[];
        nextData: number[];
        side: number[];
    };
    render(): void;
}
export default WidthLine;
