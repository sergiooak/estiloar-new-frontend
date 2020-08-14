<template>
  <div class="relative w-full h-full">
    <div class="h-full border-2 rounded border-estilo">
      <form @submit.prevent="search" class="flex w-full h-full">
        <input
          v-model="query"
          @keyup="quickSearch"
          type="text"
          :placeholder="placeholder"
          class="w-full h-full px-4"
        />
        <input
          type="submit"
          value="buscar"
          class="h-full px-4 font-medium text-white uppercase transition-colors duration-150 rounded-none cursor-pointer bg-estilo hover:bg-gray-800"
        />
      </form>
    </div>
    <collapse-transition>
      <div v-show="resultados.length > 0" class="resultados">
        <div
          class="resultado"
          v-for="resultado in resultados"
          :key="resultado.id"
        >
          <nuxt-link
            class="flex items-center"
            :to="'/catalogo/' + resultado.slug"
          >
            <img
              class="w-16 h-16"
              width="64px"
              height="64px"
              :src="
                'https://res.cloudinary.com/estilo-ar/image/upload/c_thumb,h_64,w_64/f_auto/' +
                  resultado.imagens[0].hash
              "
            />
            <h6 class="mx-2 text-lg font-bold text-estilo">
              {{ resultado.codigo }}
            </h6>
            <p class="leading-tight text-gray-600">{{ resultado.nome }}</p>
          </nuxt-link>
        </div>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
import { CollapseTransition } from "vue2-transitions";

export default {
  name: "Pesquisa",
  components: {
    CollapseTransition
  },
  props: ["placeholder"],
  data() {
    return {
      query: "",
      resultados: []
    };
  },
  methods: {
    search() {
      this.$router.push("/catalogo/pesquisa", { query: { query: this.query } });
    },
    async quickSearch() {
      let q = this.query;
      let res = await this.$strapi.find("pecas", {
        _limit: 6,
        super_contains: q
      });
      if (q.length > 0) {
        if (q == this.query) {
          this.resultados = res;
        }
      } else {
        this.resultados = [];
      }
    }
  }
};
</script>

<style>
.resultados {
  top: calc(100% + 0.5rem);
  @apply absolute bg-white w-full shadow-md rounded p-2;
}

.resultado {
  @apply flex items-center;
}
</style>
