<template>
  <div class="case">
    <div class="device">
      <div></div>
      <img :src="image">
    </div>
    <div class="about">
      <h1>1 {{title}}</h1>
      <h4>{{subtitle}}</h4>
      <p>{{content}}</p>
      {{links}}
      <h6>{{tags}}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentRight",
  props: ["image", "title", "subtitle", "content", "tags", "links"]
};
</script>

<style lang="scss" scoped>
$alignment: left;
@import "@/style/case-logic.scss";
</style>