<template>
  <div class="text-shrink">
    <Title
      title="Project Editor"
      blurb="The Editor is used to build projects. It runs in a standard web browser with built-in tools for planners and internal communication as well as features for publishing and public interaction."
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
        <h1>Overview</h1>
        <h4>Web-Based 3D Urban Panning Software</h4>
        <p>The interface consists of two bars – on the top and right side of the screen – surrounding the public interface (aka
          <router-link to="/cp-public.view">Public View</router-link>). There are tools which allow editors to interact with the map as a live-editor, end-user, or do analytic work.
        </p>
        <p>
          <em>Something about Case Study and what I will show here...</em>
        </p>
        <h6>Not sure yet</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="analysis" class="case case-text row-contrast">
      <div class="about">
        <h1>Details Window Revision</h1>
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
        <h4>Left Content + Carousel</h4>
        <p>Stockholm is the capital of Sweden and the most populous urban area in the Nordic countries. The city stretches across fourteen islands where Lake Mälaren flows into the Baltic Sea. Just outside the city and along the coast is the island chain of the Stockholm archipelago.</p>
        <h6>Tools: Raccoon, Aardvark, Giraffe</h6>
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
        <h4>Centre Content + Carousel</h4>
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