import { DateTime } from 'luxon';

const today = DateTime.fromJSDate(new Date);
const fromIsoDate = today.toISODate();
const toIsoDate = today.plus({days: 7}).toISODate();

const supportedLangs = ['ru','es','zh','pt','ja','de']
const browserLang = navigator.language || navigator.userLanguage;

const defaultState = {
  currentLang: supportedLangs.indexOf(browserLang) >=0 && browserLang || 'en',
  newsList: [],
  historicData: {},
  dateFrom: fromIsoDate,
  dateTo: toIsoDate,
  filters: {
    currencies: {
      USD: true,
      EUR: true,
      JPY: true,
      GBP: true,
      CAD: true,
      AUD: true,
      CHF: true,
      CNY: true
    },
    importance: {
      none: true,
      low: true,
      medium: true,
      high: true
    }
  },
  isFetching: true,
  errors: null
}

export default defaultState;