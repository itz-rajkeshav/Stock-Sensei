import { React, useState, useEffect } from "react";
import "./Firstpage.css";
import axios from "axios";
function Firstpage() {
  const [company_name, setcompany_name] = useState("");
  const [posts, setPosts] = useState([]);
  const [show_option, setshow_option] = useState(false);
  const handleCompany_name = (e) => {
    setcompany_name(e.target.value);
    // console.log(company_name);
  };
  const handle_input = (symbol) => {
    setcompany_name(symbol);
    setshow_option(false);
  };
  useEffect(() => {
    if (company_name.trim() !== "") {
      axios
        .get(
          `https://financialmodelingprep.com/api/v3/search?query=${company_name}&apikey=Ics7Y2PEBKeY6hzc1OaM99DeFPSmpmZb`
        )
        .then((res) => {
          console.log(res);
          setPosts(res.data);
          setshow_option(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setshow_option(false);
    }
  }, [company_name]);
  // function handle_name(post) {
  //   setcompany_name(post.symbol);
  //   setshow_option(false);
  // }

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
                value={company_name}
                onChange={handleCompany_name}
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
          {show_option && (
            <div className="main_option">
              {posts.map((post) => {
                return (
                  <div
                    className="option_1 "
                    onClick={() => handle_input(post.symbol)}
                  >
                    <span className="symbol">{post.symbol}</span>
                    <span className="name">{post.name}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="image">
          <img src="stock_1.png" width="692px" height="452px"></img>
        </div>
        <div className="container">
          <div className="text">
            Empower your financial future with the latest stock data.
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
        <div className="main_company">
          <div className="company">
            <button
              className="button"
              onClick={() => handle_input("AAPL")}
              type="button"
            >
              Apple
            </button>
            <button
              className="button"
              type="button"
              onClick={() => handle_input("MSFT")}
            >
              Microsoft
            </button>
            <button
              className="button"
              type="button"
              onClick={() => handle_input("AMZN")}
            >
              Amazon
            </button>
          </div>
          <div className="compa">
            <button
              className="button"
              type="button"
              onClick={() => handle_input("GOOGL")}
            >
              Alphabet
            </button>
            <button
              className="button"
              type="button"
              onClick={() => handle_input("TSLA")}
            >
              Tesla
            </button>
            <button
              className="button"
              type="button"
              onClick={() => handle_input("NVDA")}
            >
              Nvidia
            </button>
          </div>
          <div className="compan">
            <button
              className="button"
              type="button"
              onClick={() => handle_input("META")}
            >
              Meta
            </button>
            <button
              className="button"
              type="button"
              onClick={() => handle_input("BRK.A")}
            >
              Berkshire Hathaway
            </button>
            <button
              className="button"
              type="button"
              onClick={() => handle_input("PG")}
            >
              Procter & Gamble
            </button>
          </div>
          <div className="comp">
            <button
              className="button"
              type="button"
              onClick={() => handle_input("V")}
            >
              Visa
            </button>
            <button
              className="button"
              type="button"
              onClick={() => handle_input("JPM")}
            >
              JPMorgan Chase
            </button>
            <button
              className="button"
              type="button"
              onClick={() => handle_input("WMT")}
            >
              Walmart
            </button>
          </div>
        </div>
        <footer className="footer">
          <p>Empowering investors with market insights</p>
        </footer>
      </div>
    </div>
  );
}

export default Firstpage;
