<template>
  <VueDraggable v-model="form" animation="150" target=".ant-form">
    <a-form-model ref="form" :model="form">
      <a-form-model-item
        v-for="(item, index) in form"
        :key="item.key"
        :prop="'form.' + index + '.value'"
        :rules="{
          required: true,
          trigger: 'blur',
        }"
      >
        <span style="display: inline-block; width: 30px">{{ index + 1 }}</span>
        <a-input v-model="item.value" style="width: 60%; margin-right: 8px" />
        <a-icon
          class="dynamic-delete-button"
          type="minus-circle-o"
          @click="remove(item)"
        />
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="dashed" style="width: 60%" @click="add">
          <a-icon type="plus" /> Add
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </VueDraggable>
</template>

<script>
  import { VueDraggable } from 'vue-draggable-plus'

  export default {
    name: 'DraggableDynamicForm',
    components: { VueDraggable },
    data() {
      return {
        form: [],
      }
    },
    methods: {
      remove(item) {
        let index = this.form.indexOf(item)
        if (index !== -1) {
          this.form.splice(index, 1)
        }
      },
      add() {
        this.form.push({
          value: '',
          key: Date.now(),
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
</style>
