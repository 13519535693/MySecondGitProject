<template>
  <!-- 组件参数验证语法，这是十分有必要的功能，因为实际开发中，当我们分装了一个组件时，在一些组件中，我们需要验证输入数据的合理性，因此就
需要参数验证，简而言之，就是为组件接受的变量进行逻辑验定 -->
  <div class="parent">
    <params-verif
      name="Honey"
      :age="25"
      :detail="{ address: 'earth', language: '世界通' }"
    ></params-verif>
  </div>
</template>
<style scoped>
.parent {
  text-align: left;
}
</style>
<script>
//引入局部组件
import ParamsVerif from "../components/ParamsVerif.vue";
export default {
  components: {
    //注册组件
    ParamsVerif,
  },
};
</script>
