import React from "react";
import { Layout } from "../components/Layout";

export const ComingSoon = ({
  pageName,
  title = "Coming Soon",
  enddate = "2021/12/14 12:00:00",
}) => {
  return (
    <section
      className="p-0 cover-background min-h-100vh"
      style={{
        backgroundImage:
          `url("${require("../media/rbk/metro-view.jpg").default}")`,
      }}
    >
      <div
        className="container-fluid p-0"
        style={{ background: "linear-gradient(60deg, #000, #00000021)" }}
      >
        <div className="row">
          <div className="col-auto col-sm-12 full-screen full-screen-auto padding-100px-all lg-padding-70px-all sm-padding-20px-tb sm-padding-35px-lr text-center text-md-left">
            <div className="d-flex h-100 justify-content-between flex-column">
              <a className="navbar-brand" href="index.html">
                <img
                  src={require("../media/logo.png").default}
                  data-at2x={require("../media/logo.png").default}
                  className="default-logo"
                  alt=""
                  width="160"
                  style={{ borderRadius: 10 }}
                />
              </a>
              <div className="md-margin-30px-tb">
                <h1 className="alt-font text-gradient-sky-blue-pink font-weight-600 margin-10px-bottom d-inline-block ">
                  {pageName}
                </h1>
                <h3 className="alt-font d-block text-white">{title}</h3>
                <p className="text-extra-medium text-white opacity-5 line-height-28px font-weight-300 margin-50px-bottom xs-margin-40px-bottom w-450px sm-w-100">
                  We're currently working hard on this page. Subscribe our
                  newsletter to get update when it'll be live.
                </p>
                <div
                  data-enddate={enddate}
                  className="countdown countdown-style-01 alt-font z-index-1 margin-40px-bottom xs-margin-10px-bottom"
                />
                <a
                  href="/"
                  className="btn btn-medium bg-transparent btn-transparent-white btn-rounded lg-margin-15px-bottom md-no-margin-bottom md-margin-auto-lr "
                >
                  <span className="text-gradient-fast-blue-purple text-extra-dark-gray">
                    <i className="fas fa-home mr-2" />
                    {"  "}
                    Home
                  </span>
                </a>
                <a
                  href="#notify_form"
                  className="ml-3 btn btn-medium bg-white btn-transparent-white btn-rounded lg-margin-15px-bottom md-no-margin-bottom md-margin-auto-lr notify-form-button"
                >
                  <span className="text-gradient-fast-blue-purple text-extra-dark-gray">
                    notify me
                  </span>
                </a>
                {/* start search input */}
                <form
                  id="notify_form"
                  action="https://lithohtml.themezaa.com/email-templates/subscribe-newsletter.php"
                  method="post"
                  className="mfp-hide notify-popup-main"
                >
                  <div className="container">
                    <div className="row align-items-center justify-content-center text-center text-md-left">
                      <div className="col-12 col-md-4 notify-form-img sm-margin-40px-bottom d-none d-md-inline-block">
                        <img src="images/coming-soon-v2-img.png" alt="" />
                      </div>
                      <div className="col-12 col-md-7 col-lg-6 offset-lg-1 notify-form padding-80px-bottom md-padding-30px-bottom sm-no-padding-bottom">
                        <h4 className="alt-font text-extra-dark-gray font-weight-600 margin-15px-bottom">
                          Let's get started now
                        </h4>
                        <p className="text-medium-gray margin-3-rem-bottom">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Ipsum is simply dummy.
                        </p>
                        <div className="newsletter-email position-relative w-90 sm-w-100 d-inline-block">
                          <input
                            className="border-radius-5px extra-large-input m-0 required"
                            name="email"
                            placeholder="Your email address"
                            type="email"
                          />
                          <input type="hidden" name="redirect" defaultValue />
                          <button
                            className="btn line-height-0px text-medium text-extra-dark-gray submit"
                            type="submit"
                          >
                            <i className="fa fa-arrow-right" />
                          </button>
                        </div>
                        <div className="form-results d-none border-radius-5px" />
                      </div>
                    </div>
                  </div>
                </form>
                {/* end search input */}
              </div>
              <div className="social-icon-style-06 dark">
                <ul className="small-icon">
                  <li>
                    <a
                      className="facebook text-white"
                      href="https://www.facebook.com/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="dribbble text-white"
                      href="http://www.dribbble.com/"
                      target="_blank"
                    >
                      <i className="fab fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter text-white"
                      href="http://www.twitter.com/"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram text-white"
                      href="http://www.instagram.com/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="linkedin text-white"
                      href="http://www.linkedin.com/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
