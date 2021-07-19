<template>
  <div>
    <h1 class="title">这是首页</h1>
    <router-link to="/t1" class="content">表行组件</router-link>
    <router-link to="/t2" class="content">组件之传递变量</router-link>
    <router-link to="/t3" class="content">组件之参数验证</router-link>
    <router-link to="/t4" class="content">子组件给父组件传递参数</router-link>
    <router-link to="/t5" class="content">组件——插槽slot</router-link>
    <router-link to="/t6" class="content">组件——组合slot</router-link>
    <router-link to="/rt" class="content">嵌套路由</router-link>
  </div>
</template>
<style scoped>
a {
  direction: none;
}
.content {
  margin-top: 150px;
  margin-left: 50px;
}
</style>
