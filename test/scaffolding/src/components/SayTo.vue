<template>
  <div>
    你好，<strong>{{ pname }}</strong
    >!
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["pname"],
};
</script>
