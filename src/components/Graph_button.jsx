import React, { useEffect } from "react";
import "./Graph_button.css";
import {
  closePriceApi,
  dividendsApi,
  marketcapApi,
  openPriceApi,
} from "../services/stockService";
function Graph_button({ setGraph, company_name, stock, data }) {
  async function open_price() {
    const open_price = await openPriceApi(company_name);
    setGraph("opening price");
    stock(open_price);
    data("open_price");
  }
  async function market_cap() {
    const _market_cap = await marketcapApi(company_name);
    setGraph("market capital");
    stock(_market_cap);
    data("_market_cap");
  }
  async function close_price() {
    const close_price = await closePriceApi(company_name);
    setGraph("closing price");
    stock(close_price);
    data("close_price");
  }
  async function dividends() {
    const dividend = await dividendsApi(company_name);
    setGraph("Dividends");
    stock(dividend);
    data("dividend");
  }
  return (
    <div>
      <div className="button_1">
        <button className=" graph_button" onClick={open_price}>
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          Open Price
        </button>
        <button className="  graph_button  " onClick={market_cap}>
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          Market Cap
        </button>
      </div>
      <div className="button_2">
        <button className="  graph_button " onClick={close_price}>
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          Close Price
        </button>
        <button className="  graph_button" onClick={dividends}>
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          Dividends
        </button>
      </div>
    </div>
  );
}

export default Graph_button;
