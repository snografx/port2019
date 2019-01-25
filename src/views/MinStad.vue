<template>
  <div>
    <Title
      title="Min Stad Göteborg"
      blurb="Min Stad – &quot;My City&quot; in Swedish – is an app designed for the city of Gothenburg.

Information is published about urban planning projects and special events. The city also collects feedback from the community via interactive features."
      tags="Product &amp; Interface Design for Web/Showroom/VR, Logo &amp; Branding, Publicity, English Copy"
    />


  <div class="section section-r">
    <div class="illustration">
        <img src="@/assets/CaseMinStad-DropF1.png">
    </div>
    <div class="about">
      <h1>Background</h1>
      <h4>Subtitle</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero repellendus sunt officia tempora corporis dolore veniam ipsa suscipit, ex dolores hic aliquam vero at pariatur. Ipsa, ipsum. Laboriosam, aperiam.</p>
      <ul>
        <li>
          <router-link to="/minstad">Case Study</router-link>
        </li>
        <li>
          <a href="#">App Store</a>
        </li>
      </ul>
      <h6>Apple, Banana, Strawberry</h6>
    </div>
  </div>

    <div class="section section-c">
    <div class="illustration">
        <img src="@/assets/CaseMinStad-DropF1.png">
    </div>
    <div class="about">
      <h1>Centred Section</h1>
      <h4>Subtitle</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero repellendus sunt officia tempora corporis dolore veniam ipsa suscipit, ex dolores hic aliquam vero at pariatur. Ipsa, ipsum. Laboriosam, aperiam.</p>
      <ul>
        <li>
          <router-link to="/minstad">Case Study</router-link>
        </li>
        <li>
          <a href="#">App Store</a>
        </li>
      </ul>
      <h6>Apple, Banana, Strawberry</h6>
    </div>
  </div>

    <div class="section section-l">
    <div class="illustration">
        <img src="@/assets/CaseMinStad-DropF1.png">
    </div>
    <div class="about">
      <h1>Process</h1>
      <h4>Subtitle</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero repellendus sunt officia tempora corporis dolore veniam ipsa suscipit, ex dolores hic aliquam vero at pariatur. Ipsa, ipsum. Laboriosam, aperiam.</p>
      <ul>
        <li>
          <router-link to="/minstad">Case Study</router-link>
        </li>
        <li>
          <a href="#">App Store</a>
        </li>
      </ul>
      <h6>Apple, Banana, Strawberry</h6>
    </div>
  </div>


    <div class="section section-r">
    <div class="illustration">
        <img src="@/assets/CaseMinStad-DropF1.png">
    </div>
    <div class="about">
      <h1>Result</h1>
      <h4>Subtitle</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero repellendus sunt officia tempora corporis dolore veniam ipsa suscipit, ex dolores hic aliquam vero at pariatur. Ipsa, ipsum. Laboriosam, aperiam.</p>
      <ul>
        <li>
          <router-link to="/minstad">Case Study</router-link>
        </li>
        <li>
          <a href="#">App Store</a>
        </li>
      </ul>
      <h6>Apple, Banana, Strawberry</h6>
    </div>
  </div>




  </div>



</template>

<script>
import Title from "@/components/Title.vue";

export default {
  name: "home",
  components: {
    Title
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/theme.scss";
@import "@/style/case-study.scss";
</style>
