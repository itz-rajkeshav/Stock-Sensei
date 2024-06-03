import React from "react";
import "./Graph_button.css";

function Graph_button({ setGraph }) {
  function open_price() {
    // console.log("open price");
    setGraph("opening price");
  }
  function market_cap() {
    // console.log("market cap");
    setGraph("market capital");
  }
  function close_price() {
    // console.log("close price");
    setGraph("closing price");
  }
  function share_float() {
    // console.log("share float");
    setGraph("share float");
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
        <button className="  graph_button" onClick={share_float}>
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          Share Float
        </button>
      </div>
    </div>
  );
}

export default Graph_button;
