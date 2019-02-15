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
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

function upload (image) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: 'http://ava.com/api/imagemin',
      data: {
        data: image
      }
    }).then(response => {
      console.log(response)
      resolve('http://aaa.jpg')
    }).catch(err => {
      console.error(err)
      reject(err)
    })
  })
}

export default {
  data () {
    return {
      schema: {
        title: 'basic',
        type: 'object',
        properties: {
          avatar: {
            type: 'string',
            title: '头像',
            format: 'image'
          }
        },
        required: ['avatar']
      },
      definition: [
        {
          key: 'avatar',
          type: 'image-upload',
          config: {
            action: upload
          }
        }
      ],
      model: {
        // avatar: 'http://www.vue-form.com/huiyuan.jpg'
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
