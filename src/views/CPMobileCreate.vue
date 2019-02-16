<template>
  <div class="text-shrink">
    <Title
      title="CityPlanner – Front End"
      blurb="This is the 3D world – CityPlanner's public facing interface. It uses large touch-friendly buttons and simple concepts for communicating with the public. Optimised front-end views can be published to web, mobile, touch-tables, and VR.
      
      I'll start by introducing the platform before exploring a specific case study for the mobile view."
      tags
    />

    <div class="anchor-links">
      <h4>Skip to</h4>
      <div class="skip-links case-links">
        <a href="#" v-scroll-to="'#overview'">
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
        <a href="#" v-scroll-to="'#prototype'">
          <div class="case-link">Prototype</div>
        </a>
        <a href="#" v-scroll-to="'#dev'">
          <div class="case-link">Development</div>
        </a>
      </div>
    </div>

    <div id="overview" class="case case-right case-overview">
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
        <p>"Dialogue" is a CityPlanner module for creating geospatial forms. The mobile version launched without it's premier feature – Create Tools – which allow end-users to place markers and draw lines/areas in the 3D world.</p>
        <p>The missing feature was highly requested by customers but due to complexity it was planned for the second release – allowing us to study and learn from from the initial deployment.</p>
        <h6>Role: Product Design, UX &amp; Interface Design</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="goals" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CPPublicView/Create-Desktop.png">
            </slide>
            <slide>
              <img src="@/assets/CPPublicView/Create-Impact.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Project Goals</h1>
        <h4>Increasing the value of Dialogue</h4>
        <p>Our primary goal for Mobile Create Tools is to drive traffic via increasing end-user submissions, thus adding value to the dialogue module.</p>
        <p>Success on mobile is crucial as it is the most requested platform for end-users. Exponential growth is therefore possible if the experience is fun and intuitive. The biggest design challenges were translating complex interface requirements to the small screen in an uncluttered and easy-to-learn fashion.</p>
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
        <p>Initial designs were based on internal research and data from the ongoing development of the base platform. Personas are based on close relationships with both customers and end-users.</p>
        <p>Interface usability research focused primarily on blending mobile map and drawing app conventions. An organisational priority of adopting scalable mobile-first solutions were an important consideration.</p>
        <h6>Tools: Milanote</h6>
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
        <h1>UI Prototypes</h1>
        <h4>Testing &amp; Iterative Design</h4>
        <p>Basic wireframes of different layout styles were tested in Adobe XD. Internal feedback informed advanced prototypes, developed in Figma, for presentation to stakeholders as well as user and device testing.</p>
        <p>Workshopping prototypes with test-users yielded many improvements such as changing the location and style of modal windows, streamlining select and delete workflows, and addressing design inconsistencies.</p>
        <div class="case-links">
          <a
            href="https://www.figma.com/file/r7GWbuS9T2ZnCb1kVvofCj/Mobile-Create-Tools?node-id=0%3A1"
            target="_blank"
          >
            <div class="external-link">Version 4 Design</div>
          </a>
          <a
            href="https://www.figma.com/proto/r7GWbuS9T2ZnCb1kVvofCj/Mobile-Create-Tools?node-id=0%3A1&viewport=352%2C210%2C0.139796&scaling=scale-down"
            target="_blank"
          >
            <div class="external-link">Version 4 Prototype</div>
          </a>
        </div>
        <h6>Tools: Figma, XD, Workshops</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="dev" class="case case-right">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CPPublicView/Create-Design-F.png">
            </slide>
            <slide>
              <img src="@/assets/CPPublicView/Create-Prototype-F.png">
            </slide>
            <slide>
              <img src="@/assets/CPPublicView/Create-Zeplin.png">
            </slide>
          </carousel>
        </div>
      </div>

      <div class="about">
        <h1>Development</h1>
        <h4>Scheduled Release: Q1 2019</h4>
        <p>As of writing, the project has moved into the development phase. A final Figma prototype was approved, along with Zeplin exports and Jira issues.</p>
        <p>Development is planned and managed over bi-weekly sprints, with continual testing and design improvements.</p>
        <div class="case-links">
          <a
            href="https://www.figma.com/file/r7GWbuS9T2ZnCb1kVvofCj/Mobile-Create-Tools?node-id=0%3A1"
            target="_blank"
          >
            <div class="external-link">Final Design</div>
          </a>
          <a
            href="https://www.figma.com/proto/r7GWbuS9T2ZnCb1kVvofCj/Mobile-Create-Tools?node-id=0%3A1&viewport=352%2C210%2C0.139796&scaling=scale-down"
            target="_blank"
          >
            <div class="external-link">Final Prototype</div>
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