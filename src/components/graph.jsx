import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Search from "./search.jsx";
import "./graph.css";

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

class StockChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockData: [],
      dates: [],
    };
  }

  componentDidMount() {
    this.fetchStockData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.CompanyName !== this.props.CompanyName) {
      this.fetchStockData();
    }
  }
  fetchStockData() {
    const apiKey = "5SIHDBdVQDRB0bD9PoH5uHGJMntBzADk";
    console.log(this.props.CompanyName);
    const symbol = this.props.CompanyName;
    const apiUrl = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${apiKey}`;
    axios
      .get(apiUrl)
      .then((response) => {
        const historicalData = response.data.historical;
        const dates = historicalData
          .slice(0, 31)
          .map((item) => item.date)
          .reverse();
        const openPrices = historicalData
          .slice(0, 31)
          .map((item) => item.open)
          .reverse();
        console.log(dates);
        this.setState({ stockData: openPrices, dates }, () => {
          this.forceUpdate();
        });
        console.log(historicalData);
      })
      .catch((error) => {
        console.error("Error fetching stock data:", error);
      });
  }

  render() {
    return (
      <div
        className="seperation"
        style={{
          // flex: "1",
          marginTop: "3.7rem",
          width: "25rem",
          height: "28rem",
        }}
      >
        <div
          className="graph"
          style={{
            width: "360px",
            height: "270px",
          }}
        >
          <Line
            data={{
              labels: this.state.dates,
              datasets: [
                {
                  label: `${this.props.CompanyName} Open Price of Last 1 Months`,
                  data: this.state.stockData,
                  fill: false,
                  borderColor: "rgba(75, 192, 192, 1)",
                  backgroundColor: "rgba(0, 128, 0, 0.2)",
                  borderWidth: 2,
                  pointBorderColor: "rgba(75, 192, 192, 1)",
                  pointBackgroundColor: "rgba(75, 192, 192, 1)",
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
                  text: `${this.props.CompanyName} Open Price of Last 1 Months`,
                  font: {
                    size: 20,
                    family: "Arial",
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
                    font: {
                      size: 16,
                    },
                  },
                  ticks: {
                    font: {
                      size: 12,
                    },
                  },
                  grid: {
                    color: "rgba(0, 0, 0, 0.1)",
                    borderColor: "rgba(0, 0, 0, 0.1)",
                    borderWidth: 1,
                    drawTicks: false,
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Open Price",
                    font: {
                      size: 16,
                    },
                  },
                  ticks: {
                    font: {
                      size: 12,
                    },
                    callback: function (value, index, values) {
                      return "$" + value.toFixed(2);
                    },
                  },
                  grid: {
                    color: "rgba(0, 0, 0, 0.1)",
                    borderColor: "rgba(0, 0, 0, 0.1)",
                    borderWidth: 1,
                    drawTicks: false,
                  },
                },
              },
            }}
          />
        </div>
        <div className="border"></div>
      </div>
    );
  }
}

export default StockChart;
