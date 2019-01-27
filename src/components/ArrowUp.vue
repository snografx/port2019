<template>
  <i class="material-icons md-48 md-light">
    <a href="#" v-scroll-to="'#app'">
      <div class="arrow-up">arrow_upward</div>
    </a>
  </i>
</template>


<style lang="scss" scoped>
@import "@/style/theme.scss";

.arrow-up {
  background: transparent;
  border: 2px solid transparent;
  padding: 6px;
  margin: 12px;
  color: lighten($theme1, 35%);
  @include transition(0.3s);

  @media #{$herobreak} {
    margin: 0;
  }

  &:hover {
    color: $theme1;
    border: 2px solid $theme2;
    border-radius: 10rem;
  }
}
</style>
    