<!--
 * @Author: ZhXIn
 * @Date: 2023-10-13 15:21:07
 * @LastEditTime: 2023-10-13 15:23:36
 * @Description: 
-->
<template>
  <a-select
    mode="multiple"
    v-model="selected"
    style="width: 100%"
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
</template>

<script>
  export default {
    name: 'HomePage',
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

<style></style>
