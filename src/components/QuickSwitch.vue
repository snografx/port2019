<template>
  <div class="case-switcher">
    <nav class="fab-container">
      <a class="pointer" @click="projects = !projects">
        <div class="fab"></div>
      </a>
    </nav>

    <transition name="slide-fade" mode="out-in" appear>
      <div class="projects-pop" v-show="projects">
        <div class="projects-popped">
          <div class="head-pop">Site Navigation</div>
          <div class="pop-link" @click="projects = !projects">
            <router-link to="/" @click="projects = !projects">Home</router-link>
          </div>
          <div class="pop-link" @click="projects = !projects">
            <router-link to="/about" @click="projects = !projects">About</router-link>
          </div>
          <div class="head-pop">CityPlanner</div>
          <div class="pop-link" @click="projects = !projects">
            <router-link to="/visual.design" @click="projects = !projects">Visual Design</router-link>
          </div>
          <div class="pop-link" @click="projects = !projects">
            <router-link to="/export.video" @click="projects = !projects">Export Video</router-link>
          </div>
          <div class="pop-link" @click="projects = !projects">
            <router-link to="/mobile.create" @click="projects = !projects">Mobile Create Tools</router-link>
          </div>
          <div class="head-pop">Other</div>
          <div class="pop-link" @click="projects = !projects">
            <router-link to="/panorama" @click="projects = !projects">360° Panorama</router-link>
          </div>
          <div class="pop-link" @click="projects = !projects">
            <router-link to="/minstad">Min Stad Göteborg</router-link>
          </div>
          <!--
          <div class="pop-link" @click="projects = !projects">
            <router-link to="/datamanager">DataManager</router-link>
          </div>
          -->
          <div class="pop-link" @click="projects = !projects">
            <router-link to="/snografx">Snögrafx</router-link>
          </div>
          <div class="pop-link-x close-pop pointer" @click="projects = !projects">&#xd7;</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  el: ".case-switcher",
  data() {
    return {
      projects: false
    };
  },
  methods: {
    handleScroll(event) {
      var fromTop = 450;
      let header = document.querySelector(".fab-container");
      if (window.scrollY > fromTop && !header.className.includes("magic")) {
        header.classList.add("magic");
      } else if (window.scrollY < fromTop) {
        header.classList.remove("magic");
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
</style>
