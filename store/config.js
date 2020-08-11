export const state = () => ({
  name: "Estilo Ar",
  dark_mode: false,
  cloud_name: "estilo_ar",
  logo: {
    id: 10,
    name: "logo_estiloar_61891878b3.png",
    alternativeText: "Logo da Estilo Ar",
    caption: "",
    width: 1000,
    height: 164,
    formats: {
      thumbnail: {
        name: "thumbnail_logo_estiloar_61891878b3.png",
        hash: "thumbnail_logo_estiloar_61891878b3_6b8c1180e6",
        ext: ".png",
        mime: "image/png",
        width: 245,
        height: 40,
        size: 8.18,
        path: null,
        url:
          "https://res.cloudinary.com/estilo-ar/image/upload/v1596741558/thumbnail_logo_estiloar_61891878b3_6b8c1180e6.png",
        provider_metadata: {
          public_id: "thumbnail_logo_estiloar_61891878b3_6b8c1180e6",
          resource_type: "image"
        }
      }
    },
    hash: "logo_estiloar_61891878b3_6b8c1180e6",
    ext: ".png",
    mime: "image/png",
    size: 26.19,
    url:
      "https://res.cloudinary.com/estilo-ar/image/upload/v1596741558/logo_estiloar_61891878b3_6b8c1180e6.png",
    previewUrl: null,
    provider: "cloudinary",
    provider_metadata: {
      public_id: "logo_estiloar_61891878b3_6b8c1180e6",
      resource_type: "image"
    },
    created_by: 1,
    updated_by: 1,
    created_at: "2020-08-06T19:19:19.000Z",
    updated_at: "2020-08-11T18:01:55.000Z"
  }
});

export const mutations = {
  setConfigs(state, res) {
    // for (const key in res) {
    //   console.log(`${key} was ${state[key]} now it is ${res[key]}`);
    //   state[key] = res[key]
    // }
    // console.log(res.name);
    state.name = res.name;
  }
};

export const actions = {
  refresh(context) {
    this.$strapi.find("global-config").then(res => {
      context.commit("setConfigs", res);
    });
  }
};
