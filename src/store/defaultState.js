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
    currencies: ['USD', 'EUR', 'JPY', 'GBP', 'CAD', 'AUD', 'CHF', 'CNY', 'ALL'],
    importance: ['low', 'medium', 'high']
  },
  isFetching: true,
  errors: null
}

export default defaultState;