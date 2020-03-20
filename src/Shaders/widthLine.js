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
	void main()
	{
		vec2 point0_1 = normalize(now - pre);
		vec2 point2_1 = normalize(next - now);
		vec2 point2_1_0v = normalize(point2_1 + point0_1);
		
		vec2 normal = vec2( -point2_1_0v.y , point2_1_0v.x );
		float ratio = sqrt(1.0 - pow(dot(normal,point0_1),2.0));
		vec2 dir = normal * width/ratio * .5 * side;
		gl_Position = vec4(now.x + dir.x,now.y+dir.y , 0.0 , 1.0);
	}
	`,

	fragmentShader: `
	precision lowp float;
	void main()
	{
		gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
	}
	`
}