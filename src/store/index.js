import Vue from 'vue';
import Vuex from 'vuex';

import * as app from './../app.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    outfits: null,
    favoriteOutfits: null,
  },
  mutations: {
    setOutfits(state, payload) {
      state.outfits = payload;
    },
    setFavorites(state, payload) {
      state.favoriteOutfits = payload;
    }
  },
  actions: {
    setOutfits(context) {
      app.axios.get(app.config.api + 'outfits').then(response => {
        context.commit('setOutfits', response.data);
      });
    },
    setFavorites(context) {
        let favorites = new app.Favorites();
        let favoriteOutfits = favorites.getItems();
        context.commit('setFavorites', favoriteOutfits);
    },
  },
  getters: {
    getOutfitById(state) {
      return function(id) {
        return state.outfits.find(outfit => outfit.id == id);
      };
    }
  }
});
