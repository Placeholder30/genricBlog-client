import React from "react";
import Sidebar from "../partials/Sidebar";

function CreatePost({ authToken }) {
  return (
    <div>
      <h1>Create a post!</h1>
      <div className="flex-container">
        <Sidebar authToken={authToken} />
        <div>
          <input type="text" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
