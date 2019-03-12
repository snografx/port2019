<template>
  <div class="text-shrink">
    <Title
      title="CityPlanner – Export Video"
      blurb="CityPlanner's Project Editor is web-based cloud software used to create 3D urban planning projects which can then be published to different interactive platforms. It includes tools and features for urban planners, communicators, and organisational collaboration.
      
      On this page, I will introduce the product before exploring a specific case study."
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

    <div id="overview" class="case case-left case-overview">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/ExportVideo/Editor-Terraform.png">
              <div class="lb-caption">
                <h6>Editor: Terraform Tool</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Editor-Terraform.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/ExportVideo/Editor-Marker.png">
              <div class="lb-caption">
                <h6>Editor: Point of Interest</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Editor-Marker.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/ExportVideo/Editor-IconLib.png">
              <div class="lb-caption">
                <h6>Editor: Icon Library</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Editor-IconLib.png'"
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
        <p>The interface is made up of top and right-side icon bars surrounding a preview of the public interface. There are tools which allow editors to interact with the map as a live-editor, end-user, or do analytic work.</p>
        <p>This case study examines the design and development of 'Export Video', a new tool for creating animations in the 3D world for use in promotional videos.</p>
        <div class="case-links">
          <a href="https://youtu.be/TUe-6Ydq9oM" target="_blank">
            <div class="external-link">Editor Trailer</div>
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
        <h1>Export Video</h1>
        <h4>Case Analysis</h4>
        <p>CityPlanner's interactive projects are designed for all kinds of users – from professional architects to casual showroom visitors. But how can urban planners communicate their 3D visualisations to those who are uninterested or unable to use the software?</p>
        <p>The answer is video exports. This much-requested feature allows editors to 'film' virtual videos in the 3D world – before plans have been realised and without the need to hire planes or drones.</p>
        <p>The feature goal is therefore to establish an entirely new demographic for external communication – non-users.</p>
        <h6>Role: UX &amp; Interface Design</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="process" class="case case-right">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/ExportVideo/Ani-Targeting.png">
              <div class="lb-caption">
                <h6>Designing the Animation Tool</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Ani-Targeting.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/ExportVideo/Observing2.png">
              <div class="lb-caption">
                <h6>Design 2.0 User Test</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Observing2.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/ExportVideo/Notes-UT.png">
              <div class="lb-caption">
                <h6>User Test Notes</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Notes-UT.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/ExportVideo/Milanote21.png">
              <div class="lb-caption">
                <h6>Project Notes &amp; Planning</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Milanote21.png'"
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
        <p>An alpha version of this feature has existed for over a year, used internally for production of our own in-house promotional videos. Initial user needs were based on our own extensive user experience.</p>
        <p>
          As a unique product, we relied heavily on testing and iterative design. We invited select customers to test early builds and share feedback. Göteborg used a test version to release a 360° Video of their '
          <a
            href="https://stadsutveckling.goteborg.se/projekt/stadslinbana/"
            target="_blank"
          >Stadslinbanan</a>' project – featured here.
        </p>
        <div class="case-links">
          <a href="https://youtu.be/XMUjtcIZZ-4" target="_blank">
            <div class="external-link">Göteborg 360° Video</div>
          </a>
          <a href="https://youtu.be/w7vFFd3XSq0" target="_blank">
            <div class="external-link">Norkart Promotion</div>
          </a>
        </div>
        <h6>Tools: Milanote</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="interface" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/ExportVideo/Export-V1F1.png">
              <div class="lb-caption">
                <h6>Release 1 Screenshot: Adjusting a Node</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Export-V1F1.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/ExportVideo/Export-V1F2.png">
              <div class="lb-caption">
                <h6>Release 1 Screenshot: Single Target</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Export-V1F2.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/ExportVideo/Export-V1F3.png">
              <div class="lb-caption">
                <h6>Release 1 Screenshot: Export Options</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Export-V1F3.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>

            <slide>
              <img src="@/assets/ExportVideo/Notes-UI.png">
              <div class="lb-caption">
                <h6>Release 2: Interface Sketch</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Notes-UI.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>

            <slide>
              <img src="@/assets/ExportVideo/Design21.png">
              <div class="lb-caption">
                <h6>Release 2: Final Design</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Design21.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/ExportVideo/Prototype21.png">
              <div class="lb-caption">
                <h6>Release 2: Final Prototype</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Prototype21.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/ExportVideo/Figma-Export.png">
              <div class="lb-caption">
                <h6>Release 2: Figma Export</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Figma-Export.png'"
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
        <p>There are two parts of the interface, the in-map animation tool – used to create the camera's flight path – and the interface window – used for settings.</p>
        <p>The animation tool works by creating waypoints in the 3D world. 'Lookats' can also be created, which are coordinates for the camera to focus on as it travels along the path.</p>
        <p>Basic window settings relating to speed, quality, and export options premiered with the first release while many more advanced options have been already designed for the second release.</p>
        <div class="case-links">
          <a
            href="https://www.figma.com/file/ahr1N98w9S0AZ04ouHtz3Z/Export-Video-Next-2.1"
            target="_blank"
          >
            <div class="external-link">Figma Design</div>
          </a>
          <a
            href="https://www.figma.com/proto/ahr1N98w9S0AZ04ouHtz3Z/Export-Video-Next-2.1?node-id=114%3A0&viewport=865%2C-155%2C0.251447&scaling=min-zoom"
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
      <div class="visual visual-video">
        <div class="mh">
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/videoseries?list=PLvNoAHvD4HObK5UHvlS6YYXlcFg11z2e3"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="lb-caption">
              <h6>Export Video: Trailer &amp; 4K Export</h6>
            </div>
          </div>
        </div>
      </div>

      <div class="about">
        <h1>The Result</h1>
        <h4>Released in February 2019</h4>
        <p>The first version was released with only the core features, while we continued work on integrating advanced options, properties, and features. You can see a trailer for the first release in the video above.</p>
        <p>Design iterations and testing prototypes yielded major interface improvements, allowing us to streamline a bevvy of complicated options into a fun, intuitive, and elegantly designed feature.</p>
        <p>Early feedback is extremely positive, with customers already working on video promotions.</p>
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
          v-bind:src="require('@/assets/ExportVideo/' + src )"
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