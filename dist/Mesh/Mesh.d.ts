export default Mesh;
declare class Mesh extends Base {
    constructor(config?: {
        wireFrame: boolean;
    });
    drawType: string;
    setMap(src: any): any;
    data: any;
    setBufferDatas({ position, color, indices, uvs }: {
        position: any;
        color: any;
        indices: any;
        uvs: any;
    }): void;
}
import Base from "./Base";
