<template>
  <div class="case hero row-contrast">
    <div class="device">
      <router-link to="/cityplanner">
        <img src="@/assets/HeroCityPlanner-Drop3.png">
      </router-link>

      <SubHeroes/>
    </div>
    <div class="about">
      <h1>
        <router-link to="/cityplanner">CityPlanner</router-link>
      </h1>
      <h4>2014 &mdash; Present</h4>
      <p>CityPlanner is a web app where users create urban planning projects in real 3D cities. These interactive projects are published to web, mobile, touch-tables, and virtual reality.</p>

      <h4 class="subheroes-title mobile-only">Case Studies</h4>

      <div class="subheroes-mobile">
        <a href="#">
          <div class="subhero">Visual Design</div>
        </a>
        <a href="#">
          <div class="subhero">Project Editor</div>
        </a>
        <a href="#">
          <div class="subhero">Public View</div>
        </a>
      </div>

      <h4 class="mobile-only">External Links</h4>

      <div class="case-links">
        <a href="#">
          <div class="external-link">Trailer</div>
        </a>
        <a href="#">
          <div class="external-link">Website</div>
        </a>
      </div>

      <h6>Role: Product &amp; Interface Design, UX, Visual Design, Logo &amp; Branding, Publicity</h6>
    </div>
  </div>
</template>

<script>
import SubHeroes from "@/components/SubHeroes.vue";

export default {
  name: "subheroes",
  components: {
    SubHeroes
  }
};
</script>

 <style lang="scss" scoped>
$alignment: right;
@import "@/style/case-logic.scss";
</style>
