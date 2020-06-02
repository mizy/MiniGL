export default {
	vertexShader:(config)=>{
		return  `
		precision mediump float;
		attribute vec2 position;
		attribute vec4 color;
		attribute float size;
		attribute float initTime;
		uniform float z;
		uniform mat3 transform;
		varying vec4 vColor;
		uniform float t;
		varying float vTime;
		
		void main()
		{
			vColor = color;
			gl_PointSize = size;
			vec3 mPosition = transform * vec3(position,1.0);
			gl_Position = vec4(mPosition,z);
			vTime = initTime;
		}
		`
	},

	fragmentShader: ({isRound,map,isGradual})=>{
		console.log(isRound)
		return `
		precision mediump float;
		uniform float t;
		uniform sampler2D map;
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
				${isGradual?`
				gl_FragColor.w *= sin(t+vTime)*0.75/2. + 1.-0.75/2.`:''};
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