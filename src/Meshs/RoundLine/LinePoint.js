import shader from '@/Shaders/roundLinePoint.js';
import Base from '../Base';
class LinePoint extends Base {
	drawType = "POINTS"//"TRIANGLE_STRIP";
	shaders = {
		vertex: shader.vertexShader,
		fragment: shader.fragmentShader
	}
	offset=0;

	constructor(config) {
		super();
		config = Object.assign({
			width:20,
			z:1,
			offset:0,
		},config);
		this.uniformData = {
			z:{
				value:config.z||1,
				type:"uniform1f"
			}
		}
		this.init(config);
	}

	setData(res) {
		const {
			miniGL:{viewport}
		} = this;
		
		this.uniformData.transform={
			value:viewport.transform,
			type:"uniformMatrix3fv"
		}
		this.uniformData.aspect = {
			value: viewport.ratio,
			type:"uniform1f"
		}
		this.uniformData.color = {
			value: this.config.color||[1,0,1,1],
			type:"uniform4fv"
		}
		this.uniformData.width = {
			value: this.config.width,
			type:"uniform1f"
		}
		this.uniformData.offset = {
			value: 2*this.config.offset/this.miniGL.viewport.height,
			type:"uniform1f"
		}

		// 生产双倍点for两个边
		this.vertex = res.nowData;
		this.setBufferData(res.nowData, "now", 2);
		this.setBufferData(res.preData, "pre", 2);
		this.setBufferData(res.nextData, "next", 2);
	}
}
export default LinePoint;