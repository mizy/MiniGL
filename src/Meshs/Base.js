import loadTexture from '../Utils/LoadTexture';
/**
 * Base 基类方便继承以实现其他类型的情况
 */
class Base {
	vSize = 2;
	offset = 0;
	depthMask = true;
	depthTest = true;
	transparent = true;

	uniformLocations = {}
	
	init(config) {
		this.config = Object.assign({
			type: "ok"
		}, config);
		this.buffers = [];
		this.buffersSize = [];
		// 初始化数据数组
		this.indices = [];
		this.vertex = [];
		
	}

	setData(data) {
		this.vertex = data;
		this.setBufferData(data, "position", 2)
	}

	setUniformData(data){
		this.uniformData = data;
	}

	setUniformData(){
		if(!this.uniformData)return;
		for(let key in this.uniformData){
			const item = this.uniformData[key];
			this.setUniform(key,item)
		}
	}

	setUniform(key,item){
		const {value,type} = item;
		if(type.slice(-1)==="v"||typeof value!=='object'){
			this.gl[type](this.getUniformLocation(key),value);
		}else{
			this.gl[type](this.getUniformLocation(key),value[0]||value,value[1],value[2],value[3]);
		}
		this.uniformData.key = item;
	}

	setTexture(key,imagePath){
		loadTexture(imagePath);
		this.setUniform(key,{
			type:"uniform1i",//image
			value:0,//0号纹理传递
		});
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
		const {gl} = this;
		// 加载shader
		const vertexShaderObject = this.loadShader(this.shaders.vertex, this.gl.VERTEX_SHADER);
		const fragmentShaderObject = this.loadShader(this.shaders.fragment, this.gl.FRAGMENT_SHADER);

		// 创建程序
		const shaderPorgram = this.gl.createProgram();
		this.gl.attachShader(shaderPorgram, vertexShaderObject);
		this.gl.attachShader(shaderPorgram, fragmentShaderObject);
		this.gl.linkProgram(shaderPorgram);

		if (!this.gl.getProgramParameter(shaderPorgram, this.gl.LINK_STATUS)) {
			console.error( 'shaderProgram Error: ', gl.getError(),  gl.getProgramParameter( shaderPorgram, 35715 ),  gl.getProgramInfoLog( shaderPorgram ).trim());
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
		// 缓存会每秒快20ms左右，节省一帧的时机
		if(this.uniformLocations[name])return this.uniformLocations[name];
		this.uniformLocations[name] = this.gl.getUniformLocation(this.shaderPorgram, name);
		return this.uniformLocations[name]
	}

	// 加载shader
	loadShader(shaderStr, type) {
		let shader = this.gl.createShader(type);
		this.gl.shaderSource(shader, shaderStr);
		this.gl.compileShader(shader);
		return shader;
	}

	render() {
		// 2D 只需要两个坐标轴标识位置
		const vLen = Math.ceil(this.vertex.length / this.vSize); //几个点
		const offset = 0;// 从数据第几位开始偏移
		const normalLize = false;

		for (let key in this.buffers) {
			const bufferData = this.buffers[key];
			const bufferPosition = this.getAttribLocation(key);
			// 分别绑定数据到shader程序中
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);
			this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalLize, 0, offset);
			this.gl.enableVertexAttribArray(bufferPosition);
		}

		// 加载shader程序
		this.gl.useProgram(this.shaderPorgram);

		this.setUniformData();

		// 渲染
		if (this.vertex.length)
			this.gl.drawArrays(this.gl[this.drawType], this.offset, vLen);
	}

	onAdd(miniGL){
		this.miniGL = miniGL;
		// 获取顶点数据内存里的指针
		this.gl = miniGL.gl;
		this.indicesPointer = this.gl.createBuffer();
		this.vertexPointer = this.gl.createBuffer();
		this.initShader();
	}

	destroy(){
		const shaders = this.gl.getAttachedShaders(this.shaderPorgram);
		shaders.forEach((item)=>{
			this.gl.deleteShader(item)
		})
		this.gl.deleteProgram(this.shaderPorgram);
		for (let key in this.buffers) {
			this.gl.deleteBuffer(this.buffers[key]);
		}
		this.buffers = {}
	}
}

export default Base;