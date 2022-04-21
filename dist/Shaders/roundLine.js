export default {
    // 先求连接线然后再求垂线
    // 求出等比放大的值
    vertexShader: `
	precision lowp float;
	attribute vec2 now;
	attribute vec2 pre;
	attribute vec2 next;
	attribute float side;
	attribute float status;
	uniform float width;
	uniform float aspect;
	uniform mat3 transform;
	uniform float offset;
	varying float vSide;
	void main()
	{
		vSide = side;
		
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
		
		vec2 _dir = normalize(status*_now - status*_pre + (1.0-status)*_next - (1.0-status)*_now);

		vec2 normal = vec2( -_dir.y , _dir.x );
		vec2 dir = normal * width * .5 * side;

		// 偏移量
		if(offset!=0.){
			vec2 point21 = normalize(_next - _now);
			vec2 point10 = normalize(_now - _pre);
			vec2 offsetDir = normalize( point21 + point10);
			vec2 offsetNormal = vec2( -offsetDir.y, offsetDir.x);
			float ratio = sqrt(1.0 - pow(dot(offsetNormal,point10),2.0));
			vec2 offsets =  offsetNormal * offset/ratio  ;
			dir += offsets;
		}

		// 得出的x坐标会被放大，这里要除掉,记得要用转换后坐标进行加减
		gl_Position = vec4(mNow.x + dir.x/aspect,mNow.y+dir.y , 1., 1.);
	}
	`,
    fragmentShader: `
	precision lowp float;
	uniform vec4 color;
	varying float vSide;
	void main()
	{
		float smoothSideRatio = max(0.1,smoothstep(0.,0.3,(1. - abs(vSide))));
		gl_FragColor = color;
		gl_FragColor.w *= smoothSideRatio;
	}
	`
};
