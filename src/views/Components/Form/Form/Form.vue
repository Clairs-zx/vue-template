<template>
  <div>
    hhhhhh
    <!-- <div>
      <a-divider>动态增加表单项</a-divider>
      <a-form :form="form">
        <a-form-item
          v-for="(k, index) in form.getFieldValue('value')"
          :key="k"
          :label="index === 0 ? 'label' : ''"
        >
          <a-input
            v-decorator="[
              `names[${k}]`,
              {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: '请输入数据'
                  }
                ]
              }
            ]"
            placeholder="请输入数据"
          ></a-input>
          <a-icon type="minus-circle-o" v-if="form.getFieldValue('value').length > 1"></a-icon>
        </a-form-item>
        <a-form-item>
          <a-button type="dashed" style="width: 60%" @click="add">
            <a-icon type="plus" /> 添加
          </a-button>
        </a-form-item>
      </a-form>
    </div> -->
  </div>
</template>

<script>
let id = 0
export default {
  // name: 'Aform'
  // data() {
  //   return {
  //     form: this.$form.createForm(this, { name: 'dynamic_form_item' })
  //   }
  // },
  // beforeCreate() {
  //   this.form.setFieldsValue({
  //     value: []
  //   })
  // },
  // methods: {
  //   add() {
  //     const { form } = this
  //     // can use data-binding to get
  //     const keys = form.getFieldValue('value')
  //     const nextKeys = keys.concat(id++)
  //     // can use data-binding to set
  //     // important! notify form to detect changes
  //     form.setFieldsValue({
  //       value: nextKeys
  //     })
  //   }
  // }
}
</script>

<style>
</style>