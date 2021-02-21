import React, { useState } from "react";
import Header from "../partials/Header";
import Form from "../partials/Form";
import Showcase from "../partials/Showcase";
import Footer from "../partials/Footer";

function LandingPage({ setAuthStatus, setAuthToken }) {
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
        <Form
          buttonText={buttonText}
          setButtonText={setButtonText}
          setAuthStatus={setAuthStatus}
          setAuthToken={setAuthToken}
        />
      ) : null}
      <Showcase />
      <Footer />
    </div>
  );
}

export default LandingPage;
