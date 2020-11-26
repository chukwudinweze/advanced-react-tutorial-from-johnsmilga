import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("hello word");
  let handleClick = () => {
    if (text === "hello word") {
      setText("learning never stops");
    } else {
      setText("hello world");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
