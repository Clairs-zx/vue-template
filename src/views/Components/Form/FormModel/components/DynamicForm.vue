<template>
  <div class="container">
    <a-form-model ref="form" :model="form">
      <a-form-model-item
        v-for="(domain, index) in form.domains"
        :key="domain.key"
        v-bind="index === 0 ? formItemLayout : formItemLayoutWithOutLabel"
        :label="index === 0 ? 'Domains' : ''"
        :prop="'domains.' + index + '.value'"
        :rules="{
          required: true,
          message: 'domain can not be null',
          trigger: 'blur',
        }"
      >
        <a-input
          v-model="domain.value"
          placeholder="please input domain"
          style="width: 60%; margin-right: 8px"
        />
        <a-icon
          v-if="form.domains.length > 1"
          class="dynamic-delete-button"
          type="minus-circle-o"
          @click="removeItem(index, 'form')"
        />
      </a-form-model-item>
      <a-form-model-item v-bind="formItemLayoutWithOutLabel">
        <a-button type="dashed" style="width: 60%" @click="addItem">
          <a-icon type="plus" /> 添加
        </a-button>
      </a-form-model-item>
      <a-form-model-item v-bind="formItemLayoutWithOutLabel">
        <div style="text-align: center; width: 60%">
          <a-space>
            <a-button type="primary" @click="submitForm('form')">
              提交
            </a-button>
            <a-button @click="resetForm('form')"> 重置 </a-button>
          </a-space>
        </div>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
  export default {
    name: 'DynamicForm',
    data() {
      return {
        formItemLayout: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 4 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 20 },
          },
        },
        formItemLayoutWithOutLabel: {
          wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 20, offset: 4 },
          },
        },
        form: {
          domains: [],
        },
        dynamicId: 0,
      }
    },
    mounted() {
      this.setForm(['111', '222'])
    },
    methods: {
      setForm(formData) {
        this.$nextTick(() => {
          this.form.domains = formData.map((item) => {
            return {
              key: this.dynamicId++,
              value: item,
            }
          })
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const formData = this.form.domains.reduce((pre, item) => {
              pre.push(item.value)
              return pre
            }, [])
            console.log(formData)
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      removeItem(index, formName) {
        this.form.domains.splice(index, 1)
        this.$$nextTick(() => {
          this.$refs[formName].validate(() => {}) // 删除以后需要重新校验一下
        })
      },
      addItem() {
        this.form.domains.push({
          key: this.dynamicId++,
          value: '',
        })
      },
    },
  }
</script>

<style lang="less" scoped>
  .dynamic-delete-button {
    cursor: pointer;
    position: relative;
    top: 4px;
    font-size: 24px;
    color: #999;
    transition: all 0.3s;
  }
  .dynamic-delete-button:hover {
    color: #777;
  }
  .ant-form-item {
    margin-bottom: 12px;
  }
  .container {
    width: 80%;
    margin: 0 auto;
  }
</style>
