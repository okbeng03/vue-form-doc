## Default Form Type
基于 JSON schema 规范描述，我们可以生成以下默认类型的表单元素：

Schema                | Form Type
:------------------- | :-------
type: string & format: date、date-time、time | date
type: string & format: image | image-update 图片上传
type: string & enum属性 | select
type: string          | text
type: number          | number
type: boolean         | checkbox
type: object          | fieldset
type: array & enum属性  | checkboxs
type: array           | list可增删


其他类型请通过Form Definition来定义，目前支持

type | Form Element
:----- | :------
editor | tinyMCE富文本编辑器
hidden | input hidden
html   | html片段
inline | 内联表单
textarea | textarea
