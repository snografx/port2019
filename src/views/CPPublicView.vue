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
        <p>The main web interface consisting of a ribbon at the bottom, circular content buttons, a toolbar, plus interactive components.</p>
        <p>
          <em>We're currently developing these elements for an optimal mobile experience. Something about Case Study showing how mobile Create Tools are being developed.</em>
        </p>

        <h6>Something</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="analysis" class="case case-text row-contrast">
      <div class="about">
        <h1>Mobile Create Tools</h1>
        <h4>Case Analysis</h4>
        <p>Casablanca is Morocco's chief port and one of the largest financial centers in Africa. According to the 2014 population estimate, the city has a population of about 3.35 million in the urban area and over 6.8 million in the Casablanca-Settat region. Casablanca is considered the economic and business center of Morocco, although the national political capital is Rabat.</p>
        <h6>Role: UX &amp; Interface Design</h6>
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
        <p>Stockholm is the capital of Sweden and the most populous urban area in the Nordic countries. The city stretches across fourteen islands where Lake Mälaren flows into the Baltic Sea. Just outside the city and along the coast is the island chain of the Stockholm archipelago.</p>
        <h6>Tools: Figma, Illustrator</h6>
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
        <p>The City of New York is the most populous city in the United States. Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban landmass and one of the world's most populous megacities, with an estimated 20,320,876 people in its 2017 Metropolitan Statistical Area and 23,876,155 residents in its Combined Statistical Area.</p>
        <p>A global power city, New York City has been described as the cultural, financial, and media capital of the world, and exerts a significant impact upon commerce, entertainment, research, technology, education, politics, tourism, art, fashion, and sports. The city's fast pace has inspired the term New York minute. Home to the headquarters of the United Nations, New York is an important center for international diplomacy.</p>
        <h6>Lion, Penguin, Salamander</h6>
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