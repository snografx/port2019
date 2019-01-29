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
        <p>I grew up in an Italian-Norwegian family in a Japanese community in the New York City area. I also lived in Montréal for 10 years before moving permanently to Scandinavia. Stockholm has been home since 2012.</p>
        <p>English is my first language and I also speak Swedish fluently (if not as eloquently). Language is one of my favourite hobbies along with cycling, photography, tennis, architecture, and travel.</p>
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
        <p>I thrive on creative projects. I specialise in interface and visual design but have experience with photography, photo editing, motion graphics, video editing, and print design.</p>
        <p>Simplicity and usability is my jam.</p>
        <h6>Illustrator, Figma, XD, Sketch, Zeplin, Lightroom, Premiere, InDesign, Photoshop</h6>
      </div>
    </div>

    <ArrowUp/>

    <div id="tech" class="case case-right">
      <div class="visual">
        <img src="@/assets/CaseSnografx-DropF1.png">
      </div>
      <div class="about">
        <h1>Technical Skills</h1>
        <h4>Web Dev. &amp; Project Mgmt</h4>
        <p>I first learned web development in the '90s. I founded <router-link to="/snografx">an agency</router-link> and delivered websites via my own custom framework/CMS and later custom WordPress themes. I hand coded this portfolio as a single page application using <a href="https://vuejs.org/" targer="_blank">Vue.js</a> in Visual Studio Code.</p>
        <p>In larger organisations I use agile methodology to manage product development.</p>

        <div class="case-links">
          <a href="https://github.com/snografx/port2019">
            <div class="external-link">Portfolio on GitHub</div>
          </a>
        </div>
        <h6>Jira, Vue.js, GitHub, CSS, HTML, Javascript, jQuery, Ajax, WordPress, Command Line</h6>
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
