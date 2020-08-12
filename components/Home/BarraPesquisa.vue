<template>
  <div
    id="BarraPesquisa"
    class="relative flex w-5/6 p-4 mx-auto -mt-8 bg-white border-2 rounded-lg shadow-xl border-estilo"
  >
    <div class="flex items-center w-2/5">
      <h2 class="text-lg font-bold uppercase text-estilo">{{ data.title }}</h2>
    </div>
    <div class="w-3/5 h-12">
      <Pesquisa :placeholder="data.description" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style>
  #BarraPesquisa{
    z-index: 99;
  }
</style>