export default function loadTexture(gl,imagePath){
	
	return new Promise((resove,reject)=>{
		let image = new Image();
		image.onload = ()=>{
			const texture = gl.createTexture();
			//1.对纹理图像进行Y轴反转
			gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
			//2.开启0号纹理单元
			gl.activeTexture(gl.TEXTURE0);
			//3.向target绑定纹理对象
			gl.bindTexture(gl.TEXTURE_2D, texture);

			//4.配置纹理参数
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			//5.配置纹理图像
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);

			resove(texture)
		}
		image.onerror = (e)=>{
			reject(image,e)
		}
	})
}