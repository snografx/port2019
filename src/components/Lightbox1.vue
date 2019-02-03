<template>
  <div class="lb-switcher">
    <div class="carousel-container">
      <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
        <slide>
          TN {{ fullAsset1 }}
          <img v-bind:src="fullAsset1">
        </slide>
        <slide>
          TN {{ fullAsset2 }}
          <img v-bind:src="fullAsset2">
        </slide>
        <slide>
          TN {{ fullAsset3 }}
          <img v-bind:src="fullAsset3">
        </slide>
      </carousel>
      <div class="pointer" @click="lightbox = !lightbox">fullscreen 2</div>
    </div>

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
    asset1: String,
    asset2: String,
    asset3: String
  },
  data() {
    return {
      lightbox: false,
      fullAsset1: require("../assets/" + this.asset1),
      fullAsset2: require("../assets/" + this.asset2),
      fullAsset3: require("../assets/" + this.asset3)
    };
  }
  /*
  methods: {
    fixAssets: function(assets) {
      return assets.concat(function(asset) {
        return require("../assets/" + asset);
      });
    }
  }
  /*data() {
    return {
      lightbox: false,
      
      //fullAsset: require("../assets/" + this.asset)
      /*fixAssets: function() {
        return this.assets.fix(function(asset) {
          require("../assets/" + this.asset);
        });
      }
    };
  }*/
};
</script>

<style lang="scss">
@import "@/style/theme.scss";
@import "@/style/lightbox.scss";

.lb-contairner {
  color: red;
}
</style>
