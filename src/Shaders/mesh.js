export default {
	vertexShader:`
	precision mediump float;
	attribute vec4 position;
	varying vec2 textureCoordinate;
	void main()
	{
		gl_Position = position;
		textureCoordinate = position.xy + 0.5;
	}
	`,
	fragmentShader:`
	precision mediump float;
	varying vec2 textureCoordinate;
	void main()
	{
		gl_FragColor = vec4(textureCoordinate, 0.0, 1.0);
	}
	`
}