<template>
  <div>
    <Title title="Template Page" blurb="This is a catalogue of inner page styles.
      " tags/>

    <div class="case case-left row-contrast">
      <div class="visual">
        <img src="@/assets/CaseSnografx-DropF1.png">
      </div>
      <div class="about">
        <h1>Belgrade</h1>
        <h4>Left Content + Image</h4>
        <p>Belgrade, meaning 'white city', is the capital and largest city of Serbia. It is located at the confluence of the Sava and Danube rivers, where the Pannonian Plain meets the Balkans. The urban area of the City of Belgrade has a population of 1.23 million, while nearly 1.7 million people live within its administrative limits.</p>
        <h6>Apple, Banana, Satsuma</h6>
      </div>
    </div>

    <div class="case case-right">
      <div class="visual">
        <img src="@/assets/CaseDataManager-DropF1.png">
      </div>
      <div class="about">
        <h1>Montevideo</h1>
        <h4>Right Content + Image</h4>
        <p>Montevideo is the capital and largest city of Uruguay. According to the 2011 census, the city proper has a population of 1,319,108 in an area of 201 square kilometres. The southernmost capital city in the Americas, Montevideo is situated on the southern coast of the country, on the northeastern bank of the Río de la Plata.</p>
        <h6>Strawberry, Mango, Lemon</h6>
      </div>
    </div>

    <div class="case case-centre row-contrast">
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

    <div class="case case-left">
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
        <h1>Södermalm</h1>
        <h4>Left Content + Carousel</h4>
        <p>Södermalm, often shortened to “Söder”, is a district and island in central Stockholm. Södermalm is connected to its surrounding areas by a number of bridges. Södermalm was once known as the "slum" area of Stockholm. However today, Södermalm is known as the home of bohemian, alternative culture and a broad range of cultural amenities.</p>
        <h6>Raccoon, Aardvark, Giraffe</h6>
      </div>
    </div>

    <div class="case case-right row-contrast">
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
        <h1>Testaccio</h1>
        <h4>Right Content + Carousel</h4>
        <p>Testaccio is the 20th rione of Rome, deriving its name from Monte Testaccio. It is located in the city's Municipio I. Testaccio was one of Rome’s traditional working class neighbourhoods, but the recent process of gentrification has changed its reputation from hard-at-work to "hipster". The neighborhood is home to several of Rome's culinary highlights. Testaccio's reputation among tourists is expanding.</p>
        <h6>Leopard, Shark, Badger</h6>
      </div>
    </div>

    <div class="case case-centre">
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
        <h1>Brooklyn</h1>
        <h4>Centre Content + Carousel</h4>
        <p>Brooklyn is the most populous borough of New York City, with an estimated 2,648,771 residents in 2017. Named after the Dutch village of Breukelen, it borders the borough of Queens at the western end of Long Island. Since 1896, Brooklyn has been coterminous with Kings County, the most populous county in the U.S. state of New York and the second-most densely populated county in the United States.</p>
        <h6>Lion, Penguin, Salamander</h6>
      </div>
    </div>

    <div class="case-text row-contrast">
      <div class="about">
        <h1>Luxembourg</h1>
        <h4>Text Only</h4>
        <p>The 6th arrondissement of Paris (VIe arrondissement) is one of the 20 arrondissements of the capital city of France. In spoken French, this arrondissement is referred to as sixième.</p>
        <p>The arrondissement, called Luxembourg, is situated on the left bank of the River Seine. It includes world-famous educational institutions such as the École des Beaux-Arts de Paris and the Académie française, the seat of the French Senate as well as a concentration of some of Paris's most famous monuments such as Saint-Germain Abbey and square, St. Sulpice Church and square, the Pont des Arts, and the Jardin du Luxembourg.</p>
        <h6>Neptune, Mercury, Earth</h6>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import ContentRight from "@/components/ContentRight.vue";
import ContentLeft from "@/components/ContentLeft.vue";

import { Carousel, Slide } from "vue-carousel";

export default {
  name: "home",
  components: {
    Title,
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

