import { useState } from "react";

import Cookie from "./Cookie";
import Count from "./Count";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <Cookie count={count} setCount={setCount} />
      <Count count={count} />
    </div>
  );
}

export default App;
