import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Showcase from "./Showcase";
import Footer from "./Footer";

function LandingPage() {
  const [showForm, setShowForm] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <Header toggleForm={toggleForm} setButtonText={setButtonText} />
      {showForm ? <Form buttonText={buttonText} /> : null}
      <Showcase />
      <Footer />
    </div>
  );
}

export default LandingPage;
