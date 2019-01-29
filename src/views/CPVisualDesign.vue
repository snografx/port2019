<template>
  <div class="text-shrink">
    <Title
      title="Visual Design"
      blurb="Visual design is about bringing brands to life by defining their unique style and voice. Using CityPlanner as a case study, I will explain the design concepts and decisions behind my work."
      tags="Visual, Motion, Graphic"
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
        <a href="#" v-scroll-to="'#style'">
          <div class="case-link">Style Guide</div>
        </a>
        <a href="#" v-scroll-to="'#motion'">
          <div class="case-link">Motion Graphics</div>
        </a>
        <a href="#" v-scroll-to="'#publicity'">
          <div class="case-link">Publicity</div>
        </a>
        <a href="#" v-scroll-to="'#print'">
          <div class="case-link">Print</div>
        </a>
      </div>
    </div>

    <div id="identity" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CPVisualDesign/Identity, CityPlanner Glyph.svg">
            </slide>
            <slide>
              <img src="@/assets/CPVisualDesign/Identity, CityPlanner Logo.svg">
            </slide>
            <slide>
              <img src="@/assets/CPVisualDesign/Identity, CityPlanner Logo Anatomy.svg">
            </slide>
            <slide>
              <img src="@/assets/CPVisualDesign/Identity, CityPlanner Family Wordmarks.svg">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Identity</h1>
        <h4>Logo Design, Branding</h4>
        <p>The logo is the foundation CityPlanner's design language was built upon. It contains map marker, symboling the app's main function, while hiding the initials C and P plus a 9 for the parent company – Agency9.</p>
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
              <img src="@/assets/CPVisualDesign/Iconography, Angles.svg">
            </slide>
            <slide>
              <div class="video-container slide-bg">
              <iframe class="figma" style="border: none;" width="470" height="300" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FB7IFdCb1TRctSPXRaedzrO70%2FIcon-Library%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
              </div>
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
        <h6>Tools: Illustrator, Figma, Sketch, XD, CorelDraw</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="style" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/CPVisualDesign/Style Guide, Category Colours.svg">
            </slide>
            <slide>
              <img src="@/assets/CPVisualDesign/Style Guide, CityPlanner Palette.svg">
            </slide>
            <slide>
              <img src="@/assets/CPVisualDesign/Style Guide, Press Kit Web.svg">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Style Guide</h1>
        <h4>Colour, Typography, Press Kit</h4>
        <p>I create a style guide for our organisation, software, and customers. Agency9's original pea-green was refreshing into a modern hue, with an additional shade added for depth and emphasis. Yellow from the Editor UI became a defining trademark, along with an 8-colour category palette. Different complementary typefaces were selected to represent the company, software, and marketing message.</p>
        <p>The consistent use of colour and type focus our message in communications and project design. A Press Kit is available on cityplanneronline.com</p>
        <h6>Tools: WordPress, Illustrator, Sketch</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="motion" class="case case-centre">
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
              <img src="@/assets/CPVisualDesign/Publicity, Vegas Sign.svg">
            </slide>
            <slide>
              <img src="@/assets/CPVisualDesign/Publicity, Icon Outlines.svg">
            </slide>
            <slide>
              <img src="@/assets/CPVisualDesign/Publicity, Vegas Golden Knights.svg">
            </slide>
            <slide>
              <img src="@/assets/CPVisualDesign/Publicity, Project Design 101.svg">
            </slide>
            <slide>
              <img src="@/assets/CPVisualDesign/Publicity, HB Norway.svg">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Publicity</h1>
        <h4>Blog, Social Media, Graphics, Tutorials</h4>
        <p>The core of the CityPlanner's marketing message is simple. It's powerful, modern, and easy to use. This message reverberates in an industry cluttered with overly technical applications.</p>
        <p>CityPlanner was designed for a broad spectrum of users – from plan architects doing shadow analyses to children using touch tables. We've endeavoured to make our software fun for everyone and the marketing reflects that.</p>
        <h6>Tools: Sketch, XD, Illustrator, Photoshop</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="print" class="case case-centre">
      <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
        <slide>
          <img src="@/assets/CPVisualDesign/Print, Business Cards.svg">
        </slide>
      </carousel>

      <div class="about">
        <h1>Print Design</h1>
        <h4>Cards, Rollups, Posters, Exhibitions</h4>
        <p>I am also experienced in print design, so during my time at Agency9 I occasionally designed items for our company and customers. These items include business cards, flyers, rollups, and posters. I was also involved in the design of exhibitions spaces.</p>
        <h6>Tools: InDesign, Illustrator, CorelDraw</h6>
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

.slide-bg {

  background-image: url("/src/assets/CPVisualDesign/Identity, CityPlanner Glyph.svg");
  //@include flex-centre;
display: contents;
.figma {
  padding: 17px;
border-radius: 17px;
  background: lighten($text, 66%);
}
}
</style>