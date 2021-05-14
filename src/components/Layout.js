import React from "react";
import { Footer, TopNavigation } from "./Header";

export const Layout = ({ children, title, subtitle, bgimage, jumpto }) => {
  return (
    <>
      <TopNavigation />
      {title && (
        <section
          className="parallax "
          data-parallax-background-ratio="0.5"
          style={{ backgroundImage: `url("${bgimage}")` }}
        >
          <div className="opacity-extra-medium bg-extra-dark-gray" />
          <div className="container">
            <div className="row align-items-stretch justify-content-center small-screen">
              <div className="col-12 col-xl-6 col-lg-7 col-md-8 page-title-extra-small text-center d-flex justify-content-center flex-column">
                <h1 className="alt-font text-white opacity-6 margin-20px-bottom">
                  {subtitle}
                </h1>
                <h2 className="text-white alt-font font-weight-500 letter-spacing-minus-1px line-height-50 sm-line-height-45 xs-line-height-30 no-margin-bottom">
                  {title}
                </h2>
              </div>
              <div className="down-section text-center">
                <a href={"#" + jumpto} className="section-link">
                  <i className="ti-arrow-down icon-extra-small text-white bg-transparent-black padding-15px-all xs-padding-10px-all border-radius-100" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
      {children}
      <Footer />
    </>
  );
};
