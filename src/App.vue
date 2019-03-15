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
      </div>
    </header>

    <QuickSwitch/>

    <div class="tempo max-width">
      <transition name="fade-down" mode="out-in" appear>
        <router-view/>
      </transition>
    </div>

    <Contact phrase="Let's make great things together"/>
  </div>
</template>

<script>
import Contact from "@/components/Contact";
import QuickSwitch from "@/components/QuickSwitch";

export default {
  components: {
    Contact,
    QuickSwitch
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
</style>
