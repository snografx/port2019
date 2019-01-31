<template>
  <div class="text-shrink">
    <Title
      title="Project Editor"
      blurb="CityPlanner's Project Editor is web-based cloud software used to create 3D urban planning projects, which can then be published to different interactive platforms. It includes tools and features for urban planners, communicators, and organisational collaboration."
      tags="Introduction, Case Study"
    />

    <div class="anchor-links">
      <h4>Skip to</h4>
      <div class="skip-links case-links">
        <a href="#" v-scroll-to="'#views'">
          <div class="case-link-overview">Overview</div>
        </a>
        <a href="#" v-scroll-to="'#analysis'">
          <div class="case-link">Analysis</div>
        </a>
        <a href="#" v-scroll-to="'#design'">
          <div class="case-link">Design</div>
        </a>
        <a href="#" v-scroll-to="'#result'">
          <div class="case-link">Result</div>
        </a>
      </div>
    </div>

    <div id="views" class="case case-right case-overview">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <div class="slide-ph">Editor Screenshot</div>
            </slide>
            <slide>
              <div class="slide-ph">Editor Wireframe from Tut</div>
            </slide>
            <slide>
              <div class="slide-ph">Example Window</div>
            </slide>
            <slide>
              <img src="@/assets/CaseDataManager-DropF1.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Product Overview</h1>
        <p>The interface is made up of top and right-side icon bars surrounding a preview of the public interface. There are tools which allow editors to interact with the map as a live-editor, end-user, or do analytic work.</p>
        <p>This case study examines the design and development of 'Export Video', a new tool for creating animations in the 3D world for use in promotional videos.</p>
        <h6>
          <br>
        </h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="analysis" class="case case-text row-contrast">
      <div class="about">
        <h1>Export Video</h1>
        <h4>Case Analysis</h4>
        <p>The software is designed to scale for use by all kinds of users, from professional 3D visualisers to casual users in a public showroom. One demographic interactive software is unable to hit are people uncomfortable with or intimidated by technology. Enter Export Video.</p>
        <p>This much-requested feature allows CityPlanner editors to create videos of planning projects in the 3D world – before they've been constructed and without the need to hire plans or drones.</p>
        <p>To next section? Describe in more detail what it does and how it works. The user creates nodes and lookats in the 3D world to lead the camera on a tour, which is exported to different kinds of video.</p>
        <p>Research is tricky because it's a unique concept, we need to rely on experience and user testing to design and improve the product.</p>
        <h6>Role: UX &amp; Interface Design</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="design" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <div class="slide-ph">Promo Video Example</div>
            </slide>
            <slide>
              <div class="slide-ph">Göteborg Gondola
                <br>Video Example
              </div>
            </slide>
            <slide>
              <img src="@/assets/CaseSnografx-DropF1.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Design Process</h1>
        <h4>User Research, Feedback, Prototype</h4>

        <p>The process began with an early version of the feature which we used internally for the past two years to produce our own
          <router-link to="/cp-visual.design">promotional videos</router-link>&nbsp;and with select beta-testers. (link to Göteborg gondola video).
        </p>
        <div class="case-links">
          <a href="#" target="_blank">
            <div class="external-link">A9 Video</div>
          </a>
          <a href="#" target="_blank">
            <div class="external-link">Göteborg Video</div>
          </a>
        </div>
        <h6>Tools: Figma, Illustrator</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="result" class="case case-centre">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" paginationColor paginationActiveColor>
            <slide>
              <div class="slide-ph">First sketch of the animation tool
                <br>+ Current state
              </div>
            </slide>
            <slide>
              <div class="slide-ph">Figma Prototype Screens</div>
            </slide>
            <slide>
              <div class="slide-ph">Embed an exported test-video</div>
            </slide>

            <slide>
              <img src="@/assets/CaseMinStad-DropF1.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Prototype &amp; Development</h1>
        <h4>Currently Under Development</h4>
        <p>Work with the 3DMaps developer to create the animation tool (show early sketches). Testing with users and rounds of improvement.</p>
        <p>Create an interface with all the features needed to control the animation tool as well as create different kinds of video exports.</p>
        <p>Current state as of writing is…</p>
        <div class="case-links">
          <a href="#" target="_blank">
            <div class="external-link">Figma Prototype</div>
          </a>
          <a href="#" target="_blank">
            <div class="external-link">Example Export</div>
          </a>
        </div>
        <h6>Release: Scheduled Q1 2019</h6>
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