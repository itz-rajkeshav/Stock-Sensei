import React, { useState } from "react";
import First_page from "./components/First_page.jsx";
import Second_page from "./components/Second_page.jsx";
import Graph_button from "./components/Graph_button.jsx";
import "./App.css";
function App() {
  const [company_name, setCompany_name] = useState("");
  const [graph, setgraph] = useState("Opening price");

  return (
    <>
      <div className="main">
        <First_page setCompanyName={setCompany_name}></First_page>
        <Second_page company_name={company_name} graph={graph}></Second_page>
        <Graph_button setGraph={setgraph}></Graph_button>
      </div>
    </>
  );
}

export default App;
