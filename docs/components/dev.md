# 扩展自定义组件
> 如果内置组件并不能满足您的表单需求，这篇文章将介绍如何扩展自定义组件。

[Demo](/examples/add-rule.html)、[Code](https://github.com/okbeng03/vue-form-doc/tree/master/examples/add-rule.vue)

### 1. 创建组件，复用Mixin
```javascript
<template>
  <div class="checkbox">
    <label style="float: left">
      <input class="vue-form-input" type="checkbox" v-model.lazy="value"
      :disabled="definition.disabled"
      :name="name"
      :readonly="definition.readonly"
      :required="definition.required"
    />
      {{ schema.title }}
    </label>
    <div v-show="!value" class="alert alert-warning" role="alert" style="float: left;">{{ definition.help }}</div>
  </div>
</template>

<script>
import { mixins } from 'jsonschema-form-vue'

export default {
  mixins: [mixins.basicMixin]
}
</script>
```

*就跟写普通组件差不多*

### 2. 全局引用组件
```javascript
Vue.component('test', Test)
```

注意component name，最后组件type必须是这个值

### 3. 添加规则
有两种方式可以添加规则

#### 3.1 只需要definition扩展
`definition.type`是可以随意定义的，所以不需要做任何事情，只要修改`definition.item.type = 'test'`即可

#### 3.2 考虑复用性，通过`schema规则`（如format）扩展
1. 添加规则
```javascript
import VueForm from 'jsonschema-form-vue'
import { store } from 'jsonschema-form-vue'

Vue.use(Vuex)
Vue.use(VueForm)

const formStore = new Vuex.Store(store)
const generator = formStore.state.generator

// 添加一条boolean类型规则
generator.addRule('boolean', function (def, schema) {
  const type = schema.type

  if (type === 'boolean' && schema.format === 'cancelTip') {
    schema.default = true
    def.type = 'cancel-tip'
  }
})
```

因为添加了一条format规则，所以要添加format校验
```javascript
// 校验器，是vm.created时才创建的
mounted () {
  this.ajv.addFormat('cancelTip', function (value) {
    return true
  })
},
```

#### 3.3 类似内置组件一样使用
```
const schema = {
  ...
  single: {
    type: 'boolean',
    title: '是否单身',
    format: "cancelTip" // 新增规则
  }
}
const definition = [
  ...
  {
    key: '',
    title: '强烈程度',
    type: 'button-counter', // 新增规则
    description: '看看你有多期待！'
  }
]
```
