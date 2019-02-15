# 基础表单组件

元素 | definition | schema | 备注
:--- | :--- | :-- | :--
text | placeholder、description、disabled、readonly | maxLength、minLength、pattern |
number | placeholder、description、disabled、readonly、`step` | maximum、minimum |
textarea | placeholder、description、disabled、readonly、`row` | maxLength、minLength |
checkbox | description、disabled、readonly | - |
checkboxs | description、disabled、readonly、`options` | - |
hidden | - | - |
html | tpl(html片段) | - |
select | description、disabled、`options`、`config` | - | 基于[vue-select](https://www.npmjs.com/package/vue-select)
date | placeholder、description、disabled、`config` | format | 基于[vue2-datepicker](https://www.npmjs.com/package/vue2-datepicker)
image-upload | `config` | format | 基于[vue-picture-input](https://www.npmjs.com/package/vue-picture-input) 
editor | `config` | - | 基于[@tinymce/tinymce-vue](https://www.npmjs.com/package/@tinymce/tinymce-vue)

### iamge-upload
图片上传组件 [Demo](/vue-form-doc/examples/image-upload.html)、[Code](https://github.com/okbeng03/vue-form-doc/tree/master/examples/image-upload.vue)

图片上传需要服务器支持，所以必须提供 `config.action`方法，处理用户上传的图片，并返回图片地址；如：
```javascript
{
  type: 'image-upload',
  config: {
    action: function (image) {
      // image base64
      return new Promise((resolve, reject) => {
        // 图片上传操作
        resolve(uri)
      })
    }
  }
}
```

### editor
富文本编辑组件 [Demo](/vue-form-doc/examples/editor.html)、[Code](https://github.com/okbeng03/vue-form-doc/tree/master/examples/editor.vue)

基于[@tinymce/tinymce-vue](https://www.npmjs.com/package/@tinymce/tinymce-vue)，默认支持以下插件
> 'lists', 'advlist', 'image', 'table', 'textcolor', 'colorpicker', 'codesample', 'contextmenu', 'link', 'fullscreen', 'help', 'preview', 'searchreplace', 'hr', 'wordcount', 'autosave'

toolbar配置：
> 'undo redo | styleselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent | table hr link image | searchreplace | fullscreen preview help'

可通过`config.plugins`、`config.toolbar`进行扩展；其他配置参考[tinymce-vue](https://www.npmjs.com/package/@tinymce/tinymce-vue)

----

## Mixin
[mixins/basic.js](https://github.com/okbeng03/vue-form/blob/master/src/components/mixins/basic.js)
提供了基础表单组件基本功能。所以基础组件一般只需基于此扩展
```javascript
module.exports = {
  mixins: [basicMixin]
};
```
