<template>
  <header
    class="relative overflow-hidden bg-white shadow-lg"
    style="z-index: 99"
  >
    <div class="container flex justify-between mx-auto">
      <div class="w-1/6">
        <nuxt-link class="flex items-center h-full" to="/">
          <img
            width="213"
            height="35"
            :src="
              'https://res.cloudinary.com/estilo-ar/image/upload/c_pad,dpr_3.0,h_100,w_213/' +
                config.logo.hash
            "
            :alt="config.logo.alternativeText"
          />
        </nuxt-link>
      </div>
      <div class="flex flex-col-reverse justify-between flex-1 pl-4">
        <nav class="flex items-center justify-end h-full">
          <ul class="flex">
            <li class="font-bold uppercase">
              <nuxt-link class="text-gray-700" to="/">Home</nuxt-link>
            </li>
            <li class="pl-8 font-bold uppercase">
              <nuxt-link class="text-gray-700" to="/treinamento">Treinamento</nuxt-link>
            </li>
            <li class="pl-8 font-bold uppercase">
              <nuxt-link class="text-gray-700" to="/quem-somos">Quem Somos</nuxt-link>
            </li>
            <li class="pl-8 font-bold uppercase">
              <nuxt-link class="text-gray-700" to="/catalogo">Catálogo</nuxt-link>
            </li>
          </ul>
        </nav>
        <nav id="clip" class="flex justify-between h-10 pl-12 bg-gray-800">
          <div class="flex items-center">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-6 h-6 text-gray-600 phone"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              ></path>
            </svg>
            <ul class="flex">
              <li
                v-for="unidade in unidades"
                :key="unidade.id"
                class="flex py-1 pl-4 text-white"
              >
                <p class="pr-2 text-sm font-medium ">{{ unidade.name }}:</p>
                <p class="flex items-center text-sm text-gray-300">
                  <span class="pr-1 text-xs">({{ unidade.ddd }})</span>
                  {{ unidade.number }}
                </p>
              </li>
            </ul>
          </div>
          <div class="flex items-center h-10">
            <ul class="flex">
              <li>
                <a href="#" target="_blank">
                  <svg
                    class="w-6 h-6 text-gray-600"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="pl-2">
                <a href="#" target="_blank">
                  <svg
                    class="w-6 h-6 text-gray-600"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      unidades: [],
      config: {}
    };
  },
  async fetch() {
    this.config = await this.$strapi.find('global-config')
    this.unidades = await this.$strapi.find('unidades')
  },
  // computed: {
  //   config() {
  //     return this.$store.state.config;
  //   }
  // },
  // created() {
  //   this.$store.dispatch("config/refresh");
  //   this.$strapi.find("unidades").then(res => {
  //     this.unidades = res;
  //   });
  // }
};
</script>

<style>
#clip {
  clip-path: polygon(0 0, 200% 0, 200% 200%, 2.5rem 100%);
  @apply relative;
}

#clip:after {
  content: "";
  width: 640px;
  left: 100%;
  @apply absolute h-10 bg-gray-800 top-0;
}
</style>
