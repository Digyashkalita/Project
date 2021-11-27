import React from "react";

const SignUp = () => {
  return (
    <form className="form">
      <label className="label" for="fname">
        First name:
      </label>
      <br />
      <input className="input" type="text" id="fname" name="fname" />
      <br />
      <label className="label" for="lname">
        Last name:
      </label>
      <br />
      <input className="input" type="text" id="lname" name="lname" />
      <br />
      <label className="label" for="email">
        Email:
      </label>
      <br />
      <input className="input" type="text" id="email" name="email" />
      <br />
      <label className="label" for="password">
        Password:
      </label>
      <br />
      <input className="input" type="password" id="password" name="password" />
      <br />
      <br />
      <input className="btn" type="submit" value="Sign-Up" />
    </form>
  );
};

export default SignUp;
