<template>
  <div>
    <Title
      title="CityPlanner"
      blurb="CityPlanner is Agency9's flagship product. It is a web application used for urban planning and publishing 3D scenes to web, mobile, touch-tables, virtual reality, and more. ​​​​​​​There is even a component for public communication. 
"
      tags="Product &amp; Interface Design for Web/Showroom/VR, Logo &amp; Branding, Publicity"
    />

    <div class="section section-r contrast">
      <div class="illustration">
        <img src="@/assets/CaseSnografx-DropF1.png">
      </div>
      <div class="about">
        <h1>The Editor</h1>
        <h4>Feature</h4>
        <p>The Editor is used to build projects. It runs in a standard web browser with built-in tools for planners and internal communication as well as features for publishing and public interaction.</p>
        <p>Administrators can interact with the map as a live-editor, end-user, or do analytic work.</p>
        <ul>
          <li>
            <a href="#">Website</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="section section-l">
      <div class="illustration">
        <img src="@/assets/CaseSnografx-DropF1.png">
      </div>
      <div class="about">
        <h1>Project View</h1>
        <h4>Feature</h4>
        <p>This is the 3D world, the view end-users interact with when published. The interface is simpler and touch-friendly – consisting of a ribbon at the bottom, circular content buttons, a toolbar, plus interactive components.</p>
        <ul>
          <li>
            <a href="#">Website</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="section section-r contrast">
      <div class="illustration">
        <img src="@/assets/CaseSnografx-DropF1.png">
      </div>
      <div class="about">
        <h1>Mobile Create Tools</h1>
        <h4>Case Study</h4>
        <p>Visitors to published CityPlanner projects can make creative suggestions in the 3D World.</p>
        <p>These tools were missing from the new mobile interface. Here's a case study on their implementation</p>
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
        <img src="@/assets/CaseSnografx-DropF1.png">
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
        <img src="@/assets/CaseSnografx-DropF1.png">
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
        <img src="@/assets/CaseSnografx-DropF1.png">
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
