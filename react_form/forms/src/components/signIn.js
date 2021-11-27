import React, { useState } from "react";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && password) {
      const person = {
        id: new Date().getTime().toLocaleString(),
        userName,
        password,
      };
      setPeople((people) => {
        return [...people, person];
      });
      setUserName("");
      setPassword("");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="userName">
          UserName :{" "}
        </label>
        <input
          className="input"
          type="text"
          id="userName"
          name="userName"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label className="label" htmlFor="password">
          Password :{" "}
        </label>
        <input
          className="input"
          type="password"
          name="password"
          value={password}
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input className="btn" type="submit" value="Sign-In" />
      </form>
      {people.map((person, index) => {
        const { id, userName, password } = person;
        return (
          <div className="item" key={id}>
            <h4>{userName}</h4>
            <p>{password}</p>
          </div>
        );
      })}
    </>
  );
};

export default SignIn;
