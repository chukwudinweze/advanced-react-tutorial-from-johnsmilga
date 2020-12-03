import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = e => {
    event.preventDefault();
    if (firstName && email) {
      let person = { id: new Date().getTime().toString(), firstName, email };
      setPeople(people => {
        return [...people, person];
      });
      console.log(person);
      setFirstName("");
      setEmail("");
    }
  };
  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Firstname: </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button className="btn">submit</button>
        </div>
      </form>
      {people.map((per, index) => {
        const { firstName, email, id } = per;
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <h5>{email}</h5>
          </div>
        );
      })}
    </article>
  );
};

export default ControlledInputs;
