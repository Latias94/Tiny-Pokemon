# Tiny Pokemon

![](https://i.loli.net/2018/12/20/5c1bad5b65a87.png)

惊闻最近 Unity 出了支持开发 H5 小游戏的 Tiny Mode 预览版包，来尝试做点小游戏练练手。目前 Tiny Mode 在各方面的支持也十分有限，自己有时间会继续开发。

图片资源来自 [StormBurpee/Unity_Pokemon](https://github.com/StormBurpee/Unity_Pokemon/tree/master/Assets/Spritesheets)。

游戏也上传到了我的博客中： [Pokemon](http://frankorz.com/pokemon/)

对 Tiny Project 有兴趣的同学可以参考下我在 B 站上传的的 [【汉化】Unity 小游戏模式教程 Project Tiny Workshop](https://www.bilibili.com/video/av38235568)，只翻译了前三段视频，不过应该够了解 Project Tiny 了~

## 安装
1. 安装 Project Tiny 包
    1. Windows -> Package Manager -> Advanced -> 勾选 Show preview packages
    2. 左边列表选中 Tiny Mode -> 右边点 Install 安装
2. `Assets/Pokemon.utproject` 是项目入口，双击打开，或者左上角 Tiny 菜单点 Open Project 打开。
3. 点 Play 按钮，会自动在浏览器打开游戏项目。

## 注意
Build 游戏之后，文件会生成在 `Tiny Pokemon\TinyExport\Pokemon\html5\development\bin` 下。需要把上级菜单的 ScriptAssemblies 文件夹复制到 bin 文件夹下，并且修改 index.html 中 JS 文件的引用。

```html
<!DOCTYPE html>
<html>
  <head>
    ...
    <script src="ScriptAssemblies/tsc-emit.js"></script>
    ...
    <title>Pokemon</title>
  </head>
  <body>
  </body>
</html>
```
