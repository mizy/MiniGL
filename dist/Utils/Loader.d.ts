/**
 * 加载资源
 * @param url
 * @param option
 * @returns
 */
declare function load(url: string, option?: Record<string, any>): Promise<any>;
/**
 * 加载图片
 * @param  {} url
 */
declare function loadImage(url: string): Promise<HTMLImageElement>;
export { load, loadImage };
