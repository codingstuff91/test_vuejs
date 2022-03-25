import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import bienService from "@/services/bienService";

export default new Vuex.Store({
  state: {
    listeDesBiens: [],
    bien: {},
  },

  mutations: {
    INITIALISER_LISTE_BIENS(state, biens) {
      state.listeDesBiens = biens.data;
    },
    FILTRER_LISTE_BIENS(state, biensFiltres) {
      state.listeDesBiens = biensFiltres.data;
    },
    INITIALISER_DETAIL_BIEN(state, bien) {
      state.bien = bien.data;
    },
  },
  actions: {
    recupererTousLesBiens({ commit }) {
      bienService.listeDesBiens().then(({ data }) => {
        commit("INITIALISER_LISTE_BIENS", data);
      });
    },
    filtrerListeDesBiens({ commit }, type_bien, statut) {
      bienService.filtrerListeDesBiens(type_bien, statut).then(({ data }) => {
        commit("FILTRER_LISTE_BIENS", data);
      });
    },
    afficherBien({ commit }, bien_id) {
      bienService.recupererDetailsBien(bien_id).then(({ data }) => {
        commit("INITIALISER_DETAIL_BIEN", data);
      });
    },
  },
  getters: {
    bienActifs: (state) => {
      return state.listeDesBiens.filter((bien) => bien.state == "ACTIVE");
    },
    bienInactifs: (state) => {
      return state.listeDesBiens.filter((bien) => bien.state == "INACTIVE");
    },
  },
});
