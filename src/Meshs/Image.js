import shader from '../Shaders/image';
import Base from './Base';
class Image extends Base {
	drawType = "TRIANGLES";
	
	offset=0;//array.BYTES_PER_ELEMENT * indicesEachLength

	constructor(config) {
		super(config);
		this.shaders = {
			vertex: shader.vertexShader,
			fragment: shader.fragmentShader
		}
		this.uniformData = {
			z:{
				value:config.z||1,
				type:"uniform1f"
			},
		};
		this.init(config);
		this.setTexture('map',config.imagePath)
		this.vSize = 2;
	}

	setData(data) {
		const {
			miniGL:{viewport}
		} = this;
		this.data = data;
		this.uniformData.transform={
			value:viewport.transform,
			type:"uniformMatrix3fv"
		}
		const {width,height,path,x,y} = data;
		const points = [
			x-width/2,y-height/2,
			x-width/2,y+height/2,
			x+width/2,y-height/2,
			x+width/2,y+height/2,
		]
		const indices = [0,1,2,2,1,3];
		const uv = [
			0,0,
			0,1,
			1,0,
			1,1
		]
		
		this.vertex = points;
		this.setBufferData(points, "position", 2);
		this.setBufferData(uv, "uv", 2);
		this.setIndices(indices)
	}

	render() {
		// 2D 只需要两个坐标轴标识位置
		const offset = 0;// 从数据第几位开始偏移
		const normalLize = false;

		// 分别绑定数据到shader程序中
		for (let key in this.buffers) {
			const bufferData = this.buffers[key];
			const bufferPosition = this.getAttribLocation(key);
			// 分别绑定数据到shader程序中
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
			this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalLize, 0, offset);
			this.gl.enableVertexAttribArray(bufferPosition);
		}

		// 使用顶点数据
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);

		// 加载shader程序
		this.gl.useProgram(this.shaderPorgram);

		this.setUniformData();

		// 渲染
		if (this.indices.length)
		// offset必须乘以类型数组的长度，意味着要从内存中数据的对应字节数开始算 根据类型乘对应的BYTES_PER_ELEMENT
			this.gl.drawElements(this.gl[this.drawType], this.indices.length, this.gl.UNSIGNED_SHORT, this.offset);
	}
}
export default Image;