<template>
  <div id="target" class="title">
    <div>
      <h1>{{title}}</h1>
      <p>{{blurb}}</p>
      <h6>{{tags}}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String,
    blurb: String,
    tags: String
  }
};
</script>

<style lang="scss">
@import "@/style/theme.scss";

.title {
  border: $debug2;
  white-space: pre-wrap;

  div {
    margin: 0 8%;
    border: $debug1;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //min-height: 45vh;
}
</style>
