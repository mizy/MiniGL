
import Mesh from '../Meshs/Mesh';
import Point from '../Meshs/Point';
import Line from '../Meshs/Line';
import WidthLine from '../Meshs/WidthLine';
/**
 * @class
 */
class Canvas {
	constructor(config) {
		this.miniGL = config.miniGL;
		this.gl = this.miniGL.gl;
		// 基础渲染以下类，其他形状让让用户自己new
		// 牺牲一些性能，渲染多次drawElements来避免通过退化三角形合并形状，导致的事件处理困难（需要分层处理合并的图层，然后按照像素去检测，比较恶心）
		this.mesh = new Mesh(config);
		this.point = new Point(config);
		this.line = new Line(config);
		this.widthLine = new WidthLine(config);
		this.meshs = {
			"mesh":this.mesh,
			"point":this.point, 
			"line":this.line, 
			"widthLine":this.widthLine
		};
		this.index = 0;
	}

	clear() {

	}

	toDataUrl() {
		return this.gl.canvas.toDataUrl();
	}

	update() {
		this.render();
		requestAnimationFrame(() => {
			this.update();
		});
	}

	add(mesh,key){
		key = key||++this.index;
		this.meshs[key] = mesh;
		return key
	}

	remove(key){
		this.meshs[key].destroy&&this.meshs[key].destroy();
		delete this.meshs[key]
	}

	render() {
		// 清空
		this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
		this.gl.clearDepth(1.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.depthFunc(this.gl.LEQUAL)
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
		for(let key in this.meshs){
			const mesh = this.meshs[key];
			mesh.render()
		}
	}
}
export default Canvas