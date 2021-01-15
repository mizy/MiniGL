export default {
	vertexShader: `
	precision lowp float;
	attribute vec2 position;
	attribute vec4 color;
	varying vec4 vColor;
    uniform mat3 transform;
    uniform mat3 modelView;
	uniform float z;
	void main()
	{
		vColor = color;
		vec3 mPosition = transform * modelView * vec3(position,1.);
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
};
