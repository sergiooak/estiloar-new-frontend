<template>
  <div class="py-8">
    <div class="container mx-auto">
      <div class="flex flex-row-reverse w-full mx-2">
        <aside class="w-1/4 px-2">
          <Aside @params="update" />
        </aside>
        <div class="w-3/4 px-2">
          <div class="relative p-2 -m-2 content">
            <fade-transition>
              <div v-show="loading" class="absolute inset-0 loading">
                <div>
                  <Spinner />
                </div>
              </div>
            </fade-transition>
            <header class="flex justify-between">
              <Contador :nessa_pagina="12" :total="total" />
              <Paginacao
                @mudaPage="mudaPage"
                :page="page"
                :last_page="Math.ceil(total / 12)"
              />
            </header>

            <main class="flex flex-wrap mt-4 -mr-2">
              <div v-for="item in items" :key="item.id" class="w-1/3 px-2 mb-4">
                <Peca :peca="item" />
              </div>
            </main>

            <footer class="flex justify-between">
              <Contador :nessa_pagina="12" :total="total" />
              <Paginacao
                @mudaPage="mudaPage"
                :page="page"
                :last_page="Math.ceil(total / 12)"
              />
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";

export default {
  name: "Catalogo",
  components: {
    FadeTransition
  },
  data() {
    return {
      params: {
        query: "",
        linha: "",
        categoria: ""
      },
      items: [],
      page: 1,
      total: 4700,
      loading: true
    };
  },
  computed: {
    paramsObj() {
      let obj = {
        _limit: 12,
        _start: this.page * 12 - 12
      };
      return obj;
    }
  },
  methods: {
    update(params) {
      this.params = params;
    },
    async getPecas() {
      this.loading = true;

      let q = this.paramsObj;
      let res = await this.$strapi.find("pecas", q);

      // remove limit from params
      let qCount = q;
      delete qCount._limit;
      let count = await this.$strapi.find("pecas/count", qCount);
      this.total = count;

      this.items = res;
      this.loading = false;
    },
    mudaPage(page) {
      this.page = page;
    }
  },
  mounted() {
    this.getPecas();
  },
  watch: {
    paramsObj: {
      handler: function(val) {
        this.getPecas();
      }
    }
  }
};
</script>

<style lang="scss">
.loading {
  @apply flex justify-center bg-gray-200 bg-opacity-50;
  z-index: +1;
  backdrop-filter: blur(1.5px);

  & > div{
    @apply flex items-center;
    max-height: 80vh;
  }
}
</style>
