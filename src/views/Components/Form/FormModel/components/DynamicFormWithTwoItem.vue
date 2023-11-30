<template>
  <div>
    <div class="container">
      <a-form-model ref="form" :model="form">
        <a-row
          v-for="(domain, index) in form.domains"
          :key="domain.key"
          type="flex"
          :gutter="16"
        >
          <a-col flex="1">
            <a-form-model-item
              :prop="`domains.${index}.file`"
              :rules="{
                required: true,
                message: 'domain can not be null',
              }"
            >
              <a-input
                v-model="domain.file"
                :placeholder="`domains.${index}.file`"
                addonBefore="file:"
              />
            </a-form-model-item>
          </a-col>
          <a-col flex="1">
            <a-form-model-item
              :prop="`domains.${index}.path`"
              :rules="{
                required: true,
                message: 'domain can not be null',
              }"
            >
              <a-input
                v-model="domain.path"
                :placeholder="`domains.${index}.path`"
                addonBefore="path:"
              />
            </a-form-model-item>
          </a-col>
          <a-col flex="30px">
            <a-form-model-item>
              <a-icon
                class="dynamic-delete-button"
                type="close-circle"
                @click="removeItem(index)"
              />
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-form-model-item style="margin-right: 30px">
          <a-button type="dashed" style="width: 100%" @click="addItem">
            <a-icon type="plus" /> 添加
          </a-button>
        </a-form-model-item>
        <a-form-model-item style="margin-right: 30px">
          <div style="text-align: center">
            <a-button type="primary" @click="submitForm('form')">
              提交
            </a-button>
          </div>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DynamicFormWithTwoItem',
    data() {
      return {
        form: {
          domains: [],
        },
        dynamicId: 0,
      }
    },
    mounted() {
      this.setForm([
        { file: 'file1', path: 'path1' },
        { file: 'file2', path: 'path2' },
        { file: 'file3', path: 'path3' },
      ])
    },
    methods: {
      setForm(formData) {
        this.form.domains = formData.map((item) => {
          return {
            key: this.dynamicId++,
            file: item.file,
            path: item.path,
          }
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.form.domains = this.form.domains.reduce((pre, cur) => {
              pre.push({
                file: cur.file,
                path: cur.path,
              })
              return pre
            }, [])
          }
        })
      },
      removeItem(index) {
        this.form.domains.splice(index, 1)
        this.$nextTick(() => {
          this.$refs.form.validate(() => {})
        })
      },
      addItem() {
        this.form.domains.push({
          key: this.dynamicId++,
          file: '',
          path: '',
        })
      },
    },
  }
</script>

<style lang="less" scoped>
  .ant-form-item {
    margin-bottom: 0px;
  }
  .container {
    width: 60%;
    margin: 0 auto;
  }
</style>
