<template>
  <div class="case case-index row-contrast">
    <div class="device">
      <router-link to="/snografx">
        <img src="@/assets/CaseSnografx-DropF1.png">
      </router-link>
    </div>
    <div class="about">
      <h1>
        <router-link to="/snografx">Snögrafx</router-link>
      </h1>
      <h4>2002 &mdash; Present (Part-Time Since 2012)</h4>
      <p>Snögrafx was founded in Montréal in 2002 as an innovative web &amp; graphic design agency. It was my full-time job until relocating to Stockholm a decade later in 2012.</p>

      <div class="case-links">
        <router-link to="/snografx">
          <div class="case-link">More info</div>
        </router-link>
        <a href="http://snografx.com" target="_blank">
          <div class="external-link">Website</div>
        </a>
      </div>

      <h6>Role: Owner, Director, Manager, Designer, Developer</h6>
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
