
$(document).ready(function() {

  let BASE_URL = "https://api.coingecko.com/api/v3";
  let MARKET_CAP_DATA = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d";

  let marketCapData = BASE_URL + MARKET_CAP_DATA;

  fetch(marketCapData)
    .then( res => {
      res.json().then( data => {
        let rankCoin = data[4].market_cap_rank;
        console.log(rankCoin);
        $(".rank").html(rankCoin);
        return rankCoin;
      })
    })

  fetch(marketCapData)
    .then( res => {
      res.json().then( data => {
        let nameCoin = data[4].name;
        console.log(nameCoin);
        $(".name").html(nameCoin);
        return nameCoin;
      })
    })

  fetch(marketCapData)
    .then( res => {
      res.json().then( data => {
        let marketCapCoin = data[4].market_cap;
        console.log(marketCapCoin);
        $(".marketCap").html(marketCapCoin);
        return marketCapCoin;
      })
    })


  fetch(marketCapData)
    .then( res => {
      res.json().then( data => {
        let priceCoin = data[4].current_price;
        console.log(priceCoin);
        $(".price").html(priceCoin);
        return priceCoin;
      })
    })

  fetch(marketCapData)
    .then( res => {
      res.json().then( data => {
        let volumeCoin = data[4].total_volume;
        console.log(volumeCoin);
        $(".volume").html(volumeCoin);
        return volumeCoin;
      })
    })

  fetch(marketCapData)
    .then( res => {
      res.json().then( data => {
        let circulatingSupplyCoin = data[4].circulating_supply;
        console.log(circulatingSupplyCoin);

        function inMillions(num) {
          let million = 1000000;
          return (num/million).toFixed(2);
        }

        let supplyInMillions = inMillions(circulatingSupplyCoin);

        $(".circulatingSupply").html(supplyInMillions + " million");
        return circulatingSupplyCoin;
      })
    })


   fetch(marketCapData)
      .then( res => {
        res.json().then( data => {
          let changeCoin = data[4].price_change_percentage_24h;
          console.log(changeCoin);

          function changeFix(num) {
            return (num).toFixed(2);
          }

          let changeFixToTwo = changeFix(changeCoin);

          if (changeCoin >= 0) {
            $(".change").html("+" + changeFixToTwo + "%");
            $(".change").css("color","green")
          } else {
            $(".change").html(changeFixToTwo + "%");
            $(".change").css("color","red")
          }

          return changeCoin;
        })
      })

});
