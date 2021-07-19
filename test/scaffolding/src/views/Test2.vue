<template>
  <!-- 组件之间通过V-bind来绑定父组件的变量来时刻记录父组件变量的变化，以此来达到组件之间变量的传递 ，这样的会使得父组件发生变化时，子组件也跟着变化-->
  <div class="parent">
    <span>请输入名字</span>
    <input type="text" v-model="myname" />
    <say-hello :pname="myname"></say-hello>
  </div>
</template>
<style scoped>
.parent {
  text-align: left;
}
</style>
<script>
export default {
  data() {
    return {
      myname: "Mark",
    };
  },
};
</script>
