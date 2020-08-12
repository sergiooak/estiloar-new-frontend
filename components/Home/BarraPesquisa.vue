<template>
  <div
    class="relative flex w-5/6 p-4 mx-auto -mt-8 bg-white border-2 rounded-lg shadow-xl border-estilo"
  >
    <div class="w-2/5">
      <h2 class="text-lg font-bold uppercase text-estilo">{{ data.title }}</h2>
      <p class="text-gray-600">{{ data.description }}</p>
    </div>
    <div class="w-3/5">
      <Pesquisa />
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>
