<template>
  <div class="text-shrink">
    <Title
      title="Coming Soon"
      blurb="This link is not ready yet, hang in there and try again soon!"
      tags
    />

    <div class="page">
      <h3>
        <router-link to="/" @click="projects = !projects">Return Home</router-link>
      </h3>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  name: "home",
  components: {
    Title
  }
};
</script>

<style lang="scss" >
$alignment: left;
@import "@/style/theme.scss";
@import "@/style/case-logic.scss";
@import "@/style/carousel.scss";
@import "@/style/lightbox.scss";
</style>
