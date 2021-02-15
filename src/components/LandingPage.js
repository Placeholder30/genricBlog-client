import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Showcase from "./Showcase";
import Footer from "./Footer";

function LandingPage({ setAuthStatus }) {
  const [showForm, setShowForm] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <Header toggleForm={toggleForm} setButtonText={setButtonText} />
      {showForm ? (
        <Form buttonText={buttonText} setAuthStatus={setAuthStatus} />
      ) : null}
      <Showcase />
      <Footer />
    </div>
  );
}

export default LandingPage;
