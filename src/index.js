import Base from './Base';
import Viewport from './View/Viewport';
import Canvas from './View/Canvas.js';
import Controller from './Control/Controller'
import FlyLine from './Meshs/FlyLine';
import Mesh from './Meshs/Mesh';
import Image from './Meshs/Image';
import Point from './Meshs/Point';
import MeshBase from './Meshs/Base';
import RoundLine from './Meshs/RoundLine/index';
import WidthLine from './Meshs/WidthLine';
import Rect from './Shapes/Rect';
class MiniGL extends Base {
	autoUpdate = false;

	constructor(config) {
		super(config);
		this.container = config.container;
	 	this.config = Object.assign({}, config);
	}

	init() {
		this.canvas = document.createElement("canvas");
		this.container.appendChild(this.canvas);

		this.gl = this.canvas.getContext("webgl2", { antialias: true,antialiasSamples: 16,preserveDrawingBuffer: true });
		if (this.gl == null) {
			return console.error("你的浏览器不支持webgl2,请更新使用chrome浏览器");
		}

		this.viewport = new Viewport({ miniGL: this, ...this.config });
		this.viewport.resize();
		this.canvas = new Canvas({ miniGL: this,...this.config });
		this.controller = new Controller({miniGL:this,...this.config});

		this.canvas.update();
	}
}
MiniGL.FlyLine = FlyLine;
MiniGL.Image = Image;
MiniGL.Mesh = Mesh;
MiniGL.Point = Point;
MiniGL.MeshBase = MeshBase;
MiniGL.WidthLine = WidthLine;
MiniGL.RoundLine = RoundLine;
// 暂时做形状没有意义，本来是要专心做2d特效库的,另外去做形状，做重了和canvas性能没差了，还是专心利用gpu多进程运算
MiniGL.Rect = Rect;
MiniGL.InstanceMesh = require("./Meshs/InstanceMesh").default;

export default MiniGL;