export default Point;
declare class Point extends Base {
    constructor(config: any);
    drawType: string;
    bufferType: string;
    /**
     *
     * @param {any} param 入参
     */
    setBufferDatas({ position, color, size, initTime }: any): void;
}
import Base from "./Base";
