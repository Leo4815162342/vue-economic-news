import proxiedFetch from 'proxied-fetch';
import { DateTime } from 'luxon';

function normalizeNewsList(textData, lang) {

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

async function getNewsList({dateFrom, dateTo, lang}) {
    const url = `https://www.mql5.com/${lang}/economic-calendar/widget/content?date_mode=2&from=${dateFrom}T00:00:00&to=${dateTo}T23:59:59`;

    const res = await proxiedFetch(encodeURI(url));

    const textData = await res.text();

    const newsList = normalizeNewsList(textData, lang);

    return newsList;
}

async function getNewsItem() {
    console.log('getting news list item');
}

export {
    getNewsList,
    getNewsItem
}