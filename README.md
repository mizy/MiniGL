# MiniGL
2d webgl renderer

# case
![](./snapshot.png);

# [demo](./demo/index.html)
```
npm i
npm run start
```

# 一些想法
由于2d往往更侧重于形状的绘制，而较少有特效比如反光，阴影，波纹等等处理。且一旦有复杂的效果，则需要定制化shader，因此，这里我抛弃了material和geometry的概念，更加注重点，线，面等形状的绘制。如果有复杂的效果推荐自己继承基类进行复写shader和uniform，以得到体验和性能的平衡。