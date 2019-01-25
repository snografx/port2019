<template>
  <div class="case">
    <div class="device">
      <router-link to="/datamanager">
        <img src="@/assets/CaseDataManager-DropF1.png">
      </router-link>
    </div>
    <div class="about">
      <h1>
        <router-link to="/snografx">DataManager</router-link>
      </h1>
      <h4>2018 &mdash; Present</h4>
      <p>DataManager is a web app for governing '3D cities'. The basic version manages massive amounts of 3D data while the advanced concept adds draw tools, colour manipulation, and more.</p>

      <div class="case-links">
        <router-link to="/datamanager">
          <div class="case-link">Case Study</div>
        </router-link>
        <a href="#">
          <div class="external-link">Website</div>
        </a>
      </div>

      <h6>Role: Interface Design, UX, Branding, Publicity</h6>
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
