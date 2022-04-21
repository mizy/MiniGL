import { Vector2 } from './vector';
declare class BezierLine {
    v0: Vector2;
    v1: Vector2;
    v2: Vector2;
    v3: Vector2;
    lengths: number[];
    setControl(v0: Vector2, v1: Vector2, v2: Vector2, v3: Vector2): void;
    getPoint(t: number): {
        x: number;
        y: number;
    };
    cubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number;
    /**
     * @param n 指定点的个数
     * @returns
     */
    getSpacedPoints(n: number): Vector2[];
    /**
     * 返回缓存长度数组
     * @param n 分割点的个数
     * @returns
     */
    getLengths(n?: number): number[];
    /**
     * 获取线总长度
     * @param n
     * @returns
     */
    getLength(n: any): number;
    getUtoTmapping(u: number): number;
}
export default BezierLine;
