import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <Header toggleForm={toggleForm} />
      {showForm ? <Form /> : ""}
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
