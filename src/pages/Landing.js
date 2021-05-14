import React from "react";

export const Landing = () => {
  const accommodations = [
    {
      name: {
        line1: "RBK Female",
        line2: "Accommodation",
      },
      location: "Karimu, Abuja",
      image: "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg",
      link: "/home/female",
    },
    {
      name: {
        line1: "RBK Male",
        line2: "Accommodation",
      },
      location: "Gwarinpa, Abuja",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      link: "/home/male",
    },
  ];

  const menus = require("../data/header.json");

  return (
    <>
      <header className="home-vertical-portfolio">
        {/* start navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent header-dark fixed-top navbar-static-overlay">
          <div className="container-fluid h-130px md-h-70px">
            <div className="col-6 col-lg-2 mr-auto mr-auto pl-lg-0">
              <a className="navbar-brand" href="index.html">
                <img
                  src="images/symbol.png"
                  data-at2x="images/symbol@2x.png"
                  className="default-logo"
                  alt=""
                />
                <img
                  src="images/symbol.png"
                  data-at2x="images/symbol@2x.png"
                  className="alt-logo"
                  alt=""
                />
                <img
                  src="images/symbol-black.png"
                  data-at2x="images/symbol-black@2x.png"
                  className="mobile-logo"
                  alt=""
                />
              </a>
            </div>
            <div className="col-auto text-right pr-lg-0">
              <div className="header-push-button">
                <a href="javascript:void(0);" className="push-button ">
                  <span />
                  <span />
                  <span />
                  <span />
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* end navigation */}
        {/* start hamburger popup */}
        <div className="hamburger-menu hamburger-menu-half bg-black lg-w-60 md-w-60 sm-w-100">
          <a href="javascript:void(0);" className="close-menu text-white">
            <i className="fas fa-times" />
          </a>
          <div className="d-flex flex-column align-items-center justify-content-center h-100 padding-6-rem-all md-padding-2-rem-lr xs-no-padding-lr">
            <a href="index.html" className="d-none d-lg-inline-block">
              <img
                src="images/logo-white-big.png"
                alt=""
                className="md-w-160px"
              />
            </a>
            <div
              className="col-12 col-xl-9 col-lg-8 col-md-9 col-sm-7 menu-list-wrapper margin-3-rem-tb"
              data-scroll-options='{ "theme": "light" }'
            >
              {/* start menu */}
              <ul className="menu-list alt-font w-70 xl-w-100 margin-auto-lr">
                {/* start menu item */}
                {menus.map((item, i) => {
                  return (
                    <li key={"shwi-link-" + i} className="menu-list-item">
                      <a href={item.link}>{item.name}</a>
                      {item.items && (
                        <>
                          <span className="menu-toggle" />
                          <ul className="sub-menu-item">
                            {item.items.map((sub, j) => {
                              return (
                                <li key={"hshsw-skks-" + i + j}>
                                  <a href={sub.link}>{sub.name}</a>
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
              {/* end menu */}
            </div>
            <div className="text-center elements-social social-icon-style-12 d-none d-md-inline-block">
              <ul className="small-icon light">
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
                <li>
                  <a
                    className="linkedin"
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
        {/* end hamburger popup */}
      </header>
      {/* end header */}
      {/* start slider section */}
      <section className="home-vertical-portfolio p-0 full-screen w-100 position-relative">
        <div
          className="swiper-container vertical-white-move slider-vertical swiper-container-vertical"
          data-slider-options='{ "slidesPerView": 1, "spaceBetween": 0, "direction": "vertical", "autoplay": { "delay": 3000, "disableOnInteraction": false }, "pagination": { "el": ".swiper-vertical-pagination", "clickable": true }, "allowTouchMove": true, "mousewheel": true, "loop": true, "iOSEdgeSwipeThreshold": 200, "keyboard": { "enabled": true, "onlyInViewport": true } }'
          data-slider-md-direction="horizontal"
          data-slider-number-pagination={1}
        >
          <div className="swiper-wrapper">
            {/* start swiper slide */}
            {accommodations.map((item, i) => {
              return (
                <div
                  key={"hshs00-ssiwie-ssw-" + i}
                  className="swiper-slide cover-background mb-0"
                  style={{
                    backgroundImage: `url("${item.image}")`,
                  }}
                >
                  <div className="container-fluid padding-7-half-rem-lr lg-padding-5-half-rem-lr xs-padding-15px-lr h-100">
                    <div className="row h-100">
                      <div className="col-12 swiper-bottom-content d-flex flex-column justify-content-center text-left padding-9-rem-tb md-padding-5-rem-tb">
                        <a
                          href={item.link}
                          className="w-30 xl-w-60 md-w-50 xs-w-80"
                        >
                          <h1 className="alt-font font-weight-300 text-white mb-0">
                            <span className="font-weight-600 d-block">
                              {item.name.line1}
                            </span>{" "}
                            {item.name.line2}
                          </h1>
                        </a>
                        <div className="swiper-right-content position-absolute right-15px bottom-50px w-45 padding-5-half-rem-bottom md-w-60 xs-w-70 md-no-padding-bottom sm-bottom-30px">
                          <div className="d-flex align-items-center align-self-end justify-content-end w-100">
                            <span className="col-3 col-lg bg-white h-1px opacity-3 d-none d-sm-inline-block" />
                            <span className="alt-font text-large text-white padding-3-rem-left xs-padding-2-rem-left">
                              {item.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* end swiper slide */}
          </div>
          {/* start slider pagination */}
          <div className="swiper-pagination swiper-vertical-pagination swiper-pagination-medium swiper-light-pagination d-flex flex-column align-items-center margin-3-half-rem-right lg-margin-1-rem-right" />
          {/* end slider pagination */}
          {/* start slider number pagination */}
          <div className="swiper-number-pagination">
            <div className="swiper-pagination-current" />
            <div className="swiper-pagination-total" />
          </div>
          {/* end slider number pagination */}
        </div>
      </section>
    </>
  );
};
