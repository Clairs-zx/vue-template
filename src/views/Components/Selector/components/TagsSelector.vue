<template>
  <div>
    <div style="margin-bottom: 10px">
      <a-space size="large">
        <span>单选 </span>
        <a-select v-model="defaultValue" style="min-width: 200px" allowClear>
          <a-select-option
            v-for="item in Array(5).keys()"
            :value="item"
            :key="item"
            >{{ item }}</a-select-option
          >
        </a-select>
        <span>{{
          defaultValue === undefined ? 'undefined' : defaultValue
        }}</span>
      </a-space>
    </div>
    <div style="margin-bottom: 10px">
      <a-space size="large">
        <span>多选</span>
        <a-select
          mode="multiple"
          v-model="multipleValue"
          style="min-width: 200px"
          allowClear
        >
          <a-select-option
            v-for="item in Array(5).keys()"
            :value="item"
            :key="item"
            >{{ item }}</a-select-option
          >
        </a-select>
        <span>{{ multipleValue }}</span>
      </a-space>
    </div>
    <div style="margin-bottom: 10px">
      <a-space size="large">
        <span>标签</span>
        <a-select
          mode="tags"
          v-model="tagsValue"
          style="min-width: 200px"
          allowClear
        >
          <a-select-option
            v-for="item in Array(5).keys()"
            :value="item.toString()"
            :key="item"
            >{{ item }}</a-select-option
          >
        </a-select>
        <span>{{ tagsValue }}</span>
      </a-space>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        defaultValue: undefined,
        multipleValue: [],
        tagsValue: [],
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      },
    },
  }
</script>

<style></style>
