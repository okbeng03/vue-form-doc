# 容器组件

元素 | definition | 备注
:-- | :-- | :--
fieldset | - |
array | isFixed(=true 不能移动) | 支持增删、拖拽移动顺序
inline | `items[].col`(bootstrap row、col) | 内联表单

## Mixin
* [mixins/object.js](https://github.com/okbeng03/vue-form/blob/master/src/components/mixins/object.js)
提供了object获取、设置值的功能
* [mixins/array.js](https://github.com/okbeng03/vue-form/blob/master/src/components/mixins/array.js)
提供了array获取、设置值的功能；同时提供增加、删除元素的功能

## 注意
`schema.type = array`，当items少于等于4个时，构建器为了节省空间，会子集将`definition.type = 'inline'`，默认为「内联表单」模式，如果你这时需要的是一个`fieldset`，那么自定义下`definition`；例如
