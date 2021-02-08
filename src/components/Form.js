import React from "react";

function Form() {
  return (
    <form action="" className="form">
      <label>
        Username
        <input type="text" name="username" />
      </label>
      <label>
        Email
        <input type="text" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
    </form>
  );
}

export default Form;
