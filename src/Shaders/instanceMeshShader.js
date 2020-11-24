export default {
	vertexShader: `
	precision lowp float;
	attribute vec2 position;
    attribute vec4 color;
    attribute vec3 instanceOffset;
	varying vec4 vColor;
	uniform mat3 transform;
    uniform float z;
	void main()
	{
		vColor = color;
        vColor.a = instanceOffset.z;

		vec3 mPosition = transform * vec3(vec2(position.x+instanceOffset.x,position.y+instanceOffset.y),1.);
		gl_Position = vec4(mPosition.xy,z,1.0);
	}
	`,
	fragmentShader: `
	precision lowp float;
	varying vec4 vColor;
	void main()
	{
		gl_FragColor = vColor;
	}
	`
}