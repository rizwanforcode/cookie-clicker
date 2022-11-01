import { useState } from "react";
import cookiePic from "./cookiePic.png";

function App() {
  const count = useState(0);
  return (
    <div className="container">
      <img src={cookiePic} alt="cookie" />
      <p className="count">{count}</p>
    </div>
  );
}

export default App;
