import React, { useState } from "react";

import "./App.scss";
import HomePage from "./pages/HomePage";
import EXReactMemo from "./components/EXReactMemo";

function App() {
  const [count, setCount] = useState(0);

  function handleCountIncress() {
    setCount(count + 1);
  }

  return (
    <div className="app">
      <button onClick={handleCountIncress}>Incress</button>
      <h1>{count}</h1>
      <EXReactMemo name="Tran Duc Huy"></EXReactMemo>
      <h1>Huy React Hook</h1>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
