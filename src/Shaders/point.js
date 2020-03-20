export default {
	vertexShader: `
	precision mediump float;
	attribute vec2 position;
	attribute vec4 color;
	attribute float size;
	varying vec4 frag_color;
	void main()
	{
		frag_color = color;
		gl_PointSize = size;
		gl_Position = vec4(position,0.0,1.0);
	}
	`,

	fragmentShader: `
	precision mediump float;
	varying vec4 frag_color;
	void main()
	{
		gl_FragColor = frag_color;
	}
	`
}