import { useState, useEffect } from "react";

import Cookie from "./Cookie";
import Count from "./Count";
import Restart from "./Restart";

function App() {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("cookieClickedCount") || 0)
  );

  useEffect(() => {
    localStorage.setItem("cookieClickedCount", JSON.stringify(count));
  }, [count]);

  return (
    <div className="container">
      <Cookie count={count} setCount={setCount} />
      <Count count={count} />
      <Restart setCount={setCount} />
    </div>
  );
}

export default App;
