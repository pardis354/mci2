const axios = require("axios");

function getHourlyExchangeData() {
    return axios.get("https://min-api.cryptocompare.com/data/exchange/histohour?tsym=BTC&limit=10");
}

function getHourlyPairData() {
    return axios.get("https://min-api.cryptocompare.com/data/v2/histohour?fsym=BTC&tsym=USD&limit=10");
}

export { getHourlyExchangeData,getHourlyPairData };

