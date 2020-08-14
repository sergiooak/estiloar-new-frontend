<template>
  <article @click="handleClick(peca.id)" class="peca">
    <img :src="imageUrl(peca.imagens)" alt="Foto da peça" />
    <div class="meta">
      <div class="codigo">{{ peca.codigo }}</div>
      <div class="linha">{{ peca.linha }}</div>
    </div>
    <div class="info">
      <h2>{{ peca.nome }}</h2>
      <div class="categorias">
        {{ categoriasConcat(peca.categorias) }}
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Peça",
  props: ["peca"],
  methods: {
    imageUrl(imgs) {
      let img = imgs[0].hash;
      let dpi = window.devicePixelRatio;
      dpi
      return `https://res.cloudinary.com/estilo-ar/image/upload/c_thumb,g_center,h_195,w_302/dpr_${dpi},f_auto/${img}`;
    },
    categoriasConcat(cat) {
      let str = cat[0].name;
      for (let index = 1; index < cat.length; index++) {
        str = str + " / " + cat[index].name;
      }
      return str;
    },
    handleClick(id) {
      this.$emit("mudaDestaque", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.peca {
  @apply relative top-0 rounded-lg bg-white shadow-lg overflow-hidden cursor-pointer transition-all duration-150;
  height: 312px;

  &:hover {
    @apply shadow-xl;
    top: -5px;
  }
  img {
    @apply w-full object-cover;
    height: 195px;
  }
  .meta {
    @apply flex justify-between items-center;
    height: 35px;
    margin-top: calc((35px / 2) * -1);
    .codigo {
      @apply flex justify-center items-center rounded-r-md bg-estilo shadow-md font-bold text-white px-6;
      height: 35px;
      font-weight: bold;
    }
    .linha {
      @apply flex justify-center items-center rounded-l-md bg-gray-800 shadow-md font-bold text-white px-6 text-xs;
      height: 25px;
    }
  }
  .info {
    @apply p-4 pt-3 flex flex-col justify-between;
    height: 99px;
    h2 {
      @apply font-bold text-sm leading-tight overflow-hidden text-gray-800;
      max-height: 48px;
      text-overflow: ellipsis;
    }
    .categorias {
      @apply font-bold text-xs leading-none text-gray-600 overflow-hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
