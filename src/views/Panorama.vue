<template>
  <div class="text-shrink">
    <Title
      title="360° Panorama"
      blurb="360° Panorama is a CityPlanner spin-off product for low-end and mobile devices. It uses exported viewpoints from CityPlanner's fully 3D world to create a focused on-the-rails visual experience."
      tags
    />

    <div class="anchor-links">
      <h4>Skip to</h4>
      <div class="skip-links case-links">
        <a href="#" v-scroll-to="'#overview'">
          <div class="case-link-overview">Overview</div>
        </a>
        <a href="#" v-scroll-to="'#analysis'">
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
              <img src="@/assets/360Panorama/Pano-Project360.png">
              <div class="lb-caption">
                <h6></h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Pano-Project360.png'"
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
        <p>Around the world, many potential end-users lack cutting edge mobiles or reside in places with slow or limited bandwidth. A product which could reach this caste of potential users was therefore required to deliver on the marketing message that CityPlanner serves all demographics.</p>
        <p>360° Panorama solves this problem by offering a lightweight 3D experience, packaged with the advantage of delivering a more focused end-user experience.</p>
        <h6>
          <br>
        </h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="analysis" class="case case-text">
      <div class="about">
        <h1>360° Panorama</h1>
        <h4>Case Analysis</h4>
        <p>This project was undertaken in cooperation with the City of Umeå, northern Sweden's largest metropolis, as their project requirements corresponded with our product roadmap.</p>
        <p>The prerequisites were to support low-end / lower-bandwidth devices, Virtual Reality via Google Cardboard, and integrate a new 'time slider' component.</p>
        <p>An internal emphasis was also placed on designing an interface which could form the foundation of CityPlanner's forthcoming mobile UI.</p>
        <h6>Role: Product, Interface, &amp; UX Design / Visual Design</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="process" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/360Panorama/Whiteboard.png">
              <div class="lb-caption">
                <h6>Project Planning: Interface &amp; Design</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Whiteboard.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/360Panorama/360Meets2.png">
              <div class="lb-caption">
                <h6>Project Planning: Presentation</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = '360Meets2.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>

            <slide>
              <img src="@/assets/360Panorama/WCAG.png">
              <div class="lb-caption">
                <h6>Web Content Accessibility &amp; User Testing</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'WCAG.png'"
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
        <p>The primary challenge was to construct a plan for mapping all of CityPlanner's existing features to the small screen – while also planning support for multiple new features across the entire product line.</p>
        <p>A design system was crafted to translate every feature into a compatible interface which would subsequently be constructed on the 360° Panorama bedrock.</p>

        <h6>
          <br>
        </h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="prototype" class="case case-centre">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/360Panorama/Sketch1.png">
              <div class="lb-caption">
                <h6>Initial Interface Sketch</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Sketch1.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/360Panorama/XD-F.png">
              <div class="lb-caption">
                <h6>Final Prototype</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'XD-F.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/360Panorama/XD-Near.png">
              <div class="lb-caption">
                <h6>Prototype Detail</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'XD-Near.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/360Panorama/XD-Stockholm.png">
              <div class="lb-caption">
                <h6>Customer Project Prototype</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'XD-Stockholm.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>

            <slide>
              <img src="@/assets/360Panorama/XD-Export.png">
              <div class="lb-caption">
                <h6>Prototype Exports</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'XD-Export.png'"
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
        <p>We went through many iterations with our partners in Umeå who conducted workshops with local youth which informed the initial design.</p>
        <p>The city had a tight deadline, so 360° Panorama was soft-launched – without promotion – in the autumn of 2018 as a beta preview. We took advantage of this necessity to fast-track rapid iterations and improvements.</p>
        <p>In late 2018 we leveraged an event at Sweco to workshop the released beta. Improvements continue ahead product promotion in 2019.</p>
        <p></p>
        <div class="case-links">
          <a href="https://youtu.be/H2RI0sGmBzQ" target="_blank">
            <div class="external-link">Umeå Video</div>
          </a>
          <a href="https://youtu.be/4pr1WonWyb8" target="_blank">
            <div class="external-link">Stockholm Video</div>
          </a>
        </div>
        <h6>Tools: Adobe XD, Workshops</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="visual" class="case case-right">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/360Panorama/Logo-360.svg">
              <div class="lb-caption">
                <h6>360° Panorama Logo (Final)</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Logo-360.svg'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/360Panorama/Logo-VRPano.svg">
              <div class="lb-caption">
                <h6>Virtual Reality Logo (Development / Event)</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Logo-VRPano.svg'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/360Panorama/Logo-Pocket.svg">
              <div class="lb-caption">
                <h6>Product (Development) Logo</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Logo-Pocket.svg'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/360Panorama/Logo-App.svg">
              <div class="lb-caption">
                <h6>De-branded / App Icon Logo</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Logo-App.svg'"
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
        <h1>Visual Design</h1>
        <h4>Logos &amp; Branding</h4>
        <p>Several identities were designed during the development process, complicated by Agency9 being acquired before the product was officially launched.</p>
        <p>'CityPlanner Pocket' was the proposed product name, now used for internal development. 'VRPanorama' was used to promote Google Cardboard-specific events before settling on the more generic and inclusive '360° Panorama', as VR is not required to enjoy the product.</p>
        <h6>Tools: Illustrator, Figma</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="dev" class="case case-centre">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/360Panorama/Live-Customer.png">
              <div class="lb-caption">
                <h6>Published Customer Projects</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Live-Customer.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/360Panorama/Live-Demo.png">
              <div class="lb-caption">
                <h6>Live Screenshots</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Live-Demo.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>

            <slide>
              <img src="@/assets/360Panorama/Cardboard.png">
              <div class="lb-caption">
                <h6>Google Cardboard Event Design Prototype</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Cardboard.png'"
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
        <h4>Soft Release in Q4 2018</h4>
        <p>The soft release was a victory for our partners in Umeå. Several other clients have already published projects and we are eagerly incorporating feedback into improving the base product and mobile interface.</p>
        <p>Rapid development allowed CityPlanner's native mobile interface to launch shortly after 360° Panorama, quickly aligning the mobile portfolio, while designs are being made for translating new features for Desktop and Tablet views.</p>
        <div class="case-links">
          <a href="http://bit.ly/stadshagen-en" target="_blank">
            <div class="external-link">Demo (English)</div>
          </a>
          <a href="http://bit.ly/vallentuna3d" target="_blank">
            <div class="external-link">Vallentuna</div>
          </a>
          <a href="http://bit.ly/masholmen" target="_blank">
            <div class="external-link">Stockholm</div>
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
          v-bind:src="require('@/assets/360Panorama/' + src )"
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

