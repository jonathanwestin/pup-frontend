import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articleData: null
  },
  mutations: {
    setArticleData(state, article) {
      state.articleData = article;
    }
  }
});
