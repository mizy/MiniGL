export default {
	vertexShader:(config)=>{
		return  `
		precision mediump float;
		attribute vec2 position;
		attribute vec4 color;
		attribute float size;
		attribute float initTime;
		uniform float z;
		varying vec4 vColor;
		varying float vTime;
		
		void main()
		{
			vColor = color;
			gl_PointSize = size;
			gl_Position = vec4(position,0.0,z);
			vTime = initTime;
		}
		`
	},

	fragmentShader: ({isRound,map,isGradual})=>{
		console.log(isRound)
		return `
		precision mediump float;
		uniform float t;
		varying float vTime;
		varying vec4 vColor;
		void main()
		{
			float distance = distance(gl_PointCoord, vec2(0.5, 0.5));
		${isRound?`
			if (distance <= 0.5){`:''}
			${map?`
				vec4 texelColor = texture2D( map, gl_PointCoord ); 
				gl_FragColor = texelColor;
				
				gl_FragColor.w *= sin(t+vTime)*0.75/2. + 1.-0.75/2.;
				if(texelColor.w<=0.01){
					discard;
				}
			`:`
				gl_FragColor = vColor;
				${isGradual?`
				gl_FragColor.w = 1. - distance*2.;
				gl_FragColor.w *= sin(t+vTime)*0.75/2. + 1.-0.75/2. ;`:''}
			`}
		${isRound?`
			}else{
				discard;
			}
		`:''}
		}
		`
	}
}