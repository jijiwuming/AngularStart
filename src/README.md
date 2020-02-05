# src 目录

### [app >](./app/README.md)

#### 应用主体代码目录

### assets

#### 静态资源目录，放置外部 js、css、字体文件、图片等静态资源

### environments

#### 该目录下放置打包的环境变量，一般不改动，在 main.ts 中使用，外层的 angular.json 配置中也有使用

> ### favicon.ico
>
> #### [网站角标](https://developer.mozilla.org/en-US/docs/Glossary/Favicon)(网页标签左侧图标）

> ### index.html
>
> #### html 页面主体，其中 app-root 部分将由 app 下模块替换

> ### main.ts
>
> #### 应用程序引导启动文件，在所有 ts 文件中该文件最先加载，之后会引导[AppModule](./app/app.module.ts)启动

> ### main.ts
>
> #### 应用程序入口文件，在所有 ts 文件中该文件最先加载（在外层的[angular.json](../angular.json)中有配置），之后会引导[AppModule](./app/app.module.ts)启动

> ### polyfills.ts
>
> #### polyfill 用于提供浏览器原生没有支持的一些功能，默认引入了 zone.js，详见[腻子脚本 (polyfill)](https://angular.cn/guide/browser-support#polyfills)

> ### styles.scss
>
> #### 全局样式文件，该项目采用了 scss，故后缀名为 scss，根据采用的样式文件不同，也可为 css，less 等

> ### styles.scss
>
> #### 全局样式文件，该项目采用了 scss，故后缀名为 scss，根据采用的样式文件不同，也可为 css，less 等

> ### test.ts
>
> #### 测试入口文件，在外层的[angular.json](../angular.json)中有配置，该文件将加载 src 下所有后缀为.spec.ts 的文件作为测试文件操作。
