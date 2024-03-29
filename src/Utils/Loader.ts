/**
 * 加载资源
 */
function load(url:string, option: Record<string,any> = {}) {
    if (option.type === 'image') {
        return loadImage(url);
    }
    option = Object.assign({
        method: 'GET',
        headers: {}
    }, option);
    return fetch(url, {...option as RequestInit}).then(res=>{
        if (option.responseType) {
            return res[option.responseType]();
        }
        return res.json();
    });
}
/**
 * 加载图片
 */
function loadImage(url:string):Promise<HTMLImageElement> {
   return new Promise((resolve, reject)=>{
        let image = new Image();
        image.src = url;
        image.onload = ()=>{
            resolve(image);
        };
        image.onerror = (e)=>{
            reject(e);
        };
   });
}
function loadTexture(gl: WebGL2RenderingContext, imagePath: string) {
    function lg2(n) {
        return Math.log(n) / Math.log(2);
    }
    return loadImage(imagePath).then(image => {
        const texture = gl.createTexture();

        // 挂载当前的空材质开始操作
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // 灌入图形数据
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        // 反转y轴
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);

        // 支持放大缩小渐进加载和插值算法，整数倍情况
        if (lg2(image.width) === 0 && lg2(image.height) === 0) {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
            gl.generateMipmap(gl.TEXTURE_2D);
        } else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        }

        // 取消挂载
        gl.bindTexture(gl.TEXTURE_2D, null);
        return texture;
    });
}
export {
    load, loadImage, loadTexture
};
