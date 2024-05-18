import React, { useEffect, useState } from "react";
import "./page.css";
import StockChart from "./graph.jsx";
import Detail from "./Detail.jsx";
import axios from "axios";
function Search() {
  const [company_name, setcompany_name] = useState("");
  const [posts, setPosts] = useState([]);
  const [show_option, setshow_option] = useState(false);
  const handleCompany_name = (e) => {
    setcompany_name(e.target.value);
    // console.log(company_name);
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
  function handle_input(post) {
    setcompany_name(post.symbol);
    setshow_option(false);
  }
  return (
    <div>
      <div>
        <div className="main">
          <h1>
            Stock
            <span> Sensei</span>
          </h1>
          <div className="border-div">
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
                  <button className="button">
                    <span className="material-symbols-outlined">search</span>
                  </button>
                </div>
              </div>
              {show_option && (
                <div className="main_option">
                  {posts.map((post) => {
                    return (
                      <div
                        className="option_1 "
                        onClick={() => handle_input(post)}
                      >
                        <span className="symbol">{post.symbol}</span>
                        <span className="name">{post.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <StockChart CompanyName={company_name} />
            <Detail CompanyName={company_name} />
          </div>
        </div>
      </div>
      {/* {console.log(company_name)} */}
    </div>
  );
}
export default Search;
