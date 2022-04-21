import Base from './BaseMesh';
import BezierLine from '../Utils/BezierLine';
declare class Line extends Base {
    drawType: string;
    shaders: {
        vertex: string;
        fragment: string;
    };
    offset: number;
    depthMask: boolean;
    bezierLine: BezierLine;
    data: {
        startXY?: {
            x: number;
            y: number;
        };
        endXY?: {
            x: number;
            y: number;
        };
        start: {
            x: number;
            y: number;
        };
        end: {
            x: number;
            y: number;
        };
    };
    startFlag: boolean;
    constructor(config: any);
    setData(data: {
        start: {
            x: number;
            y: number;
        };
        end: {
            x: number;
            y: number;
        };
    }): void;
    start(): void;
    pause(): void;
    render(): void;
}
export default Line;
