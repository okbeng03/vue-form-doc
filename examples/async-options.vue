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
        title: 'options',
        type: 'object',
        properties: {
          name: {
            type: 'string',
            title: '名称'
          },
          source: {
            type: 'string',
            title: '证件类型',
            default: '-1'
          }
        },
        required: ['name', 'source']
      },
      definition: [
        {
          type: 'html',
          tpl: '<div class="alert alert-info" role="alert">这不过就是一段表单说明，但是我不知道写什么好！</div>'
        },
        'name',
        {
          key: 'source',
          type: 'select'
        }
      ],
      model: {
        name: '王昌彬',
        source: 'idcard'
      }
    }
  },
  mounted () {
    this.setOptions({
      key: 'source',
      options: [
        {
          label: '身份证',
          value: 'idcard'
        },
        {
          label: '护照',
          value: 'passport'
        }
      ]
    })
  },
  computed: {
    ...mapState({
      data: state => state.model,
      valid: state => state.valid
    }),
  },
  methods: {
    ...mapMutations([
      'setOptions',
      'validate'
    ]),
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
