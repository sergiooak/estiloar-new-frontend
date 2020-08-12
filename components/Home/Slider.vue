<template>
  <client-only>
    <slider
      id="sliderHome"
      animation="fade"
      height="352px"
      stopOnHover="true"
      interval="3500"
      indicators="left"
    >
      <slider-item v-for="(i, index) in data" :key="index" :style="i">
        <img
          style="height: 352px; object-fit: cover;"
          :src="i.lg.url"
          :alt="i.alt"
        />
      </slider-item>
    </slider>
  </client-only>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  name: "HomeSlider",
  props: ["data"],
  components: {
    Slider,
    SliderItem
  }
};
</script>

<style lang="scss">
#sliderHome {
  height: 352px;

  .slider-btn {
    @apply h-10 w-10 bg-estilo rounded-full bg-opacity-25 mx-4;
    top: calc(50% - (2.5rem / 2));
    backdrop-filter: blur(5px);
    &:hover {
      @apply bg-opacity-100;
    }
    .slider-icon {
      @apply relative;
      &.slider-icon-left {
        left: 2px;
      }
      &.slider-icon-right {
        right: 2px;
      }
    }
  }
}
</style>
