import getNormalizeNewsList from './utils/getNormalizeNewsList';
import getNormalizedHostoricData from './utils/getNormalizedHostoricData';

const API_ROOT = '/.netlify/functions';

async function getNewsList({dateFrom, dateTo, lang}) {

  const url = `${API_ROOT}/news?from=${dateFrom}&to=${dateTo}&lang=${lang}`;

  const res = await fetch(encodeURI(url));

  const textData = await res.text();

  const newsList = getNormalizeNewsList({ textData, lang, dateFrom, dateTo });

  return newsList;
}

async function getHistoricData(eventItemUrl) {

  const url = `${API_ROOT}/news?history-url=${eventItemUrl}`;

  const res = await fetch(encodeURI(url));

  const textData = await res.text();

  const historicData = getNormalizedHostoricData(textData);

  return historicData;

}

export {
    getNewsList,
    getHistoricData
}