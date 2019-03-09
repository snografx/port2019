<template>
  <footer class="flex">
    <div>
      <h2>{{phrase}}</h2>
      <br>
      <i class="material-icons md-48 md-light">
        <a
          href="mailto:julian@icyicy.com.com?Subject=Hey%20there,%20cool%20portfolio"
          target="_top"
        >email</a>
      </i>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Contact",
  props: {
    phrase: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/theme.scss";

footer {
  @include linear-gradient(lighten($theme1, 5%), darken($theme1, 5%));
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  div {
    margin: 8%;
    border: $debug3;
  }

  h2 {
    font-size: 2.5rem;
    margin: 0.5rem 0;
  }

  i a {
    margin: 4rem;
    padding: 20px;
  }

  .material-icons.md-48 {
    font-size: 48px !important;
  }
  .material-icons.md-light a {
    color: $background !important;
    border-radius: 10rem;

    &:hover {
      //color: lighten($theme1, 30%) !important;
      border: 4px solid $background;
    }
  }
}
</style>
