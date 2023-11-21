<template>
  <div class="container">
    <div style="display: flex; justify-content: center">
      <a-space>
        <div class="draggable-ctn">
          <draggable
            v-model="itemList1"
            group="people"
            draggable=".item"
            chosenClass="chosen"
            forceFallback="true"
            animation="300"
            @start="dragging = true"
            @end="dragging = false"
          >
            <transition-group class="transition-group">
              <div v-for="element in itemList1" :key="element.id" class="item">
                <span>{{ element.name }}</span>
              </div>
            </transition-group>
            <div class="btn-add" slot="footer">
              <a-button type="dashed" @click="addItems(1)" style="width: 80%"
                >添加</a-button
              >
            </div>
          </draggable>
        </div>
        <div class="draggable-ctn">
          <draggable
            v-model="itemList2"
            group="people"
            draggable=".item"
            chosenClass="chosen"
            forceFallback="true"
            animation="300"
            @start="dragging = true"
            @end="dragging = false"
          >
            <transition-group class="transition-group">
              <div v-for="element in itemList2" :key="element.id" class="item">
                <span>{{ element.name }}</span>
              </div>
            </transition-group>
            <div class="btn-add" slot="footer">
              <a-button type="dashed" @click="addItems(2)" style="width: 80%"
                >添加</a-button
              >
            </div>
          </draggable>
        </div>
      </a-space>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: 'MultipleColumns',
    components: { draggable },
    data() {
      return {
        itemList1: [
          { id: 'John0', name: 'John0' },
          { id: 'John1', name: 'John1' },
          { id: 'John2', name: 'John2' },
        ],
        itemList2: [
          { id: 'Tom0', name: 'Tom0' },
          { id: 'Tom1', name: 'Tom1' },
          { id: 'Tom2', name: 'Tom2' },
        ],
        id1: 3,
        id2: 3,
        dragging: false,
      }
    },
    methods: {
      addItems(flag) {
        if (flag === 1) {
          this.itemList1.push({
            id: 'John' + this.id1,
            name: 'John' + this.id1,
          })
          this.id1 += 1
        } else {
          this.itemList2.push({
            id: 'John' + this.id2,
            name: 'John' + this.id2,
          })
          this.id2 += 1
        }
      },
    },
  }
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    justify-content: center;
    .draggable-ctn {
      padding: 10px;
      width: 200px;
      .transition-group {
        height: 200px;
        overflow-y: auto;
        display: block;
        border: 1px solid #ddd;
      }
    }
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
</style>
