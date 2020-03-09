export default {
	vertexShader: `
	precision mediump float;
	attribute vec4 position;
	void main()
	{
		gl_Position = position;
	}
	`,

	fragmentShader: `
	precision mediump float;
	void main()
	{
		gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
	}
	`
}