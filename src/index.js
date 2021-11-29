import Base from './Base';
import Viewport from './View/Viewport';
import Canvas from './View/Canvas.js';
import Controller from './Control/Controller';
import FlyLine from './Mesh/FlyLine';
import Mesh from './Mesh/Mesh';
import Image from './Mesh/Image';
import Point from './Mesh/Point';
import MeshBase from './Mesh/Base';
import RoundLine from './Mesh/RoundLine/index';
import WidthLine from './Mesh/WidthLine';
import Group from './Group/Group.js';
import DragonBones from './dragonBones/index.js';
class MiniGL extends Base {
    autoUpdate = false;
    constructor(config) {
        super(config);
        this.container = config.container;
        this.config = Object.assign({
            contextOption: {
                alpha: true,
                antialias: true,
                antialiasSamples: 16,
                stencil: true,
                powerPreference: 'high-performance',
                preserveDrawingBuffer: true
            }
        }, config);
    }

    init() {
        const { contextOption = {} } = this.config;
        this.canvasDOM = document.createElement('canvas');
        this.container.appendChild(this.canvasDOM);

        this.gl = this.canvasDOM.getContext('webgl2', contextOption);
        if (this.gl == null) {
            return console.error('你的浏览器不支持webgl2,请更新使用chrome浏览器');
        }

        this.viewport = new Viewport({ miniGL: this, ...this.config });
        this.viewport.resize();
        this.canvas = new Canvas({ miniGL: this, ...this.config });
        this.controller = new Controller({ miniGL: this, ...this.config });

        this.canvas.update();
    }
}
MiniGL.FlyLine = FlyLine;
MiniGL.Image = Image;
MiniGL.Mesh = Mesh;
MiniGL.Point = Point;
MiniGL.Line = require('./Mesh/Line').default;;
MiniGL.MeshBase = MeshBase;
MiniGL.WidthLine = WidthLine;
MiniGL.RoundLine = RoundLine;
// 暂时做形状没有意义，本来是要专心做2d特效库的,另外去做形状，做重了和canvas性能没差了，还是专心利用gpu多进程运算
// MiniGL.Shape = require('./Shapes').default;
MiniGL.InstanceMesh = require('./Mesh/InstanceMesh').default;
MiniGL.Group = Group;
MiniGL.Util = require('./Utils').default;
MiniGL.Texture = require('./Texture/Texture').default;
MiniGL.DragonBones = DragonBones;
export default MiniGL;
