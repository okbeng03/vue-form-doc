<template>
  <vue-form
    :schema="schema"
    :definition="definition"
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
        title: 'array',
        type: 'object',
        properties: {
          classes: {
            type: 'array',
            title: '课程',
            minItems: 1,
            items: {
              type: 'object',
              title: '',
              properties: {
                name: {
                  type: 'string',
                  title: '名称'
                },
                score: {
                  type: 'number',
                  title: '分数'
                }
              },
              required: ['name', 'score']
            }
          },
          name: {
            type: 'string',
            title: '姓名'
          }
        },
        required: ['classes', 'name']
      },
      definition: [
        {
          type: 'html',
          tpl: '<div class="row" style="text-align:center;"><span class="col-xs-6">名称</span><span class="col-xs-6">分数</span></div>'
        },
        'classes',
        'name'
      ],
      model: {
        classes: [
          {
            name: '语文',
            score: 80
          },
          {
            name: '数学',
            score: 100
          }
        ],
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
