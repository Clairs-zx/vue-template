<template>
  <div>
    <a href="https://animate.style/" target="_blank">https://animate.style/</a>
    <div v-for="(animate, idx) in animations" :key="idx">
      <a-divider>{{ animate.name }}</a-divider>
      <a-list
        :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 6, xxl: 8 }"
        :data-source="animate.data"
      >
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a-card style="text-align: center">
            <div slot="title">
              <span> {{ item }}</span>
            </div>
            <h1
              class="animate__animated"
              :class="hover[0] === idx && hover[1] === index ? item : ''"
              @mouseenter="hover = [idx, index]"
              @mouseleave="hover = [-1, -1]"
            >
              Animation
            </h1>
          </a-card>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
  import 'animate.css'
  export default {
    data() {
      return {
        animations: [
          {
            name: 'Attention seekers',
            data: [
              'animate__bounce',
              'animate__flash',
              'animate__pulse',
              'animate__rubberBand',
              'animate__shakeX',
              'animate__shakeY',
              'animate__headShake',
              'animate__swing',
              'animate__tada',
              'animate__wobble',
              'animate__jello',
              'animate__heartBeat',
            ],
          },
        ],
        hover: [-1, -1],
      }
    },
  }
</script>

<style lang="less" scoped></style>
