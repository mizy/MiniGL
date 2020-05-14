export default {
	vertexShader: `
	precision lowp float;
	attribute vec2 position;
	void main()
	{
		gl_Position = vec4(position,1,1.0);
	}
	`,
	fragmentShader: `
	precision lowp float;
	varying vec2 textureCoordinate;
	void main()
	{
		gl_FragColor = vec4(1.0,1.0, 0.0, 1.0);
	}
	`
}