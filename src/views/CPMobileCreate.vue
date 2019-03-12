<template>
  <div class="text-shrink">
    <Title
      title="CityPlanner – Mobile Create Tools"
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
        <a href="#" v-scroll-to="'#interface'">
          <div class="case-link">Interface</div>
        </a>
        <a href="#" v-scroll-to="'#result'">
          <div class="case-link">Result</div>
        </a>
      </div>
    </div>

    <div id="overview" class="case case-right case-overview">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/MobileCreate/CityPlanner-Shadow.png">
              <div class="lb-caption">
                <h6>CityPlanner: Sun &amp; Shadow Tool</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'CityPlanner-Shadow.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/MobileCreate/CityPlanner-Measure.png">
              <div class="lb-caption">
                <h6>CityPlanner: Measure Tool</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'CityPlanner-Measure.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/MobileCreate/CityPlanner-Dialogue.png">
              <div class="lb-caption">
                <h6>CityPlanner: Citizen Suggestion</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'CityPlanner-Dialogue.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Product Overview</h1>
        <p>The basic web interface consists of a ribbon, content buttons, toolbar, and interactive components – designed to elegantly scale up to showroom sized touchscreens.</p>
        <p>These elements require translation for alternative views. Mobiles can finally handle our 3D WebGL platform so we started designing and developing a mobile-first UI in 2018.</p>
        <div class="case-links">
          <a href="https://youtu.be/iENjf-LLYpk" target="_blank">
            <div class="external-link">Promo Video</div>
          </a>
          <a href="https://cityplanneronline.com/site/" target="_blank">
            <div class="external-link">CityPlanner Website</div>
          </a>
        </div>
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
        <p>The missing feature was highly requested by customers but, due to complexity, was planned for the second release. This allowed us to analyse, study, and learn from the initial deployment.</p>
        <h6>Role: UX &amp; Interface Design</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="goals" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/MobileCreate/ImpactMap.svg">
              <div class="lb-caption">
                <h6>Impact Map</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'ImpactMap.svg'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/MobileCreate/Desktop.png">
              <div class="lb-caption">
                <h6>Desktop Version</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Desktop.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
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
              <img src="@/assets/MobileCreate/Milanote4.png">
              <div class="lb-caption">
                <h6>Project Planning</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Milanote4.png'"
              >
                <img v-bind:src="require('@/assets/FullscreenOn.svg')">
              </a>
            </slide>
            <slide>
              <img src="@/assets/MobileCreate/Personas.png">
              <div class="lb-caption">
                <h6>UX Personas</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Personas.png'"
              >
                <img v-bind:src="require('@/assets/FullscreenOn.svg')">
              </a>
            </slide>
            <slide>
              <img src="@/assets/MobileCreate/Inspiration.png">
              <div class="lb-caption">
                <h6>Design Inspiration</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Inspiration.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Research &amp; Process</h1>
        <h4>Design, Planning, Testing</h4>
        <p>Initial designs were based on internal research and data from the ongoing development of the base platform. Personas are based on close relationships with both customers and end-users.</p>
        <p>Interface usability research focused primarily on blending mobile map and drawing app conventions. An organisational priority of adopting scalable mobile-first solutions was an important consideration.</p>
        <h6>Tools: Milanote</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="interface" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/MobileCreate/Notes4.png">
              <div class="lb-caption">
                <h6>Design Notes</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Notes4.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/MobileCreate/Design3.png">
              <div class="lb-caption">
                <h6>Design Version 3</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Design3.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/MobileCreate/Prototype3.png">
              <div class="lb-caption">
                <h6>Prototype Version 3</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Prototype3.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>

            <slide>
              <img src="@/assets/MobileCreate/Iterations.png">
              <div class="lb-caption">
                <h6>Design Iterations</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Iterations.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
          </carousel>
        </div>
      </div>

      <div class="about">
        <h1>Interface Design</h1>
        <h4>Prototypes &amp; Iterative Design</h4>
        <p>Basic wireframes of different layout styles were created and tested in Figma. Internal feedback informed advanced prototypes for presentation to stakeholders as well as more advanced user and device testing.</p>
        <p>Workshopping prototypes with test-users yielded many improvements such as changing the location and style of modal windows, streamlining select and delete workflows, and addressing design inconsistencies.</p>
        <div class="case-links">
          <a
            href="https://www.figma.com/file/q8eZ3ooa8SQ5U6AmoMXnhd/Create-Tools-4.3.1-F?node-id=0%3A1"
            target="_blank"
          >
            <div class="external-link">Figma Design</div>
          </a>
          <a
            href="https://www.figma.com/proto/q8eZ3ooa8SQ5U6AmoMXnhd/Create-Tools-4.3.1-F?node-id=793%3A3727&viewport=392%2C117%2C0.124055&scaling=scale-down"
            target="_blank"
          >
            <div class="external-link">Figma Prototype</div>
          </a>
        </div>
        <h6>Tools: Figma, Zeplin, Workshops</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="result" class="case case-centre">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/MobileCreate/DesignF.png">
              <div class="lb-caption">
                <h6>Final Design</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'DesignF.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/MobileCreate/PrototypeF.png">
              <div class="lb-caption">
                <h6>Final Prototype</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'PrototypeF.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/MobileCreate/ZeplinF.png">
              <div class="lb-caption">
                <h6>Zeplin Export</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'ZeplinF.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
          </carousel>
        </div>
      </div>

      <div class="about">
        <h1>The Result</h1>
        <h4>Released in March 2019</h4>
        <p>Dialogue was hot in 2018 and is projected to be even hotter in 2019, with several customers champing at the bit to release new projects utilising the brand new feature.</p>
        <p>We forthwith began tracking usage of each element and researching what to include in future releases. Successful interface designs will inform desktop and showroom versions of Create Tools while work continues on driving the mobile interface forward.</p>
        <div class="case-links">
          <a href="#" target="_blank">
            <div class="external-link">Live Demo</div>
          </a>
        </div>
        <h6>Tools &amp; methodology: Jira, Kanban</h6>
      </div>
    </div>

    <ArrowUp/>

    <transition name="fade" mode="out-in" appear>
      <div class="lb-magic" v-if="lightbox == 'show'">
        <img
          class="pointer"
          v-bind:class="{ 'active': lightbox == 'hide'}"
          v-on:click="lightbox = 'hide'"
          v-bind:src="require('@/assets/MobileCreate/' + src )"
        >
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