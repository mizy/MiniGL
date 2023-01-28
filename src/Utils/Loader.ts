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
export {
    load, loadImage
};
