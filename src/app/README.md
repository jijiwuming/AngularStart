# app 目录

### [core >](./core)

#### 核心模块，仅加载一次的模块，一般用于存放[单例服务](https://angular.cn/guide/singleton-services#singleton-services)

### [main >](./main)

#### 自定义的一个模块

### [shared >](./shared)

#### 公用模块，主要存放公共的组件（components）、指令（directives）、管道（pipes）等，在其他多个模块内可按需重复引入（imports）

> ### app.module.ts
>
> #### 整个应用程序的整体模块文件
>
> - #### 模块文件需引入必要的其他模块（module）和服务（service）,并将模块内使用到的组件（component）在 declarations 中给出

> ### app-routing.module.ts
>
> #### app.module 的路由模块，在 app.module.ts 中被引入，该类也可与 module.ts 文件合并，参考[main.module.ts](./main/main.module.ts)

> ### app.component.ts
>
> #### 组件 ts 文件
>
> - #### 组件 ts 文件需给出关联该组件的自定义 HTML 元素名称（selector）、模板文件（templateUrl）,样式文件（styleUrls）
> - #### 组件 ts 文件中一般用于编写界面相关操作的逻辑

> ### app.component.spec.ts
>
> #### app.component.ts 对应的测试文件

> ### app.component.scss
>
> #### app.component.ts 中配置的组件样式文件

> ### app.component.html
>
> #### app.component.ts 中配置的组件模板文件
