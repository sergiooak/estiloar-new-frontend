<template>
  <div>
    <section>
      <Slider :data="config.slider" />
    </section>
    <section class="container mx-auto">
      <BarraPesquisa :data="config.search_bar" />
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      config: {}
    }
  },
  async fetch() {
    this.config = await this.$strapi.find('inicial-pagina')
  }
};
</script>

<style></style>
