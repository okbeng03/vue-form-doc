<template>
  <vue-form
    :schema="schema"
    :model="model"
    :definition="definition"
  >
    <div class="form-group form-action">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="button" class="btn btn-primary" @click="submit">提交</button>
      </div>
    </div>
  </vue-form>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

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
          },
          single: {
            type: 'boolean',
            title: '是否单身',
            format: "cancelTip"
          }
        },
        required: ['name', 'phone', 'single']
      },
      definition: [
        'name',
        'phone',
        {
          key: 'single',
          className: 'c-single',
          help: '这可是一场单身派对哦！！！'
        },
        {
          key: '',
          title: '强烈程度',
          type: 'button-counter',
          description: '看看你有多期待！'
        }
      ],
      model: {
        name: '王昌彬'
      },
      isInit: false
    }
  },
  computed: {
    ...mapState({
      data: state => state.model,
      valid: state => state.valid,
      ajv: state => state.ajv
    }),
  },
  mounted () {
    if (!this.isInit) {
      this.ajv.addFormat('cancelTip', function (value) {
        return true
      })
      this.isInit = true
    }
  },
  methods: {
    submit () {
      console.log(this.data)
      this.validate()

      if (this.valid) {
        console.log('submit form !')
      }
    },
    ...mapMutations([
      'validate'
    ])
  }
}
</script>
