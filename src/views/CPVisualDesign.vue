<template>
  <div class="text-shrink">
    <Title
      title="Visual Design"
      blurb="Visual design is about bringing brands to life by defining their unique style and voice. Using CityPlanner as a case study, I will explain the design concepts and decisions behind my work."
    />

    <div class="anchor-links">
      <h4>Skip to</h4>
      <div class="skip-links case-links">
        <a href="#" v-scroll-to="'#identity'">
          <div class="case-link">Identity</div>
        </a>
        <a href="#" v-scroll-to="'#icon'">
          <div class="case-link">Icon Design</div>
        </a>
        <a href="#" v-scroll-to="'#motion'">
          <div class="case-link">Motion Graphics</div>
        </a>
        <a href="#" v-scroll-to="'#publicity'">
          <div class="case-link">Publicity</div>
        </a>
      </div>
    </div>

    <div id="identity" class="case case-left">
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
        <h1>Identity</h1>
        <h4>Logo Design, Branding</h4>
        <p>The CityPlanner logo is the foundation everything else was built upon.</p>
        <p>
          The logo is a map marker, symboling the app's main function, while hiding the initials
          <strong>C</strong> and
          <strong>P</strong> plus a
          <strong>9</strong> for the parent company – Agency9.
        </p>
        <p>The CityPlanner wordmark uses two weights of Avant Garde tightly kerned with a 'signature ligature'. This design is echoed throughout the family of related products.</p>
        <h6>Tools: Illustrator, CorelDraw</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="icon" class="case case-right">
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
        <h1>Icon Design</h1>
        <h4>Icon Design, Usability</h4>
        <p>CityPlanner icons are custom designed. Because our product uses so many unique concepts an open source library would leave too many gaps. This also facilitated building a strong visual brand.</p>
        <p>When adding features based on existing concepts, I do a quick study of possible and existing solutions before translating the best design language to our own dialect.</p>
        <p>The CityPlanner logo tapers to 60° angle. Angles of 60° and 30° were therefore used as a unifying design element wherever possible – in both interface and publicity.</p>
        <h6>Tools: Illustrator, CorelDraw</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="motion" class="case case-centre row-contrast">
      <div class="visual visual-video">
        <div class="mh">
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tNGPG_i36gI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div class="about">
        <h1>Motion Graphics</h1>
        <h4>Publicity</h4>
        <p>One of the most exciting things I have been working with in recent years is motion graphics and video editing. It's an amazing skill to add to one's design arsenal, as well as a super way to communicate a product.</p>
        <p>I work with After Effects to create motion graphics and special scenes, while Premiere Pro is used for editing raw footage captured in CityPlanner's not-yet-fully-designed animation builder tool.</p>
        <h6>Tools: After Effects, Premiere Pro, Illustrator</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="publicity" class="case case-left">
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
        <h1>Publicity</h1>
        <h4>Blog, Media, Tutorials</h4>
        <p>The core of the CityPlanner's marketing message is simple. It's powerful, modern, and easy to use. This message reverberates in an industry cluttered with overly technical applications.</p>
        <p>CityPlanner was designed to be used by a broad spectrum of users, from plan architects doing shadow analyses to children using touch tables. We've endeavoured to make our software fun for everyone and the marketing reflects that.</p>
        <h6>Tools: Sketch, XD, Illustrator, Photoshop</h6>
      </div>
    </div>

    <ArrowUp/>

    <div class="case case-text row-contrast">
      <div class="about">
        <h1>Luxembourg</h1>
        <h4>Text Only</h4>
        <p>The 6th arrondissement of Paris (VIe arrondissement) is one of the 20 arrondissements of the capital city of France. In spoken French, this arrondissement is referred to as sixième.</p>
        <p>The arrondissement, called Luxembourg, is situated on the left bank of the River Seine. It includes world-famous educational institutions such as the École des Beaux-Arts de Paris and the Académie française, the seat of the French Senate as well as a concentration of some of Paris's most famous monuments such as Saint-Germain Abbey and square, St. Sulpice Church and square, the Pont des Arts, and the Jardin du Luxembourg.</p>
        <h6>Neptune, Mercury, Earth</h6>
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