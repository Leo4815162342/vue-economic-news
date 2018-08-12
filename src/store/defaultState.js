import { DateTime } from 'luxon';

const today = DateTime.fromJSDate(new Date);
const fromIsoDate = today.minus({days: 3}).toISODate();
const toIsoDate = today.plus({days: 3}).toISODate();

const defaultState = {
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
  historicData: {},
  dateFrom: fromIsoDate,
  dateTo: toIsoDate,
  isFetching: true,
  errors: null
}

export default defaultState;