<template>
  <div class="text-shrink">
    <Title
      title="Snögrafx"
      blurb="Snögrafx was founded in Montréal in 2002 as an innovative web &amp; graphic design agency. It was my full time job until relocating to Stockholm a decade later in 2012. Since switching to part-time, Snögrafx works infrequently – primarily on small and varied visual design projects, usually for long time clients."
      tags
    />

    <div class="anchor-links">
      <h4>Skip to</h4>
      <div class="skip-links case-links">
        <a href="#" v-scroll-to="'#web'">
          <div class="case-link">Web Design</div>
        </a>
        <a href="#" v-scroll-to="'#design'">
          <div class="case-link">Visual Design</div>
        </a>
        <a href="#" v-scroll-to="'#labrador'">
          <div class="case-link">Labrador</div>
        </a>
        <a href="#" v-scroll-to="'#tamtf'">
          <div class="case-link">TAMTF</div>
        </a>
        <a href="#" v-scroll-to="'#com'">
          <div class="case-link-bonus">More</div>
        </a>
      </div>
    </div>

    <div id="web" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/Snografx/Web-MBDB.png">
              <div class="lb-caption">
                <h6>Music Blog Database</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Web-MBDB.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/Web-Tbana25.png">
              <div class="lb-caption">
                <h6>Stockholm's Tunnelbana 2025</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Web-Tbana25.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/Web-Girlriders.png">
              <div class="lb-caption">
                <h6>Girlriders Sweden</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Web-Girlriders.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/Web-Mondrian.png">
              <div class="lb-caption">
                <h6>Mondrian Photography Portfolio</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Web-Mondrian.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/Web-CityPlanner.png">
              <div class="lb-caption">
                <h6>CityPlanner Online</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Web-CityPlanner.png'"
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
        <h1>Web Design &amp; Development</h1>
        <p>The primary focus in early years was designing and developing pixel perfect project-specific websites, complete with a custom built back-ends and a sharp focus on web standards and usability.</p>
        <p>I am proud to have pioneered and championed usability and flat design more than a decade before it's rise to prominence. In later years, I created my own content management system and eventually shifted to developing Wordpress themes and plugins.</p>
        <h6>
          <br>
        </h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="design" class="case case-right">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/Snografx/Graphic-Shoeaid.svg">
              <div class="lb-caption">
                <h6>Logo: Shoe Aid Project</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Graphic-Shoeaid.svg'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/Graphic-Sacred2.svg">
              <div class="lb-caption">
                <h6>Logo: Sacred Sacred</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Graphic-Sacred2.svg'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/Graphic-MBDB.svg">
              <div class="lb-caption">
                <h6>Logo: Music Blog Database</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Graphic-MBDB.svg'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/Poster-HLF.png">
              <div class="lb-caption">
                <h6>Posters: Handens lilla filmfestival</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Poster-HLF.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/Poster-RedCross.png">
              <div class="lb-caption">
                <h6>Poster: RödaKorset</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Poster-RedCross.png'"
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
        <h1>Visual &amp; Graphic Design</h1>
        <p>As a small independent studio, great visual design has always been the ace up my sleeve. While many are technically capable, I learned technical skills like website development to facilitate good design.</p>
        <p>I developed a successful niche by providing a then unique service of packaging top-notch interactive digital products with high quality design work, specifically identity, graphic, and print design.</p>
        <h6>
          <br>
        </h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="labrador" class="case case-left">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/Snografx/Lab-Running.png">
              <div class="lb-caption">
                <h6>Vinyl, Double Vinyl, CD, &amp; Cassette</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Lab-Running.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/Lab-Portico.png">
              <div class="lb-caption">
                <h6>Vinyl &amp; CD</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Lab-Portico.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/Lab-Pleasure.png">
              <div class="lb-caption">
                <h6>Vinyl &amp; CD</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Lab-Pleasure.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/Lab-Forget.png">
              <div class="lb-caption">
                <h6>Vinyl &amp; CD</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Lab-Forget.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/Lab-Web.png">
              <div class="lb-caption">
                <h6>Wordpress site</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Lab-Web.png'"
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
        <h1>Labrador Records</h1>
        <h4>Customer Spotlight</h4>
        <p>I have been working with Labrador Records in one capacity on another since before the turn of the century.</p>
        <p>In that time I have worked on websites and print design for the label and it's esteemed stable of artists, including the indie legends like The Radio Dept., Club 8, The Mary Onettes, Acid House Kings, The Legends, and more.</p>
        <div class="case-links">
          <a href="http://labrador.se/" target="_blank">
            <div class="external-link">Website</div>
          </a>
          <a href="https://open.spotify.com/user/labradorrecords" target="_blank">
            <div class="external-link">Spotify</div>
          </a>
        </div>
        <h6>Website, Print Design, Graphic Design, Digital Promotions</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="tamtf" class="case case-right">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/Snografx/TAMTF-Logo.svg">
              <div class="lb-caption">
                <h6>Logo &amp; Identity</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'TAMTF-Logo.svg'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/TAMTF-Stamp.svg">
              <div class="lb-caption">
                <h6>Roundel Logo / Stamp</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'TAMTF-Stamp.svg'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/TAMTF-Fruitprint.svg">
              <div class="lb-caption">
                <h6>Carbon Fruitprint Logo</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'TAMTF-Fruitprint.svg'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/TAMTF-Chaquena.svg">
              <div class="lb-caption">
                <h6>Chaqueña Bags Logo</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'TAMTF-Chaquena.svg'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/TAMTF-Web.png">
              <div class="lb-caption">
                <h6>Trilingual Website (Drupal)</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'TAMTF-Web.png'"
              >
                <img
                  v-bind:src="require('@/assets/FullscreenOn.svg')"
                  v-tooltip.left="{ content: 'Fullscreen' }"
                >
              </a>
            </slide>
            <slide>
              <img src="@/assets/Snografx/TAMTF-Rollup.png">
              <div class="lb-caption">
                <h6>Print &amp; Event Design</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'TAMTF-Rollup.png'"
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
        <h1>Teach a Man to Fish</h1>
        <h4>Customer Spotlight</h4>
        <p>I was first commissioned by TAMTF to develop their identity in 2007.</p>
        <p>In time that relationship led to a trilingual website, further brand development, print / event design, and more. It's been a privilege to play a role on the development of this remarkable organisation.</p>
        <h6>Brand/Identity, Graphic Design, Website, Print Design</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="com" class="case case-centre case-bonus">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
            <slide>
              <img src="@/assets/Snografx/Snografx-Com.png">
              <div class="lb-caption">
                <h6>Snografx.com (2013)</h6>
              </div>
              <a
                class="lb-button"
                v-bind:class="{ 'lb-button-active': lightbox == 'show'}"
                v-on:click="lightbox = 'show', src = 'Snografx-Com.png'"
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
        <h1>Snögrafx.com</h1>
        <h4>Web &amp; Graphic Design Since 2002</h4>
        <p>
          Want to see more? Visit
          <a href="http://snografx.com" target="_blank">snografx.com</a> – the website has not been updated since 2014, but serves as both a time capsule of archived projects and an illustration of how well quality design stands the test of time.
        </p>
        <div class="case-links">
          <a href="http://snografx.com" target="_blank">
            <div class="external-link">Snögrafx</div>
          </a>
        </div>
        <h6>
          <br>
        </h6>
      </div>
    </div>

    <ArrowUp/>

    <transition name="fade" mode="out-in" appear>
      <div class="lb-magic" v-if="lightbox == 'show'">
        <img
          class="pointer"
          v-bind:class="{ 'active': lightbox == 'hide'}"
          v-on:click="lightbox = 'hide'"
          v-bind:src="require('@/assets/Snografx/' + src )"
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
