export default RoundLine;
declare class RoundLine {
    constructor(config: any);
    depthMask: boolean;
    depthTest: boolean;
    transparent: boolean;
    line: Line;
    linePoint: LinePoint;
    onAdd(...args: any[]): void;
    setData(...args: any[]): void;
    dispose(...args: any[]): void;
    destroy(...args: any[]): void;
    render(...args: any[]): void;
}
import Line from "./Line.js";
import LinePoint from "./LinePoint";
