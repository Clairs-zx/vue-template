<template>
  <div class="container">
    <div class="draggable">
      <h3>{{ dragging ? '拖拽中...' : '拖拽停止' }}</h3>
      <draggable
        v-model="itemList"
        draggable=".item"
        chosenClass="chosen"
        forceFallback="true"
        animation="300"
        @start="dragging = true"
        @end="dragging = false"
      >
        <transition-group>
          <div v-for="element in itemList" :key="element.id" class="item">
            <span>{{ element.name }}</span>
          </div>
        </transition-group>
        <div class="btn-add" slot="footer">
          <a-button type="dashed" @click="addItems" style="width: 80%"
            >添加</a-button
          >
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  export default {
    name: 'Simple',
    components: { draggable },
    data() {
      return {
        itemList: [
          { id: 0, name: 'John0' },
          { id: 1, name: 'John1' },
          { id: 2, name: 'John2' },
        ],
        id: 3,
        dragging: false,
      }
    },
    methods: {
      addItems() {
        this.itemList.push({ id: this.id++, name: 'John' + this.id })
      },
    },
  }
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    justify-content: center;
    .draggable {
      width: 50%;
      .item {
        height: 40px;
        width: 100%;
        border: 1px solid #ddd;
        border-bottom: 0px;
        line-height: 40px;
        &:hover {
          cursor: move;
        }
        &:last-child {
          border-bottom: 1px solid #ddd;
        }
      }
      .chosen {
        opacity: 0.1 !important;
        background: #c8ebfb !important;
      }
      .btn-add {
        margin-top: 20px;
        text-align: center;
      }
    }
  }
</style>
