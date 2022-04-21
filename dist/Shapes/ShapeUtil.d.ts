/**
 * @interface
 */
declare const ShapeUtil: {
    /**
     * @param  {} x
     * @param  {} y
     * @param  {} width
     * @param  {} height
     * @param  {} startIndex=0
     */
    rect: (x: any, y: any, width: any, height: any, startIndex?: number) => {
        data: {
            position: {
                x: any;
                y: any;
            };
        }[];
        indices: number[];
    };
    /**
     * @param  {} x
     * @param  {} y
     * @param  {} r
     * @param  {} segment=64 默认64精度
     */
    circle: (x: any, y: any, r: any, segment?: number, startIndex?: number) => {
        data: any[];
        indices: any[];
    };
};
