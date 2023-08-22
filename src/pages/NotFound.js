
import React from "react";
import { Layout } from "../components/Layout";

export const NotFound = ({ pageName = "Page Not Found" }) => {
  return (
    <Layout
      subtitle={"Page Not Found"}
      title={pageName}
      boxheader={`navbar top-space navbar-expand-lg navbar-light bg-white header-light fixed-top header-reverse-scroll navbar-boxed`}
    >
      <section className="p-0 cover-background wow animate__fadeIn" style={{ backgroundImage: `url("${require("../media/images/404-bg.jpg").default}")`, visibility: 'visible', animationName: 'fadeIn' }}>
        <div className="container">
          <div className="row align-items-stretch justify-content-center full-screen" style={{ height: '815px' }}>
            <div className="col-12 col-xl-6 col-lg-7 col-md-8 text-center d-flex align-items-center justify-content-center flex-column">
              <h6 className="alt-font text-fast-blue font-weight-600 letter-spacing-minus-1px margin-10px-bottom text-uppercase">Ooops!</h6>
              <h1 className="alt-font text-extra-big font-weight-700 letter-spacing-minus-5px text-extra-dark-gray margin-6-rem-bottom md-margin-4-rem-bottom">404</h1>
              <span className="alt-font font-weight-500 text-extra-dark-gray d-block margin-20px-bottom">This page could not be found!</span>
              <a href="/" className="btn btn-large btn-gradient-sky-blue-pink">Back to homepage</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
