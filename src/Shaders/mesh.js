export default {
	vertexShader: `
	precision lowp float;
	attribute vec2 position;
	attribute vec4 color;
	varying vec4 vColor;
	uniform float z;
	void main()
	{
		vColor = color;
		gl_Position = vec4(position,z,1.0);
		
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