<template>
  <div>
    <h1>多选条件下，不可全部删除实现</h1>
    <a-select
      mode="multiple"
      v-model="selected"
      style="min-width: 200px"
      placeholder="Please select"
      @change="handleChange"
    >
      <span slot="removeIcon">
        <a-icon type="close" v-if="selected.length > 1" />
      </span>
      <a-select-option
        v-for="i in 25"
        :key="i"
        :value="i"
        :disabled="selected.length === 1 && selected[0] === i"
      >
        {{ i }}
      </a-select-option>
    </a-select>
  </div>
</template>

<script>
  export default {
    name: 'MultipleSelector',
    data() {
      return {
        selected: [],
      }
    },
    methods: {
      handleChange() {
        console.log(`selected ${this.selected}`)
      },
      keydown(e) {
        if (e.key === 'Backspace' || e.key === 'Enter') {
          e.stopPropagation()
        }
      },
    },
  }
</script>

<style lang="less" scoped></style>
