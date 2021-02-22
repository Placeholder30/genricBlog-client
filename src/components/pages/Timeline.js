import { React } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Sidebar from "../partials/Sidebar";

function Timeline({ setAuthStatus, authToken }) {
  return (
    <>
      <Header setAuthStatus={setAuthStatus} />
      <div className="timeline-container">
        <h1 className="timeline-heading">Timeline</h1>
        <div className="flex-container">
          <Sidebar authToken={authToken} />
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
