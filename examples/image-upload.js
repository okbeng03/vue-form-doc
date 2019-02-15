import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import VueForm from 'jsonschema-form-vue'
import { store } from 'jsonschema-form-vue'
import App from './image-upload.vue'

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
