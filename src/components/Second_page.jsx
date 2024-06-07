import React, { useState, useEffect } from "react";
import "./secondpage.css";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as Chartjs,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
  CategoryScale,
  LineController,
} from "chart.js";

Chartjs.register(
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale,
  CategoryScale,
  LineController
);

function Second_page({ company_name, graph, set_stockData, dataType }) {
  const [dates, setDates] = useState([]);
  useEffect(() => {
    fetchStockData(company_name);
  }, [company_name]);
  const fetchStockData = (company_name) => {
    const apiKey = "5SIHDBdVQDRB0bD9PoH5uHGJMntBzADk";
    // console.log(company_name);
    const apiUrl = `https://financialmodelingprep.com/api/v3/historical-price-full/${company_name}?apikey=${apiKey}`;
    axios
      .get(apiUrl)
      .then((response) => {
        const historicalData = response.data.historical;
        // console.log(historicalData);
        const dates = historicalData
          .slice(0, 90)
          .map((item) => item.date)
          .reverse();
        setDates(dates);
      })
      .catch((error) => {
        console.error("Error fetching stock data", error);
      });
  };
  console.log(dataType);
  const MarketCapTicks = (value) => {
    if (value >= 1e9) return (value / 1e9).toFixed(2) + "B";
    if (value >= 1e6) return (value / 1e6).toFixed(2) + "M";
    if (value >= 1e3) return (value / 1e3).toFixed(2) + "K";
    return value;
  };
  const formatTicks = (value) => {
    switch (dataType) {
      case "_market_cap":
        return MarketCapTicks(value);
      case "open_price":
        return "$" + value.toFixed(2);
      case "close_price":
        return "$" + value.toFixed(2);
      case "dividend":
        return value;
      default:
        return value;
    }
  };
  return (
    <div>
      <div className="secondpage">
        <div
          className="graph"
          style={{
            width: "730px",
            height: "500px",
            position: "absolute",
            transform: "translate(-50, -50)",
            top: " 125%",
            left: "9%",
          }}
        >
          <Line
            data={{
              labels: dates,
              datasets: [
                {
                  label: `${company_name} `,
                  // fontfamily: "Cinzel, serif",
                  // color: "#1c2833",
                  data: set_stockData,
                  fill: false,
                  borderColor: "#1f7a8c",
                  backgroundColor: "#90e0ef",
                  borderWidth: 2,
                  // pointBorderColor: "rgba(75, 192, 192, 1)",
                  // pointBackgroundColor: "rgba(75, 192, 192, 1)",
                  pointHoverRadius: 6,
                  pointRadius: 4,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: `${company_name} Open Price of Last 3 Month`,
                  font: {
                    size: 20,
                    family: "Cinzel, serif",
                    weight: "bold",
                  },
                  padding: {
                    top: 20,
                    bottom: 30,
                  },
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Date",
                    color: "#1c2833",
                    font: {
                      size: 18,
                      family: "Cinzel, serif",
                    },
                  },
                  ticks: {
                    color: "#1c2833",
                    font: {
                      family: "Cinzel, serif",
                      size: 12,
                    },
                  },
                  grid: {
                    color: "rgb(28, 40, 51,0.4)",
                    borderColor: "rgba(0, 0, 0, 0.1)",
                    borderWidth: 1,
                    drawTicks: false,
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: `${graph}`,
                    color: "#1c2833",
                    font: {
                      size: 18,
                      family: "Cinzel, serif",
                    },
                  },
                  ticks: {
                    color: "#1c2833",
                    font: {
                      size: 13,
                      family: "Cinzel, serif",
                    },
                    callback: function (value) {
                      return formatTicks(value);
                    },
                  },
                  grid: {
                    color: "rgb(28, 40, 51,0.4)",
                    borderColor: "rgba(0, 0, 0, 0.1)",
                    borderWidth: 1,
                    drawTicks: false,
                  },
                },
              },
            }}
          />
        </div>
        <div className="txt" id="txt">
          <b>G</b>
          <b>R</b>
          <b>A</b>
          <b>P</b>
          <b>H</b>
        </div>
        <div className="chart_intro">
          <p>
            {` Dive into the ebb and flow of ${graph} over the last 3 month`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Second_page;
