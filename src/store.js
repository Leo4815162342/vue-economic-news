import Vue from 'vue';
import Vuex from 'vuex';

import proxiedFetch from 'proxied-fetch';

import { DateTime } from 'luxon';

const today = DateTime.fromJSDate(new Date);
const fromIsoDate = today.minus({days: 3}).toISODate();
const toIsoDate = today.plus({days: 3}).toISODate();

function normalizeNews(textData, lang) {

  const res = JSON.parse(textData.replace(/<!--[\s\S]*?-->/g, "")).reduce((all, item) => {
    const { ReleaseDate } = item;
    
    const dt = DateTime.fromMillis(ReleaseDate);

    const endOfDay = dt.endOf('day').toMillis();
    const dayName = dt.setLocale(lang).toLocaleString(Object.assign({ weekday: 'long' }, DateTime.DATE_HUGE));
    const formattedTime = dt.toLocaleString(DateTime.TIME_24_SIMPLE);

    if (!all.hasOwnProperty(endOfDay)) {
      all[endOfDay] = {
        dayName,
        list: []
      };
    }
    
    all[endOfDay].list.push(Object.assign({}, item, {formattedTime}));

    return all;

  }, {});

  return res;
}

Vue.use(Vuex);

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
    dateFrom: fromIsoDate,
    dateTo: toIsoDate,
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

        const url = `https://www.mql5.com/${lang}/economic-calendar/widget/content?date_mode=2&from=${dateFrom}T00:00:00&to=${dateTo}T23:59:59`;

        const res = await proxiedFetch(encodeURI(url));

        const textData = await res.text();

        const newsList = normalizeNews(textData, lang);

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