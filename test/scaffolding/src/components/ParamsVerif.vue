<template>
  <div>
    <span>姓名：{{ this.name }}</span
    ><br />
    <span>年龄：{{ this.age }}</span
    ><br />
    <span>地址：{{ this.detail.address }}</span
    ><br />
    <span>语言:{{ this.detail.language }}</span
    ><br />
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      validator: function(value) {
        return value >= 0 && value <= 120;
      },
    },
    detail: {
      type: Object,
      default: function() {
        return {
          address: "US",
          language: "English",
        };
      },
    },
  },
};
</script>
