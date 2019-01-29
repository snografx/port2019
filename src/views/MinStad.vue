<template>
  <div class="text-shrink">
    <Title
      title="Min Stad Göteborg"
      blurb="Min Stad – &quot;My City&quot; in Swedish – is an app designed for the City of Gothenburg. The municipality publishes planning and cultural information while cultivating feedback and ideas from the community. Visitors mark map positions, choose categories, and leave comments."
      tags="Product &amp; Interface Design, Logo Design, UX &amp; Development Management, English Copy"
    />

    <div class="anchor-links">
      <h4>Skip to</h4>
      <div class="skip-links case-links">
        <a href="#" v-scroll-to="'#product'">
          <div class="case-link">Product Info</div>
        </a>
        <a href="#" v-scroll-to="'#visual'">
          <div class="case-link">Visual Design</div>
        </a>
                <a href="#" v-scroll-to="'#graphic'">
          <div class="case-link">Graphic Design</div>
        </a>
        <a href="#" v-scroll-to="'#game'">
          <div class="case-link">Augmented Reality Game</div>
        </a>
      </div>
    </div>


    <div id="product" class="case case-centre">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CasePanorama-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CaseMinStad-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CaseDataManager-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CaseSnografx-DropF1.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Product Information</h1>
        <h4>Product Design, UX, Interface, &amp; Visual Design</h4>
        <p>In 2016 Gothenburg's Department of Urban Planning commissioned a mobile app version of Min Stad – their successful web &amp; showroom platform. The objective increase publicity and develop deeper dialogue with residents via interactive features.</p>
        <p>I designed the visuals, features, and interface with city stakeholders. Along with Agency9's project manager, we leveraged the department's own assets for prototyping, user testing, and feedback while working agile with a development team in Ukraine to deliver this multi-platform product.</p>
      </div>
    </div>

    <ArrowUp/>


        <div id="visual" class="case case-right">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CasePanorama-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CaseMinStad-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CaseDataManager-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CaseSnografx-DropF1.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Visual Design</h1>
        <h4>Interface &amp; Digital Design</h4>
        <p>The interface is the result of successfully marrying the Min Stad web app and CityPlanner with Material Design .</p>
        <p>The chief design challenge was translating vague requirements into a fun interactive experience. I did a design study on the best map, messaging, and augmented reality apps to create the approved proposal. Wireframes and mockups were created in Sketch while interactive demos were prepared in Pixate.</p>
        <h6>Tools: Sketch, Pixate</h6>
      </div>
    </div>

    <ArrowUp/>

        <div id="graphic" class="case case-left">
          <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CasePanorama-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CaseMinStad-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CaseDataManager-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CaseSnografx-DropF1.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Graphic Design</h1>
        <h4>Logo &amp; Branding</h4>
        <p>Several concepts were developed for the app logo. The genesis of the winning concept came from a city employee, with a rough idea being polished into the final design. I've shared several proposals and refinements to illustrate the design process.</p>
        <h6>Tools: CorelDraw, Photoshop, Sketch</h6>
      </div>
    </div>

    <ArrowUp/>

            <div id="game" class="case case-right">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CasePanorama-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CaseMinStad-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CaseDataManager-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CaseSnografx-DropF1.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Min Stad – The Game</h1>
        <h4>Augmented Reality Game Design</h4>
        <p>Min Stad was originally designed to include a game. Modelled after <a href="https://play.google.com/store/apps/details?id=com.nianticproject.ingress" target="_blank">Ingress</a> by Niantic, the game would have seen the denizens of Gothenburg traverse the city to earn points by visiting urban planning projects in person and interacting with other users. </p>
        <p>The city was keen to "gamify urban planning" and the app would have come out months before the Pokémon Go craze swept the world, but was postponed due to development cost. </p>
      </div>
    </div>

    <ArrowUp/>

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
  }
};
</script>

<style lang="scss" >
$alignment: left;
@import "@/style/theme.scss";
@import "@/style/case-logic.scss";
@import "@/style/carousel.scss";
</style>
