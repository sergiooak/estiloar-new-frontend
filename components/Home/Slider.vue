<template>
  <div class="slider">
    slider
  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  name: "HomeSlider",
  components: {
    Slider,
    SliderItem
  }
};
</script>

<style scoped>
.slider {
  height: 352px;
  @apply bg-gray-400;
}
</style>
