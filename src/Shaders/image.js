export default {
	vertexShader: `
	precision lowp float;
	attribute vec2 position;
	attribute vec2 uv;
	varying vec4 vColor;
	varying vec2 vUv;
	uniform mat3 transform;
	uniform float z;
	void main()
	{
		vUv = uv;
		vec3 mPosition = transform * vec3(position,1.0);
		gl_Position = vec4(mPosition,1.0);

	}
	`,
	fragmentShader: `
	precision lowp float;
	varying vec2 vUv;
	uniform sampler2D u_Sampler;
	void main()
	{
		gl_FragColor = texture2D(u_Sampler,vUv);
		// if(gl_FragColor.x*gl_FragColor.y*gl_FragColor.z>0.5){
		// 	discard;
		// }
	}
	`
}