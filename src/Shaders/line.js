export default {
	// shader中进行坐标转换会不会快？CPU只会调用一次，GPU每帧都要重复去运算，2d情况下没有相机，
	// 没有坐标因相机而变化的情况，所以不用再shader中运算，可以减少cpu的调用率
	vertexShader: `
	precision mediump float;
	attribute vec4 position;
	uniform float z;
	void main()
	{
		gl_Position = vec4(position.xy,z,1.);
	}
	`,

	fragmentShader: `
	precision mediump float;
	void main()
	{
		gl_FragColor = vec4(0., 0.0, 1.0, 1.0);
	}
	`
}