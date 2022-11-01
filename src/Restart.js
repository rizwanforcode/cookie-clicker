import React from "react";

const Restart = ({ setCount }) => {
  return (
    <button
      onClick={() => {
        setCount(0);
      }}
    >
      &#8634;
    </button>
  );
};

export default Restart;
