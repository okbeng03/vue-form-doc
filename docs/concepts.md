## 核心概念
![Vue Form架构](https://cbu01.alicdn.com/cms/upload/2016/035/955/2559530_1625054590.png)

Vue Form 使用[Vue.js](http://cn.vuejs.org/guide/)的响应式 (Reactive) 和组件化 (Composable) 的强大之处，基于 bootstrap UI 实现了一套常见表单所需要的Components，包括：
1. 容器组件
2. 表单组件

*这些组件都继承自相应的mixins，同时可以自己扩展自定义组件(后面会介绍到)*

## 模型驱动
Vue Form 希望通过实际的表单数据模型
* 自动渲染表单
* 提供表单校验能力
* 表单数据获取提交

所以我们基于业界标准规范，主要的数据模型包含以下三个：

### [JSON schema](http://gitlab.alibaba-inc.com/river/spec/blob/master/JSON-Schema.md)
> JSON Schema是Gary Court 向 IETF 提交的用于描述 JSON 数据结构的规范；
> 其中包含配套工具可以满足 `表单数据描述` 和 `表单校验` 功能；同时一份通用描述可以统一 `前端 & 后端` 校验逻辑，保证体验一致性。

更多 [JSON Schema](http://gitlab.alibaba-inc.com/river/spec/blob/master/JSON-Schema.md) 的描述、关键字定义等可以在此参考

所以，JSON schema 正好满足要求：
1. 描述了JSON数据类型，表单所需要的required、max、min等
2. 规范描述了JSON数据校验规则

但是，JSON schema 并非无所不能
* 通过类型规则能够自动生成的表单元素还是有限
* inline、tab等跟布局相关的不能支持
* placeholder、readonly等表单属性
* JSON schema 很多规则都是用来约定数据的，并不适合于表单生成，否则循环生成表单元素时要进行很多过滤

### Form Definition
为了不偏离 JSON schema 的初衷，我们需要另外一种描述来定义表单(Form Definition)。它可以：
* 改变表单类型
* 定义表单顺序
* 增删描述
* 布局
* 表单属性
* 一些扩展表单元素的配置
* ...

### Model
表单数据模型，用于初始化数据

### Validator
Vue form的表单校验是通过 JSON schema 的描述进行校验的，所以这样不管是前端还是后端就可以共用一套校验逻辑了。触发校验的时机：
* 表单元素值改变（默认lazy，change时才触发）
* 表单提交时
