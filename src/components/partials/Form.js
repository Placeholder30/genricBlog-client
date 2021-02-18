import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const axios = require("axios").default;

function Form({ buttonText, setAuthStatus }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);

  const formData = firstName
    ? { email, firstName, lastName, password }
    : { email, password };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `http://localhost:3900/api/${buttonText}`.toLowerCase(),
        formData
      );
      if (res.status === 200) {
        setAuthStatus(true);
        setLoading(false);
        history.push("/timeline");
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
          type="text"
          placeholder="you@example.com"
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
          autoComplete="off"
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
          handleSubmit();
        }}
      >
        {!loading ? buttonText : "Loading..."}
      </button>
    </form>
  );
}

export default Form;
