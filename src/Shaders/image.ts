export default {
  vertexShader: `
	precision highp float;
	attribute vec2 position;
	attribute vec2 uv;
	varying vec4 vColor;
	varying vec2 vUv;
    uniform mat3 transform;
    uniform mat3 modelView;
    uniform float z;
	void main()
	{
        vUv = uv;
		vec3 mPosition = transform * modelView * vec3(position,1.0);
		gl_Position = vec4(mPosition.xy,z,1.0);
	}
	`,
  fragmentShader: `
	precision highp float;
    varying vec2 vUv;
    uniform vec4 alphaColor;
	uniform sampler2D u_Sampler;
	void main()
	{
        gl_FragColor = texture2D(u_Sampler,vUv)*alphaColor;
	}
	`
};
