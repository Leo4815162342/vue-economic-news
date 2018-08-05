import Vue from 'vue';
import Vuex from 'vuex';

import defaultState from './defaultState.js';
import { getNewsList } from './../api.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: defaultState,
  mutations: {
    updateNewsList (state, { newsList }) {
      state.newsList = newsList;
    },
    toggleNewsLoadingIndication(state, { flag }) {
      state.isFetching = flag;
    },
    setError(state, { errorObj }) {
      state.errors = errorObj;
    },
    setLanguage(state, { lang }) {
      state.currentLang = lang;
    },
    setFromDate(state, { date }) {
      state.dateFrom = date;
    },
    setToDate(state, { date }) {
      state.dateTo = date;
    }
  },
  actions: {
    async fetchNews(context) {
      console.log('FETCHING NEWWS');
      try {

        context.commit('toggleNewsLoadingIndication', { flag: true });

        const { currentLang: lang , dateFrom, dateTo } = context.state;

        const newsList = await getNewsList({dateFrom, dateTo, lang});

        console.log(newsList);

        if (typeof newsList === 'object' && Object.keys(newsList).length) {

          context.commit('updateNewsList', { newsList });

        } else {

          context.commit('setError', {
            errorObj: new Error('Response is not an array or empty array')
          });

        }

      } catch(err) {

        context.commit('setError', { errorObj: err });

      } finally {

        context.commit('toggleNewsLoadingIndication', { flag: false });

      }

    },
    setLanguage(context, { lang }) {
      context.commit('setLanguage', { lang });
    },
    setFromDate(context, { date }) {
      context.commit('setFromDate', { date });
    },
    setToDate(context, { date }) {
      context.commit('setToDate', { date });
    }
  },
  getters: {
    // allLangs: state => {
    //   return Object.keys(state.langs).map(code => ({ code, name: state.langs[code]}))
    // }
    // datesRange: state => {
    //   return [state.dateFrom, state.dateTo]
    // }
  }
});

export default store;