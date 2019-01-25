<template>
  <div class="case">
    <div class="device">
      <router-link to="/panorama">
        <img src="@/assets/CasePanorama-DropF1.png">
      </router-link>
    </div>
    <div class="about">
      <h1>
        <router-link to="/panorama">360° Panorama</router-link>
      </h1>
      <h4>2018 &mdash; Present</h4>
      <p>360° Panorama is CityPlanner for low-end and mobile devices. It uses exported viewpoints from CityPlanner's fully 3D world to create a focused on-the-rails experience.  </p>
      
      <div class="case-links">
        <router-link to="/panorama">
          <div class="case-link">Case Study</div>
        </router-link>
        <a href="#">
          <div class="external-link">Demo</div>
        </a>
      </div>

      <h6>Role: Product &amp; Interface Design, UX, Branding</h6>
    </div>
  </div>
</template>

<script>
export default {};
</script>

 <style lang="scss" scoped>
$alignment: left;
@import "@/style/case-logic.scss";
</style>
