import Point from './Point';
import Base from './Base';

class SimplePoint extends Base {
	drawType = "POINTS";
	vertex = [];
	vSize = 2;
	size = 5;
	offset = 0;
	color = [1, 0, 0, 1];
	constructor(config) {
		config = Object.assign({},config);
		super(config);
		this.shaders={
			vertex: `
			precision mediump float;
			attribute vec2 position;
			attribute vec4 color;
			attribute float size;
			varying vec4 vColor;
			varying float vSize;
			void main()
			{
				vSize = size;
				vColor = color;
				gl_PointSize = size;
				gl_Position = vec4(position,0.0,1.0);
			}
			`,
			fragment: `
			precision mediump float;
			varying vec4 vColor;
			varying float vSize;
			${userConfig.map?'uniform sampler2D map;':''}
			void main()
			{
				float dis = distance(gl_PointCoord, vec2(0.5, 0.5));
				if (distance <= 0.5){
					${config.map?`
						vec4 texelColor = texture2D( map, gl_PointCoord ); 
						gl_FragColor = texelColor;
						
						gl_FragColor.w *= sin(t+vTime)*0.75/2. + 1.-0.75/2.;
						if(texelColor.w<=0.01){
							discard;
						}
					`:`
						gl_FragColor = vColor;
						gl_FragColor.w = 1. - distance*2.;
						gl_FragColor.w *= sin(t+vTime)*0.75/2. + 1.-0.75/2. ;
					`}
				}else{
					discard;
				}
			}
			`
		}
		this.init(config);
	} 

	setData=Point.setData

}
export default SimplePoint;