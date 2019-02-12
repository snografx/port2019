<template>
  <div class="text-shrink">
    <Title
      title="360° Panorama"
      blurb="360° Panorama is CityPlanner spin-off product for low-end and mobile devices. It uses exported viewpoints from CityPlanner's fully 3D world to create a focused on-the-rails visual experience."
      tags
    />

    <div class="anchor-links">
      <h4>Skip to</h4>
      <div class="skip-links case-links">
        <a href="#" v-scroll-to="'#overview'">
          <div class="case-link-overview">Overview</div>
        </a>
        <a href="#" v-scroll-to="'#goals'">
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

    <div id="overview" class="case case-left case-overview">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CPPublicView/Create-Impact.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>360° Panorama</h1>
        <h4>Project Overview</h4>
        <p>Around the world many potential end-users lack cutting edge mobiles or reside in places with slow or limited bandwidth. A product which could reach this caste of potential users was therefore required to deliver on the marketing message that CityPlanner strikes all demographics.</p>
        <p>360° Panorama solves this problem by offering a lightweight 3D experience, packaged with the advantage of delivering a more focused end-user experience.</p>
        <h6>Role: Product &amp; Interface Design, UX, Branding</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="goals" class="case case-text">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor></carousel>
        </div>
      </div>
      <div class="about">
        <h1>Project Goals</h1>
        <h4>CityPlanner for everyone</h4>
        <p>This project was undertaken in cooperation with the City of Umeå, northern Sweden's largest metropolis, as their project requirements corresponded with our product roadmap.</p>
        <p>The prerequisites asserted the need to support low-end devices, lower-bandwidth, support Virtual Reality via Google Cardboard, and integrate a new a 'time slider' component.</p>
        <p>An internal emphasis was also placed on designing an interface which could form the foundation of CityPlanner's forthcoming mobile UI.</p>
        <h6>
          <br>
        </h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="process" class="case case-centre">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/Panorama/Pano-Whiteboard.png">
            </slide>
            <slide>
              <img src="@/assets/Panorama/Pano-WCAG.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Research &amp; Process</h1>
        <h4>CityPlanner Pocket</h4>
        <p>The primary challenge was to construct a plan for mapping all of CityPlanner's existing features to the small screen – while also planning support for multiple new features across the entire product line.</p>
        <p>A design system was crafted to translate every feature into a compatible interface which would subsequently be constructed on the 360° Panorama bedrock.</p>

        <h6>
          <br>
        </h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="prototype" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/Panorama/Pano-UI-paper.png">
            </slide>
          </carousel>
        </div>
      </div>

      <div class="about">
        <h1>Interface Design</h1>
        <h4>Testing &amp; Iterative Design</h4>
        <p>We went through many iterations with our partners in Umeå, who conducted workshops with local youth which informed the initial design.</p>
        <p>The City of Umeå had a tight deadline, so 360° Panorama was soft-launched (without promotion) in the autumn of 2018 in a beta state. We took advantage of this necessity to fast-track rapid iterations and improvements.</p>
        <p>In late 2018 we used an event at Sweco to workshop the beta launch. Feedback is being used to polish an official launch in 2019.</p>
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
              <img src="@/assets/Panorama/Pano-Logo-Pocket.png">
            </slide>
            <slide>
              <img src="@/assets/Panorama/Pano-Logo-VR.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Visual Design</h1>
        <h4>Soft Release: Q4 2018</h4>
        <p>Explain the confusing development branding. Branding put on hold as the parent company is in the process of being acquired.</p>
        <h6>Tools: Illustrator</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="dev" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/Panorama/Pano-Promo.png">
            </slide>
            <slide>
              <img src="@/assets/Panorama/Pano-Cardboard.png">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>The Result</h1>
        <h4>Soft Release in Q4 2018</h4>
        <p>The soft release was a victory for our partners in Umeå. Several other clients have already published projects and we are eagerly incorporating feedback into improving the product ahead of the official launch, scheduled for Q2 2019.</p>
        <p>Rapid development allowed CityPlanner's native mobile interface to launch shortly after 360° Panorama, quickly aligning the mobile portfolio, while plans are being made for optimising new features for Desktop and Tablet views.</p>
        <div class="case-links">
          <a href="#" target="_blank">
            <div class="external-link">Demo 1</div>
          </a>
          <a href="#" target="_blank">
            <div class="external-link">Real Project</div>
          </a>
        </div>
        <h6>Tools &amp; methodology: Jira, Kanban</h6>
      </div>
    </div>
    <ArrowUp/>
    <div id="example-3">
      Hej {{ testo }}!
      <button v-on:click="say('@/assets/Panorama/Pano-Promo.png')">Say hi</button>
      <button v-on:click="say('what')">Say what</button>
    </div>
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
  data: {
    testo: "Yo"
  },
  methods: {
    say: function(message) {
      alert(message);
    }
  }
};
</script>

<style lang="scss" >
$alignment: left;
@import "@/style/theme.scss";
@import "@/style/case-logic.scss";
@import "@/style/carousel.scss";
</style>
