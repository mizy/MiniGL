export default Spline;
declare class Spline {
    setData(data: any): void;
    data: any;
    getPoint(t: any): {
        x: any;
        y: any;
    };
    getSpacedPoints(n: any): {
        x: any;
        y: any;
    }[];
}
