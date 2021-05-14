/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";

const data = {
  header: require("../data/header.json"),
  footer: require("../data/footer.json"),
  site: require("../data/site.json"),
};

const { site } = data;

export const TopNavigation = () => {
  return (
    <header>
      {/* start navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent header-light fixed-top navbar-boxed header-reverse-scroll">
        <div className="container-fluid nav-header-container">
          <div className="col-auto col-sm-6 col-lg-2 mr-auto pl-lg-0">
            <a className="navbar-brand" href="/">
              <img
                src="images/logo-main.png"
                data-at2x="images/logo-main.png"
                className="default-logo"
                alt=""
              />
              <img
                src="images/logo-main.png"
                data-at2x="images/logo-main.png"
                className="alt-logo"
                alt=""
              />
              <img
                src="images/logo-main.png"
                data-at2x="images/logo-main.png"
                className="mobile-logo"
                alt=""
              />
            </a>
          </div>
          <div className="col-auto col-lg-8 menu-order px-lg-0">
            <button
              className="navbar-toggler float-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-line" />
              <span className="navbar-toggler-line" />
              <span className="navbar-toggler-line" />
              <span className="navbar-toggler-line" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav alt-font">
                {data.header.map((item, i) => {
                  return (
                    <li
                      className={`nav-item  ${
                        window.location.pathname === item.link ? "active" : ""
                      } ${(item.items && "dropdown simple-dropdown") || ""}`}
                      key={"nav-" + i}
                    >
                      <a href={item.link} className="nav-link">
                        {item.name}
                      </a>

                      {item.items && (
                        <>
                          <i
                            className="fa fa-angle-down dropdown-toggle"
                            data-toggle="dropdown"
                            aria-hidden="true"
                          ></i>
                          <ul className="dropdown-menu" role="menu">
                            {item.items.map((sub, j) => {
                              return (
                                <li
                                  key={"hshsw-skks-" + i + j}
                                  className="dropdown"
                                >
                                  <a href={sub.link}>
                                    {sub.name}
                                    <i className="fas fa-angle-right dropdown-toggle"></i>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-auto col-lg-2 text-right pr-0 font-size-0">
            <div className="header-social-icon d-inline-block">
              <a href="http://www.facebook.com/" target="_blank">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="fab fa-instagram" />
              </a>
              <a href="http://www.twitter.com/" target="_blank">
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* end navigation */}
    </header>
  );
};

export const Footer = () => {
  const [instafeeds, setinstafeeds] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://graph.instagram.com/me/media?fields=id,media_type,media_url,timestamp,permalink,comments_count,like_count&access_token=IGQVJWMkx2V2lkclhNVWhoUUk0c2JvQXVtU0VIaFhuLXhzaXNDVTFTVV9kSzRVQU5DUkFmeDRCQjdqRUx4OGtaaDZAzTDZAqaE5PNDQ2bEpsOVNqYWlSZAzNTMU9NN2FwTkRyNVlDX0wyeG1WOTE3U1E5bQZDZD"
    )
      .then((response) =>
        response.json().then((res) => {
          setinstafeeds(res.data);
        })
      )
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <section className="padding-100px-tb md-padding-75px-tb sm-padding-50px-tb wow animate__fadeIn">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-12 col-xl-5 col-lg-4 md-margin-50px-bottom sm-margin-30px-bottom last-paragraph-no-margin wow animate__fadeIn"
              data-wow-delay="0.6s"
            >
              <h5 className="alt-font font-weight-500 text-dark-purple w-70 d-inline-block letter-spacing-minus-1px m-0 lg-w-100 md-w-50 xs-w-70">
                Please feel free to get in touch with us
              </h5>
            </div>
            {/* start feature box item */}
            <div
              className="col-12 col-xl-3 col-lg-4 col-sm-6 xs-margin-30px-bottom last-paragraph-no-margin wow animate__fadeInRight"
              data-wow-delay="0.4s"
            >
              <div className="feature-box feature-box-left-icon">
                <div className="feature-box-icon margin-5px-top">
                  <i className="line-icon-Geo2-Love icon-extra-medium text-salmon-rose d-block" />
                </div>
                <div className="feature-box-content">
                  <span className="text-dark-purple text-uppercase text-medium font-weight-500 alt-font margin-5px-bottom d-block">
                    RBK Accommodation
                  </span>
                  <p className="m-0">
                    401 Broadway, 24th Floor, Orchard View, Abuja
                  </p>
                </div>
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div
              className="col-12 col-xl-3 offset-xl-1 col-lg-4 col-sm-6 last-paragraph-no-margin wow animate__fadeInRight"
              data-wow-delay="0.6s"
            >
              <div className="feature-box feature-box-left-icon">
                <div className="feature-box-icon margin-5px-top">
                  <i className="line-icon-Mail icon-extra-medium text-salmon-rose d-block" />
                </div>
                <div className="feature-box-content">
                  <span className="text-dark-purple text-uppercase text-medium font-weight-500 alt-font margin-5px-bottom d-block">
                    How can we help?
                  </span>
                  <p className="m-0">
                    <a
                      href="mailto:info@rbkaccommodation.com"
                      className="text-salmon-rose-hover"
                    >
                      info@rbkaccommodation.com
                    </a>
                    <br />
                    <a
                      href="tel:+2348123456789"
                      className="text-salmon-rose-hover"
                    >
                      +2348123456789
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* end features box item */}
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start footer */}
      <footer className="footer-light border-top border-color-medium-gray padding-50px-tb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-3 text-center text-md-left sm-margin-20px-bottom">
              <a href="index.html" className="footer-logo">
                <img
                  src="../images/logo-gradient-tan-geraldine.png"
                  data-at2x="images/logo-gradient-tan-geraldine@2x.png"
                  alt=""
                />
              </a>
            </div>
            <div className="col-12 col-md-6 text-center last-paragraph-no-margin sm-margin-20px-bottom">
              <p>
                © {new Date().getFullYear()} RBK Student Accommodations Ltd.{" "}
              </p>
            </div>
            <div className="col-12 col-md-3 text-center text-md-right">
              <div className="social-icon-style-12">
                <ul className="extra-small-icon">
                  <li>
                    <a
                      className="facebook"
                      href="https://www.facebook.com/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="dribbble"
                      href="http://www.dribbble.com/"
                      target="_blank"
                    >
                      <i className="fab fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter"
                      href="http://www.twitter.com/"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram"
                      href="http://www.instagram.com/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a className="scroll-top-arrow" href="javascript:void(0);">
        <i className="feather icon-feather-arrow-up" />
      </a>
    </>
  );
};
