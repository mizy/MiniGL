export default Line;
declare class Line extends Base {
    constructor(config: any);
    drawType: string;
    data: any;
    /**
     *
     * @param {any} param 入参
     */
    setBufferDatas({ position, color }: any): void;
}
import Base from "./Base";
