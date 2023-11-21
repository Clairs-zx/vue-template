<template>
  <div>
    <a-form-model ref="dynamicValidateForm" :model="dynamicValidateForm">
      <a-space
        v-for="(domain, index) in dynamicValidateForm.domains"
        :key="index"
        style="display: flex; align-items: baseline"
      >
        <a-form-model-item
          :prop="`domains.${index}.file`"
          :rules="{
            required: true,
            message: 'domain can not be null',
            trigger: ['change', 'blur'],
          }"
        >
          <a-input
            v-model="domain.file"
            :placeholder="`domains.${index}.file`"
            addonBefore="file:"
          />
        </a-form-model-item>
        <a-form-model-item
          :prop="`domains.${index}.path`"
          :rules="{
            required: true,
            message: 'domain can not be null',
            trigger: ['change', 'blur'],
          }"
        >
          <a-input
            v-model="domain.path"
            :placeholder="`domains.${index}.path`"
            addonBefore="path:"
          />
        </a-form-model-item>
        <a-form-model-item>
          <a-icon
            class="dynamic-delete-button"
            type="close-circle"
            @click="removeDomain(domain)"
          />
        </a-form-model-item>
      </a-space>
      <a-form-model-item>
        <a-button type="dashed" style="width: 60%" @click="addDomain">
          <a-icon type="plus" /> Add field
        </a-button>
      </a-form-model-item>
      <a-form-model-item>
        <div style="text-align: center; width: 60%">
          <a-button
            type="primary"
            html-type="submit"
            @click="submitForm('dynamicValidateForm')"
          >
            Submit
          </a-button>
        </div>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
  export default {
    name: 'DynamicFormWithItem',
    data() {
      return {
        dynamicValidateForm: {
          domains: [],
        },
      }
    },
    mounted() {
      console.log(this.dynamicValidateForm.domains)
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      removeDomain(item) {
        let index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
        this.$nextTick(() => {
          this.$refs.dynamicValidateForm.validate(() => {})
        })
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          key: Date.now(),
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
</style>
