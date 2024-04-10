import React from "react";

function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#6B3CC9" }}
    >
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 me-auto mt-3">
              <img
                src="/white-logo.png"
                alt="Bootstrap"
                width="175"
                height="25"
                style={{ marginBottom: "20px" }}
              />
              <p>
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mt-3">
              <h6>Our Technologies</h6>
              <p>ReactJS</p>
              <p>Gatsby</p>
              <p>NextJS</p>
              <p>NodeJS</p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mt-3">
              <h6>Our Services</h6>
              <p>Social media Marketing</p>
              <p>Web & Mobile App Development</p>
              <p>Data & Analytics</p>
              <p>Google Marketing solutions</p>
            </div>
          </div>
        </section>
        <hr />
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="py-3 text-center">
              <a href="">Privacy Policy</a> | <a href="">Terms & Conditions</a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
