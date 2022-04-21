export default {
	// shader中进行坐标转换会不会快？CPU只会调用一次，GPU每帧都要重复去运算，2d情况下没有相机，
	// 没有坐标因相机而变化的情况，所以不用再shader中运算，可以减少cpu的调用率
	vertexShader: `
	precision mediump float;
	attribute vec4 position;
	attribute float number;
	uniform vec4 startColor;
	uniform vec4 endColor;
	uniform float length;
	uniform float t;
	uniform float z;
	varying vec4 vColor;
	void main()
	{
		gl_Position = vec4(position.xy,z,1.);
		vColor = endColor - (length + t - number)/length*(endColor - startColor);
	}
	`,

	fragmentShader: `
	precision mediump float;
	varying vec4 vColor;
	void main()
	{
		if(vColor.w<=0.02){
			discard;
		}
		gl_FragColor = vColor;
	}
	`
}