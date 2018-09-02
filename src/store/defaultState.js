import { DateTime } from 'luxon';

const today = DateTime.fromJSDate(new Date);
const fromIsoDate = today.minus({days: 3}).toISODate();
const toIsoDate = today.plus({days: 3}).toISODate();

const defaultState = {
  currentLang: 'en',
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