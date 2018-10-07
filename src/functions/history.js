const https = require('https');

exports.handler = async function(event, context) {

    // /.netlify/functions/history?origin=

// /en/economic-calendar/widget/japan/foreign-investment-in-japan-stocks
  // /en/economic-calendar/japan/foreign-investment-in-japan-stocks/export

    const { origin } = event.queryStringParameters;

    const url = `https://www.mql5.com${origin.replace('/widget/','/')}/export`;

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