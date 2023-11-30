<template>
  <div id="container"></div>
</template>

<script>
  import { Graph } from '@antv/x6'
  export default {
    name: 'Simple',
    data() {
      return {
        graph: null,
        cells: {
          nodes: [
            {
              id: 'node1', // String，可选，节点的唯一标识
              x: 40, // Number，必选，节点位置的 x 值
              y: 40, // Number，必选，节点位置的 y 值
              width: 80, // Number，可选，节点大小的 width 值
              height: 40, // Number，可选，节点大小的 height 值
              label: 'hello', // String，节点标签
            },
            {
              id: 'node2', // String，节点的唯一标识
              x: 160, // Number，必选，节点位置的 x 值
              y: 180, // Number，必选，节点位置的 y 值
              width: 80, // Number，可选，节点大小的 width 值
              height: 40, // Number，可选，节点大小的 height 值
              label: 'world', // String，节点标签
            },
          ],
          edges: [
            {
              source: 'node1', // String，必须，起始节点 id
              target: 'node2', // String，必须，目标节点 id
              attrs: {
                line: {
                  stroke: '#1890ff', // 指定 path 元素的填充色
                },
              },
              // 指定途经点
              vertices: [
                {
                  x: 80,
                  y: 200,
                },
              ],
            },
          ],
        },
      }
    },
    mounted() {
      // 1. 创建容器
      this.graph = new Graph({
        // 指定容器
        container: document.getElementById('container'),
        // 指定画布尺寸
        width: 800,
        height: 400,
        // 设置背景颜色
        background: {
          color: 'rgba(240, 248, 255, 0.8)',
        },
        // 设置网格
        grid: {
          size: 10, // 网格大小 10px
          visible: true, // 渲染网格背景
        },
        // 支持拖拽平移
        panning: true,
        // 支持滚轮缩放
        mousewheel: {
          enabled: true,
          modifiers: ['ctrl', 'meta'],
        },
        // 设置节点不可移动
        interacting: {
          nodeMovable: false,
        },
      })
      // 2. 通过JSON数据渲染画布
      this.graph.fromJSON(this.cells)
      // 缩放画布
      //   this.graph.zoom(-0.5)
      // 平移画布
      //   this.graph.translate(80, 40)
      // 画布居中
      //   this.graph.centerContent()
    },
  }
</script>

<style lang="less" scoped>
  #container {
    margin: auto;
  }
</style>
