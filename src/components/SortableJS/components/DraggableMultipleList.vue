<template>
  <div style="display: flex; justify-content: center">
    <a-space class="outer" :size="100">
      <div class="list-container">
        <a-list item-layout="horizontal" :data-source="list1" class="list1">
          <a-list-item
            slot="renderItem"
            slot-scope="item, index"
            :class="index == 2 ? 'filtered' : ''"
          >
            <div class="handle-container">
              <a-icon type="menu" class="handle"></a-icon>
            </div>
            <a-list-item-meta
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            >
              <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </div>
      <div class="list-container">
        <a-list item-layout="horizontal" :data-source="list2" class="list2">
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
    </a-space>
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
    name: 'DraggableMultipleList',
    data() {
      return {
        list1: JSON.parse(JSON.stringify(data)),
        list2: JSON.parse(JSON.stringify(data)),
      }
    },
    mounted() {
      const list1 = document.querySelector('.list1 .ant-list-items')
      const list2 = document.querySelector('.list2 .ant-list-items')
      Sortable.create(list1, {
        group: {
          name: 'shared',
          // pull: 'clone', // 克隆
        },
        handle: '.handle',
        filter: '.filtered',
        animation: 150,
        ghostClass: 'sortable-ghost', // drop placeholder的css类名
        dragClass: 'sortable-drag', // 正在被拖拽中的css类名
      })
      Sortable.create(list2, {
        group: {
          name: 'shared',
          pull: 'clone', // 克隆 值为false表示禁止拖出这个列表
          // put: false, // 禁止拖拽进这个列表， 内部可拖拽
        },
        animation: 150,
        sort: false, //禁止拖拽
        ghostClass: 'sortable-ghost', // drop placeholder的css类名
        dragClass: 'sortable-drag', // 正在被拖拽中的css类名
      })
    },
  }
</script>

<style lang="less" scoped>
  .outer {
    .list-container {
      padding: 20px;
      border: 1px solid #ddd;
      width: 500px;
      height: 400px;
      overflow: auto;
      /deep/.ant-list-items {
        min-height: 400px;
        min-width: 400px;
        .handle-container {
          width: 30px;
        }
      }
      .filtered {
        // color: #ddd;
        background-color: #f5f4f4;
      }
    }
  }
  .sortable-ghost {
    background: #c8ebfb !important;
  }
  .sortable-drag {
    opacity: 0;
  }
</style>
