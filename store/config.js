export const state = () => ({
    name: "Dash Oak",
    logo: {
      name: "logo-estiloar.png",
      alternativeText: "",
      hash: "logo_estiloar_5cc9058fa5",
      url:
        "https://res.cloudinary.com/estilo-ar/image/upload/v1596301088/logo_estiloar_5cc9058fa5.png"
    }
  });
  
  export const mutations = {
    set(state, res) {
      for (const key in res) {
        state[key] = res[key]
      }
    }
  };
  
  export const actions = {
    refresh(context) {
      this.$strapi.find("global-config")
      .then(function(res) {
        context.commit("set", res)
      })
      .catch(function(error) {
        console.error(error)
      })
    }
  };
  