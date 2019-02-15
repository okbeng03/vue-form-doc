# 校验
Vue Form的校验是基于
* [ajv](https://www.npmjs.com/package/ajv)：更强大 JSON Schema 校验库，支持最新的 JSON Schema 规范
* [ajv-errors](https://www.npmjs.com/package/ajv-errors)：支持自定义校验错误提示

*[校验对应的提示](https://github.com/okbeng03/vue-form/blob/master/src/validate/localize.js)*

## 触发时机
* 表单元素值改变（默认lazy，change时才触发）
* 表单提交时

## 添加自定义校验规则
我们通过 store 暴露了 Ajv 实例，所以你可以很容易添加自定义校验规则

* 通过[ajv.addFormat](https://www.npmjs.com/package/ajv#addformatstring-name-stringregexpfunctionobject-format---ajv) 添加自定义format规则
[Demo](/examples/validate.html) [Code](https://github.com/okbeng03/tree/master/examples/validate.vue)
* 通过[ajv.addKeyword](https://www.npmjs.com/package/ajv#addkeywordstring-keyword-object-definition---ajv) 添加自定义keyword

## 修改校验提示
通过[ajv-errors](https://www.npmjs.com/package/ajv-errors)，我们可以很容易修改自定义校验错误提示
[Demo](/examples/validate.html) [Code](https://github.com/okbeng03/tree/master/examples/validate.vue)
