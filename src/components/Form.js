import React, { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form action="" className="form">
      <label>
        Username
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </label>
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

      <Link to="/timeline">
        <button type="submit">Submit</button>
      </Link>
    </form>
  );
}

export default Form;
