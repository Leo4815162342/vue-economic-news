import { DateTime } from 'luxon';

export default function getNormalizeNewsList({textData, lang, dateFrom, dateTo}) {

  const [
    fromEndOfDayMs,
    toEndOfDayMs
  ] = [dateFrom, dateTo].map(a => DateTime.fromISO(a).endOf('day').toMillis());

  const dataObj = JSON.parse(textData.replace(/<!--[\s\S]*?-->/g, "")).reduce((all, item) => {

    const { ReleaseDate } = item;

    const dt = DateTime.fromMillis(ReleaseDate);

    const endOfDayMs = dt.endOf('day').toMillis();

    const isInRange = endOfDayMs >= fromEndOfDayMs && endOfDayMs <= toEndOfDayMs;

    if (!isInRange) {
      return all;
    }

    const dayName = dt.setLocale(lang).toLocaleString(Object.assign({ weekday: 'long' }, DateTime.DATE_HUGE));
    const formattedTime = dt.toLocaleString(DateTime.TIME_24_SIMPLE);

    if (!all.hasOwnProperty(endOfDayMs)) {
      all[endOfDayMs] = {
        dayName,
        list: []
      };
    }

    all[endOfDayMs].list.push(Object.assign({}, item, {formattedTime}));

    return all;

  }, {});

  const res = Object.keys(dataObj).map(endOfDayMs => {

    const { dayName, list } = dataObj[endOfDayMs];

    return {
      endOfDayMs,
      dayName,
      list
    }

  });

  return res;
}