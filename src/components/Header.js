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
                      }`}
                      key={"nav-" + i}
                    >
                      <a href={item.link} className="nav-link">
                        {item.name}
                      </a>
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
      <footer className="footer-decor footer-dark bg-extra-dark-gray">
        <div className="footer-top padding-five-tb lg-padding-eight-tb md-padding-50px-tb">
          <div className="container">
            <div className="row">
              {/* start footer column */}
              <div className="col-12 col-lg-3 col-sm-6 last-paragraph-no-margin md-margin-40px-bottom xs-margin-25px-bottom">
                <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">
                  About company
                </span>
                <p className="md-w-80">{site.description}</p>
              </div>
              {/* end footer column */}
              {/* start footer column */}
              <div className="col-12 col-lg-2 offset-lg-1 col-sm-6 md-margin-40px-bottom xs-margin-25px-bottom">
                <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">
                  Company
                </span>
                <ul>
                  {data.footer.map((item, i) => {
                    return (
                      <li
                        className={`${
                          window.location.pathname === item.link ? "active" : ""
                        }`}
                      >
                        <a key={"footer-link-" + i} href={item.link}>
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* end footer column */}
              {/* start footer column */}
              <div className="col-12 col-lg-3 col-sm-6 xs-margin-25px-bottom">
                <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">
                  Get in touch
                </span>
                <p className="w-85 margin-15px-bottom">{site.address}</p>
                <div>
                  <i className="feather icon-feather-phone-call icon-very-small margin-10px-right" />
                  {site.phone1}
                </div>
                <div>
                  <i className="feather icon-feather-mail icon-very-small margin-10px-right" />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </div>
              {/* end footer column */}
              {/* start footer column */}
              <div className="col-12 col-lg-3 col-sm-6">
                <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom">
                  Follow us on Instagram
                </span>
                <div className="w-100 d-inline-block margin-10px-top">
                  <ul
                    className="instafeed-grid instafeed-wrapper-in grid grid-3col xl-grid-3col lg-grid-3col md-grid-3col sm-grid-3col xs-grid-3col gutter-small"
                    data-total={3}
                    style={{ position: "relative", height: "97.8167px" }}
                  >
                    <li className="grid-sizer" />
                    {instafeeds.map((insta, i) => {
                      if (i < 3)
                        return (
                          <li className="grid-item">
                            <figure>
                              <a href={insta.permalink} target="_blank">
                                <img
                                  src={insta.media_url}
                                  className="insta-image"
                                  alt=""
                                  data-no-retina
                                />
                                <span className="insta-counts">
                                  <i className="fab fa-instagram" />
                                </span>
                              </a>
                            </figure>
                          </li>
                        );
                    })}
                  </ul>
                  <a
                    className="alt-font text-extra-small text-uppercase font-weight-500 margin-20px-top d-inline-block"
                    href={site.socials.instagram}
                    target="_blank"
                  >
                    <i className="fab fa-instagram icon-extra-small align-middle margin-10px-right text-dark-golden-yellow" />
                    <span className="d-inline-block align-middle text-dark-golden-yellow">
                      Follow instagram
                    </span>
                  </a>
                </div>
              </div>
              {/* end footer column */}
            </div>
          </div>
        </div>
        <div className="footer-bottom padding-40px-tb border-top border-color-white-transparent">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-3 text-center text-md-left sm-margin-20px-bottom">
                <a href="index.html" className="footer-logo">
                  <img
                    src="images/logo-main.png"
                    data-at2x="images/logo-main.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-12 col-md-6 text-center last-paragraph-no-margin sm-margin-20px-bottom">
                <p>
                  © {new Date().getFullYear()} {site.name} is designed by{" "}
                  <a href="http://www.boolean.tech/" target="_blank">
                    The Boolean Tech
                  </a>
                </p>
              </div>
              <div className="col-12 col-md-3 text-center text-md-right">
                <div className="social-icon-style-12">
                  <ul className="extra-small-icon light">
                    <li>
                      <a
                        className="linkedin"
                        href={site.socials.linkedin}
                        target="_blank"
                      >
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="instagram"
                        href={site.socials.instagram}
                        target="_blank"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="facebook"
                        href={site.socials.facebook}
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>

                    <li>
                      <a
                        className="twitter"
                        href={site.socials.twitter}
                        target="_blank"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
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
