
$(document).ready(function() {

  let BASE_URL = "https://api.coingecko.com/api/v3";
  let MARKET_CAP_DATA = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d";

  let marketCapData = BASE_URL + MARKET_CAP_DATA;

// loop for "index"
  for (var index = 0; index <= 9; index++) {
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


  for (var index = 0; index <= 9; index++) {
      getMarketCapImage(index);
  }

  function getMarketCapImage(image) {
    var list = $(".coin");
    fetch(marketCapData)
      .then( res => {
        res.json().then( data => {
          let coinPic = data[image].image;
          $("<p/>").html(coinPic).appendTo(list).val();
        })
      })
  }

/*
  function createCoinTable(coinData) {
    console.log('creating coin table');
    // clear out any old elements
    $('tr.content-row').remove();
    const coinTable = $('#coinTable');

    // create a table row for each coin in the list
    for (let key in coinData) {
        let coin = coinData[key];
        // console.log(creating table row for: ${coin.name});
        coinTable.append(
            $('<tr class="content-row"></tr>').append(
                $('<td class="text-left"></td>').text(coin.market_cap_rank),
                $('<td class="text-left"></td>').append(
                    $('<div></div>').append(
                        <img src="${coin.image}" width="16" height="16"> ${coin.name}
                    )),
                $('<td ></td>').text(fmt.c0.format(coin.market_cap)),
                $('<td></td>').text(fmt.c.format(coin.current_price)),
                $('<td></td>').text(fmt.c0.format(coin.total_volume)),
                $('<td></td>').text(fmt.n0.format(coin.circulating_supply)),
                $(<td class="${coin.price_change_percentage_24h > 0 ? 'positive-change' : 'negative-change'}"></td>).text(fmt.p2.format(coin.price_change_percentage_24h / 100)),
                $('<td></td>').text(''), // price graph?
            )
        );
    }
}
*/


  for (var index = 0; index <= 9; index++) {
      getMarketCapName(index);
  }

  function getMarketCapName(name) {
    var list = $(".name");
    fetch(marketCapData)
      .then( res => {
        res.json().then( data => {
          let nameCoin = data[name].name;
          $("<p/>").text(nameCoin).appendTo(list);
          return nameCoin;
        })
      })
  }


  for (var index = 0; index <= 9; index++) {
      getMarketCap(index);
  }

  function getMarketCap(marketCap) {
    var list = $(".marketCap");
    fetch(marketCapData)
      .then( res => {
        res.json().then( data => {
          let marketCapCoin = data[marketCap].market_cap;
          let marketCapString = Number(marketCapCoin).toLocaleString();
          // console.log(marketCapCoin);
          $("<p/>").text("$" + marketCapString).appendTo(list);
          return marketCapCoin;
        })
      })
  }


  for (var index = 0; index <= 9; index++) {
      getMarketCapPrice(index);
  }

  function getMarketCapPrice(price) {
    var list = $(".price");
    fetch(marketCapData)
      .then( res => {
        res.json().then( data => {
          let priceCoin = data[price].current_price;
          let priceString = Number(priceCoin).toLocaleString();
          // console.log(priceCoin);
          $("<p/>").text("$" + priceString).appendTo(list);
          return priceCoin;
        })
      })
  }


  for (var index = 0; index <= 9; index++) {
      getMarketCapVolume(index);
  }

  function getMarketCapVolume(volume) {
    var list = $(".volume");
    fetch(marketCapData)
      .then( res => {
        res.json().then( data => {
          let volumeCoin = data[volume].total_volume;
          let volumeString = Number(volumeCoin).toLocaleString();
          // console.log(volumeCoin);
          $("<p/>").text(volumeString).appendTo(list);
          return volumeCoin;
        })
      })
  }


  for (var index = 0; index <= 9; index++) {
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
          let supplyString = Number(supplyInMillions).toLocaleString();

          $("<p/>").text(supplyString + " million").appendTo(list);
          return circulatingSupplyCoin;
        })
      })
  }


  for (var index = 0; index <= 9; index++) {
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
            $("<p/>").text("+" + changeFixToTwo + "%").css("color","green").appendTo(list);
          } else {
            $("<p/>").text(changeFixToTwo + "%").css("color","red").appendTo(list);
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
