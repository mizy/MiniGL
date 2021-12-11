export default RoundLine;
declare class RoundLine extends Base {
    constructor(config: any);
    drawType: string;
    data: any;
    res: {
        preData: any[];
        nowData: any[];
        nextData: any[];
        side: number[];
        status: number[];
    };
    calcSidePoints(data?: any[]): {
        preData: any[];
        nowData: any[];
        nextData: any[];
        side: number[];
        status: number[];
    };
}
import Base from "../Base";
