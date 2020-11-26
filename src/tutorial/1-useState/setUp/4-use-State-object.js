import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "chukwudi",
    age: 24,
    message: "random message"
  });

  const { name, age, message } = person;
  const messageHandler = () => {
    setPerson({ ...person, message: "hello world" });
  };

  return (
    <>
      <div>
        <h4>{name}</h4>
        <h4>{age}</h4>
        <h4>{message}</h4>
      </div>
      <button className="btn" onClick={messageHandler}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
