export default Point;
declare class Point extends Base {
    drawType: string;
    bufferType: string;
    setBufferDatas({ position, color, size, initTime }: {
        position: any;
        color: any;
        size: any;
        initTime: any;
    }): void;
}
import Base from "./Base";
