import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const axios = require("axios").default;

function Form({ buttonText }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async () => {
    history.push("/timeline");
    console.log(email, password);
    try {
      const apiCall = await axios.post("http://localhost:5000/api", {
        email: email,
        password: password,
      });
      console.log(apiCall);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form" method="POST">
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
