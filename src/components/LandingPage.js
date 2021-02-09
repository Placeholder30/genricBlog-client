import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Showcase from "./Showcase";
import Footer from "./Footer";

function LandingPage() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(true);
  };
  return (
    <div>
      <Header toggleForm={toggleForm} />
      {showForm ? <Form /> : null}
      <Showcase />
      <Footer />
    </div>
  );
}

export default LandingPage;
