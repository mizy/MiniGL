export default {
	// 先求连接线然后再求垂线
	// 求出等比放大的值
	vertexShader: `
	precision lowp float;
	attribute vec2 now;
	attribute vec2 pre;
	attribute vec2 next;
	attribute float side;
	uniform float width;
	uniform float aspect;
	varying vec2 vColor;
	void main()
	{
		
		vec2 _now = vec2(now);
		vec2 _next = vec2(next);
		vec2 _pre = vec2(pre);
		// 先把本坐标系的坐标放大，和真实的外界坐标一样,这样求出来的相对向量是准确的，如果在后面之间对normal进行变化，就会得出错误的结果
		_now.x *= aspect;
		_next.x *= aspect;
		_pre.x *= aspect;
		
		vec2 point0_1 = normalize(_now - _pre);
		vec2 point2_1 = normalize(_next - _now);
		vec2 point2_1_0v = normalize(point2_1 + point0_1);
		
		vec2 normal = vec2( -point2_1_0v.y , point2_1_0v.x );
		
		//这个算法下先放大,求出的Normal比例在放大的坐标系下是对的，根据这个normal求出放大的比例
		float ratio = sqrt(1.0 - pow(dot(normal,point0_1),2.0));
		vec2 dir = normal * width/ratio * .5 * side;


	    // 得出的x坐标会被放大，这里要除掉
		gl_Position = vec4(now.x + dir.x/aspect,now.y+dir.y , 0.0 , 1.0);
	}
	`,

	fragmentShader: `
	precision lowp float;
	varying vec2 vColor;
	void main()
	{
		gl_FragColor = vec4(1.,0., 0., 1.0);
	}
	`
}