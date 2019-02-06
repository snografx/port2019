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
        <p>"Dialogue" is a CityPlanner module for creating geospatial forms. The mobile version launched in Q4 2019 without it's premier feature – Create Tools. These tools allow end users to place markers and draw lines and areas in the 3D world.</p>
        <p>The missing feature was highly requested by our customers but – being much more complicated and interactive – it was planned for the second release so initial data and feedback could best inform further development.</p>
        <h6>Role: Product Design, UX &amp; Interface Design</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="goals" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CPPublicView/Create-Desktop-Label.png">
            </slide>
            <slide>
              <div class="slide-ph">Milanote Project Plan</div>
            </slide>
            <slide>
              <div class="slide-ph">Impact Map</div>
            </slide>
            <slide>
              <div class="slide-ph">Web to Mobile Graphic?</div>
            </slide>
            <slide>
              <img src="@/assets/CaseSnografx-DropF1.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Project Goals</h1>
        <h4>Internal Research, User Feedback, Challenges</h4>
        <p>The goal of the project is to satisfy our customers directly by addressing their feature requests and indirectly by increasing traffic – especially the number of end-user submissions. This adds value to the dialogue module and drives sales.</p>
        <p>We aimed to achieve this by delivering a fun product to the most popular and convenient platform. The biggest design challenges were translating complex interface requirements to the small screen in an uncluttered and intuitive fashion.</p>
        <h6>Tools: Milanote</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="process" class="case case-right">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <div class="slide-ph">Early Prototype?</div>
            </slide>
            <slide>
              <div class="slide-ph">UX Persona x2</div>
            </slide>
            <slide>
              <div class="slide-ph">Design Inspiration: Google Maps, Adobe Mobile?</div>
            </slide>
            <slide>
              <img src="@/assets/CaseSnografx-DropF1.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Research &amp; Process</h1>
        <h4>Priorities, Personas &amp; Design Investigation</h4>
        <p>Initial designs were based on internal research and data from the ongoing development of the base platform. UX personas are based on close relationships with both customers and end-users.</p>
        <p>Interface usability research focused primarily on blending drawing and map application conventions. An organisational priority of adopting mobile-first solutions which can scale up to the base platform were an important consideration.</p>
        <h6>Tools: Figma, XD</h6>
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
              <img src="@/assets/CPPublicView/Create-Milenote-V4.png">
            </slide>
            <slide>
              <img src="@/assets/CPPublicView/Create-Notes-V4.png">
            </slide>
            <slide>
              <div class="slide-ph">Closeup</div>
            </slide>
            <slide>
              <div class="slide-ph">Before &amp; After Improvement Examples</div>
            </slide>
          </carousel>
        </div>
      </div>

      <div class="about">
        <h1>Prototype</h1>
        <h4>Testing &amp; Refining Interface</h4>
        <p>Basic wireframes of different layout styles were tested in Adobe XD. Internal feedback informed advanced prototypes, developed in Figma, for presentation to stakeholders as well as user and device testing.</p>
        <p>Workshopping prototypes with test-users yielded many improvements such as changing the location and style of modal windows, streamlining select and delete workflows, and addressing minor design inconsistancies.</p>
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
        <h6>Tools: Figma, XD</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="dev" class="case case-text">
      <div class="about">
        <h1>Development</h1>
        <h4>Scheduled Release: Q1 2019</h4>
        <p>As of writing this article, the project has moved into the development phase. A final prototype was created in Figma and shared with our development team, along with a Zeplin export.</p>
        <p>Development is planned and managed over bi-weekly sprints, with continual testing and design improvements.</p>
        <h6>Tools: Figma, Zeplin, Jira/Kanban</h6>
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