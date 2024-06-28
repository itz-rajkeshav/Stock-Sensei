import React, { useState } from "react";
import First_page from "./components/First_page.jsx";
import Second_page from "./components/Second_page.jsx";
import Third_page from "./components/Third_page.jsx";
import Graph_button from "./components/Graph_button.jsx";
import "./App.css";
// require("dotenv").config();
function App() {
  const [company_name, setCompany_name] = useState("AAPL");
  const [graph, setgraph] = useState("Opening price");
  const [set_stockData, setset_stockData] = useState("");
  const [dataType, setdataType] = useState("");
  // console.log(import.meta.env);
  return (
    <>
      <div className="main">
        <First_page setCompanyName={setCompany_name}></First_page>
        <Second_page
          company_name={company_name}
          graph={graph}
          set_stockData={set_stockData}
          dataType={dataType}
        ></Second_page>
        <Graph_button
          setGraph={setgraph}
          company_name={company_name}
          stock={setset_stockData}
          data={setdataType}
        ></Graph_button>
        <Third_page company_name={company_name}></Third_page>
      </div>
    </>
  );
}

export default App;
