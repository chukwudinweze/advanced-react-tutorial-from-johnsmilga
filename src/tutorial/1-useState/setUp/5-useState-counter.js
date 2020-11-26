import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <h3>{value}</h3>
      <button className="btn" onClick={() => setValue(value  1)}>
        increase
      </button>
      <button className="btn" onClick={() => setValue(value + 1)}>
        decrease
      </button>
      <button className="btn" onClick={() => setValue(0)}>
        reset
      </button>
    </>
  );
};

export default UseStateCounter;
