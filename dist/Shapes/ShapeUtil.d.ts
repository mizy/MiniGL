declare namespace ShapeUtil {
    function rect(x: any, y: any, width: any, height: any, startIndex?: any): {
        data: {
            position: {
                x: any;
                y: any;
            };
        }[];
        indices: any[];
    };
    function circle(x: any, y: any, r: any, segment?: any, startIndex?: number): {
        data: {
            position: {
                x: any;
                y: any;
            };
        }[];
        indices: number[];
    };
}
