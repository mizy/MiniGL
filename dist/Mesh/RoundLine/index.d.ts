import MiniGL from '@/index.js';
import { PointData } from '../Mesh.js';
import Line from './Line.js';
import LinePoint from './LinePoint';
declare class RoundLine {
    depthMask: boolean;
    depthTest: boolean;
    transparent: boolean;
    line: Line;
    linePoint: LinePoint;
    constructor(config: any);
    onAdd(miniGL: MiniGL): void;
    setData(data: PointData[]): void;
    dispose(): void;
    destroy(): void;
    render(): void;
}
export default RoundLine;
