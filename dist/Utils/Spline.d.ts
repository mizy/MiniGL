import { Vector2 } from "./vector";
declare class Spline {
    data: Vector2[];
    intPoint: number;
    setData(data: Vector2[]): void;
    getPoint(t: any): {
        x: any;
        y: any;
    };
    getSpacedPoints(n: any): any[];
}
export default Spline;
