import { useState } from "react";
import "./App.css";
import Firstpage from "./components/Firstpage.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <Firstpage></Firstpage>
      </div>
    </>
  );
}

export default App;
