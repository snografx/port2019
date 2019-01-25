<template>
  <div class="case row-contrast">
    <div class="device">
      <router-link to="/minstad">
        <img src="@/assets/CaseMinStad-DropF1.png">
      </router-link>
    </div>
    <div class="about">
      <h1>
        <router-link to="/minstad">Min Stad Göteborg</router-link>
      </h1>
      <h4>2016</h4>
      <p>Min Stad is an app designed for the City of Gothenburg. The municipality publishes planning and cultural information while cultivating feedback and ideas from the community. Visitors mark map positions, choose categories, and leave comments.</p>

      <div class="case-links">
        <router-link to="/minstad">
          <div class="case-link">Case Study</div>
        </router-link>
        <a href="#">
          <div class="external-link">App Store</div>
        </a>
        <a href="#">
          <div class="external-link">Google Play</div>
        </a>
      </div>

      <h6>Role: Product &amp; Interface Design, Logo Design, UX &amp; Development Management, English Copy</h6>
    </div>
  </div>
</template>

<script>
export default {};
</script>

 <style lang="scss" scoped>
$alignment: right;
@import "@/style/case-logic.scss";
</style>
