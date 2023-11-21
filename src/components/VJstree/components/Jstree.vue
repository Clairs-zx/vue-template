<!--
 * @Author: ZhXIn
 * @Date: 2023-10-16 16:18:24
 * @LastEditTime: 2023-10-16 16:30:19
 * @Description: 
-->
<template>
  <v-jstree
    :data="treeData"
    :async="asyncData"
    show-checkbox
    multiple
    allow-batch
    whole-row
    @item-click="itemClick"
  ></v-jstree>
</template>

<script>
import VJstree from 'vue-jstree'
export default {
  name: 'Jstree',
  components: {
    VJstree
  },
  data() {
    return {
      treeData: []
    }
  },
  methods: {
    itemClick(node) {
      console.log(node.model.text + ' clicked !')
    },
    async asyncData() {
      setTimeout(() => {
        this.treeData = [
          {
            text: 'Same but with checkboxes1',
            children: [
              {
                text: 'initially selected',
                selected: true
              },
              {
                text: 'custom icon',
                icon: 'fa fa-warning icon-state-danger'
              },
              {
                text: 'initially open',
                icon: 'fa fa-folder icon-state-default',
                opened: true,
                children: [
                  {
                    text: 'Another node'
                  }
                ]
              },
              {
                text: 'custom icon',
                icon: 'fa fa-warning icon-state-warning'
              },
              {
                text: 'disabled node',
                icon: 'fa fa-check icon-state-success',
                disabled: true
              }
            ]
          },
          {
            text: 'Same but with checkboxes',
            opened: true,
            children: [
              {
                text: 'initially selected',
                selected: true
              },
              {
                text: 'custom icon',
                icon: 'fa fa-warning icon-state-danger'
              },
              {
                text: 'initially open',
                icon: 'fa fa-folder icon-state-default',
                opened: true,
                children: [
                  {
                    text: 'Another node'
                  }
                ]
              },
              {
                text: 'custom icon',
                icon: 'fa fa-warning icon-state-warning'
              },
              {
                text: 'disabled node',
                icon: 'fa fa-check icon-state-success',
                disabled: true
              }
            ]
          },
          {
            text: 'And wholerow selection',
            children: []
          }
        ]
      })
    }
  }
}
</script>

<style>
</style>