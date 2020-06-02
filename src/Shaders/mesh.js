export default {
	vertexShader: `
	precision lowp float;
	attribute vec2 position;
	attribute vec4 color;
	varying vec4 vColor;
	uniform mat3 transform;
	uniform float z;
	void main()
	{
		vColor = color;
		vec3 mPosition = transform * vec3(position,z);
		gl_Position = vec4(mPosition,1.0);
		
	}
	`,
	fragmentShader: `
	precision lowp float;
	varying vec4 vColor;
	void main()
	{
		gl_FragColor = vColor;
	}
	`
}