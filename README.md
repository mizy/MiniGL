# [MiniGL](https://mizy.github.io/MiniGL)
2d WebGL renderer，
+ 纯原生2d渲染库，支持基础图形渲染和鼠标交互操作，使用glMatrix做通用矩阵库。
+ 可以进行自由图形变换,支持原生shader,webGL2.0
+ 可用于高性能2d渲染场景
+ 现已支持龙骨动画^_^
 
![](./demo.png)
![](./snapshot2.png)

# case
+ [基本图形](https://mizy.github.io/MiniGL/demo/main.html)
+ 点
	* [点颜色](https://mizy.github.io/MiniGL/demo/points/points.html)
	* [点闪烁](https://mizy.github.io/MiniGL/demo/points/shrink.html)
+ 线
    * [飞线](https://mizy.github.io/MiniGL/demo/line/flyline.html)
	* [宽度线](https://mizy.github.io/MiniGL/demo/line/meshline.html)
+ 面
	* [图片](https://mizy.github.io/MiniGL/demo/image/index.html)
+ shader
	* [自定义shader](https://mizy.github.io/MiniGL/demo/customShader/index.html)
+ InstanceMesh(webGL2)
	* [instanceMesh](https://mizy.github.io/MiniGL/demo/instanceMesh/index.html)
  * [instanceArrow](https://mizy.github.io/MiniGL/demo/arrow/arrow.html)
+ DragonBones动画 
	* [骨骼动画](https://mizy.github.io/MiniGL/demo/dragonBones/index.html)
    * [Mesh动画-眼部追踪](https://mizy.github.io/MiniGL/demo/dragonBones/eyetrack.html)

# 扩展
+ 继承MiniGL.Group,并复写setData,render方法和shaders属性来生成一个具有子元素操纵能力的类
+ 继承MiniGL.Base, 并复写shaders,setData,render等方法生成一个mesh类

## shader扩展
以下变量会被注入
```
    uniform mat3 transform; //视图转换矩阵
    uniform mat3 modelView; // 模型转换矩阵
    uniform float pixelRatio;; // 渲染倍数
    uniform float ratio;; // 渲染宽高比
```
使用如下
```
    vec3 mPosition = transform * modelView * vec3(position,1.);
```
由于开启了深度监测，可以通过config.z 来指定层级覆盖关系(默认使用子元素数组顺序渲染)
```
    vec3 mPosition = transform * modelView * vec3(position,z);
```

# develope
```
npm i
npm run start
```
# doc
[doc](https://mizy.github.io/MiniGL/docs/index.html)

# 一些想法
由于2d往往更侧重于形状的绘制，而较少有特效比如反光，阴影，波纹等等处理。且一旦有复杂的效果，则需要定制化shader，因此，这里我抛弃了material和geometry的概念，更加注重点，线，面等形状的绘制。如果有复杂的效果推荐自己继承基类进行复写shader和uniform，以得到体验和性能的平衡。