export default {
	vertexShader: (config: { sizeAttenuation?: boolean }) => {
		return `
		precision mediump float;
		attribute vec2 position;
		attribute vec4 color;
		attribute float size;
		attribute float initTime;
		uniform float z;
		uniform mat3 transform;
		varying vec4 vColor;
		uniform float t;
		uniform float scale;
        uniform float pixelRatio;
		varying float vTime;
		
		void main()
		{
			vColor = color;
			gl_PointSize = size * pixelRatio ${config.sizeAttenuation ? "* scale" : ""};
			vec3 mPosition = transform * vec3(position,1.);
			gl_Position = vec4(mPosition.xy,z,1.);
			vTime = initTime;
		}
		`;
	},

	fragmentShader: ({
		isRound = true,
		map,
		isGradual,
	}: {
		isRound?;
		map?;
		isGradual?;
	}) => {
		return `
		precision mediump float;
		uniform float t;
		uniform float antialias;
		uniform sampler2D map;
		varying float vTime;
		varying vec4 vColor;
		void main()
		{
			float distance = distance(gl_PointCoord, vec2(0.5, 0.5));
		${isRound
				? `
			if (distance <= 0.5){`
				: ""
			}
			${map
				? `
				vec4 texelColor = texture2D( map, gl_PointCoord ); 
				gl_FragColor = texelColor;
				${isGradual
					? `
				gl_FragColor.w *= sin(t+vTime)*0.75/2. + 1.-0.75/2.`
					: ""
				};
				if(texelColor.w<=0.01){
					discard;
				}
			`
				: `
				gl_FragColor = vColor;
				${isGradual
					? `
				gl_FragColor.w = 1. - distance*2.;
				gl_FragColor.w *= sin(t+vTime)*0.75/2. + 1.-0.75/2. ;`
					: ""
				}
			`
			}
		${isRound
				? `
				float smoothSideRatio = smoothstep(0.,antialias,(0.5-distance));
				gl_FragColor.w *= smoothSideRatio;
			}else{
				discard;
			}
		`
				: ""
			}
		}
		`;
	},
};
