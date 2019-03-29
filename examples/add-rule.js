import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import VueForm from 'jsonschema-form-vue'
import { store } from 'jsonschema-form-vue'
import App from './add-rule.vue'
import CancelTip from './cancel-tip.vue'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueForm)

const formStore = new Vuex.Store(store)
const generator = formStore.state.generator

generator.addRule('boolean', function (def, schema) {
  const type = schema.type

  if (type === 'boolean' && schema.format === 'cancelTip') {
    schema.default = true
    def.type = 'cancel-tip'
  }
})

Vue.component('cancel-tip', CancelTip)
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button type="button" v-on:click="count++">You clicked me {{ count }} times.</button>'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: formStore,
  components: { App },
  template: '<App ref="app"/>'
})
