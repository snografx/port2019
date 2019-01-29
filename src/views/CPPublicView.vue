<template>
  <div class="text-shrink">
    <Title
      title="Public View"
      blurb="This is the 3D world – CityPlanner's public facing interface. It's simpler and touch-friendly. We adapted different 'views' for mobile, touch-tables, and virtual reality."
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
          <carousel
            :perPage="1"
            :navigationEnabled="false"
            :autoplay="true"
            autoplayTimeout="5000"
            paginationColor
            paginationActiveColor
          >
            <slide>
              <img src="@/assets/CaseSnografx-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CasePanorama-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CaseMinStad-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CaseDataManager-DropF1.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Product Overview</h1>
        <h4>Web, Mobile, Touch-table, VR</h4>
        <p>The main web interface consisting of a ribbon at the bottom, circular content buttons, a toolbar, plus interactive components. The interface is designed to elegantly scale to showroom sized touch monitors. </p>
        <p>
        As today's mobile devices can finally handle our 3D platform, we started developing a dedicated mobile interface in 2018. 
        </p>
        <h6>It looks better with something here.</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="analysis" class="case case-text">
      <div class="about">
        <h1>Mobile Create Tools</h1>
        <h4>Case Analysis</h4>
        <p>We started by designin and implementation of the base 'dialogue' product for mobile, before moving to the more advanced "Create tools". Explain what they are – end users visualise markers lines, and areas in the map to share feedback and ideas to municipalities. </p>
        <p>What we learned and improved so far. Customer impetus form Umeå and Eskilstuna. </p>
        <h6>Role: Product Design, UX &amp; Interface Design</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="design" class="case case-left">
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
        <h1>Design Process</h1>
        <h4>User Research, Feedback, Prototype</h4>
        <p>"UX personas" and actual users demand these tools. We develop them. Advanced concept. Study of other mobile draw tools, such as those by Adobe. Create prtypes in XD and Figma. Get feedback, make improvements. Give example (button position?). </p>
        <h6>Tools: Figma, XD, Illustrator</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="result" class="case case-centre">
      <div class="visual">
        <div class="carousel-container">
          <carousel
            :perPage="1"
            :autoplay="true"
            autoplayTimeout="5000"
            :navigationEnabled="false"
            paginationColor
            paginationActiveColor
          >
            <slide>
              <img src="@/assets/CaseDataManager-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CaseSnografx-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CasePanorama-DropF1.png">
            </slide>
            <slide>
              <img src="@/assets/CaseMinStad-DropF1.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Result</h1>
        <h4>Currently Under Development</h4>
        <p>Hot off the presses. Show the latest prototype (not ready yet). Explain where we are at and where will will go from here.</p>
        <p> Embed prototype in the visual section.</p>
        <h6>Try to add something here</h6>
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