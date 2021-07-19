<template>
  <div>
    <div>中锋：{{ c }}</div>
    <div>大前:{{ pf }}</div>
    <div>小前：<slot name="sf"></slot></div>
    <div>分卫：<slot name="sg"></slot></div>
    <div>校卫:<slot name="pg"></slot></div>
  </div>
</template>
<script>
export default {
  props: ["c", "pf"],
};
</script>
