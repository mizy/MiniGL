import Base, { BaseMeshConfig } from '../BaseMesh';
import { PointData } from '../Mesh';
declare class RoundLine extends Base {
    drawType: string;
    shaders: {
        vertex: string;
        fragment: string;
    };
    offset: number;
    data: PointData[];
    res: {
        preData: any[];
        nowData: any[];
        nextData: any[];
        side: any[];
        status: any[];
    };
    constructor(config: BaseMeshConfig);
    setData(data: PointData[]): void;
    calcSidePoints(data?: any[]): {
        preData: any[];
        nowData: any[];
        nextData: any[];
        side: any[];
        status: any[];
    };
    render(): void;
}
export default RoundLine;
