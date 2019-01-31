<template>
  <div class="text-shrink">
    <Title
      title="Public View"
      blurb="This is the 3D world – CityPlanner's public facing interface. It uses large touch-friendly buttons and simple concepts for communicating with the public. 'Views' can be published to web, mobile, touch-tables, and virtual reality."
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
              <div class="slide-ph">Project View Web</div>
            </slide>
            <slide>
              <div class="slide-ph">Translation wireframe</div>
            </slide>
            <slide>
              <div class="slide-ph">Mobile Dialogue?</div>
            </slide>
            <slide>
              <img src="@/assets/CaseDataManager-DropF1.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Product Overview</h1>
        <p>Public View is the main web interface. It consists of a bottom ribbon, circular content buttons, a toolbar, plus interactive components. The interface is designed to elegantly scale to showroom sized touch monitors.</p>
        <p>These elements require translation for alternative views. Today's mobile devices can finally handle our 3D platform so we started developing a dedicated mobile interface in 2018. This case study explores the design and development of 'Mobile Create Tools'.</p>
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
        <p>This project was preceded by the design and implementation of the base Dialogue platform on mobile. Dialogue is a CityPlanner module for creating geospatial forms. Create Tools allow the end user to place markers and draw lines and areas in the 3D world.</p>
        <p>Being more complicated than the base form, they were planned for the second Mobile UI release and are currently in development, as of writing this page.</p>
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
        <p>The interface design is informed by ongoing research and continual development of the the web version of these tools, which UX personas are based on, as well as feedback from customers such as the municipalities of Umeå and Eskilstuna.</p>
        <p>The mobile interface provides an opportunity to establish mobile-first methodology, which may be adapted for and definitely will influence the base version. Interface research focused largely on mobile drawing applications, such as those by Adobe, with the basic map platform leaning on mobile map conventions.</p>
        <h6>Tools: Figma, XD</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="result" class="case case-centre">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <div class="slide-ph">Figma Prototype</div>
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
        <p>Internal wireframes were first created in XD, with more advanced prototypes being developed in Figma for sharing with stakeholders as well as user and device testing. Insights gained include adjusting the position of the buttons away from the edge of the screen and adopting modal dialogs.</p>
        <p>Explain where we are at and where will will go from here.</p>
        <p>Embed prototype in the visual section.</p>
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