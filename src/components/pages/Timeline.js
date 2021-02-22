/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import avatar from "../assets/todd_chavez.jpg";
import { useHistory } from "react-router-dom";
const axios = require("axios").default;

function Timeline({ setAuthStatus, authToken }) {
  const history = useHistory();

  return (
    <>
      <Header setAuthStatus={setAuthStatus} />
      <div className="timeline-container">
        <h1 className="timeline-heading">Timeline</h1>
        <div className="flex-container">
          ****************************************************
          <div className="timeline">
            <div className="card">
              <div className="post">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                omnis optio ab. Iste sapiente commodi fugit fugiat. Dicta
                veritatis odit voluptas harum quidem sed minima, velit error
                molestiae perspiciatis tempora.
              </div>
            </div>
            <div className="card">
              <div className="post">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                omnis optio ab. Iste sapiente commodi fugit fugiat. Dicta
                veritatis odit voluptas harum quidem sed minima, velit error
                molestiae perspiciatis tempora.
              </div>
            </div>
            <div className="card">
              <div className="post">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                omnis optio ab. Iste sapiente commodi fugit fugiat. Dicta
                veritatis odit voluptas harum quidem sed minima, velit error
                molestiae perspiciatis tempora.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Timeline;
