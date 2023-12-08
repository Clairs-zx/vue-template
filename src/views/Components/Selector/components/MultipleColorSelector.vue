<template>
  <a-select
    ref="select"
    mode="tags"
    style="min-width: 200px"
    class="tagStyle"
    :default-value="list"
    @change="handleChange"
    :getPopupContainer="(triggerNode) => triggerNode.parentNode"
  >
    <a-select-option
      v-for="(label, index) in LabelList"
      :key="index"
      :value="label"
    >
      {{ label }}
    </a-select-option>
  </a-select>
</template>

<script>
  const labelColors = [
    {
      colorName: 'red',
      color: '#f5222d',
      borderColor: '#ffa39e',
      bgColor: '#fff1f0',
    },
    {
      colorName: 'red-2',
      color: '#cf1322',
      borderColor: '#ff7875',
      bgColor: '#ffccc7',
    },
    {
      colorName: 'volcano',
      color: '#fa541c',
      borderColor: '#ffbb96',
      bgColor: '#fff2e8',
    },
    {
      colorName: 'orange',
      color: '#fa8c16',
      borderColor: '#ffd591',
      bgColor: '#fff7e6',
    },
    {
      colorName: 'gold',
      color: '#faad14',
      borderColor: '#ffe58f',
      bgColor: '#fffbe6',
    },
    {
      colorName: 'yellow',
      color: '#fadb14',
      borderColor: '#fffb8f',
      bgColor: '#feffe6',
    },
    {
      colorName: 'lime',
      color: '#a0d911',
      borderColor: '#eaff8f',
      bgColor: '#fcffe6',
    },
    {
      colorName: 'green',
      color: '#52c41a',
      borderColor: '#b7eb8f',
      bgColor: '#f6ffed',
    },
    {
      colorName: 'cyan',
      color: '#13c2c2',
      borderColor: '#87e8de',
      bgColor: '#e6fffb',
    },
    {
      colorName: 'blue',
      color: '#1677ff',
      borderColor: '#91caff',
      bgColor: '#e6f4ff',
    },
    {
      colorName: 'geekblue',
      color: '#2f54eb',
      borderColor: '#adc6ff',
      bgColor: '#f0f5ff',
    },
    {
      colorName: 'purple',
      color: '#722ed1',
      borderColor: '#d3adf7',
      bgColor: '#f9f0ff',
    },
    {
      colorName: 'magenta',
      color: '#eb2f96',
      borderColor: '#ffadd2',
      bgColor: '#fff0f6',
    },
  ]
  export default {
    name: 'MultipleColorSelector',
    data() {
      return {
        tagStyleElem: undefined,
        LabelList: ['aaa', 'bbb', 'ccc', 'ddd', 'eee'],
        list: ['aaa'],
        curIndex: 5,
        labelColors,
      }
    },
    created() {
      this.tagStyleElem = window.document.head.appendChild(
        document.createElement('style')
      )
      this.handleChange(this.list)
      console.log('触'.charCodeAt())
    },
    methods: {
      handleChange(values) {
        let timeout = 0
        if (values.length === this.list.length - 1) {
          timeout = 300
        }
        setTimeout(() => {
          this.tagStyleElem.innerHTML = values
            .map((value, index) => {
              let idx = this.LabelList.indexOf(value)
              if (idx === -1) {
                this.LabelList.push(value)
                idx = this.curIndex++
              }
              const colorItem = this.labelColors[idx % 12]
              return `.tagStyle .ant-select-selection__choice:nth-child(${
                index + 1
              }) {color:${colorItem.color} ;background-color: ${
                colorItem.bgColor
              };border-color:${colorItem.borderColor}}`
            })
            .join('')
        }, timeout)
        this.list = values
      },
    },
  }
</script>

<style lang="less" scoped></style>
