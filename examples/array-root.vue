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
        title: '课程',
        type: 'array',
        items: {
          type: 'object',
          title: '',
          properties: {
            name: {
              type: 'string',
              title: '课程'
            },
            score: {
              type: 'number',
              title: '分数'
            }
          },
          required: ['name', 'score']
        }
      },
      model: [
        {
          name: '语文',
          score: 80
        },
        {
          name: '数学',
          score: 100
        }
      ]
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
