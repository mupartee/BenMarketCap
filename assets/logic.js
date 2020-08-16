
$(document).ready(function() {

  let BASE_URL = "https://api.coingecko.com/api/v3";
  let MARKET_CAP_DATA = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d";

  let marketCapData = BASE_URL + MARKET_CAP_DATA;

  fetch(marketCapData)
    .then( res => {
      res.json().then( data => {
        let name = data[0].name;
        console.log(name);
        return name;
        $("#name").text(name);
      })
    })


});
