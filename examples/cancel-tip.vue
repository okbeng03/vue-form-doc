<template>
  <div class="checkbox">
    <label style="float: left">
      <input class="vue-form-input" type="checkbox" v-model.lazy="value"
      :disabled="definition.disabled"
      :name="name"
      :readonly="definition.readonly"
      :required="definition.required"
    />
      {{ schema.title }}
    </label>
    <div v-show="!value" class="alert alert-warning" role="alert" style="float: left;">{{ definition.help }}</div>
  </div>
</template>

<script>
import { mixins } from 'jsonschema-form-vue'

export default {
  mixins: [mixins.basicMixin]
}
</script>
