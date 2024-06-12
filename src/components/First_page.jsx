import React, { useState, useEffect } from "react";
import "./Firstpage.css";
import axios from "axios";
// import Second_page from "./Second_page";

function First_page({ setCompanyName }) {
  const [inputValue, setInputValue] = useState("");
  const [posts, setPosts] = useState([]);
  const [showOption, setShowOption] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setCompanyName(e.target.value);
  };

  const handleInput = (symbol) => {
    setInputValue(symbol);
    setShowOption(false);
    setCompanyName(symbol);
  };

  useEffect(() => {
    if (inputValue.trim() !== "") {
      axios
        .get(
          `https://financialmodelingprep.com/api/v3/search?query=${inputValue}&apikey=${
            import.meta.env.VITE_apiKey
          }`
        )
        .then((res) => {
          setPosts(res.data);
          setShowOption(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setShowOption(false);
    }
  }, [inputValue]);

  return (
    <div>
      <div className="firstpage">
        <div className="nav">
          <div className="title">
            <h2>Stock Sensei</h2>
            <h2>Stock Sensei</h2>
          </div>
        </div>

        <div className="content">
          <div className="Parent_input">
            <div className="inpu_t">
              <input
                value={inputValue}
                onChange={handleInputChange}
                type="input"
                className="input"
                placeholder="Search Company Symbol "
              ></input>
              <div className="search">
                <button className="butto_n">
                  <span className="material-symbols-outlined">search</span>
                </button>
              </div>
            </div>
          </div>
          {showOption && (
            <div className="main_option">
              {posts.map((post) => (
                <div
                  className="option_1"
                  onClick={() => handleInput(post.symbol)}
                  key={post.symbol}
                >
                  <span className="symbol">{post.symbol}</span>
                  <span className="name">{post.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="middle_div">
          <div className="image">
            <img src="stock_1.png" alt="Stock" />
          </div>

          <div className="main_company">
            <div className="company">
              <button
                className="button"
                onClick={() => handleInput("AAPL")}
                type="button"
              >
                Apple
              </button>
              <button
                className="button"
                type="button"
                onClick={() => handleInput("MSFT")}
              >
                Microsoft
              </button>
              <button
                className="button"
                type="button"
                onClick={() => handleInput("AMZN")}
              >
                Amazon
              </button>
            </div>
            <div className="compa">
              <button
                className="button"
                type="button"
                onClick={() => handleInput("GOOGL")}
              >
                Alphabet
              </button>
              <button
                className="button"
                type="button"
                onClick={() => handleInput("TSLA")}
              >
                Tesla
              </button>
              <button
                className="button"
                type="button"
                onClick={() => handleInput("NVDA")}
              >
                Nvidia
              </button>
            </div>
            <div className="compan">
              <button
                className="button"
                type="button"
                onClick={() => handleInput("META")}
              >
                Meta
              </button>
              <button
                className="button"
                type="button"
                onClick={() => handleInput("BRK.A")}
              >
                Berkshire Hathaway
              </button>
              <button
                className="button"
                type="button"
                onClick={() => handleInput("PG")}
              >
                Procter & Gamble
              </button>
            </div>
            <div className="comp">
              <button
                className="button"
                type="button"
                onClick={() => handleInput("V")}
              >
                Visa
              </button>
              <button
                className="button"
                type="button"
                onClick={() => handleInput("JPM")}
              >
                JPMorgan Chase
              </button>
              <button
                className="button"
                type="button"
                onClick={() => handleInput("WMT")}
              >
                Walmart
              </button>
            </div>
          </div>
        </div>
        <div className="sentence p1">
          Stay informed and ahead of the curve by researching these companies.
        </div>
        <div className="sentence p2">
          Stay informed and ahead of the curve by researching these companies.
        </div>
        <div className="sentence p3">
          Stay informed and ahead of the curve by researching these companies.
        </div>
        <div className="container">
          <div className="text">
            Empower your financial future with the latest stock data.
          </div>
        </div>

        <footer className="footer">
          <p>Empowering investors with market insights</p>
        </footer>
      </div>
      {/* {company_name && <Second_page company_name={company_name} />} */}
    </div>
  );
}

export default First_page;
