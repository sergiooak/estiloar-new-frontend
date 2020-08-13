<template>
  <div class="p-4 bg-white rounded-lg shadow-lg">
    <header>
      <label class="block">
        <span class="text-gray-700">Filtrar por nome ou código</span>
        <input
          class="block w-full mt-1 form-input"
          v-model="params.query"
          placeholder="Ex: 000000 ou Radiador"
        />
      </label>
    </header>
    <div class="py-4 my-4 border-t-2 border-b-2 border-gray-200">
      <span class="text-gray-700">Filtrar por Linha</span>
      <div class="flex flex-col mt-2">
        <label class="inline-flex items-center">
          <input
            type="radio"
            v-model="params.linha"
            class="form-radio"
            value=""
          />
          <span class="ml-2">Todas as linhas</span>
        </label>
        <label class="inline-flex items-center">
          <input
            type="radio"
            v-model="params.linha"
            class="form-radio"
            value="equipamentos"
          />
          <span class="ml-2">Equipamentos</span>
        </label>
        <label class="inline-flex items-center">
          <input
            type="radio"
            v-model="params.linha"
            class="form-radio"
            value="agricola"
          />
          <span class="ml-2">Linha Agrícola</span>
        </label>
        <label class="inline-flex items-center">
          <input
            type="radio"
            v-model="params.linha"
            class="form-radio"
            value="leve"
          />
          <span class="ml-2">Linha Leve</span>
        </label>
        <label class="inline-flex items-center">
          <input
            type="radio"
            v-model="params.linha"
            class="form-radio"
            value="pesada"
          />
          <span class="ml-2">Linha Pesada</span>
        </label>
      </div>
    </div>
    <div>
      <span class="text-gray-700">Filtrar por Categoria</span>
      <div class="flex flex-col mt-2">
        <label
          class="inline-flex items-center pb-4"
          v-for="cat in categoriasList"
          :key="cat.id"
        >
          <input
            type="radio"
            v-model="params.categoria"
            class="form-radio"
            :value="cat.id"
          />
          <span class="ml-2 leading-none">{{ cat.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "asideCatalogo",
  data() {
    return {
      categoriasList: [],
      params: {
        query: "",
        linha: "",
        categoria: ""
      }
    };
  },
  async fetch() {
    this.categoriasList = await this.$strapi.find("pecas-categorias", {
      mae_null: true
    });
  },
  watch: {
    params: {
      deep: true,
      handler: function(val) {
        this.$emit('params', this.params)
      }
    }
  }
};
</script>
