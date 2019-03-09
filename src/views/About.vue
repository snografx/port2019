<template>
  <div class="text-shrink">
    <Title
      title="A Concise Biography"
      blurb="I'm a full-stack designer. I have the ability and experience to carry projects through all aspects of the design and development process – including management, hands-on creative work, and taking the critical responsibility for cohesion, quality, and delivery."
      tags
    />

    <div class="anchor-links">
      <h4>Skip to</h4>
      <div class="skip-links case-links">
        <a href="#" v-scroll-to="'#background'">
          <div class="case-link-bonus">Background</div>
        </a>
        <a href="#" v-scroll-to="'#creative'">
          <div class="case-link">Creative</div>
        </a>
        <a href="#" v-scroll-to="'#tech'">
          <div class="case-link">Technical</div>
        </a>
        <a href="#" v-scroll-to="'#cv'">
          <div class="case-link">CV &amp; Links</div>
        </a>
      </div>
    </div>

    <div id="background" class="case case-right case-bonus">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/About/Lian-DrottninggatanB.png">
              <div class="lb-caption">
                <h6>Stockholm 2019</h6>
              </div>
            </slide>
            <slide>
              <img src="@/assets/About/Lian-Presentation.png">
              <div class="lb-caption">
                <h6>CityPlanner User Conference 2018</h6>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Background</h1>
        <p>I grew up in an Italian-Norwegian family in a Japanese community in the New York City area. I also lived in Montréal for 10 years before moving permanently to Scandinavia. Stockholm has been home since 2012.</p>
        <p>English is my first language and I also speak Swedish fluently (if not as eloquently). Language is one of my favourite hobbies along with cycling, photography, tennis, architecture, and travel.</p>
        <h6>Citizen of Italy &amp; USA, Resident of Sweden</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="creative" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/About/Creative-Illy-LV.png">
              <div class="lb-caption">
                <h6>Illustrator</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Creative-Illy-LV.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/About/Creative-Illy-Markers3D.png">
              <div class="lb-caption">
                <h6>Illustrator</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Creative-Illy-Markers3D.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/About/Creative-AE.png">
              <div class="lb-caption">
                <h6>After Effects</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Creative-AE.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/About/Creative-Prem.png">
              <div class="lb-caption">
                <h6>Premiere Pro</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Creative-Prem.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
          </carousel>
        </div>
      </div>

      <div class="about">
        <h1>Creative Skills</h1>
        <h4>UI, UX, Visual &amp; Graphic Design</h4>
        <p>I thrive on creative projects. I specialise in interface and visual design but have experience with photography, photo editing, motion graphics, video editing, illustration, and print design.</p>
        <p>Simplicity and usability is my jam.</p>
        <h6>Illustrator, Figma, XD, Sketch, Zeplin, Lightroom, Premiere, InDesign, Photoshop</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="tech" class="case case-right">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/About/Tech-Code2.png">
              <div class="lb-caption">
                <h6>Creating the Portfolio…</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Tech-Code2.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Technical Skills</h1>
        <h4>Web Dev. &amp; Project Management</h4>
        <p>
          I first learned web development in the '90s. In 2002 I founded
          <router-link to="/snografx">an agency</router-link>&#32; and delivered websites via custom developed frameworks, CMS, and later custom WordPress themes. I hand-coded this portfolio as a single page application using
          <a
            href="https://vuejs.org/"
            target="_blank"
          >Vue.js</a> in Visual Studio Code.
        </p>
        <p>In larger organisations I use agile methodology to manage product development.</p>
        <div class="case-links">
          <a href="https://github.com/snografx/port2019">
            <div class="external-link">Portfolio on GitHub</div>
          </a>
        </div>
        <h6>Jira, Vue.js, GitHub, CSS, HTML, Javascript, jQuery, Ajax, WordPress</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="cv" class="case case-centre">
      <div class="visual">
        <img src="@/assets/CaseSnografx-DropF1.png">
      </div>
      <div class="about">
        <h1>Curriculum Vitae</h1>
        <h4>Résumé &amp; Links</h4>
        <p>I founded Snögrafx, a web &amp; graphic design agency, in 2012. It was my primary job until relocating to Stockholm in 2012. Since then I have worked in various design &amp; and development capacities for companies including Agency9, Lake Como, and Widespace.</p>
        <p>For more information you can download a hard copy of my CV, visit my LinkedIn, or contact me.</p>

        <div class="case-links">
          <a href="#">
            <div class="case-link">PDF Résumé</div>
          </a>
          <a href="https://www.linkedin.com/in/julianminervini/">
            <div class="external-link">LinkedIn</div>
          </a>
          <a href="mailto:julian@icyicy.com.com?Subject=Hey,%20cool%20portfolio" target="_top">
            <div class="external-link">E-mail</div>
          </a>
        </div>
        <h6>
          <br>
        </h6>
      </div>
    </div>

    <ArrowUp/>

    <transition name="fade" mode="out-in" appear>
      <div class="lb-magic" v-if="lightbox == 'show'">
        <img
          class="pointer"
          v-bind:class="{ 'active': lightbox == 'hide'}"
          v-on:click="lightbox = 'hide'"
          v-bind:src="require('@/assets/About/' + src )"
        >
        <a
          class="lb-close"
          v-bind:class="{ 'active': lightbox == 'hide'}"
          v-on:click="lightbox = 'hide'"
        >
          <img v-bind:src="require('@/assets/FullscreenOff.svg')">
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import ArrowUp from "@/components/ArrowUp.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "home",
  components: {
    Title,
    ArrowUp,
    Carousel,
    Slide
  },
  data() {
    return {
      lightbox: "hide"
    };
  }
};
</script>

<style lang="scss" >
$alignment: left;
@import "@/style/theme.scss";
@import "@/style/case-logic.scss";
@import "@/style/carousel.scss";
@import "@/style/lightbox.scss";
</style>
