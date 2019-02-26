<template>
  <transition name="fade" mode="out-in" appear>
    <div class="lb-magic" v-if="lightbox == 'show'">
      <img v-bind:src="require('@/assets/Panorama/' + src )">

      <br>
      <a
        class="lb-close"
        v-bind:class="{ 'active': lightbox == 'hide'}"
        v-on:click="lightbox = 'hide'"
      >
        <img v-bind:src="require('@/assets/FullscreenOff.svg')">
      </a>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      lightbox: "hide"
    };
  }
};
</script>

<style lang="scss" >
@import "@/style/theme.scss";
@import "@/style/lightbox.scss";
</style>

