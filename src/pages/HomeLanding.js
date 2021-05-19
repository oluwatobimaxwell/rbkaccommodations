import React from "react";
import { Layout } from "../components/Layout";
import { RoomsInner } from "./Rooms";

export const HomeLanding = () => {
  const sliders = [
    {
      title: `Welcome to <b>RBK Student Accommodation</b> `,
      desc: "Welcome to RBK",
      location: "Ochacho Real-Homes, Karmo,Abuja",
      image: require("../media/rbk/sa/EA42832D-8B27-44DB-B366-00BA96F963AD.JPG")
        .default,
      link: "/home/female",
    },
    {
      title: `The Best <b>Student Accommodation</b> in Abuja`,
      desc: "Welcome to RBK",
      location: "Gwarinpa, Abuja",
      image: require("../media/rbk/sa/D15E089B-B790-481A-882A-60E6749DF197.JPG")
        .default,
      link: "/home/male",
    },
  ];

  const accommodations = [
    {
      name: {
        line1: "RBK Female",
        line2: "Hostel",
      },
      location: "Ochacho Real-Homes, Karmo,Abuja",
      image: "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg",
      link: "/home/female",
    },
    {
      name: {
        line1: "RBK Male",
        line2: "Hostel",
      },
      location: "Gwarinpa, Abuja",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      link: "/home/male",
    },
  ];

  const features = [
    {
      title: "Air Conditioned",
      desc: "All rooms with AC",
      icon: "  icon-simple-line-loop  icon-very-medium text-primary",
    },
    {
      title: "24/7 Power & Security",
      desc: "100% Electricity guarantee",
      icon: " icon-simple-line-bulb  icon-very-medium text-primary",
    },

    {
      title: "Free Wi-Fi",
      desc: "Fast speed internet",
      icon: " icon-simple-line-globe   icon-very-medium text-primary",
    },
    {
      title: "Complementary Breakfast",
      desc: "Bonus Package",
      icon: " icon-simple-line-cup  icon-very-medium text-primary",
    },
    // {
    //   title: "Complementary Breakfast",
    //   desc: "Bonus Package",
    //   icon: " icon-simple-line-cup  icon-very-medium text-primary",
    // },
  ];

  const menus = require("../data/header.json");
  return (
    <Layout
    // boxheader={`navbar top-space navbar-expand-lg navbar-light bg-white header-light fixed-top header-reverse-scroll navbar-boxed`}
    >
      <style>{`.show-theme-demos .theme-demos {display: none }`}</style>
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
          data-slider-options='{ "slidesPerView": 1, "spaceBetween": 0, "direction": "vertical", "autoplay": { "delay": 5000, "disableOnInteraction": false }, "pagination": { "el": ".swiper-vertical-pagination", "clickable": true }, "allowTouchMove": true, "mousewheel": true, "loop": true, "iOSEdgeSwipeThreshold": 200, "keyboard": { "enabled": true, "onlyInViewport": true } }'
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
                          className="w-30 xl-w-60 md-w-50 xs-w-100"
                        >
                          <span className="alt-font text-large text-white">
                            Welcome to
                          </span>
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

      <section className="padding-90px-tb border-bottom border-color-medium-gray md-padding-75px-tb sm-padding-50px-tb">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center">
            {features.map((item, i) => {
              return (
                <div
                  className="col md-margin-35px-bottom wow animate__fadeIn"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeIn",
                  }}
                >
                  <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                    <div className="feature-box-icon margin-30px-right line-height-0px lg-margin-25px-right">
                      <i className={item.icon} />
                    </div>
                    <div className="feature-box-content line-height-22px">
                      <div className="text-extra-dark-gray font-weight-500 text-extra-medium line-height-20px margin-5px-bottom">
                        {item.title}
                      </div>
                      <span>{item.desc}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        className="overflow-visible cover-background wow animate__fadeIn"
        style={{ backgroundImage: 'url("images/home-decor-bg-img-02.jpg")' }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-12 col-lg-6 col-md-10 margin-20px-bottom md-margin-8-rem-bottom sm-margin-10-rem-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="w-70 margin-4-rem-bottom sm-no-margin-bottom">
                <img
                  src={`${
                    require("../media/rbk/sa/EA42832D-8B27-44DB-B366-00BA96F963AD.JPG")
                      .default
                  }`}
                  alt=""
                />
              </div>
              <div
                className="position-absolute right-25px bottom-minus-50px w-55 md-right-15px md-bottom-minus-30px"
                data-parallax-layout-ratio="1.1"
              >
                <img
                  src={`${
                    require("../media/rbk/sa/1f47ef9c-64b2-4368-b2e0-cd0e219f0d90.JPG")
                      .default
                  }`}
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-12 col-lg-5 offset-lg-1 col-md-10 wow animate__fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="alt-font text-medium font-weight-500 margin-30px-bottom media">
                <span className="w-40px h-1px bg-primary opacity-7 align-self-center margin-20px-right" />
                <div className="media-body">
                  <span className="text-primary text-uppercase">
                    About RBK Student Accommodation
                  </span>
                </div>
              </div>
              <h4 className="alt-font text-extra-dark-gray font-weight-600 w-85 margin-35px-bottom lg-w-100 sm-margin-25px-bottom">
                Classic, beautiful and modern decor
              </h4>
              <p className="w-80 lg-w-100">
                Lorem ipsum dolor sit amet consectetur adipiscing do eiusmod
                tempor incididunt ut labore dolore magna enim veniam nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
              <a
                href="#accommdations"
                className="btn btn-fancy btn-medium btn-dark-gray margin-20px-top section-link"
              >
                Our Accommodations
              </a>
            </div>
          </div>
        </div>
      </section>
      <RoomsInner />
      {/* <section
        id="accommdations"
        className="bg-penguin-white p-0 wow animate__fadeIn"
      >
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-12 col-xl-6 col-lg-4 cover-background d-flex justify-content-center align-items-center md-h-450px xs-h-300px wow animate__fadeInLeft"
              style={{
                backgroundImage: `url("${
                  require("../media/rbk/sa/3b80f70c-1685-4841-ad1d-7a839c08c47d.JPG")
                    .default
                }")`,
              }}
            ></div>
            <div className="col-12 col-xl-6 col-lg-8">
              <div className="d-flex flex-column">
                <div className="row">
                  <div
                    className="col-12 col-sm-6 cover-background xs-h-300px wow animate__fadeIn"
                    data-wow-delay="0.4s"
                    style={{
                      backgroundImage: `url("${
                        require("../media/rbk/sa/EA42832D-8B27-44DB-B366-00BA96F963AD.JPG")
                          .default
                      }")`,
                    }}
                  />
                  <div
                    className="col-12 col-sm-6 bg-penguin-white wow animate__fadeIn"
                    data-wow-delay="0.5s"
                    style={{
                      backgroundImage: 'url("images/home-decor-img-05.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "bottom -25px right 5px",
                    }}
                  >
                    <div className="padding-6-rem-lr padding-8-rem-tb md-padding-3-rem-lr md-padding-6-rem-tb xl-padding-3-rem-lr xl-padding-4-rem-tb">
                      <span className="alt-font font-weight-600 text-extra-dark-gray text-large margin-20px-bottom d-block">
                        Female Accommodation
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                      <a
                        href="/home/female"
                        className="btn btn-small btn-fancy  btn-primary margin-5px-top"
                      >
                        Full Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-12 col-sm-6 cover-background order-sm-2 xs-h-300px wow animate__fadeIn"
                    data-wow-delay="0.8s"
                    style={{
                      backgroundImage: `url("${
                        require("../media/rbk/sa/D15E089B-B790-481A-882A-60E6749DF197.JPG")
                          .default
                      }")`,
                    }}
                  />
                  <div
                    className="col-12 col-sm-6 bg-penguin-white order-sm-1 wow animate__fadeIn"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: 'url("images/home-decor-img-06.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "bottom -35px right 25px",
                    }}
                  >
                    <div className="padding-6-rem-lr padding-8-rem-tb md-padding-3-rem-lr md-padding-6-rem-tb xl-padding-3-rem-lr xl-padding-4-rem-tb">
                      <span className="alt-font font-weight-600 text-extra-dark-gray text-large margin-20px-bottom d-block">
                        Male Accommodation
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                      <a
                        href="/home/male"
                        className="btn btn-small btn-fancy  btn-primary margin-5px-top"
                      >
                        Full Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     */}
    </Layout>
  );
};

// curl -X POST   https://api.instagram.com/oauth/access_token   -F client_secret=997f90b6e8736d132ab624477870f363   -F grant_type=authorization_code   -F client_id=292762305761987   -F redirect_uri=https://socialsizzle.herokuapp.com/auth/
// curl -X POST   https://api.instagram.com/oauth/authorize   -F client_id=292762305761987 -F redirect_uri=https://socialsizzle.herokuapp.com/auth/ -F scope=user_profile,user_media -F response_type=code
