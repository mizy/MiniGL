export default {
	// 先求连接线然后再求垂线
	// 求出等比放大的值
	vertexShader: `
	precision highp float;
	attribute vec2 now;
	attribute vec2 pre;
	attribute vec2 next;
	uniform float width;
	uniform float aspect;
	uniform float z;
	uniform mat3 transform;
	uniform float offset;
	void main()
	{
		// 先转换坐标系
		vec2 mNow = (transform*vec3(now,1.)).xy;
		vec2 mNext = (transform*vec3(next,1.)).xy;
		vec2 mPre = (transform*vec3(pre,1.)).xy;
		vec2 _now = vec2(mNow);
		vec2 _next = vec2(mNext);
		vec2 _pre =  vec2(mPre);
	
		// 先把本坐标系的坐标放大，和真实的外界坐标一样,这样求出来的相对向量是准确的，如果在后面之间对normal进行变化，就会得出错误的结果
		_now.x *= aspect;
		_next.x *= aspect;
		_pre.x *= aspect;
		
		// 偏移
		if(offset!=0.){
			vec2 point21 = normalize(_next - _now);
			vec2 point10 = normalize(_now - _pre);
			vec2 offsetDir = normalize( point21 + point10);
			vec2 offsetNormal = vec2( -offsetDir.y, offsetDir.x);
			float ratio = sqrt(1.0 - pow(dot(offsetNormal,point10),2.0));
			vec2 offsets =  offsetNormal * offset/ratio ;
			offsets.x /= aspect;
			mNow += offsets;
		}

		// 得出的x坐标会被放大，这里要除掉,记得要用转换后坐标进行加减
		gl_PointSize = width;

		gl_Position = vec4(mNow.x,mNow.y , z, 1.);
	}
	`,

	fragmentShader: `
	precision highp float;
	uniform vec4 color;
	void main()
	{
		float l = length(gl_PointCoord - vec2(0.5,0.5));
		
		float smoothSideRatio = smoothstep(0.,0.05,(0.5-l));
		gl_FragColor = color;
		gl_FragColor.w *= smoothSideRatio;
	}
	`
}