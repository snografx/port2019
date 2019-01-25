<template>
  <div class="home">
    <Title
      title="Ciao, I'm Julian Minervini"
      blurb="I am a multidisciplinary designer from Stockholm with over 15 years of experience. I specialise creating digital products, simple visual design, and developing usable interfaces."
      tags="Visual, Interface, Motion, Experience"
    />
    <HeroCityPlanner/>
    <CasePanorama/>
    <CaseMinStad/>
    <CaseDataManager/>
    <CaseSnografx/>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import HeroCityPlanner from "@/components/HeroCityPlanner.vue";
import CasePanorama from "@/components/CasePanorama.vue";
import CaseMinStad from "@/components/CaseMinStad.vue";
import CaseDataManager from "@/components/CaseDataManager.vue";
import CaseSnografx from "@/components/CaseSnografx.vue";

export default {
  name: "home",
  components: {
    Title,
    HeroCityPlanner,
    CasePanorama,
    CaseMinStad,
    CaseDataManager,
    CaseSnografx
  }
};
</script>


