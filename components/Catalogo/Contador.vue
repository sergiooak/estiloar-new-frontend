<template>
  <div class="pl-2 text-gray-600">
    Exibindo {{nessa_pagina}} de <strong>{{ total }}</strong> peças
  </div>
</template>

<script>
export default {
  name: "Contador",
  props: ['nessa_pagina', 'total']
};
</script>
