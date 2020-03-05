export default {
	vertexShader:`
	precision mediump float;
	attribute vec4 position;
	void main()
	{
		gl_PointSize = position[2];
		gl_Position = vec4(position[0],position[1],0.0,1.0);
	}
	`,
	
	fragmentShader:`
	precision mediump float;
	void main()
	{
		gl_FragColor = vec4(1.0, 0.0, 0.0, 0.8);
	}
	`
}