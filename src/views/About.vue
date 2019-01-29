<template>
  <div class="text-shrink">
    <Title
      title="A Concise Biography"
      blurb="I'm a full-stack designer. I have the ability and experience to carry projects through all aspects of the design and development process – including management, hands-on creative work, and taking the critical responsibility for cohesion, quality, and delivery."
    />

    <div class="anchor-links">
      <h4>Skip to</h4>
      <div class="skip-links case-links">
        <a href="#" v-scroll-to="'#background'">
          <div class="case-link">Background</div>
        </a>
        <a href="#" v-scroll-to="'#creative'">
          <div class="case-link">Creative</div>
        </a>
        <a href="#" v-scroll-to="'#tech'">
          <div class="case-link">Technical</div>
        </a>
        <a href="#" v-scroll-to="'#cv'">
          <div class="case-link">CV &amp; Links</div>
        </a>
      </div>
    </div>

    <div id="background" class="case case-right">
      <div class="visual">
        <img src="@/assets/CaseSnografx-DropF1.png">
      </div>
      <div class="about">
        <h1>Background</h1>
        <p>I grew up in an Italian-Norwegian family in a Japanese community in the New York City area. After graduating university I lived in Montréal for 10 years before moving permanently to Scandinavia. Stockholm has been my home since 2012.</p>
        <p>English is my first language and I also speak Swedish fluently (if not as eloquently). Languages are one of my favourite hobbies. I also enjoy cycling, photography, tennis, architecture, and travel.</p>
      </div>
    </div>

    <ArrowUp/>

    <div id="creative" class="case case-left">
      <div class="visual">
        <img src="@/assets/CaseSnografx-DropF1.png">
      </div>
      <div class="about">
        <h1>Creative Skills</h1>
        <h4>UI, UX, Visual &amp; Graphic Design</h4>
        <p>Belgrade, meaning 'white city', is the capital and largest city of Serbia. It is located at the confluence of the Sava and Danube rivers, where the Pannonian Plain meets the Balkans. The urban area of the City of Belgrade has a population of 1.23 million, while nearly 1.7 million people live within its administrative limits.</p>
        <h6>Visual &amp; Product Design</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="tech" class="case case-right">
      <div class="visual">
        <img src="@/assets/CaseSnografx-DropF1.png">
      </div>
      <div class="about">
        <h1>Technical Skills</h1>
        <h4>Web Development &amp; Project Management</h4>
        <p>Belgrade, meaning 'white city', is the capital and largest city of Serbia. It is located at the confluence of the Sava and Danube rivers, where the Pannonian Plain meets the Balkans. The urban area of the City of Belgrade has a population of 1.23 million, while nearly 1.7 million people live within its administrative limits.</p>
        <div class="case-links">
          <a href="https://github.com/snografx/port2019">
            <div class="external-link">Portfolio on GitHub</div>
          </a>
        </div>
        <h6>Product Development</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="cv" class="case case-centre">
      <div class="visual">
        <img src="@/assets/CaseSnografx-DropF1.png">
      </div>
      <div class="about">
        <h1>Curriculum Vitae</h1>
        <h4>Résumé &amp; Links</h4>
        <p>I founded Snögrafx, a web &amp; graphic design agency, in 2012. It was my primary job until relocating to Stockholm in 2012. Since then I have worked in various design &amp; and development capacities for companies including Agency9, Lake Como, and Widespace.</p>
        <p>For more information you can download a hard copy of my CV, visit my LinkedIn, or contact me.</p>

        <div class="case-links">
          <a href="#">
            <div class="case-link">PDF Résumé</div>
          </a>
          <a href="https://www.linkedin.com/in/julianminervini/">
            <div class="external-link">LinkedIn</div>
          </a>
          <a href="mailto:julian@icyicy.com">
            <div class="external-link">E-mail</div>
          </a>
        </div>
      </div>
    </div>

    <ArrowUp/>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import ArrowUp from "@/components/ArrowUp.vue";

export default {
  name: "home",
  components: {
    Title,
    ArrowUp
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/theme.scss";
@import "@/style/case-study.scss";
</style>
