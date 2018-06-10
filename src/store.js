import Vue from 'vue';
import Vuex from 'vuex';
import proxiedFetch from 'proxied-fetch';

Vue.use(Vuex);

function buildEndPointUrl({lang, dateFrom, dateTo}) {
  
  const url = `https://www.mql5.com/${lang}/economic-calendar/widget/content?date_mode=2&from=${dateFrom}T00:00:00&to=${dateTo}T23:59:59`;
  
  return encodeURI(url);

}

const store = new Vuex.Store({
  state: {
    langs: {
      ru: 'Русский',
      en: 'English',
      es: 'Español',
      zh: '中文',
      pt: 'Português',
      ja: '日本語',
      de: 'Deutsch'
    },
    currentLang: 'en',
    newsList: [],
    dateFrom: '2017-04-20',
    dateTo: '2017-04-23',
    isFetching: true,
    errors: null
  },
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
    }
  },
  actions: {
    async fetchNews(context) {
      
      try {

        context.commit('toggleNewsLoadingIndication', { flag: true });
        
        const { currentLang: lang , dateFrom, dateTo } = context.state;

        const url = buildEndPointUrl({ lang, dateFrom, dateTo });

        const res = await proxiedFetch(url);
        const textData = await res.text();
        const newsList = JSON.parse(textData.replace(/<!--[\s\S]*?-->/g, ""));
        
        if (Array.isArray(newsList) && newsList.length) {

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
      context.dispatch('fetchNews');
    }
  },
  getters: {
    allLangs: state => {
      return Object.keys(state.langs).map(code => ({ code, name: state.langs[code]}))
    }
  }
});

export default store;