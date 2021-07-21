export const state = () => ({
  cards: []
});

export const mutations = {
  addCards(state, payload) {
    state.cards = payload.cards;
  }
};

export const actions = {
  async getData({ commit }) {
    try {
      const data = await fetch(`https://api.magicthegathering.io/v1/cards`);
      const object = await data.json();
      commit("addCards", object);
    } catch (error) {
      console.log(error);
    }
  }
};

export const getters = {
  getCard: state => payload => {
    const data = state.cards;
    let rst = "";
    if (payload) {
      rst = data.filter(pr => pr.type.includes(payload));
    } else {
      rst = data;
    }
    const resulrado = rst.map(p => {
      const { name, imageUrl, type, id } = p;
      return {
        name,
        imageUrl,
        type, 
        id
      };
    });

    return resulrado;
  },

  getCardDetalle: state => payload => {
    const data = state.cards;
    const rst = data.find(p => p.id === payload);
    return rst;
  }
};
