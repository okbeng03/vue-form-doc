<template>
  <vue-form
    :schema="schema"
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
      resolve('http://www.tianjin-air.com/style/gsair/img/news-banner.jpg')
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
        title: 'editor',
        type: 'object',
        properties: {
          title: {
            type: 'string',
            title: '标题'
          },
          content: {
            type: 'string',
            title: '内容'
          }
        },
        required: ['title', 'content']
      },
      definition: [
        'title',
        {
          key: ['content'],
          type: 'editor',
          config: {
            init: {
              height: 300,
              image_advtab: true,
              images_upload_handler: function (blobInfo, success, failure) {
                const image = `data:image/${blobInfo.filename().split('.')[1]};base64,${blobInfo.base64()}`

                upload(image).then(uri => {
                  success(uri)
                }).catch(err => {
                  console.error(err)
                  failure(err.message || '')
                })
                success('http://www.tianjin-air.com/style/gsair/img/news-banner.jpg')
              }
            },
            plugins: 'emoticons directionality anchor autosave',
            toolbar: 'ltr rtl | emoticons'
          }
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
