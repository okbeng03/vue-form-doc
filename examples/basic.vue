<template>
  <vue-form
    :schema="schema"
    :model="model"
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
          }
        },
        required: ['name', 'phone']
      },
      model: {
        name: '王昌彬'
      }
    }
  },
  computed: {
    ...mapState({
      data: state => state.model,
      valid: state => state.valid
    }),
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
