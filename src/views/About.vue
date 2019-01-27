<template>
  <div>
    <Title
      title="A Concise Biography"
      blurb="
      Ciao! My name is Julian and I'm a designer. I have the ability and experience to carry projects through all aspects of the design and development process – including management, hands-on creative work, and taking the critical responsibility for cohesion, quality, and delivery."
      tags="Skip to <a href='#'>What</a>"
    />

    <div class="case case-left">
      <div class="visual">
        <img src="@/assets/CaseSnografx-DropF1.png">
      </div>
      <div class="about">
        <h1>Curriculum Vitae</h1>
        <h4>Left Content + Image</h4>
        <p>Belgrade, meaning 'white city', is the capital and largest city of Serbia. It is located at the confluence of the Sava and Danube rivers, where the Pannonian Plain meets the Balkans. The urban area of the City of Belgrade has a population of 1.23 million, while nearly 1.7 million people live within its administrative limits.</p>
        <h6>Apple, Banana, Satsuma</h6>
      </div>
    </div>

    <div class="case case-right row-contrast">
      <div class="visual">
        <img src="@/assets/CaseDataManager-DropF1.png">
      </div>
      <div class="about">
        <h1>Skills</h1>
        <h4>Software</h4>
        <h6>Illustrator, After Effects, XD, Figma, Zeplin, Visual Studio Code</h6>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import ArrowUp from "@/components/Title.vue";

export default {
  name: "home",
  components: {
    Title,
    ArrowUp
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/theme.scss";
@import "@/style/case-study.scss";
</style>
