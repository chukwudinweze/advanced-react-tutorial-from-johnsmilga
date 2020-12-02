import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => setShow(!show)}
      >
        toggle component
      </button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <div>
      <h1>Window</h1>
      <h3>size:{size}</h3>
    </div>
  );
};

export default ShowHide;
