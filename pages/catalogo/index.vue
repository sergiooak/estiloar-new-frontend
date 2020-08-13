<template>
  <div class="py-8">
    <div class="container mx-auto">
      <div class="flex flex-row-reverse w-full mx-2">
        <aside class="w-1/4 px-2">
          <Aside @params="update" />
        </aside>
        <div class="w-3/4 px-2">
          {{ params }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Catalogo",
  data() {
    return {
      params: {
        query: "",
        linha: "",
        categoria: ""
      }
    };
  },
  methods: {
    update(params) {
      this.params = params
    }
  }
};
</script>
