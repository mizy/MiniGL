import pointShader from '../Shaders/point';
import Base from './Base';

class Point extends Base {
	drawType = "POINTS";
	vertex = [];
	offset = 0;
	vSize = 2;
	constructor(config) {
		config = Object.assign({
			isRound:true
		},config);
		super(config);
		this.shaders = {
			vertex: pointShader.vertexShader(config),
			fragment: pointShader.fragmentShader(config)
		};
		this.uniformData = {
			z:{
				value:1,
				type:"uniform1f"
			},
			t:{
				value:1,
				type:"uniform1f"
			},
		}
		this.init(config);
	}



	setData(data) {
		const {
			miniGL:{viewport}
		} = this;
		const points = [];
		const colors = [];
		const size = [];
		const vTime = [];
		this.data = data;
		data.forEach(item=>{
			const coord = viewport.convertScreenToClip(item.position.x,item.position.y);
			points.push(coord.x,coord.y);
			colors.push(...(item.color||[1,0,0,1]));
			size.push(item.size||10);
			vTime.push(item.initTime||2*Math.random()*Math.PI)
		})

		this.vertex = points;
		this.setBufferData(points, "position", 2);
		this.setBufferData(colors, "color", 4);
		this.setBufferData(size, "size", 1);
		this.setBufferData(vTime, "initTime", 1);
	}

}
export default Point;