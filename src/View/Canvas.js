
import Mesh from '../Meshs/Mesh';
import Point from '../Meshs/Point';
import Line from '../Meshs/Line';
import WidthLine from '../Meshs/WidthLine';
/**
 * @class
 */
class Canvas {
	constructor(config) {
		this.index = 0;
		this.meshs = {};
		this.miniGL = config.miniGL;
		this.gl = this.miniGL.gl;
		// 基础渲染以下类，其他形状让让用户自己new
		// 牺牲一些性能，渲染多次drawElements来避免通过退化三角形合并形状，导致的事件处理困难（需要分层处理合并的图层，然后按照像素去检测，比较恶心）
		this.mesh = new Mesh(config.meshConfig);
		this.point = new Point(config.pointConfig);
		this.line = new Line(config.lineConfig);
		this.widthLine = new WidthLine(config.widthLineConfig);
		this.add(this.mesh);
		this.add(this.point);
		this.add(this.line);
		this.add(this.widthLine);
	}

	dispose() {
		for(let x in this.meshs){
			this.remove(x)
		}
		this.meshs = []
	}

	toDataUrl() {
		return this.gl.canvas.toDataUrl();
	}

	update(delta=16) {
		this.render(delta);
		const time = new Date().getTime();
		requestAnimationFrame(() => {
			const endTime =  new Date().getTime()
			this.update(endTime - time);
		});
	}

	add(mesh,key){
		key = key?key:++this.index;
		this.meshs[key] = mesh;
		mesh.onAdd&&mesh.onAdd(this.miniGL)
		return key
	}

	remove(key){
		this.meshs[key].destroy&&this.meshs[key].destroy();
		delete this.meshs[key]
	}

	render() {
		const {gl} = this;
		this.miniGL.fire("beforerender")
		// 清空
		gl.clearColor(1.0, 1.0, 1.0, 1.0);
		gl.clearDepth(1.0);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL)

		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		for(let key in this.meshs){
			const mesh = this.meshs[key];
			// 是否支持深度测试
			if(mesh.depthTest){
				gl.enable(gl.DEPTH_TEST)
			}else{
				gl.disable(gl.DEPTH_TEST)
			}
			// 是否支持透明混色
			if(mesh.transparent){
				gl.enable(gl.BLEND);
				gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
			}else{
				gl.disable(gl.BLEND)
			}
			// 写入深度缓冲
			gl.depthMask(mesh.depthMask);
			mesh.render()
		}
	}
}
export default Canvas