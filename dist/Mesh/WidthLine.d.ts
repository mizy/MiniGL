export default WidthLine;
declare class WidthLine extends Base {
    constructor(config: any);
    drawType: string;
    data: any;
    res: {
        nowData: any[];
        preData: any[];
        side: number[];
        nextData: any[];
    };
    addData(data: any): void;
    calcSidePoints(data?: any[]): {
        nowData: any[];
        preData: any[];
        side: number[];
        nextData: any[];
    };
}
import Base from "./Base";
