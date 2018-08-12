import proxiedFetch from 'proxied-fetch';
import { DateTime } from 'luxon';

function getNormalizeNewsList({textData, lang, dateFrom, dateTo}) {

  const [
    fromEndOfDayMs,
    toEndOfDayMs
  ] = [dateFrom, dateTo].map(a => DateTime.fromISO(a).endOf('day').toMillis());

  const res = JSON.parse(textData.replace(/<!--[\s\S]*?-->/g, "")).reduce((all, item) => {
    const { ReleaseDate } = item;

    const dt = DateTime.fromMillis(ReleaseDate);

    const endOfDay = dt.endOf('day').toMillis();

    const isInRange = endOfDay >= fromEndOfDayMs && endOfDay <= toEndOfDayMs;

    if (!isInRange) {
      return all;
    }

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

function getNormalizedHostoricData(textData) {

  if (!textData) {
    return null;
  }

  const result =
    textData
      .trim()
      .split('\n')
      .slice(1)
      .reduce((all, item) => {

        const [
          dateStr, //'2012.07.25'
          actualVal,
          _,
          forecastVal
        ] = item.split('\t').map(a => !isNaN(a) ? Number(a) : a || null);

        if (!dateStr) {
          return all;
        }

        all.push({
          dateTs: DateTime.fromFormat(dateStr, 'yyyy.LL.dd').toMillis(),
          actualVal,
          forecastVal,
        })
        
        return all;

      }, []);

  return result;

}

async function getNewsList({dateFrom, dateTo, lang}) {
    const url = `https://www.mql5.com/${lang}/economic-calendar/widget/content?date_mode=2&from=${dateFrom}T00:00:00&to=${dateTo}T23:59:59`;

    const res = await proxiedFetch(encodeURI(url));

    const textData = await res.text();

    const newsList = getNormalizeNewsList({ textData, lang, dateFrom, dateTo });

    return newsList;
}

async function getHistoricData(newItemUrl) {

  // /en/economic-calendar/widget/japan/foreign-investment-in-japan-stocks
  // /en/economic-calendar/japan/foreign-investment-in-japan-stocks/export

  const exportUrl = `https://www.mql5.com${newItemUrl.replace('/widget/','/')}/export`;

  const res = await proxiedFetch(encodeURI(exportUrl));

  const textData = await res.text();

  const historicData = getNormalizedHostoricData(textData);

  return historicData;


}

export {
    getNewsList,
    getHistoricData
}