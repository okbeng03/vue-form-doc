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
        title: 'basic',
        type: 'object',
        properties: {
          name: {
            type: 'string',
            title: '姓名'
          },
          sex: {
            type: 'string',
            title: '性别',
            format: 'sex',
            enum: ['0', '1'],
            default: '0',
            errorMessage: {
              format: '请选择正确的性别！'
            }
          }
        },
        required: ['name', 'sex']
      },
      definition: [
        'name',
        {
          key: 'sex',
          options: [
            {
              label: '男',
              value: '0'
            },
            {
              label: '女',
              value: '1'
            }
          ]
        }
      ],
      model: {
        name: '王昌彬'
      }
    }
  },
  computed: {
    ...mapState({
      ajv: state => state.ajv,
      data: state => state.model,
      valid: state => state.valid
    })
  },
  mounted () {
    this.ajv.addFormat('sex', function (value) {
      return value === '0'
    })
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
