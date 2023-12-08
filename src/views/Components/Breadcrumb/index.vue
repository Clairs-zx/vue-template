<template>
  <div>
    <!-- <a-breadcrumb>
      <a-breadcrumb-item
        v-for="(item, index) in path"
        :key="index"
        @click="handleClick(item)"
        >{{ item }}</a-breadcrumb-item
      >
    </a-breadcrumb> -->
    <a v-for="(item, index) in path" :key="index" @click="handleClick(item)"
      >/{{ item }}</a
    >
    <a-list>
      <a-list-item
        v-for="(item, index) in list"
        :key="index"
        @click="handleList(item)"
        >{{ item }}</a-list-item
      >
    </a-list>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        path: ['home'],
        list: [],
        map: {
          home: ['111', '222'],
          'home/111': ['333'],
          'home/222': ['444'],
          'home/111/333': ['555'],
        },
      }
    },
    watch: {
      path: {
        deep: true,
        immediate: true,
        handler(val) {
          console.log('path==', val.join('/'))
          this.list = this.map[val.join('/')]
        },
      },
    },
    methods: {
      handleClick(item) {
        const index = this.path.indexOf(item)
        if (index === this.path.length - 1) return
        this.path = this.path.slice(0, index + 1)
        this.$message.info(this.path.join('/'))
      },
      handleList(item) {
        this.path.push(item)
        this.$message.info(this.path.join('/'))
      },
    },
  }
</script>

<style lang="less" scoped></style>
