import axios from "axios";
const api_key1 = `apiKey1`;
export async function marketcapApi(company_name) {
  const api1 = `
  https://financialmodelingprep.com/api/v3/historical-market-capitalization/${company_name}?limit=1000&apikey=${api_key1}`;
  const response = await axios.get(api1);
  const historicalData1 = response.data;
  return historicalData1
    .slice(0, 90)
    .map((cap) => cap.marketCap)
    .reverse();
}

export async function openPriceApi(company_name) {
  const apiUrl = `https://financialmodelingprep.com/api/v3/historical-price-full/${company_name}?apikey=${api_key1}`;
  const response = await axios.get(apiUrl);
  const openPrices = response.data.historical;
  return openPrices
    .slice(0, 90)
    .map((item) => item.open)
    .reverse();
}
export async function closePriceApi(company_name) {
  const apiUrl = `https://financialmodelingprep.com/api/v3/historical-price-full/${company_name}?apikey=${api_key1}`;
  const response = await axios.get(apiUrl);
  const closePrices = response.data.historical;
  return closePrices
    .slice(0, 90)
    .map((item) => item.close)
    .reverse();
}
export async function dividendsApi(company_name) {
  const apiurl = `https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${company_name}?apikey=${api_key1}`;
  const response = await axios.get(apiurl);
  const dividends = response.data.historical;
  return dividends
    .slice(0, 90)
    .map((item) => item.dividend)
    .reverse();
}
// export async function openPriceApi(company_name) {
//   axios
//     .get(apiUrl)
//     .then((response) => {
//       const historicalData = response.data.historical;
//       // console.log(historicalData);
//       const dates = historicalData
//         .slice(0, 90)
//         .map((item) => item.date)
//         .reverse();
//       const openPrices = historicalData
//         .slice(0, 90)
//         .map((item) => item.open)
//         .reverse();
//       //   console.log(openPrices);
//       // console.log(dates, openPrices);
//       //   setStockData(openPrices);
//       //   setDates(dates);
//       return openPrices;
//     })
//     .catch((error) => {
//       console.error("Error fetching stock data", error);
//       //   setStockData([]);
//     });
// }
