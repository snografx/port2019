<template>
  <div class="text-shrink">
    <Title
      title="CityPlanner – Visual Design"
      blurb="Visual design is about bringing brands to life by defining their unique voice. In this case study, different forms of visual design are showcased to illustrate how CityPlanner's brand was constructed and developed."
      tags
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
              <img src="@/assets/VisualDesign/ID-Glyph.svg">
              <div class="lb-caption">
                <h6>CityPlanner Glyph</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'ID-Glyph.svg'"
              >
                <img v-bind:src="require('@/assets/FullscreenOn.svg')">
              </a>
            </slide>
            <slide>
              <img src="@/assets/VisualDesign/ID-Logo.svg">
              <div class="lb-caption">
                <h6>CityPlanner Logo</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'ID-Logo.svg'"
              >
                <img v-bind:src="require('@/assets/FullscreenOn.svg')">
              </a>
            </slide>
            <slide>
              <img src="@/assets/VisualDesign/ID-Anatomy.svg">
              <div class="lb-caption">
                <h6>Glyph Anatomy</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'ID-Anatomy.svg'"
              >
                <img v-bind:src="require('@/assets/FullscreenOn.svg')">
              </a>
            </slide>
            <slide>
              <img src="@/assets/VisualDesign/ID-Wordmarks.svg">
              <div class="lb-caption">
                <h6>Family of Wordmarks w/Ligatures Highlighted</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'ID-Wordmarks.svg'"
              >
                <img v-bind:src="require('@/assets/FullscreenOn.svg')">
              </a>
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Identity</h1>
        <h4>Logo Design, Branding</h4>
        <p>The logo is the foundation CityPlanner's design language was built upon. It contains map marker while hiding the initials C and P plus a 9 for the parent company – Agency9.</p>
        <p>The CityPlanner wordmark uses two weights of Avant Garde tightly kerned with a 'signature ligature'. This design reverberates throughout the family of related products.</p>
        <h6>Tools: Illustrator, CorelDraw</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="icon" class="case case-right">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/VisualDesign/Icon-Angles.svg">
              <div class="lb-caption">
                <h6>Unified Design</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Icon-Angles.svg'"
              >
                <img v-bind:src="require('@/assets/FullscreenOn.svg')">
              </a>
            </slide>
            <slide>
              <div class="figma-bg">
                <div class="video-container slide-bg">
                  <div class="lb-caption">
                    <h6>Figma Embed</h6>
                  </div>
                  <iframe
                    class="figma"
                    style="border: none;"
                    width="470"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FB7IFdCb1TRctSPXRaedzrO70%2FIcon-Library%3Fnode-id%3D0%253A1"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Icon Design</h1>
        <h4>Icon Design, Usability</h4>
        <p>CityPlanner requires a custom Icon Library to communicate advanced concepts – while building a strong visual brand. Studies of possible and existing solutions are made before translating the best design language to CityPlanner's dialect.</p>
        <p>The CityPlanner logo tapers to 60° angle. Angles of 60° and 30° were therefore used as a unifying design element wherever possible – in both interface and publicity.</p>
        <div class="case-links">
          <a href="#" target="_blank">
            <div class="external-link">Icon Library</div>
          </a>
        </div>
        <h6>Tools: Illustrator, Figma, Sketch, XD, CorelDraw</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="style" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/VisualDesign/Style-Cats.svg">
              <div class="lb-caption">
                <h6></h6>
              </div>
            </slide>
            <slide>
              <img src="@/assets/VisualDesign/Style-Palette.svg">
              <div class="lb-caption">
                <h6></h6>
              </div>
            </slide>
            <slide>
              <img src="@/assets/VisualDesign/Style-Kit.png">
              <div class="lb-caption">
                <h6></h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Style-Kit.png'"
              >
                <img v-bind:src="require('@/assets/FullscreenOn.svg')">
              </a>
            </slide>
          </carousel>
        </div>
      </div>
      <div class="about">
        <h1>Style Guide</h1>
        <h4>Colour, Typography, Press Kit</h4>
        <p>I create a style guide for our organisation, software, and customers. The consistent use of colour and type focus our message in communications and project design.</p>
        <p>Agency9's original pea-green was refreshed into a modern hue. Yellow from CityPlanner's interface became a defining trademark along with an 8-colour category palette. Complementary typefaces were selected to represent the company, software, and marketing voice.</p>
        <div class="case-links">
          <a href="https://cityplanneronline.com/site/index.php/press-kit/" target="_blank">
            <div class="external-link">Press Kit</div>
          </a>
        </div>
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
              src="https://www.youtube.com/embed/videoseries?list=PLvNoAHvD4HOZ5j0SOqerLXOFW44hvkyMY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="lb-caption">
              <h6>Video &amp; Motion Graphics Playlist</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="about">
        <h1>Motion Graphics</h1>
        <h4>Publicity</h4>
        <p>One of the most exciting things I have been working with in recent years is motion graphics and video editing. It's an amazing skill to add to one's design arsenal, as well as a super way to communicate a product.</p>
        <p>I work with After Effects to create motion graphics and special scenes, while Premiere Pro is used for editing raw footage captured in CityPlanner's Export Video tool.</p>
        <h6>Tools: After Effects, Premiere Pro, Illustrator</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="publicity" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/VisualDesign/Pub-Vegas.png">
              <div class="lb-caption">
                <h6></h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Pub-Vegas.png'"
              >
                <img v-bind:src="require('@/assets/FullscreenOn.svg')">
              </a>
            </slide>
            <slide>
              <img src="@/assets/VisualDesign/Pub-Outlines.png">
              <div class="lb-caption">
                <h6></h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Pub-Outlines.png'"
              >
                <img v-bind:src="require('@/assets/FullscreenOn.svg')">
              </a>
            </slide>
            <slide>
              <img src="@/assets/VisualDesign/Pub-Knights.png">
              <div class="lb-caption">
                <h6></h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Pub-Knights.png'"
              >
                <img v-bind:src="require('@/assets/FullscreenOn.svg')">
              </a>
            </slide>
            <slide>
              <img src="@/assets/VisualDesign/Pub-101.png">
              <div class="lb-caption">
                <h6></h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Pub-101.png'"
              >
                <img v-bind:src="require('@/assets/FullscreenOn.svg')">
              </a>
            </slide>
            <slide>
              <img src="@/assets/VisualDesign/Pub-Norge.png">
              <div class="lb-caption">
                <h6></h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Pub-Norge.png'"
              >
                <img v-bind:src="require('@/assets/FullscreenOn.svg')">
              </a>
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
      <div class="visual">
        <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
          <slide>
            <img src="@/assets/VisualDesign/Print-Card.png">
            <div class="lb-caption">
              <h6></h6>
            </div>
            <a
              class="lb-button"
              v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
              v-on:click="lightbox = 'show', src = 'Print-Card.png'"
            >
              <img v-bind:src="require('@/assets/FullscreenOn.svg')">
            </a>
          </slide>
        </carousel>
      </div>

      <div class="about">
        <h1>Print Design</h1>
        <h4>Cards, Rollups, Posters, Exhibitions</h4>
        <p>I am also experienced in print design, so during my time at Agency9 I occasionally designed items for our company and customers. These items include business cards, flyers, rollups, and posters. I was also involved in the design of exhibitions spaces.</p>
        <h6>Tools: InDesign, Illustrator, CorelDraw</h6>
      </div>
    </div>

    <ArrowUp/>

    <transition name="fade" mode="out-in" appear>
      <div class="lb-magic" v-if="lightbox == 'show'">
        <img v-bind:src="require('@/assets/VisualDesign/' + src )">
        <br>
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

<style lang="scss">
$alignment: left;
@import "@/style/theme.scss";
@import "@/style/case-logic.scss";
@import "@/style/carousel.scss";
@import "@/style/lightbox.scss";
</style>