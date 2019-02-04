<template>
  <div class="text-shrink">
    <Title
      title="Public View"
      blurb="This is the 3D world – CityPlanner's public facing interface. It uses large touch-friendly buttons and simple concepts for communicating with the public. Views can be published to web, mobile, touch-tables, and virtual reality."
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
          <div class="case-link">Process</div>
        </a>
        <a href="#" v-scroll-to="'#result'">
          <div class="case-link">Prototype</div>
        </a>
      </div>
    </div>

    <div id="views" class="case case-right case-overview">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CPPublicView/PV-Shadow-web.png">
            </slide>
            <slide>
              <img src="@/assets/CPPublicView/PV-Measure-web.png">
            </slide>
            <slide>
              <img src="@/assets/CPPublicView/PV-Dialogue-web.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Product Overview</h1>
        <p>The basic web interface consists of a ribbon, content buttons, toolbar, and interactive components – designed to elegantly scale up to showroom sized touchscreens.</p>
        <p>These elements require translation for alternative views. Mobiles can finally handle our 3D WebGL platform so we started designing and developing a mobile-first UI in 2018.</p>
        <h6>
          <br>
        </h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="analysis" class="case case-text">
      <div class="about">
        <h1>Mobile Create Tools</h1>
        <h4>Case Analysis</h4>
        <p>"Dialogue" is a CityPlanner module for creating geospatial forms. The mobile version launched in Q4 2019 without it's premier feature – Create Tools. These tools allow end users to place markers and draw lines and areas in the 3D world.</p>
        <p>The missing feature was highly requested by our customers but – being much more complicated and interactive – it was planned for the second release so data and feedback could best inform development.</p>
        <h6>Role: Product Design, UX &amp; Interface Design</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="design" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <div class="slide-ph">Web Version</div>
            </slide>
            <slide>
              <div class="slide-ph">UX Persona</div>
            </slide>
            <slide>
              <div class="slide-ph">Wireframe</div>
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
        <p>Initial designs were based on internal research and data from the ongoing development of the base platform. UX personas are based on close relationships with both customers and users. Our organisational priority was establishing mobile-first methodology.</p>
        <p>Interface usability research focused primarily on blending drawing and map application conventions, while providing a fun end-user experience in order to provide the best value – measured by number of submissions – to our customers.</p>
        <h6>Tools: Figma, XD</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="result" class="case case-right">
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
              <div class="slide-ph">Pre &amp; Post-Modal</div>
            </slide>
            <slide>
              <div class="slide-ph">Pre &amp; Post-Exploding Button</div>
            </slide>
          </carousel>
        </div>
      </div>

      <div class="about">
        <h1>Prototype &amp; Development</h1>
        <h4>Currently Under Development</h4>
        <p>Internal wireframes were first created and tested in XD. Feedback informed advanced prototypes, developed in Figma, for sharing with stakeholders plus user and device testing.</p>
        <p>Early insights gained include adjusting the position of the buttons away from the edge of the screen and adopting modal dialogs. The final design has been approved and development is underway. Development versions are currently being being tested and polished before release.</p>
        <div class="case-links">
          <a
            href="https://www.figma.com/file/r7GWbuS9T2ZnCb1kVvofCj/Mobile-Create-Tools?node-id=0%3A1"
            target="_blank"
          >
            <div class="external-link">View Design</div>
          </a>
          <a
            href="https://www.figma.com/proto/r7GWbuS9T2ZnCb1kVvofCj/Mobile-Create-Tools?node-id=0%3A1&viewport=352%2C210%2C0.139796&scaling=scale-down"
            target="_blank"
          >
            <div class="external-link">Try Prototype</div>
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