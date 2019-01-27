<template>
  <div class="case-switcher">
    <nav class="fab-container">
      <a class="pointer" @click="projects = !projects">
        <div class="fab">&#9776;</div>
      </a>
    </nav>

    <transition name="slide-fade" mode="out-in" appear>
      <div class="projects-pop" v-show="projects">
        <div class="projects-popped">
          <div class="head-pop">CityPlanner</div>
          <div class="pop-link" @click="projects = !projects">
            <router-link to="/cp-visual.design" @click="projects = !projects">Visual Design</router-link>
          </div>
          <div class="pop-link" @click="projects = !projects">
            <router-link to="/cp-project.editor" @click="projects = !projects">Project Editor</router-link>
          </div>
          <div class="pop-link" @click="projects = !projects">
            <router-link to="/cp-public.view" @click="projects = !projects">Public View</router-link>
          </div>
          <div class="head-pop">Other Cases</div>
          <div @click="projects = !projects">
            <router-link to="/panorama" @click="projects = !projects">360° Panorama</router-link>
          </div>
          <div class="pop-link" @click="projects = !projects">
            <router-link to="/minstad">Min Stad</router-link>
          </div>
          <div class="pop-link" @click="projects = !projects">
            <router-link to="/datamanager">DataManager</router-link>
          </div>
          <div class="pop-link" @click="projects = !projects">
            <router-link to="/snografx">Snögrafx</router-link>
          </div>
          <div class="pop-link close-pop pointer" @click="projects = !projects">&#xd7;</div>
        </div>
        <nav class="fab-container">
          <a class="pointer" @click="projects = !projects">
            <div class="fab">&#9776;</div>
          </a>
        </nav>
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
      let header = document.querySelector(".fab-container");
      if (window.scrollY > 600 && !header.className.includes("magic")) {
        header.classList.add("magic");
      } else if (window.scrollY < 600) {
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
