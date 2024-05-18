import { useState } from "react";
import "./App.css";
import Search from "./components/search.jsx";
// import StockChart from "./components/graph.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <Search />
      </div>
    </>
  );
}

export default App;
