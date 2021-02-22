/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import axios from "axios";
import avatar from "../assets/todd_chavez.jpg";
import { useHistory } from "react-router-dom";

function Sidebar({ authToken }) {
  const history = useHistory();
  return (
    <div className="side-bar">
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>

      <div className=" firstname">Firstname</div>
      <div
        className="item"
        onClick={async () => {
          const res = await axios.get("http://localhost:3900/api/createpost", {
            headers: {
              token: authToken,
            },
          });

          res.status === 200 ? history.push("/createpost") : history.push("/");
        }}
      >
        Create a Post
      </div>
      <div className="item" onClick={() => history.push("/timeline")}>
        Timeline
      </div>
    </div>
  );
}

export default Sidebar;
