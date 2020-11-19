# MiniGL
2d webgl renderer
![](./demo.png)
![](./snapshot.png)

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

# develope
```
npm i
npm run start
```

# 一些想法
由于2d往往更侧重于形状的绘制，而较少有特效比如反光，阴影，波纹等等处理。且一旦有复杂的效果，则需要定制化shader，因此，这里我抛弃了material和geometry的概念，更加注重点，线，面等形状的绘制。如果有复杂的效果推荐自己继承基类进行复写shader和uniform，以得到体验和性能的平衡。