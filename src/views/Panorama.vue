<template>
  <div class="text-shrink">
    <Title
      title="360° Panorama"
      blurb="360° Panorama is CityPlanner for low-end and mobile devices. It uses exported viewpoints from CityPlanner's fully 3D world to create a focused on-the-rails experience."
      tags
    />

    <div class="anchor-links">
      <h4>Skip to</h4>
      <div class="skip-links case-links">
        <a href="#" v-scroll-to="'#overview'">
          <div class="case-link-overview">Overview</div>
        </a>
        <a href="#" v-scroll-to="'#goals'">
          <div class="case-link">Goals</div>
        </a>
        <a href="#" v-scroll-to="'#process'">
          <div class="case-link">Process</div>
        </a>
        <a href="#" v-scroll-to="'#prototype'">
          <div class="case-link">Interface</div>
        </a>
        <a href="#" v-scroll-to="'#visual'">
          <div class="case-link">Visual</div>
        </a>
        <a href="#" v-scroll-to="'#dev'">
          <div class="case-link">Result</div>
        </a>
      </div>
    </div>

    <div id="overview" class="case case-right case-overview">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CPPublicView/Create-Impact.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>360° Panorama</h1>
        <h4>Project Overview</h4>
        <p>This project was prioritised at the behest of the City of Umeå, one of northern Sweden's largest cities. The requirements were to support panorama images on low-end devices, VR support via Google Cardboard, plus the addition of a time slider component.</p>
        <h6>Role: Product &amp; Interface Design, UX, Branding</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="goals" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CPPublicView/Create-Impact.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Project Goals</h1>
        <h4>Increasing the value of Dialogue</h4>
        <p>
          Supporting a new format. More devices.
          On the Rails experience proviced an oppp for planners to craft a more focused experience
        </p>
        <h6>
          <br>
        </h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="process" class="case case-right">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CPPublicView/Create-Milenote-V4.png">
            </slide>
            <slide>
              <img src="@/assets/CPPublicView/Create-Personas.png">
            </slide>
            <slide>
              <img src="@/assets/CPPublicView/Create-Inspiration.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Research &amp; Process</h1>
        <h4>Design Investigation</h4>
        <p>I began development with sketches of CityPlanner's existing features and the project requirements, which I then used to create a development plan for the two interconnected products. The designs were developed in parallel – using Adobe XD for layout, prototyping, user testing, and development specs plus Adobe Illustrator for asset creation.</p>
        <h6>
          <br>
        </h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="prototype" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CPPublicView/Create-Design.png">
            </slide>
            <slide>
              <img src="@/assets/CPPublicView/Create-Prototype.png">
            </slide>
            <slide>
              <img src="@/assets/CPPublicView/Create-Notes.png">
            </slide>
            <slide>
              <img src="@/assets/CPPublicView/Create-Iteration.png">
            </slide>
          </carousel>
        </div>
      </div>

      <div class="about">
        <h1>Interface Design</h1>
        <h4>Testing &amp; Iterative Design</h4>
        <p>Show version 1 and 2, improvements from Sweco event and user testing include...... show example of new and old UI, iPhone 7 the map was too small.</p>
        <p></p>
        <div class="case-links">
          <a href="#" target="_blank">
            <div class="external-link">XD Prototype</div>
          </a>
          <a href="#" target="_blank">
            <div class="external-link">Prototype Video</div>
          </a>
        </div>
        <h6>Tools: Figma, XD, Workshops</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="visual" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CPPublicView/Create-Design.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Visual Design</h1>
        <h4>Soft Release: Q4 2018</h4>
        <p>Logo, Panorama, Cardboard, Promotion</p>
        <h6>Tools: Illustrator</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="dev" class="case case-right">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CPPublicView/Create-Design.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>The Result</h1>
        <h4>Soft Release: Q4 2018</h4>
        <p>Released in late 2018. Evaluation. Customer stories. Interface was successfully ported to the base platform. Plans were made to merge the formats into the most cohesive interface. Improvments currently being made for Mobile UI will lift Panorama.</p>
        <div class="case-links">
          <a href="#" target="_blank">
            <div class="external-link">Demo 1</div>
          </a>
          <a href="#" target="_blank">
            <div class="external-link">Real Project</div>
          </a>
        </div>
        <h6>Tools &amp; methodology: Jira, Kanban</h6>
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
