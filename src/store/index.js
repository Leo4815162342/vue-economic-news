import Vue from 'vue';
import Vuex from 'vuex';

import defaultState from './defaultState.js';
import { getNewsList, getHistoricData } from './../api.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: defaultState,
  mutations: {
    updateNewsList (state, { newsList }) {
      state.newsList = newsList;
    },
    updateHistoricData(state, { newsItemId, historicDataArr }) {
      Vue.set(state.historicData, newsItemId, historicDataArr);
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
    },
    toggleFilterItem(state, { type, item }) {
      state.filters[type][item] = !state.filters[type][item];
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

        if (Array.isArray(newsList) && newsList.length) {

          context.commit('updateNewsList', { newsList });

        } else {

          context.commit('setError', {
            errorObj: new Error('Response for news list is not an array or empty array')
          });

        }

      } catch(err) {

        context.commit('setError', { errorObj: err });

      } finally {

        context.commit('toggleNewsLoadingIndication', { flag: false });

      }

    },
    async fetchHistoricData(context, { newsItemId, newsItemUrl }) {

      console.log('Fetching historic data for', newsItemId);

      try {
        
        const historicDataArr = await getHistoricData(newsItemUrl);
        
        if (Array.isArray(historicDataArr) && historicDataArr.length) {
          context.commit('updateHistoricData', { newsItemId, historicDataArr });
        } else {
          context.commit('setError', {
            errorObj: new Error('Response for historic data is not an array or empty array')
          });
        }

      } catch(err) {

        context.commit('setError', { errorObj: err });

      } finally {

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
    },
    toggleFilterItem(context, { type, item }) {
      context.commit('toggleFilterItem', { type, item });
    }
  },
  getters: {
    filteredNewsList: (state) => {
      return state.newsList.reduce((all, { dayName, list, endOfDayMs }) => {

        const filteredDayList = list.filter(({ CurrencyCode, Importance }) => {

          return (
            state.filters.currencies[CurrencyCode] &&
            state.filters.importance[Importance]
          );

        });

        if (!filteredDayList.length) {
          return all;
        }
        
        all.push({
          dayName,
          endOfDayMs,
          list: filteredDayList
        });

        return all;

      }, []);
    }
  }
});

export default store;