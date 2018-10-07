export default function getNormalizedHostoricData(textData) {

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