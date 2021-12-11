export default BezierLine;
declare class BezierLine {
    setControl(v0: any, v1: any, v2: any, v3: any): void;
    v0: any;
    v1: any;
    v2: any;
    v3: any;
    setData(data: any): void;
    data: any;
    getPoint(t: any): {
        x: number;
        y: number;
    };
    cubicBezier(t: any, p0: any, p1: any, p2: any, p3: any): number;
    getSpacedPoints(n: any): {
        x: number;
        y: number;
    }[];
    lengths: number[];
    getLengths(n?: number): number[];
    getLength(n: any): number;
    getUtoTmapping(u: any): number;
}
