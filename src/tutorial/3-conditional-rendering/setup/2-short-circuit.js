import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [Error, setError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <div>
      <h1> {text || "John Doe"}</h1>
      <button className="btn" onClick={() => setError(!Error)}>
        toggle Error
      </button>
      {Error && <h1>John Dore</h1>}
    </div>
  );
};

export default ShortCircuit;
