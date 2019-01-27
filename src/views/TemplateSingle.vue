<template>
  <div class="text-shrink">
    <Title
      title="World Tour"
      blurb="This is a template for layout elements to be used on the inner pages of this website."
    />

    <div class="anchor-links">
      <h4>Skip to</h4>
      <div class="skip-links case-links">
        <a href="#" v-scroll-to="'#belgrade'">
          <div class="case-link">Belgrade</div>
        </a>
        <a href="#" v-scroll-to="'#montreal'">
          <div class="case-link">Montréal</div>
        </a>
        <a href="#" v-scroll-to="'#tokyo'">
          <div class="case-link">Tokyo</div>
        </a>
        <a href="#" v-scroll-to="'#stockholm'">
          <div class="case-link">Stockholm</div>
        </a>
        <a href="#" v-scroll-to="'#rome'">
          <div class="case-link">Rome</div>
        </a>
        <a href="#" v-scroll-to="'#nyc'">
          <div class="case-link">New York City</div>
        </a>
        <a href="#" v-scroll-to="'#casablanca'">
          <div class="case-link">Casablanca</div>
        </a>
        <a href="#" v-scroll-to="'#montevideo'">
          <div class="case-link">Montevideo</div>
        </a>
      </div>
    </div>

    <div id="belgrade" class="case case-left row-contrast">
      <div class="visual">
        <img src="@/assets/CaseSnografx-DropF1.png">
      </div>
      <div class="about">
        <h1>Belgrade</h1>
        <h4>Left Content + Image</h4>
        <p>Belgrade, meaning 'white city', is the capital and largest city of Serbia. It is located at the confluence of the Sava and Danube rivers, where the Pannonian Plain meets the Balkans. The urban area of the City of Belgrade has a population of 1.23 million, while nearly 1.7 million people live within its administrative limits.</p>
        <h6>Flounder, Rhinoceres, Eagle</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="montreal" class="case case-right">
      <div class="visual">
        <img src="@/assets/CaseDataManager-DropF1.png">
      </div>
      <div class="about">
        <h1>Montréal</h1>
        <h4>Right Content + Image</h4>
        <p>Montréal is the most populous municipality in the Canadian province of Québec and the second-most populous municipality in Canada (after Toronto. Originally called Ville-Marie, or "City of Mary", it is named after Mount Royal, the triple-peaked hill in the heart of the city. It has a distinct four-season continental climate with warm to hot summers and cold, snowy winters.</p>
        <h6>Octopus, Squirrel, Beaver</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="tokyo" class="case case-centre row-contrast">
      <div class="visual">
        <img src="@/assets/CaseMinStad-DropF1.png">
      </div>
      <div class="about">
        <h1>Tokyo</h1>
        <h4>Centre Content + Image</h4>
        <p>Tokyo (東京), officially Tokyo Metropolis (東京都), one of the 47 prefectures of Japan, has served as the Japanese capital since 1869. As of 2014, the Greater Tokyo Area ranked as the most populous metropolitan area in the world. The urban area houses the seat of the Emperor of Japan, of the Japanese government and of the National Diet. Tokyo forms part of the Kanto region on the southeastern side of Japan's main island, Honshu, and includes the Izu Islands and Ogasawara Islands.</p>
        <h6>Cherry, Blueberry, Avocado</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="stockholm" class="case case-left">
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
        <h1>Stockholm</h1>
        <h4>Left Content + Carousel</h4>
        <p>Stockholm is the capital of Sweden and the most populous urban area in the Nordic countries. The city stretches across fourteen islands where Lake Mälaren flows into the Baltic Sea. Just outside the city and along the coast is the island chain of the Stockholm archipelago.</p>
        <h6>Raccoon, Aardvark, Giraffe</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="rome" class="case case-right row-contrast">
      <div class="visual">
        <div class="carousel-container">
          <carousel :perPage="1" :navigationEnabled="false" paginationColor paginationActiveColor>
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
        <h1>Rome</h1>
        <h4>Right Content + Carousel</h4>
        <p>Rome is the capital city and a special comune of Italy. With 2,872,800 residents it is also the country's most populated comune. It is the fourth-most populous city in the European Union by population within city limits.</p>
        <p>It is the centre of the Metropolitan City of Rome, which has a population of 4,355,725 residents, thus making it the most populous metropolitan city in Italy. Rome is located in the central-western portion of the Italian Peninsula, along the shores of the Tiber.</p>
        <h6>Leopard, Shark, Badger</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="nyc" class="case case-centre">
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
        <h1>New York City</h1>
        <h4>Centre Content + Carousel</h4>
        <p>The City of New York is the most populous city in the United States. Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban landmass and one of the world's most populous megacities, with an estimated 20,320,876 people in its 2017 Metropolitan Statistical Area and 23,876,155 residents in its Combined Statistical Area.</p>
        <p>A global power city, New York City has been described as the cultural, financial, and media capital of the world, and exerts a significant impact upon commerce, entertainment, research, technology, education, politics, tourism, art, fashion, and sports. The city's fast pace has inspired the term New York minute. Home to the headquarters of the United Nations, New York is an important center for international diplomacy.</p>
        <h6>Lion, Penguin, Salamander</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="casablanca" class="case case-text row-contrast">
      <div class="about">
        <h1>Casablanca</h1>
        <h4>Text Only</h4>
        <p>Casablanca is Morocco's chief port and one of the largest financial centers in Africa. According to the 2014 population estimate, the city has a population of about 3.35 million in the urban area and over 6.8 million in the Casablanca-Settat region. Casablanca is considered the economic and business center of Morocco, although the national political capital is Rabat.</p>
        <h6>Whale, Camel, Mosquito</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="montevideo" class="case case-centre">
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
        <h1>Montevideo</h1>
        <h4>Centre Content + YouTube</h4>
        <p>Montevideo is the capital and largest city of Uruguay. According to the 2011 census, the city proper has a population of 1,319,108 in an area of 201 square kilometres. The southernmost capital city in the Americas, Montevideo is situated on the southern coast of the country, on the northeastern bank of the Río de la Plata.</p>
        <h6>Cobra, Seal, Owl</h6>
      </div>
    </div>

    <ArrowUp/>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import ArrowUp from "@/components/ArrowUp.vue";
import ContentRight from "@/components/ContentRight.vue";
import ContentLeft from "@/components/ContentLeft.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "home",
  components: {
    Title,
    ArrowUp,
    ContentRight,
    ContentLeft,
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

