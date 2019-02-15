# 快速上手
本节通过一个简单的例子介绍如何快速上手。[Demo](/vue-form-doc/examples/basic.html)

## 1. 首先引入 Vue、Vuex、lodash、jsonschema-form-vue
```bash
npm install vue vuex lodash jsonschema-form-vue
```

## 2. 编写组件
```javascript
<template>
  <vue-form
    :schema="schema"
    :model="model"
  >
  </vue-form>
</template>

<script>
export default {
  data () {
    return {
      schema: {
        title: 'basic',
        type: 'object',
        properties: {
          name: {
            type: 'string',
            title: '姓名'
          },
          phone: {
            type: 'string',
            title: '手机',
            pattern: '^1[3578]\\d{9}$',
            description: '请输入正确的手机号码'
          }
        },
        required: ['name', 'phone']
      },
      model: {
        name: '王昌彬'
      }
    }
  }
}
</script>

```

## 3. 挂载初始化
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import VueForm from 'jsonschema-form-vue'
import { store } from 'jsonschema-form-vue'
import App from './basic.vue'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueForm)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  components: { App },
  template: '<App ref="app"/>'
})
```

## 4. 渲染结果
![vue form basic use](https://cbu01.alicdn.com/cms/upload/2016/305/655/2556503_1625054590.png)
