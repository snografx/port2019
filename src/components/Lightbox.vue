<template>
  <div class="lb-switcher">
    <div class="pointer" @click="lightbox = !lightbox">fullscreen 2</div>
    <img v-bind:src="fixAsset">

    <!-- 
    <nav class="lb-contairner">
    <img class="pointer" @click="lightbox = !lightbox" v-bind:src="fullAsset">-->
    <transition name="slide-fade" mode="out-in" appear>
      <div class="lightbox-pop" v-show="lightbox" style="border: white 2px solid;">
        <img
          style="width: 100vw; max-height: initial; border: lime 2px solid;"
          v-bind:src="fullAsset"
          height="100%;"
        >
        
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
    pcgfx: String
  },
  data() {
    return {
      lightbox: false,
      fixAsset: require("../assets/" + this.pcgfx)
    };
  }
};
</script>

<style lang="scss">
@import "@/style/theme.scss";
@import "@/style/lightbox.scss";

.lb-switcher {
  color: red;
  font-size: 0.7rem;
}
</style>
