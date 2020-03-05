import Base from './Base';
import Mesh from './Meshs/Mesh';
import Point from './Meshs/Point';

class MiniGL extends Base{
	autoUpdate=false;

	constructor(config){
		super(config);
		this.container = config.container;
		this.config = Object.assign({},config);
	}
	
	init(){
		this.canvas = document.createElement("canvas");
		this.container.appendChild(this.canvas);
		const width =  this.config.width||this.container.clientWidth;
		const height = this.config.height||this.container.clientHeight
		this.canvas.width = width;
		this.canvas.height = height;
		this.gl = this.canvas.getContext("webgl");
		if (this.gl == null) console.error("你的浏览器不支持webgl,请更新使用chrome浏览器");
		this.gl.viewport(0, 0,width,height );

		this.mesh = new Mesh({miniGL:this});
		this.point = new Point({miniGL:this});

		this.update();
	}

	update(){
		this.render();
		requestAnimationFrame(()=>{
			this.update();
		});
	}

	render(){
		// 清空
		this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
		this.gl.clearDepth(1.0);  
		this.gl.enable(this.gl.DEPTH_TEST);        
		this.gl.depthFunc(this.gl.LEQUAL)
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
		this.mesh.render();
		this.point.render();
	}
}
window.MiniGL = MiniGL;
export default MiniGL;