const request = require('request');

// // CONST -> CONSTANTE DE ALCANCE LOCAL
// //  -> CONSTANTE DE ALCANCE LOCAL

// const API_URL = ''
// request.get(API_URL, () => {});

// const BR_BA_QUOTES = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
// request.get(BR_BA_QUOTES, (err, res, body) => {
//   if (res.statusCode === 200) console.log(body);
//   else console.log(err);
// });

const getBandInfo = (band) => { 
const AUDIO_DB = 'theaudiodb.com/api/v1/json/1/search.php?s=coldplay';
request.get(AUDIO_DB, (err, res, body) => {
  if (err) console.log(err);
  if (res.statusCode === 200) {
      const json == JSON.parse(body);
      console.log(json.artists[0].strArtist);
  } 
  else console.log(res.statusCode, err);
});
}