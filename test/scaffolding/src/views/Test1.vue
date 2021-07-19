<template>
  <!-- 这是一个表行组件，如果要在父组件的表格中放组件，且以表格的形式展示，那么就需要用到is属性，如下，否则子组件的内容不会渲染在表格里 -->
  <div class="parent">
    <h1>最喜欢吃的水果有哪些：</h1>
    <table border="1">
      <tr>
        <td>排名</td>
        <td>水果名称</td>
      </tr>
      <tr is="TableComponent1"></tr>
      <tr is="TableComponent2"></tr>
      <tr is="TableComponent3"></tr>
    </table>

    <!-- <TableComponent1></TableComponent1> -->
  </div>
</template>
<style scoped>
.parent {
  text-align: left;
}
</style>
<script>
//引入局部组件
import TableComponent1 from "../components/TableComponent1.vue";
import TableComponent2 from "../components/TableComponent2.vue";
import TableComponent3 from "../components/TableComponent3.vue";
export default {
  name: "parent", //可有可无
  components: {
    //注册组件
    TableComponent1,
    TableComponent2,
    TableComponent3,
  },
};
</script>
