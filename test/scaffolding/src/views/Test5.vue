<template>
  <!-- slot是父组件与子组件的通讯方式，可以将父组件的内容显示在子组件当中 -->
  <!-- 在slot之前都是父组件与子组件的传参数，都是仅限于父组件的属性 -->
  <!-- 但是slot却可以将父组件的内容显示在子组件当中 -->
  <div class="parent">
    <h1>slot学习</h1>
    <say-to pname="Koma">你的学习很好</say-to>
    <say-to pname="Linda">你的才艺很好</say-to>
    <say-to pname="Mrs.Wang">你的交际能力很好呀</say-to>
  </div>
</template>
<style scoped>
.parent {
  text-align: left;
}
</style>
<script>
import SayTo from "../components/SayTo.vue";
export default {
  components: {
    SayTo,
  },
};
</script>
