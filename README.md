# 说明

该项目用于解释目录结构内容

# 本层目录结构说明

### .vscode

#### vscode 相关配置文件，其中 settings.json 为工作区配置文件

### e2e

#### 端对端测试目录，主要是用于集成测试操作的，目前在项目中尚未开始使用

### node_modules

#### 依赖包下载目录，在代码仓库中不存放

### [src >](./src/README.md)

#### 主体的代码逻辑文件目录，我们主要在该目录下工作

> ### .editorconfig
>
> #### 代码样式配置文件，详见[EditorConfigEditorConfig](https://editorconfig.org/)

> ### .gitignore
>
> #### git 相关配置文件，用于规定哪些文件不纳入 git 管理，详见[gitignore](https://git-scm.com/docs/gitignore)

> ### angular.json
>
> #### Angular 项目工作区配置文件，详见[Angular 工作区配置](https://angular.cn/guide/workspace-config)

> ### browserslist
>
> #### Browserslist 配置文件，用于在某些前端工具间共享指定的浏览器和 nodejs 信息，详见[Angular 工作区配置](https://angular.cn/guide/workspace-config)

> ### karma.conf.js
>
> #### [karma](http://karma-runner.github.io/latest/index.html) 是单元测试的执行器，karma.conf.js 是 karma 的[配置文件](http://karma-runner.github.io/4.0/config/configuration-file.html)

> ### package-lock.json
>
> #### 类似 package.json 文件，指定版本号

> ### package.json
>
> #### 包管理器 npm 的配置文件，类似后端 pom.xml 文件，主要列出了该应用程序所使用的第三方依赖包

> ### tsconfig.app.json
>
> #### 基于 tsconfig.json 配置文件的基础进行扩展配置,主要针对 src 下非测试文件的 ts 文件

> ### tsconfig.json
>
> #### typescript 编译器[配置文件](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)（基础配置）

> ### tsconfig.spec.json
>
> #### 基于 tsconfig.json 配置文件的基础进行扩展配置,主要针对 src 下测试用和定义类型用的 ts 文件

> ### tslint.json
>
> #### [Tslint](https://palantir.github.io/tslint/)配置文件,用于配置 ts 编码规范
