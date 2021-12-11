export default MiniGL;
declare class MiniGL extends Base {
    /**
     *
     * @param {object} config
     * @param {HTMLDivElement} config.container
     */
    constructor(config: {
        container: HTMLDivElement;
    });
    autoUpdate: boolean;
    container: HTMLDivElement;
    config: {
        contextOption: {
            alpha: boolean;
            antialias: boolean;
            antialiasSamples: number;
            stencil: boolean;
            powerPreference: string;
            preserveDrawingBuffer: boolean;
        };
    } & {
        container: HTMLDivElement;
    };
    init(): void;
    canvasDOM: HTMLCanvasElement;
    gl: RenderingContext;
    viewport: Viewport;
    canvas: Canvas;
    controller: Controller;
}
declare namespace MiniGL {
    export { FlyLine };
    export { Image };
    export { Mesh };
    export { Point };
    export const Line: typeof import("./Mesh/Line").default;
    export { MeshBase };
    export { WidthLine };
    export { RoundLine };
    export const InstanceMesh: typeof import("./Mesh/InstanceMesh").default;
    export { Group };
    export const Util: {
        Loader: typeof import("./Utils/Loader");
    };
    export const Texture: typeof import("./Texture/Texture").default;
    export { DragonBones };
}
import Base from "./Base";
import Viewport from "./View/Viewport";
import Canvas from "./View/Canvas.js";
import Controller from "./Control/Controller";
import FlyLine from "./Mesh/FlyLine";
import Image from "./Mesh/Image";
import Mesh from "./Mesh/Mesh";
import Point from "./Mesh/Point";
import MeshBase from "./Mesh/Base";
import WidthLine from "./Mesh/WidthLine";
import RoundLine from "./Mesh/RoundLine/index";
import Group from "./Group/Group.js";
import DragonBones from "./dragonBones/index.js";
