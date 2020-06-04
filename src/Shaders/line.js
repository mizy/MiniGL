export default {
	// shader中进行坐标转换会不会快？CPU只会调用一次，GPU每帧都要重复去运算，2d情况下没有相机，
	// 没有坐标因相机而变化的情况，所以不用再shader中运算，可以减少cpu的调用率
	// 发现还是会大规模常常对坐标进行替换，那还是放进shader中运算吧
	vertexShader: `
	precision mediump float;
	attribute vec2 position;
	attribute vec4 color;
	uniform mat3 transform;
	uniform float z;
	varying vec4 vColor;
	void main()
	{
		vColor = color;
		vec3 mPosition = transform * vec3(position,1.);
		gl_Position = vec4(mPosition.xy,z,1.);
	}
	`,

	fragmentShader: `
	precision mediump float;
	varying vec4 vColor;
	void main()
	{
		gl_FragColor = vColor;
	}
	`
}