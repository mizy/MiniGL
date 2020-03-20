export default {
	vertexShader: `
	precision mediump float;
	attribute vec2 position;
	uniform float size;
	void main()
	{
		gl_PointSize = size;
		gl_Position = vec4(position,0.0,1.0);
	}
	`,

	fragmentShader: `
	precision mediump float;
	uniform vec4 color;
	void main()
	{
		gl_FragColor = color;
	}
	`
}