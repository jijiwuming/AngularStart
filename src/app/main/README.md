# main 目录

#### 一个模块 module 内一般分为 model(模型层)、service（服务层）、component（组件层）三层，其中

- #### 模型层（\*.ts）用于定义需要的数据模型，一般与页面所需的视图模型一致
- #### 服务层（\*.service.ts）用于实现 xhr 交互逻辑和数据结构的转换，并统一使用 CoreModule 内的封装 dataservice 进行 http 请求
- #### 组件层（\*.component.ts）用于实现界面视图交互逻辑，如点击响应，上下拉加载等操作逻辑就在该层实现

## 目录说明

### model

#### 模型层,一般结合模板展示需要设计

> ### main.module.ts
>
> #### main 模块 ts 文件

> ### main.component.ts
>
> #### 组件 ts 文件

> ### main.component.spec.ts
>
> #### main.component.ts 对应的测试文件

> ### main.component.scss
>
> #### main.component.ts 中配置的组件样式文件

> ### main.component.html
>
> #### main.component.ts 中配置的组件模板文件

> ### main.service.ts
>
> #### 提供服务的 ts 文件，这里命名为 main.service.ts 是为了表示与 main.component.ts 的对应关系

> ### main.service.spec.ts
>
> #### main.service.ts 对应的测试文件
