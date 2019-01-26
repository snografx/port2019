<template>
  <div class="case">
    <div class="device">
      <div></div>
      <img :src="image">
    </div>
    <div class="about">
      <h1>{{title}}</h1>
      <h4>{{subtitle}}</h4>
      <p>{{content}}</p>
      <h6>{{tags}}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentLeft",
  props: ["image", "title", "subtitle", "content", "tags"]
};
</script>

<style lang="scss" scoped>
$alignment: right;
@import "@/style/case-logic.scss";
</style>