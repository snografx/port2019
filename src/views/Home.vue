<template>
  <div class="home">
    <Title
      title="Ciao, I'm Julian Minervini"
      blurb="I am a multidisciplinary designer from Stockholm with over 15 years of experience. I specialise creating digital products with elegant visual design and usable interfaces."
      tags="Visual, Interface, Motion, Experience"
    />

    <div class="anchor-links-off"></div>

    <HeroCityPlanner/>
    <ArrowUp/>
    <CasePanorama/>
    <ArrowUp/>
    <CaseMinStad/>
    <ArrowUp/>
    <CaseDataManager/>
    <ArrowUp/>
    <CaseSnografx/>
    <ArrowUp/>
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
import ArrowUp from "@/components/ArrowUp.vue";

export default {
  name: "home",
  components: {
    Title,
    ArrowUp,
    HeroCityPlanner,
    CasePanorama,
    CaseMinStad,
    CaseDataManager,
    CaseSnografx
  }
};
</script>



