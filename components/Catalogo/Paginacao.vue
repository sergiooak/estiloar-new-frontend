<template>
  <div class="paginacao">
    <button
      v-for="(pagina, index) in paginacao"
      :key="index"
      :class="{
        seta: pagina == '<' || pagina == '>',
        pontinhos: pagina == '...',
        atual: pagina == temp_page
      }"
      @click="handleClick(pagina)"
    >
      <!-- <b-icon-chevron-left v-if="pagina == '<'"></b-icon-chevron-left> -->
      <!-- <b-icon-chevron-right v-else-if="pagina == '>'"></b-icon-chevron-right> -->
      <span>{{ pagina }}</span>
    </button>
  </div>
</template>

<script>
// TO-DO: Refactor this whole components, really old and dumb code
export default {
  props: {
    page: Number,
    last_page: Number
  },
  data() {
    return {
      temp_page: 1
    };
  },
  methods: {
    handleClick(pg) {
      let vaipara = null;
      let lp = this.last_page;
      let cp = this.temp_page;
      if (pg == "<") {
        if (cp !== 1) {
          vaipara = cp - 1;
        }
      } else if (pg == ">") {
        if (cp !== lp) {
          vaipara = cp + 1;
        }
      } else {
        if (pg !== cp && pg !== "...") {
          vaipara = pg;
        }
      }
      if (vaipara !== null) {
        this.temp_page = vaipara;
        this.$emit("mudaPage", vaipara);
      }
    }
  },
  computed: {
    paginacao() {
      let paginacao = [];
      let lp = this.last_page;
      let cp = this.page;
      if (lp == 1) {
        paginacao = ["<", 1, ">"];
      } else if (lp == 2) {
        paginacao = ["<", 1, 2, ">"];
      } else if (lp == 3) {
        paginacao = ["<", 1, 2, 3, ">"];
      } else if (lp == 4) {
        paginacao = ["<", 1, 2, 3, 4, ">"];
      } else if (lp == 5) {
        paginacao = ["<", 1, 2, 3, 4, 5, ">"];
      } else {
        if (cp - 1 <= 1) {
          paginacao = ["<", 1, 2, 3, "...", lp, ">"];
        } else if (lp - cp <= 1) {
          paginacao = ["<", 1, "...", lp - 2, lp - 1, lp, ">"];
        } else {
          paginacao = ["<", 1, "...", cp - 1, cp, cp + 1, "...", lp, ">"];
        }
      }
      return paginacao;
    }
  },
  watch: {
    page() {
      this.temp_page = this.page;
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.paginacao {
  @apply flex;
  button {
    @apply rounded-lg bg-white shadow-md flex items-center justify-center h-10 w-10 mr-2 text-estilo transition-colors duration-150 font-bold;
    &:last-child {
      @apply mr-0;
    }
    &:focus {
      @apply outline-none;
    }
    &:hover {
      @apply bg-estilo text-white;
    }
    &.atual {
      @apply bg-estilo text-white;
    }
    &.pontinhos {
      cursor: default;
      box-shadow: none;
      background: transparent;
      color: #525f7f;
      margin-left: -5px;
      margin-right: 0;
    }
    &.seta {
      background: #2d3748;
      color: #fff;
    }
  }
}
</style>
