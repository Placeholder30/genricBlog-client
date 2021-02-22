import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const axios = require("axios").default;

function Form({ buttonText, setButtonText, setAuthStatus, setAuthToken }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);
  const history = useHistory();

  const formData = firstName
    ? { email, firstName, lastName, password }
    : { email, password };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3900/api/${buttonText}`.toLowerCase(),
        formData
      );

      if (res.status === 200) {
        setAuthStatus(true);
        setAuthToken(res.data.authToken);
        sessionStorage.setItem("authToken", res.data.authToken);
        sessionStorage.setItem("authStatus", "true");

        history.push("/timeline");
      } else {
        setButtonText("not loading");
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
              placeholder="Jane"
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </label>
          <label>
            Lastname
            <input
              placeholder="Doe"
              type="text"
              name="lastName"
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
          placeholder="you@example.com"
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
          placeholder="************"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>

      <button
        disabled={active}
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setActive(!active);
          setButtonText("Loading...");
          handleSubmit();
        }}
      >
        {buttonText}
      </button>
    </form>
  );
}

export default Form;
