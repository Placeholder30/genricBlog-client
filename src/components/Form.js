import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const axios = require("axios").default;

function Form({ buttonText, setAuthStatus }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const formData =
    firstName && lastName
      ? { email, firstName, lastName, password }
      : { email, password };

  const handleSubmit = async () => {
    console.log(email, password);
    history.push("/timeline");
    try {
      const res = await axios.post(
        `http://localhost:3900/api/${buttonText}`.toLowerCase(),
        formData
      );
      if (res.status === 200) {
        setAuthStatus(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form" method="POST">
      {buttonText === "Register" ? (
        <>
          <label>
            Firstname
            <input
              type="text"
              name="email"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </label>
          <label>
            Lastname
            <input
              type="text"
              name="email"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </label>
        </>
      ) : null}
      <label>
        Email
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {buttonText}
      </button>
    </form>
  );
}

export default Form;
