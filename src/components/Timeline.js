import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import avatar from "../assets/todd_chavez.jpg";

function Timeline() {
  return (
    <div>
      <Header />
      <h1>Timeline</h1>
      <div className="side-bar">
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Timeline;