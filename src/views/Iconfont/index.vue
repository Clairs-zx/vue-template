<template>
  <a-list
    :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 6, xxl: 8 }"
    :data-source="iconfonts"
  >
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-card style="text-align: center">
        <div slot="title">
          <span> {{ `icon-${item.font_class}` }}</span>
        </div>
        <div
          class="card-container"
          @mouseenter="isCopy = index"
          @mouseleave="isCopy = -1"
        >
          <span
            v-if="isCopy === index"
            class="iconfont icon-copy"
            @click="copy(item)"
          ></span>
          <span
            v-else
            class="iconfont"
            :class="`icon-${item.font_class}`"
          ></span>
        </div>
      </a-card>
    </a-list-item>
  </a-list>
</template>

<script>
  export default {
    data() {
      return {
        iconfonts: undefined,
        isCopy: -1,
      }
    },
    mounted() {
      const json = require('@/assets/iconfont/iconfont.json')
      this.iconfonts = json.glyphs
    },
    methods: {
      copy(item) {
        const msg = `iconfont icon-${item.font_class}`
        this.$copyText(msg).then(
          () => {
            this.$message.success('复制成功~')
          },
          () => {
            this.$message.error('禁止复制')
          }
        )
      },
    },
  }
</script>

<style lang="less" scoped>
  .iconfont {
    font-size: 50px;
  }
  .card-container {
    height: 100%;
    width: 100%;
    &:hover {
      color: #1890ff;
    }
  }
</style>
