export const state = () => ({
  drawer: false,
  links: ["Inicio", "Cursos"]
});

export const mutations = {
  SET_DRAWER(state, payload) {
    state.drawer = payload;
  }
};

export const actions = {
  getData: async function() {
    try {
      const req = await fetch("https://api.magicthegathering.io/v1/cards");
      const data = await req.json();
      console.log(getData);
    } catch (error) {}
  }
};
