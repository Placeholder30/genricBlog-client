import React, { useState } from "react";
import Header from "../partials/Header";
import Form from "../partials/Form";
import Showcase from "../partials/Showcase";
import Footer from "../partials/Footer";

function LandingPage({ setAuthStatus }) {
  const [showForm, setShowForm] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const toggleForm = () => {
    setShowForm(true);
  };
  return (
    <div>
      <Header
        toggleForm={toggleForm}
        setButtonText={setButtonText}
        setAuthStatus={setAuthStatus}
      />
      {showForm ? (
        <Form buttonText={buttonText} setAuthStatus={setAuthStatus} />
      ) : null}
      <Showcase />
      <Footer />
    </div>
  );
}

export default LandingPage;