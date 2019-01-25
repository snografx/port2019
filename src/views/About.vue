<template>
  <div>
    <Title
      title="A Concise Biography"
      blurb="
      Ciao! My name is Julian and I'm a designer. I have the ability and experience to carry projects through all aspects of the design and development process – including management, hands-on creative work, and taking the critical responsibility for cohesion, quality, and delivery.
      "
      tags=""
    />

    <div class="page">
      <h1>Soon…</h1>
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

<style lang="scss" scoped>
@import "@/style/theme.scss";
@import "@/style/case-study.scss";
</style>
