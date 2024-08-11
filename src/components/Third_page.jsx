import React, { useState, useEffect } from "react";
import "./Third_page.css";
import axios from "axios";
function Third_page({ company_name }) {
  const [dayHigh, setdayHigh] = useState([]);
  const [dayLow, setdayLow] = useState([]);
  const [Marketcap, setMarketcap] = useState([]);
  const [volume, setvolume] = useState([]);
  const [openPrice, setopenPrice] = useState([]);
  const [ROE, setROE] = useState([]);
  const [PEratio, setPEratio] = useState([]);
  const [PPS, setPPS] = useState([]);
  const [ICR, setICR] = useState([]);
  const [beta, setbeta] = useState([]);
  const [close, setclose] = useState([]);
  const api_key1 = import.meta.env.VITE_apiKey1;
  // console.log(company_name);
  const API = `https://financialmodelingprep.com/api/v3/quote/${company_name}?apikey=${api_key1}`;
  // console.log(API);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        // console.log(data);
        setdayHigh(data[0].dayHigh);
        setdayLow(data[0].dayLow);
        setMarketcap(formatNumber(data[0].marketCap), 3);
        setvolume(data[0].volume);
        setopenPrice(data[0].open);
        setclose(data[0].previousClose);
        // console.log(dayHigh);
      } catch (error) {
        console.error("Error fetching stock data", error);
      }
    };
    if (company_name) {
      fetchData();
    }
  }, [company_name, API]);
  //api1
  const API1 = `https://financialmodelingprep.com/api/v3/ratios-ttm/${company_name}?apikey=${api_key1}`;
  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response1 = await fetch(API1);
        const data1 = await response1.json();
        // console.log(data1);
        setROE(data1[0].returnOnEquityTTM);
        setPEratio(data1[0].priceEarningsRatioTTM);
        setICR(data1[0].interestCoverageTTM);
        setPPS(data1[0].priceToSalesRatioTTM);
      } catch (error) {
        console.error("Error fetching stock data", error);
      }
    };
    if (company_name) {
      fetchData1();
    }
  }, [company_name, API1]);
  // api2
  const API2 = `https://financialmodelingprep.com/api/v3/profile/${company_name}?apikey=${api_key1}`;
  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response2 = await fetch(API2);
        const data2 = await response2.json();
        // console.log(data2);
        setbeta(data2[0].beta);
      } catch (error) {
        console.error("Error fetching stock data", error);
      }
    };
    if (company_name) {
      fetchData2();
    }
  }, [company_name, API2]);
  // api3
  const API3 = `https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${company_name}?apikey=${api_key1}`;
  useEffect(() => {
    const fetchData3 = async () => {
      try {
        const response3 = await fetch(API3);
        const data3 = await response3.json();
        // console.log(data3);
        // setbeta(data3[0].beta);
      } catch (error) {
        console.error("Error fetching stock data", error);
      }
    };
    if (company_name) {
      fetchData3();
    }
  }, [company_name, API3]);
  const formatNumber = (number, decimalPlaces = 3) => {
    const units = ["M", "B", "T"];
    let formattedNumber = number;
    let unitIndex = 0;

    while (formattedNumber > 1000 && unitIndex < units.length) {
      formattedNumber /= 1000;
      unitIndex++;
    }
    return (
      formattedNumber.toFixed(decimalPlaces) +
      (unitIndex ? units[unitIndex - 1] : "")
    );
  };
  return (
    <div>
      <div className="third_page">
        <div className="detail">
          <h3>Discover more stock information about your company :</h3>
        </div>
        <div className="box">
          <div className="mainOne">
            <div className="leftOne">
              <div className="one">
                <img src="stock_2.png" className="logo"></img>
                <span className="detailName">Day high :</span>
                <span className="detailValue">{dayHigh}</span>
              </div>
              <div className="one">
                <img className="logo" src="stock_2.png"></img>
                <span className="detailName">Day low:</span>
                <span className="detailValue">{dayLow}</span>
              </div>
              <div className="one">
                <img className="logo" src="stock_2.png"></img>
                <span className="detailName">Return per Equity:</span>
                <span className="detailValue">{ROE}</span>
              </div>
              <div className="one">
                <img className="logo" src="stock_2.png"></img>
                <span className="detailName">volume:</span>
                <span className="detailValue">{volume}</span>
              </div>
            </div>
            <div className="middleOne">
              <div className="one">
                <img className="logo" src="stock_2.png"></img>
                <span className="detailName">Close pr:</span>
                <span className="detailValue">{close}</span>
              </div>
              <div className="one">
                <img className="logo" src="stock_2.png"></img>
                <span className="detailName">P/E Ratio:</span>
                <span className="detailValue">{PEratio}</span>
              </div>
              <div className="one">
                <img className="logo" src="stock_2.png"></img>
                <span className="detailName">Price per Sale:</span>
                <span className="detailValue">{PPS}</span>
              </div>
              <div className="one">
                <img className="logo" src="stock_2.png"></img>
                <span className="detailName">Dividends:</span>
                <span className="detailValue">7342</span>
              </div>
            </div>
            <div className="rightOne">
              <div className="one">
                <img className="logo" src="stock_2.png"></img>
                <span className="detailName">Open pr:</span>
                <span className="detailValue">{openPrice}</span>
              </div>
              <div className="one">
                <img className="logo" src="stock_2.png"></img>
                <span className="detailName">Marketcap:</span>
                <span className="detailValue">{Marketcap}</span>
              </div>
              <div className="one">
                <img className="logo" src="stock_2.png"></img>
                <span className="detailName">Intrest Coverage ratio:</span>
                <span className="detailValue">{ICR}</span>
              </div>
              <div className="one">
                <img className="logo" src="stock_2.png"></img>
                <span className="detailName">beta:</span>
                <span className="detailValue">{beta}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Third_page;
