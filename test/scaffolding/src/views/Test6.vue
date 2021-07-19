<template>
  <!-- 组合slot：在子组件中通过为多个slot进行命名，来接受父组件的不同内容的数据 -->
  <!-- 通过slot为子组件传递html内容（html标记+文字） -->
  <div class="parent">
    <h1>组合slot</h1>
    <NBAStars c="奥尼尔" pf="加内特">
      <span slot="sf">皮尔斯</span>
      <span slot="sg">雷阿伦</span>
      <span slot="pg">隆多</span>
    </NBAStars>
  </div>
</template>
<style scoped>
.parent {
  text-align: left;
}
</style>
<script>
import NBAStars from "../components/NBAStars.vue";
export default {
  components: {
    NBAStars,
  },
};
</script>
