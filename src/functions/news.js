// fetching news list and historic data

// /.netlify/functions/news?from=2018-02-03&to=2018-02-03&lang=ru
// ^ will be proxied to: // https://www.mql5.com/ru/economic-calendar/widget/content?date_mode=2&from=2018-02-04T00:00:00&to=2018-02-06T23:59:59
// 
// /.netlify/functions/news?history-url=/en/economic-calendar/widget/japan/foreign-investment-in-japan-stocks
// ^ will be proxied to https://www.mql5.com/en/economic-calendar/japan/foreign-investment-in-japan-stocks/export

const https = require('https');

exports.handler = async function(event, context) {

    const { from, to, lang, "history-url": historyUrl } = event.queryStringParameters;
    
    let url = '';

    if (from && to && lang) {
        url = `https://www.mql5.com/${lang}/economic-calendar/widget/content?date_mode=2&from=${from}T00:00:00&to=${to}T23:59:59`
    } else if (historyUrl) {
        url = `https://www.mql5.com${historyUrl.replace('/widget/','/')}/export`;
    }

    const data = await getDataFromUrl(url);

    return {
        statusCode: 200,
        body: data,
        headers: {
            "Content-Type": "text/html; charset=utf-8",
        }
      }

}

function getDataFromUrl(url) {

    return new Promise((resolve, reject) => {

        https.get(url, response => {

            if (response.statusCode !== 200) {
                reject(response.statusMessage);
                response.resume();
                return;
            }

            response.setEncoding('utf-8');

            let body = '';

            response.on('data', data => body += data);

            response.on('end', _ => {

                try {
                    resolve(body);
                } catch(e) {
                    reject(e);
                }
            });

        });

    });

}