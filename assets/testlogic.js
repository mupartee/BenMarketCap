
$(document).ready(function() {

  let BASE_URL = "https://api.coingecko.com/api/v3";
  let MARKET_CAP_DATA = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d";

  let marketCapData = BASE_URL + MARKET_CAP_DATA;

// loop for "index"
  for (var index = 0; index <= 99; index++) {
      // console.log(index);
      getMarketCapRank(index);
  }

// should be a function to get rank
  function getMarketCapRank(rank) {
    var list = $(".rank");
    fetch(marketCapData)
      .then( res => {
        res.json().then( data => {
          let rankCoin = data[rank].market_cap_rank;
          // console.log(rankCoin);
          $("<p/>").text(rankCoin).appendTo(list);
          return rankCoin;
        })
      })
  }


  for (var index = 0; index <= 99; index++) {
      getMarketCapName(index);
  }

  function getMarketCapName(name) {
    var list = $(".name");
    fetch(marketCapData)
      .then( res => {
        res.json().then( data => {
          let nameCoin = data[name].name;
          // console.log(nameCoin);
          $("<p/>").text(nameCoin).appendTo(list);
          return nameCoin;
        })
      })
  }


  for (var index = 0; index <= 99; index++) {
      getMarketCap(index);
  }

  function getMarketCap(marketCap) {
    var list = $(".marketCap");
    fetch(marketCapData)
      .then( res => {
        res.json().then( data => {
          let marketCapCoin = data[marketCap].market_cap;
          // console.log(marketCapCoin);
          $("<p/>").text(marketCapCoin).appendTo(list);
          return marketCapCoin;
        })
      })
  }


  for (var index = 0; index <= 99; index++) {
      getMarketCapPrice(index);
  }

  function getMarketCapPrice(price) {
    var list = $(".price");
    fetch(marketCapData)
      .then( res => {
        res.json().then( data => {
          let priceCoin = data[price].current_price;
          // console.log(priceCoin);
          $("<p/>").text(priceCoin).appendTo(list);
          return priceCoin;
        })
      })
  }


  for (var index = 0; index <= 99; index++) {
      getMarketCapVolume(index);
  }

  function getMarketCapVolume(volume) {
    var list = $(".volume");
    fetch(marketCapData)
      .then( res => {
        res.json().then( data => {
          let volumeCoin = data[volume].total_volume;
          // console.log(volumeCoin);
          $("<p/>").text(volumeCoin).appendTo(list);
          return volumeCoin;
        })
      })
  }


  for (var index = 0; index <= 99; index++) {
      getMarketCapSupply(index);
  }

  function getMarketCapSupply(supply) {
    var list = $(".circulatingSupply");
    fetch(marketCapData)
      .then( res => {
        res.json().then( data => {
          let circulatingSupplyCoin = data[supply].circulating_supply;
          // console.log(circulatingSupplyCoin);

          function inMillions(num) {
            let million = 1000000;
            return (num/million).toFixed(2);
          }

          let supplyInMillions = inMillions(circulatingSupplyCoin);

          $("<p/>").text(supplyInMillions + " million").appendTo(list);
          return circulatingSupplyCoin;
        })
      })
  }


  for (var index = 0; index <= 99; index++) {
      getMarketCapPriceChange(index);
  }

  function getMarketCapPriceChange(change) {
    var list = $(".change");
    fetch(marketCapData)
      .then( res => {
        res.json().then( data => {
          let changeCoin = data[change].price_change_percentage_24h;
          // console.log(changeCoin);

          function changeFix(num) {
            return (num).toFixed(2);
          }

          let changeFixToTwo = changeFix(changeCoin);

          if (changeCoin >= 0) {
            $("<p/>").text("+" + changeFixToTwo + "%").appendTo(list);
            $("<p/>").css("color","green")
          } else {
            $("<p/>").text(changeFixToTwo + "%").appendTo(list);
            $("<p/>").css("color","red")
          }

          return changeCoin;
        })
      })
  }

/*
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
*/

});
