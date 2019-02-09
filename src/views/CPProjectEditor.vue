<template>
  <div class="text-shrink">
    <Title
      title="CityPlanner – Project Editor"
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
        <a href="#" v-scroll-to="'#goals'">
          <div class="case-link">Goals</div>
        </a>
        <a href="#" v-scroll-to="'#process'">
          <div class="case-link">Process</div>
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
        <p>Interactive CityPlanner projects are designed for all kinds of users – from professional architects to casual showroom visitors. But how can urban planners communicate their 3D plans to those who are uninterested or unable to use software? Enter Export Video.</p>
        <p>This much-requested feature allows editors to create videos of planning projects in the 3D world – before they've been constructed and without the need to hire planes or drones.</p>
        <h6>Role: UX &amp; Interface Design</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="goals" class="case case-right row-contrast">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <div class="slide-ph">Impact Map</div>
            </slide>
            <slide>
              <img src="@/assets/CaseDataManager-DropF1.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Feature Goals</h1>
        <h4>Video for Everyone</h4>
        <p>The goal for Export Video feature is creating an entirely new market for CityPlanner - non-users. This allows 3D planning to reach a much wider audience.</p>
        <p>The measure of success is feature use, with an aim of having it used for 10 customer promotions by the end of 2019. We plan to achieve this by making it easy enough to be used by all kinds of users – as well as promoting it's use with customers.</p>
        <h6>Tools: Figma, Milanote</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="process" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <div class="slide-ph">Göteborg Gondola
                <br>Video Example
              </div>
            </slide>
            <slide>
              <div class="slide-ph">Old Videos Showreel</div>
            </slide>
            <slide>
              <img src="@/assets/CaseSnografx-DropF1.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Research &amp; Process</h1>
        <h4>Design Investigation</h4>
        <p>An early version of this feature has existed for over a year, used internally for our own
          <router-link to="/cp-visual.design">promotional videos</router-link>. Initial user needs were based on our own user experience.
        </p>
        <p>We invited select customers to test and share feedback. Göteborg used an alpha build to release a 360° Video of their Citybanan project. As a unique product, we relied heavily on testing and iterative design to design and improve the feature.</p>
        <div class="case-links">
          <a href="#" target="_blank">
            <div class="external-link">Göteborg Video</div>
          </a>
          <a href="#" target="_blank">
            <div class="external-link">Beta Showreel</div>
          </a>
        </div>
        <h6>Role: Research &amp; ??</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="design" class="case case-right">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" paginationColor paginationActiveColor>
            <slide>
              <div class="slide-ph">Screenshot of animation tool</div>
            </slide>
            <slide>
              <div class="slide-ph">First sketch of the animation tool</div>
            </slide>
            <slide>
              <div class="slide-ph">Figma Design/Prototype Screens</div>
            </slide>

            <slide>
              <img src="@/assets/CaseMinStad-DropF1.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Interface Design</h1>
        <h4>How it works</h4>
        <p>There are two parts of the design – the animation tool, used to create the camera's flight path, and the interface window.</p>
        <p>The animation tool works by the user creating the camera path with nodes in the 3d world. 'Lookats' can also be created, geospatial references for the camera to point towards.</p>
        <p>Window settings relate to speed, quality, as well as export settings.</p>
        <div class="case-links">
          <a href="#" target="_blank">
            <div class="external-link">Figma Maybe</div>
          </a>
        </div>
        <h6>Tools: Figma, Zeplin, Milanote, Workshops, Jira/Kanban</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="result" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" paginationColor paginationActiveColor>
            <slide>
              <div class="slide-ph">Screenshot</div>
            </slide>
            <slide>
              <div class="slide-ph">Whiteboard session: J and A</div>
            </slide>
            <slide>
              <div class="slide-ph">Screencast of using the tool, example video</div>
            </slide>
            <slide>
              <img src="@/assets/CaseMinStad-DropF1.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Result</h1>
        <h4>Released in February 2019</h4>
        <p>I worked on development with our product manager and a single developer. Iterations yielded major improvements, allowing us to streamline the product for beginner and advanced users alike. 
          <p>One such example is inventing a setting for the camera lookat – whereby a user can choose automatic, single, or multiple lookats making each use case much simpler.</p>
        <p>Watch a screencast of the tool in action, or a showreel of exported videos. Early feedback is extremely positive, with customers already working on video promotions.</p>
        <div class="case-links">
          <a href="#" target="_blank">
            <div class="external-link">Screencast</div>
          </a>
          <a href="#" target="_blank">
            <div class="external-link">Video Export</div>
          </a>
          <a href="#" target="_blank">
            <div class="external-link">360° Export</div>
          </a>
        </div>
        <h6></h6>
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