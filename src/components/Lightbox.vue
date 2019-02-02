<template>
  <div class="lb-switcher">
    <nav class="lb-contairner">
      graphic: {{ graphic }}
      <br>
      this.graphic: {{ this.graphic }}
      <br>
      <img class="pointer" @click="lightbox = !lightbox" v-bind:src="this.graphic">
      <br>
      <br>
      <br>
      viaJs: {{ viaJs }}
      <br>
      <img class="pointer" @click="lightbox = !lightbox" v-bind:src="viaJs">
      <br>
      <br>
      pcgfx: {{ pcgfx }}
      <br>
      viaVue: {{ viaVue }}
      <br>
      <img class="pointer" @click="lightbox = !lightbox" v-bind:src="viaVue">
      <br>
      <br>
    </nav>

    <transition name="slide-fade" mode="out-in" appear>
      <div class="lightbox-pop" v-show="lightbox">
        <img class="pointer" @click="lightbox = !lightbox" v-bind:src="this.graphic">
        <a class="pointer" @click="lightbox = !lightbox">close</a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Lightbox",
  props: {
    graphic: String,
    pcgfx: String
  },
  data() {
    return {
      lightbox: false,
      viaJs: require("../assets/jm2019.svg"),
      viaVue: require("../assets/" + this.pcgfx)
    };
  }
};
</script>

<style lang="scss">
@import "@/style/theme.scss";
@import "@/style/lightbox.scss";
</style>
