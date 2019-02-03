import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import "vue-material-design-icons/styles.css"
import VueSilentbox from 'vue-silentbox'

Vue.use(VueSilentbox);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

/*
import PaletteIcon from "vue-material-design-icons/Palette.vue"
Vue.component("palette-icon", PaletteIcon)

import PaletteSwatchIcon from "vue-material-design-icons/PaletteSwatch.vue"
Vue.component("palette-swatch-icon", PaletteSwatchIcon)

import FireIcon from "vue-material-design-icons/Fire.vue"
Vue.component("fire-icon", FireIcon)

import WebIcon from "vue-material-design-icons/Web.vue"
Vue.component("web-icon", WebIcon)

import FolderPlusOutlineIcon from "vue-material-design-icons/FolderPlusOutline.vue"
Vue.component("folder-plus-outline-icon", FolderPlusOutlineIcon)
*/


/*
import VueScrollReveal from 'vue-scroll-reveal';
 
// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal);
*/

var VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo);

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});