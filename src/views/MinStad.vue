<template>
  <div class="text-shrink">
    <Title
      title="Min Stad Göteborg"
      blurb="Min Stad – &quot;My City&quot; in Swedish – is an app designed for the City of Gothenburg. The municipality publishes planning and cultural information while cultivating feedback and ideas from the community. Visitors mark map positions, choose categories, and leave comments."
      tags
    />

    <div class="anchor-links">
      <h4>Skip to</h4>
      <div class="skip-links case-links">
        <a href="#" v-scroll-to="'#overview'">
          <div class="case-link-overview">Overview</div>
        </a>
        <a href="#" v-scroll-to="'#visual'">
          <div class="case-link">Visual &amp; UI</div>
        </a>
        <a href="#" v-scroll-to="'#graphic'">
          <div class="case-link">Graphic Design</div>
        </a>
        <a href="#" v-scroll-to="'#result'">
          <div class="case-link">Result</div>
        </a>
        <a href="#" v-scroll-to="'#game'">
          <div class="case-link-bonus">Bonus: AR Game</div>
        </a>
      </div>
    </div>

    <div id="overview" class="case case-centre case-overview">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/MinStad/MinStad-Screen-2021.png">
            </slide>
            <slide>
              <img src="@/assets/MinStad/MinStad-Screen-dia.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Product Overview</h1>
        <p>
          In 2016 Gothenburg's Department of Urban Planning commissioned a mobile app version of
          <a
            href="http://minstad.goteborg.se"
            target="_blank"
          >Min Stad</a> – their successful web &amp; showroom platform. The objective was to continue to increase publicity and cultivate a deeper dialogue with residents via interactive technology.
        </p>
        <p>I designed the visuals, features, and interface with city stakeholders. Along with Agency9's project manager, we leveraged the department's own assets for prototyping, user testing, and feedback while working agile with a development team in Ukraine to deliver this multi-platform product.</p>

        <h6>Role: Product Design, UX, Interface, &amp; Visual Design, English Copywriting</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="visual" class="case case-right">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/MinStad/MinStad-Paper.png">
            </slide>
            <slide>
              <img src="@/assets/MinStad/MinStad-Whiteboard.png">
            </slide>
            <slide>
              <img src="@/assets/MinStad/MinStad-UI-Sketch.png">
            </slide>
            <slide>
              <img src="@/assets/MinStad/MinStad-UI-Sketch-close.png">
            </slide>
            <slide>
              <img src="@/assets/MinStad/MinStad-Dev-screens.png">
            </slide>
            <slide>
              <img src="@/assets/MinStad/MinStad-Markers-Sketch.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Visual &amp; Interface Design</h1>
        <h4>Design &amp; Development</h4>
        <p>The interface is the result of successfully marrying the Min Stad web app and CityPlanner with Google's Material Design.</p>
        <p>The chief design challenge was translating the customer's complicated requirements into a fun and usable interactive experience. It began with a design study on the best map, messaging, and augmented reality apps to create the winning design proposal.</p>
        <p>Development in Ukraine was managed via Jira, with iterations delivered to the customer in Göteborg for testing.</p>
        <h6>Tools &amp; methodology: Sketch, Pixate, Jira, Kanban</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="graphic" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/MinStad/MinStad-Logo.png">
            </slide>
            <slide>
              <img src="@/assets/MinStad/MinStad-Logo-col.png">
            </slide>
            <slide>
              <img src="@/assets/MinStad/MinStad-Logo-prop.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Graphic Design</h1>
        <h4>Logo &amp; Branding</h4>
        <p>Several strong concepts were considered for the app logo. The genesis of the winning concept came from a city employee, with their rough idea being polished into the final design. It consists of two placemarks forming a heart-shape.</p>
        <p>I've shared several proposals and refinements to illustrate the design process.</p>
        <h6>Tools: CorelDraw, Photoshop, Sketch</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="result" class="case case-right">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/MinStad/MinStad-Android.png">
            </slide>
            <slide>
              <img src="@/assets/MinStad/MinStad-Feature.png">
            </slide>

            <slide>
              <img src="@/assets/MinStad/MinStad-Media2.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>The Result</h1>
        <h4>Satisfied Customer</h4>
        <p>After 10 months of development Min Stad was released to the App Store and Google Play in September of 2016. It received a lot of publicity in Göteborg, being featured in several local media publications.</p>
        <p>The customer was very pleased the number of installs and submissions, with over 1300 posts having been made since the first version was released.</p>
        <div class="case-links">
          <a href="https://itunes.apple.com/us/app/min-stad/id1126354459?mt=8" target="_blank">
            <div class="external-link">App Store</div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.agency9.minstad"
            target="_blank"
          >
            <div class="external-link">Google Play</div>
          </a>
          <a href="https://visualarena.lindholmen.se/nyheter/min-stad-nu-som-app" target="_blank">
            <div class="external-link">Visual Arena</div>
          </a>
        </div>
        <h6>
          <br>
        </h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="game" class="case case-centre case-bonus">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/MinStad/MinStad-Game.png">
            </slide>
            <slide>
              <img src="@/assets/MinStad/MinStad-Geoforum.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Min Stad – The Game</h1>
        <h4>Augmented Reality Game Design</h4>
        <p>
          Min Stad was originally designed to include a game. Modelled after
          <a
            href="https://play.google.com/store/apps/details?id=com.nianticproject.ingress"
            target="_blank"
          >Ingress</a> by Niantic, the game would have seen the denizens of Gothenburg traverse the city to earn points by visiting urban planning projects in person and interacting with other users.
        </p>
        <p>The city was keen to "gamify urban planning". The app launched months before the Pokémon Go craze swept the world, but unfortunately the game was postponed due to development cost.</p>
        <h6>
          <br>
        </h6>
      </div>
    </div>

    <ArrowUp/>

    <transition name="fade" mode="out-in" appear>
      <div class="lb-magic" v-if="lightbox == 'show'">
        <img v-bind:src="require('@/assets/' + src )">
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
