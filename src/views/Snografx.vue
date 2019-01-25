<template>
  <div>
    <Title
      title="Snögrafx"
      blurb="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur velit nulla voluptatibus dolor. Aut eius laborum ab, cumque dolor fugiat. Praesentium ipsam labore maiores voluptates, atque quasi ratione corporis incidunt?
"
      tags="Product &amp; Interface Design for Web/Showroom/VR, Logo &amp; Branding, Publicity"
    />

    <div class="page">
      <h1>Case Study: Snö</h1>
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
