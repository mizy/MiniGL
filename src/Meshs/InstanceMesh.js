import instanceMeshShader from '../Shaders/instanceMeshShader';
import Base from './Base';
class InstanceMesh extends Base {
	drawType = "TRIANGLES";
	offset=0;//array.BYTES_PER_ELEMENT * indicesEachLength

	constructor(config={
        // 一个值对应几个对象 
        instanceDivisor:1
	}) {
		super(config);
		this.shaders = {
			vertex: instanceMeshShader.vertexShader,
			fragment: instanceMeshShader.fragmentShader
		}
		this.uniformData = {
			z:{
				value:config.z||1,
				type:"uniform1f"
			},
		}
		this.init(config);
		this.vSize = 2;
		
	}

	setMap(src){
		return loadTexture(this.gl,src).then((texture)=>{
			this.uniformData['map'] = {
				type:"uniform1i",//image
				value:0,//0号纹理传递
				texture
			};
			this.uniformsNeedUpdate = true;
		});
	}

	setData(data, indices) {
		const {
			miniGL:{viewport}
		} = this;
		this.dispose();
		this.uniformData.transform={
			value:viewport.transform,
			type:"uniformMatrix3fv"
		}
		const points = [];
		const colors = [];
		this.data = data;
		data.forEach(item=>{
			const coord = [item.position.x,item.position.y];
			const color = item.color||[0,0.1,0.2,1];
			colors.push(...color);
			points.push(...coord);
		});
		this.vertex = points;
		this.setBufferData(points, "position", 2);
		this.setBufferData(colors, "color", 4);
		this.setIndices(indices);
	}

	setBufferDatas({
		position,color,indices,uvs
	}){
		const {
			miniGL:{viewport}
		} = this;
		this.dispose();
		this.uniformData.transform={
			value:viewport.transform,
			type:"uniformMatrix3fv"
		}
		this.vertex = position;
		this.setBufferData(position, "position", 2);
		this.setBufferData(color, "color", 4);
		this.setBufferData(uvs, "uv", 2);
		this.setIndices(indices);
	}

	setIndices(input) {
		let indices = [];
		// 支持显示网格线
		if(this.config.wireFrame&&this.drawType==="TRIANGLES"){
			for(let i = 0;i<input.length-2;i+=3){
				indices.push(input[i],input[i+1],input[i+1],input[i+2],input[i+2],input[i]);
			}
		}else{
			indices=input;
		}
		this.indices = indices;
		this.count = !this.count?indices.length:this.count;
		// 顶点buffer
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);
		this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this.gl.STATIC_DRAW);
	}

    // 设置实例数组
    setInstanceData(instanceData){
        this.instanceData = instanceData;
        const eachLength = instanceData[0].length;
        const arr = [];
        this.instanceData.forEach(item=>{
            arr.push(...item)
        })
        this.setBufferData(arr,'instanceOffset',eachLength)
    }

	render() {
		// 2D 只需要两个坐标轴标识位置
		const offset = 0;// 从数据第几位开始偏移
		const normalize = false;

		// 分别绑定数据到shader程序中
		for (let key in this.buffers) {
			const bufferData = this.buffers[key];
			const bufferPosition = this.getAttribLocation(key);
			// 分别绑定数据到shader程序中
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData);//绑定数据
            //挂载到对应的指针上
			this.gl.vertexAttribPointer(bufferPosition, this.buffersSize[key], this.gl.FLOAT, normalize, 0, offset);
			this.gl.enableVertexAttribArray(bufferPosition);
        }
        //加载实例偏移数组，这里写死instanceOffset的数据指针名，注意不要导致命名冲突了
        this.gl.vertexAttribDivisor(this.getAttribLocation('instanceOffset'),this.config.instanceDivisor)

		// 使用顶点数据
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indicesPointer);

		// 加载shader程序
		this.gl.useProgram(this.shaderPorgram);
        // 配置uniform
		this.setUniformData();

		// 渲染
		if (this.indices.length){
			const drawType = this.config.wireFrame?"LINES":this.gl[this.drawType];
			// offset必须乘以类型数组的长度，意味着要从内存中数据的对应字节数开始算 根据类型乘对应的TypeArray.BYTES_PER_ELEMENT
			this.gl.drawElementsInstanced(drawType, this.count, this.gl.UNSIGNED_SHORT, this.offset,this.instanceData.length);
		}
	}
}
export default InstanceMesh;