<template>
  <div>
    <Title title="Template Page" blurb="This is a catalogue of inner page styles.
      " tags/>
    <ContentRight
      class="row-contrast"
      image="../jm2019i.svg"
      title="Right Content"
      subtitle="Subtitle"
      content="Belgrade, meaning 'white city', is the capital and largest city of Serbia. It is located at the confluence of the Sava and Danube rivers, where the Pannonian Plain meets the Balkans. The urban area of the City of Belgrade has a population of 1.23 million, while nearly 1.7 million people live within its administrative limits."
      tags="Polar Bear, Tiger Shark, Aardvark"
      links="<li>Apple</li><li>Banana</li><li>Strawberry</li>"
    />

    <ContentLeft
      image="../jm2019i.svg"
      title="Left Content"
      subtitle="Subtitle"
      content="Belgrade, meaning 'white city', is the capital and largest city of Serbia. It is located at the confluence of the Sava and Danube rivers, where the Pannonian Plain meets the Balkans. The urban area of the City of Belgrade has a population of 1.23 million, while nearly 1.7 million people live within its administrative limits."
      tags="Polar Bear, Tiger Shark, Aardvark"
    />

    <ContentRight
      contrast="row-contrast"
      image="../jm2019i.svg"
      title="Right 222 Content"
      subtitle="Subtitle 222"
      content="222, meaning 'white city', is the capital and largest city of Serbia. It is located at the confluence of the Sava and Danube rivers, where the Pannonian Plain meets the Balkans. The urban area of the City of Belgrade has a population of 1.23 million, while nearly 1.7 million people live within its administrative limits.
      <ul><li>Apple</li><li>Banana</li><li>Strawberry</li></ul>
      "
      tags="Polar Bear 22, Tiger Shark, Aardvark"
    />

    <div class="slide-cont">
      <carousel :perPage="1" :navigationEnabled="true">
        <slide>Slide 1 Content</slide>
        <slide>Slide 2 Content</slide>
        <slide>Slide 3 Content</slide>
        <slide>Slide 4 Content</slide>
        <slide>Slide 5 Content</slide>
        <slide>Slide 6 Content</slide>
      </carousel>
    </div>

    <div class="case">
      <div class="device">
        <div>
          <div class="slide-coent">
            <carousel
              :perPage="1"
              :autoplay="true"
              autoplayTimeout="5000"
              :navigationEnabled="false"
            >
              <slide>Slide 1 Content</slide>
              <slide>Slide 2 Content</slide>
              <slide>Slide 3 Content</slide>
              <slide>Slide 4 Content</slide>
              <slide>Slide 5 Content</slide>
              <slide>Slide 6 Content</slide>
            </carousel>
          </div>
        </div>
      </div>
      <div class="about">
        <h1>Title</h1>
        <h4>Subtitle</h4>
        <p>Content</p>
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

<style lang="scss" scoped>
$alignment: left;
@import "@/style/case-logic.scss";

.slide-cont {
  padding: 0 60px;
}

.VueCarousel-slide {
  position: relative;
  border: 1px black solid;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 300px;
}
</style>

