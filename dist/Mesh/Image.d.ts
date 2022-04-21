import Base, { BaseMeshConfig } from './BaseMesh';
export interface ImageMeshData {
    width: number;
    height: number;
    src?: string;
    texture?: WebGLTexture;
    x: number;
    y: number;
}
declare class Image extends Base {
    drawType: string;
    data: ImageMeshData;
    offset: number;
    constructor(config?: BaseMeshConfig);
    setMap(imagePath: string): void;
    setData(data: ImageMeshData): void;
    render(): void;
}
export default Image;
