export default Line;
declare class Line extends Base {
    drawType: string;
    bezierLine: BezierLine;
    data: any;
    start(): void;
    startFlag: boolean;
    pause(): void;
}
import Base from "./Base";
import BezierLine from "../Utils/BezierLine";
