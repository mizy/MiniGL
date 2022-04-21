import Base, { BaseMeshConfig } from './BaseMesh';
export interface PointData {
    position: {
        x: number;
        y: number;
    };
    size?: number;
    color?: [number, number, number, number];
    [key: string]: any;
}
declare class Mesh extends Base {
    drawType: string;
    data: PointData[];
    offset: number;
    constructor(config?: BaseMeshConfig);
    setData(data: PointData[], indices: number[]): void;
    setBufferDatas({ position, color, indices, uvs }: {
        position: number[];
        color: number[];
        indices: number[];
        uvs: number[];
    }): void;
    setIndices(input: number[]): void;
    render(): void;
}
export default Mesh;
