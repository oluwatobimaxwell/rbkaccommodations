import React from "react";
import { Footer, TopNavigation } from "./Header";

export const Layout = ({
  boxheader,
  children,
  title,
  subtitle,
  bgimage,
  jumpto,
}) => {
  return (
    <>
      <TopNavigation boxheader={boxheader} />
      {boxheader && subtitle && (
        <section className="bg-extra-dark-gray padding-25px-tb page-title-small">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-xl-8 col-lg-6">
                {/* start page title */}
                <h1 className="alt-font text-white font-weight-500 no-margin-bottom text-center text-lg-left">
                  {title}
                </h1>
                {/* end page title */}
              </div>
              <div className="col-12 col-xl-4 col-lg-6 breadcrumb justify-content-center justify-content-lg-end text-small alt-font md-margin-10px-top">
                {/* start breadcrumb */}
                <ul className="xs-text-center">
                  <li>
                    <a href="/" className="text-white-hover">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white-hover">
                      {subtitle}
                    </a>
                  </li>
                  {/* <li>Text box</li> */}
                </ul>
                {/* end breadcrumb */}
              </div>
            </div>
          </div>
        </section>
      )}
      {title && !boxheader && (
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
      <div class="main-content">{children}</div>

      <Footer />
    </>
  );
};
