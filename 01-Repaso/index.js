const request = require('request');

// // CONST -> CONSTANTE DE ALCANCE LOCAL
// //  -> CONSTANTE DE ALCANCE LOCAL

// const API_URL = ''
// request.get(API_URL, () => {});

const BR_BA_QUOTES = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
request.get(BR_BA_QUOTES, (err, res, body) => {
  if (res.statusCode === 200) console.log(body);
  else console.log(err);
});
