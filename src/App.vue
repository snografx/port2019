<template>
  <div id="app">
    <header class="max-width">
      <div id="blank" class="side"></div>
      <router-link to="/">
        <div id="logo" class="centre">
          <img src="@/assets/jm2019.svg" class="rotate-in-center">
        </div>
      </router-link>
      <div id="nav" class="side">
        <router-link to="/">Work</router-link>
        <br>
        <router-link to="/about">About</router-link>
        <!-- <br>
        <a class="pointer" @click="projects = !projects">&#9776;</a>-->
      </div>
    </header>

    <nav class="fab-container">
      <a class="pointer" @click="projects = !projects">
        <div class="fab">&#9776;</div>
      </a>
    </nav>

    <transition name="slide-fade" mode="out-in" appear>
      <div class="projects-pop" v-show="projects">
        <div class="projects-popped">
          <div class="head-pop">CityPlanner</div>
          <div @click="projects = !projects">
            <router-link to="/cityplanner" @click="projects = !projects">Visual Design</router-link>
          </div>
          <div @click="projects = !projects">
            <router-link to="/cityplanner" @click="projects = !projects">Project Editor</router-link>
          </div>
          <div @click="projects = !projects">
            <router-link to="/cityplanner" @click="projects = !projects">Public View</router-link>
          </div>
          <div class="head-pop">Other Cases</div>
          <div @click="projects = !projects">
            <router-link to="/panorama" @click="projects = !projects">360° Panorama</router-link>
          </div>
          <div @click="projects = !projects">
            <router-link to="/minstad">Min Stad</router-link>
          </div>
          <div @click="projects = !projects">
            <router-link to="/datamanager">DataManager</router-link>
          </div>
          <div @click="projects = !projects">
            <router-link to="/snografx">Snögrafx</router-link>
          </div>
          <div class="close-pop pointer" @click="projects = !projects">&#xd7;</div>
        </div>
        <nav class="fab-container">
          <a class="pointer" @click="projects = !projects">
            <div class="fab">&#9776;</div>
          </a>
        </nav>
      </div>
    </transition>

    <div class="tempo max-width">
      <transition name="fade-down" mode="out-in" appear>
        <router-view/>
      </transition>
    </div>

    <Contact phrase="Send me a message"/>
  </div>
</template>

<script>
import Contact from "@/components/Contact";

export default {
  components: {
    Contact
  },
  el: "#app",
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
@import "@/style/theme.scss";
@import "@/style/main.scss";
@import "@/style/header.scss";
@import "@/style/home.scss";
@import "@/style/page.scss";
@import "@/style/animation.scss";

$type-dir: "assets/type/";

.tempo {
  min-height: 100vh;
}
</style>
