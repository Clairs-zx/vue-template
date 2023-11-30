<template>
  <div>
    <a-list item-layout="horizontal" :data-source="data" ref="list">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
  import Sortable from 'sortablejs'
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ]
  export default {
    name: 'DraggableSingleList',
    data() {
      return {
        data,
      }
    },
    mounted() {
      const list = document.querySelector('.ant-list-items') // 元素选择器名称根据实际内容替换
      // const _this = this
      Sortable.create(list, {
        // 官网上的配置项,加到这里面来,可以实现各种效果和功能
        animation: 150,
        ghostClass: 'sortable-ghost', // drop placeholder的css类名
        dragClass: 'sortable-drag', // 正在被拖拽中的css类名
        // onEnd({ newIndex, oldIndex }) {
        //   const currRow = _this.data.splice(oldIndex, 1)[0]
        //   _this.data.splice(newIndex, 0, currRow)
        // },
      })
    },
  }
</script>

<style lang="less" scoped>
  .sortable-ghost {
    background: #c8ebfb !important;
  }
  .sortable-drag {
    opacity: 0;
  }
</style>
