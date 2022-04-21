import Base, { BaseMeshConfig } from '../BaseMesh';
declare class LinePoint extends Base {
    drawType: string;
    shaders: {
        vertex: string;
        fragment: string;
    };
    offset: number;
    constructor(config: BaseMeshConfig);
    setData(res: {
        preData: any[];
        nowData: any[];
        nextData: any[];
        side: any[];
        status: any[];
    }): void;
}
export default LinePoint;
