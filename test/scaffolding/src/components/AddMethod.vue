<template>
  <div>
    <button v-on:click="add">求和</button>
  </div>
</template>
<script>
export default {
  props: ["a", "b"],
  methods: {
    add: function() {
      var value = 0;
      value = this.a + this.b;
      this.$emit("add_event", {
        result: value,
      });
    },
  },
};
</script>
