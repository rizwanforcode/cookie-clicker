import { useState } from "react";
import cookiePic from "./cookiePic.png";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <img
        src={cookiePic}
        alt="cookie"
        onClick={() => {
          setCount(count + 1);
        }}
      />
      <p className="count">{count}</p>
    </div>
  );
}

export default App;
