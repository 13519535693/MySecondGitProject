<template>
  <!-- 组件之事件传递：子组件通过事件给父组件传递参数 -->
  <!-- v-on 是父组件通过v-on监听事件，当组件触发事件后进行事件处理 。父组件通过v-on定义一个方法来监听子组件的变化-->
  <!-- $emit 子组件触发事件，并将数据提交给事件监听者。就是子组件通$emit来触发父组件的监听事件，同时还会给父组件传递参数过去-->
  <div>
    <h1>子组件给父组件传递参数</h1>
    <add-method :a="8" :b="10" v-on:add_event="getAddResult"></add-method>
    <h3>{{ result }}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: 0,
    };
  },
  methods: {
    getAddResult: function(pval) {
      //此处的pval是子组件add-method通过$emit方式传递过来的参数
      this.result = pval.result;
    },
  },
};
</script>
