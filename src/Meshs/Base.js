/**
 * Base 基类方便继承以实现其他类型的情况
 */
class Base {
	vSize = 2;
	constructor(config) {
		this.config = Object.assign({
			type: "ok"
		}, config);
		this.buffers = [];
		this.buffersSize = [];
		this.gl = config.miniGL.gl;
		// 初始化数据数组
		this.indices = [];
		this.vertex = [];
		// 获取顶点数据内存里的指针
		this.indicesPointer = this.gl.createBuffer();;
		this.vertexPointer = this.gl.createBuffer();
	}

	setData(data) {
		this.vertex = data;
		this.setBufferData(data, "position", 2)
	}

	/**
	 * 新的缓存数据
	 * @param  {} data
	 * @param  {} name
	 */
	setBufferData(data, name, size) {
		// 没有的话初始化复用一个
		if (!this.buffers[name]) {
			this.buffers[name] = this.gl.createBuffer();
		}
		this.buffersSize[name] = size;

		// 顶点buffer
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[name]);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(data), this.gl.STATIC_DRAW);
	}

	setIndices(indices) {
		this.indices = indices;
		// 顶点buffer
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);
		this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this.gl.STATIC_DRAW);
	}

	// 生成shader程序
	initShader() {
		// 加载shader
		const vertexShaderObject = this.loadShader(this.shaders.vertex, this.gl.VERTEX_SHADER);
		const fragmentShaderObject = this.loadShader(this.shaders.fragment, this.gl.FRAGMENT_SHADER);

		// 创建程序
		const shaderPorgram = this.gl.createProgram();
		this.gl.attachShader(shaderPorgram, vertexShaderObject);
		this.gl.attachShader(shaderPorgram, fragmentShaderObject);
		this.gl.linkProgram(shaderPorgram);

		if (!this.gl.getProgramParameter(shaderPorgram, this.gl.LINK_STATUS)) {
			console.error("shaderProgram Error:", this.gl.getProgramInfoLog(shaderPorgram));
			return;
		}

		this.shaderPorgram = shaderPorgram;
	}

	// 获取顶点变量地址
	getAttribLocation(name) {
		return this.gl.getAttribLocation(this.shaderPorgram, name);
	}

	// 获取uniform变量地址
	getUniformLocation(name) {
		return this.gl.getUniformLocation(this.shaderPorgram, name);
	}

	// 加载shader
	loadShader(shaderStr, type) {
		let shader = this.gl.createShader(type);
		this.gl.shaderSource(shader, shaderStr);
		this.gl.compileShader(shader);
		return shader;
	}
}

export default Base;