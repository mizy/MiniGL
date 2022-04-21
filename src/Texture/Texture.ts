import MiniGL from "..";

class Texture {
    /**
     * @param {Boolean} 是否支持预乘，默认为true，会提前乘好rgb*a，不需要再次乘alpha
     */
    premultiplyAlpha = true;
    miniGL: MiniGL
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    webglTexture:WebGLTexture
    constructor(miniGL:MiniGL) {
        this.miniGL = miniGL;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    lg2(n) {
		return Math.log(n) / Math.log(2);
	}
    create({ image, rect, reverseY = true, name }: {
        image: CanvasImageSource,
        rect: any,reverseY:boolean,name:string
    }) {
        if (rect) {
            this.canvas.width = rect.width;
            this.canvas.height = rect.height;
            this.canvas.setAttribute('data-name', name);
            this.ctx.drawImage(image, -rect.x, -rect.y);
            image = this.canvas;
        }
        const gl = this.miniGL.gl;
        const texture = gl.createTexture();

        // 挂载当前的空材质开始操作
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // 这个在读取图片数据前使用
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
        // 灌入图形数据
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        // 反转y轴
        if (reverseY) {
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, reverseY);
        }

        // 支持缩小纹理
        gl.generateMipmap(gl.TEXTURE_2D);

        // 放大缩小的时候都使用线性插值，减少颗粒感
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

        // 取消挂载
        gl.bindTexture(gl.TEXTURE_2D, null);
        this.webglTexture = texture;
        return texture;
    }

    /**
     * 更新材质数据
     * @param {*} texture
     * @param {*} image
     */
    update(texture:WebGLTexture, image:HTMLImageElement) {
        const gl = this.miniGL.gl;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    }
};
export default Texture;
