export default Image;
declare class Image extends Base {
    constructor(config?: {});
    drawType: string;
    setMap(imagePath: any): void;
    data: any;
}
import Base from "./Base";
