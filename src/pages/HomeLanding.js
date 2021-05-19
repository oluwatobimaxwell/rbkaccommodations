import React from "react";
import { Layout } from "../components/Layout";

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
  return (
    <Layout
    // boxheader={`navbar top-space navbar-expand-lg navbar-light bg-white header-light fixed-top header-reverse-scroll navbar-boxed`}
    >
      <style>{`.show-theme-demos .theme-demos {display: none }`}</style>

      <section className="p-0">
        <div className="container-fluid position-relative">
          <div className="row">
            <div
              className="swiper-container white-move one-fifth-screen sm-h-500px lg-h-720px"
              data-slider-options='{ "slidesPerView": 1, "loop": true, "pagination": { "el": ".swiper-pagination", "clickable": true }, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "autoplay": { "delay": 4000, "disableOnInteraction": false },  "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'
            >
              <div className="swiper-wrapper">
                {sliders.map((item, i) => {
                  return (
                    <>
                      {/* start slider item */}
                      <div
                        className="swiper-slide cover-background"
                        style={{
                          backgroundImage: `url("${item.image}")`,
                        }}
                      >
                        <div className="opacity-light opacity-4 bg-extra-dark-gray" />
                        <div className="container h-100">
                          <div className="row justify-content-center h-100">
                            <div className="col-12 col-lgxl-7 col-lg-8 d-flex flex-column justify-content-center h-100 text-center">
                              <h2
                                className="alt-font font-weight-300 text-white margin-4-rem-bottom"
                                dangerouslySetInnerHTML={{ __html: item.title }}
                              />

                              <div className="btn-dual">
                                <a
                                  href={item.link}
                                  className="btn btn-fancy btn-medium btn-fast-yellow margin-25px-right d-table d-sm-inline-block xs-margin-auto-lr xs-margin-15px-bottom"
                                >
                                  {item.desc}
                                </a>
                                <a
                                  href={item.link}
                                  className="btn btn-fancy btn-medium btn-transparent-white d-table d-sm-inline-block xs-margin-auto-lr"
                                >
                                  Discover Now
                                  <i className="fa fa-arrow-right right-icon" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end slider item */}
                    </>
                  );
                })}
              </div>
              {/* start slider arrow */}
              {/*<div class="swiper-button-next-nav swiper-button-next rounded-circle slider-navigation-style-07 dark"><i class="ti-arrow-right text-extra-small"></i></div>
                  <div class="swiper-button-previous-nav swiper-button-prev rounded-circle slider-navigation-style-07 dark"><i class="ti-arrow-left text-extra-small"></i></div>*/}
              {/* end slider arrow */}
              {/* start slider pagination */}
              <div className="swiper-pagination swiper-light-pagination" />
              {/* end slider pagination */}
            </div>
          </div>
        </div>
      </section>

      <section className="padding-90px-tb border-bottom border-color-medium-gray md-padding-75px-tb sm-padding-50px-tb">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center">
            {/* start feature box item */}
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
                  <i className="line-icon-Headset icon-very-medium text-primary" />
                </div>
                <div className="feature-box-content line-height-22px">
                  <div className="text-extra-dark-gray font-weight-500 text-extra-medium line-height-20px margin-5px-bottom">
                    Expert support
                  </div>
                  <span>Contact support team</span>
                </div>
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div
              className="col md-margin-35px-bottom wow animate__fadeIn"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeIn",
              }}
            >
              <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                <div className="feature-box-icon margin-30px-right line-height-0px lg-margin-25px-right">
                  <span className="line-icon-Like-2 icon-very-medium text-primary" />
                </div>
                <div className="feature-box-content line-height-22px">
                  <div className="text-extra-dark-gray font-weight-500 text-extra-medium line-height-20px margin-5px-bottom">
                    Perfect quality
                  </div>
                  <span>Perfect design quality</span>
                </div>
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div
              className="col xs-margin-35px-bottom wow animate__fadeIn"
              data-wow-delay="0.6s"
              style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeIn",
              }}
            >
              <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                <div className="feature-box-icon margin-30px-right line-height-0px lg-margin-25px-right">
                  <i className="line-icon-Shield icon-very-medium text-primary" />
                </div>
                <div className="feature-box-content line-height-22px">
                  <div className="text-extra-dark-gray font-weight-500 text-extra-medium line-height-20px margin-5px-bottom">
                    Security checkout
                  </div>
                  <span>Safe and trustworthy</span>
                </div>
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div
              className="col wow animate__fadeIn"
              data-wow-delay="0.8s"
              style={{
                visibility: "visible",
                animationDelay: "0.8s",
                animationName: "fadeIn",
              }}
            >
              <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                <div className="feature-box-icon margin-30px-right line-height-0px lg-margin-25px-right">
                  <i className="line-icon-Coin icon-very-medium text-primary" />
                </div>
                <div className="feature-box-content line-height-22px">
                  <div className="text-extra-dark-gray font-weight-500 text-extra-medium line-height-20px margin-5px-bottom">
                    Instant discounts
                  </div>
                  <span>Use your coupon now</span>
                </div>
              </div>
            </div>
            {/* end feature box item */}
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
                Classic beautiful and modern decor presence of design
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
      <section
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
    </Layout>
  );
};

// curl -X POST   https://api.instagram.com/oauth/access_token   -F client_secret=997f90b6e8736d132ab624477870f363   -F grant_type=authorization_code   -F client_id=292762305761987   -F redirect_uri=https://socialsizzle.herokuapp.com/auth/
// curl -X POST   https://api.instagram.com/oauth/authorize   -F client_id=292762305761987 -F redirect_uri=https://socialsizzle.herokuapp.com/auth/ -F scope=user_profile,user_media -F response_type=code
