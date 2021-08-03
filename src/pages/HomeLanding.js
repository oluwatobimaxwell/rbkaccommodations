import React from "react";
import { Layout } from "../components/Layout";
import { RoomsInner } from "./Rooms";

export const HomeLanding = () => {
  // const sliders = [
  //   {
  //     title: `Welcome to <b>RBK Student Accommodation</b> `,
  //     desc: "Welcome to RBK",
  //     location: "Ochacho Real-Homes, Karmo,Abuja",
  //     image: require("../media/rbk/sa/IMG-20210709-WA0010.jpg")
  //       .default,
  //     link: "/home/female",
  //   },
  //   {
  //     title: `The Best <b>Student Accommodation</b> in Abuja`,
  //     desc: "Welcome to RBK",
  //     location: "Gwarinpa, Abuja",
  //     image: require("../media/rbk/sa/D15E089B-B790-481A-882A-60E6749DF197.JPG")
  //       .default,
  //     link: "/home/male",
  //   },
  // ];

  const accommodations = [
    {
      name: {
        line1: "RKB Female",
        line2: "Accommodation",
      },
      location: "Ochacho Real-Homes, Karmo, Abuja, Nigeria.",
      image: require("../media/rbk/sa/EA42832D-8B27-44DB-B366-00BA96F963AD.JPG").default,
      // image: "https://lithohtml.themezaa.com/images/home-creative-agency-bg-img-02.jpg",
      link: "/home/female",
    },
    {
      name: {
        line1: "RKB Male",
        line2: "Accommodation",
      },
      location: "Gwarinpa, Abuja, Nigeria.",
      image: require("../media/rbk/sa/D15E089B-B790-481A-882A-60E6749DF197.JPG").default,
      // image: "https://lithohtml.themezaa.com/images/home-creative-agency-bg-img-03.jpg",
      link: "/home/male",
    },
  ];

  const features = [

    {
      title: "Free Wi-Fi",
      desc: "Fast speed internet",
      icon: " line-icon-Phone-Wifi    icon-very-medium text-primary",
    },
    {
      title: "School Shuttles",
      desc: "Ride to school",
      icon: "  line-icon-Bus   icon-very-medium text-primary",
    },
    {
      title: "En-suite & Air Conditioned",
      desc: "All rooms with AC",
      icon: " line-icon-Wind-Turbine   icon-very-medium text-primary",
    },
    {
      title: "24/7 Power & Security",
      desc: "100% Electricity guarantee",
      icon: " line-icon-Light-Bulb   icon-very-medium text-primary",
    },
    {
      title: "Gym & Outdoor games",
      desc: "Fun and games",
      icon: " line-icon-Gymnastics   icon-very-medium text-primary",
    },
    {
      title: "24/7 Support",
      desc: "Friendly staff & 24/7 support",
      icon: " line-icon-Support   icon-very-medium text-primary",
    },
 
    {
      title: "Private Balconies",
      desc: "Study & enjoy privacy",
      icon: " line-icon-Bridge   icon-very-medium text-primary",
    },
    {
      title: "Breakfast & Dinner",
      desc: "Bonus Package",
      icon: " line-icon-Teapot   icon-very-medium text-primary",
    },
    {
      title: "Kitchen",
      desc: "Shared & Private",
      icon: " line-icon-Alarm-Clock2    icon-very-medium text-primary",
    },
    {
      title: "Social Space",
      desc: "Bonus Package",
      icon: " line-icon-Eifel-Tower    icon-very-medium text-primary",
    },
    {
      title: "Laundry",
      desc: "Bonus Package",
      icon: " line-icon-Polo-Shirt    icon-very-medium text-primary",
    },
    {
      title: "CCTV & Fire Alarm",
      desc: "Bonus Package",
      icon: " line-icon-Fire-Flame    icon-very-medium text-primary",
    }
  ];

  const menus = require("../data/header.json");

  return (
    <Layout
    // boxheader={`navbar top-space navbar-expand-lg navbar-light bg-white header-light fixed-top header-reverse-scroll navbar-boxed`}
    >
      <style>{`.show-theme-demos .theme-demos {display: none }`}</style>

      {/* end header */}
      {/* start slider section */}
      <section className="home-vertical-portfolio p-0 full-screen w-100 position-relative">
        <div
          // className="swiper-container vertical-white-move slider-vertical swiper-container-vertical"
          // data-slider-options='{ "slidesPerView": 1, "spaceBetween": 0, "direction": "vertical", "autoplay": { "delay": 5000, "disableOnInteraction": false }, "pagination": { "el": ".swiper-vertical-pagination", "clickable": true }, "allowTouchMove": true, "mousewheel": true, "loop": true, "iOSEdgeSwipeThreshold": 200, "keyboard": { "enabled": true, "onlyInViewport": true } }'
          // data-slider-md-direction="horizontal"
          // data-slider-number-pagination={1}

          className="swiper-container vertical-white-move slider-vertical"
          data-slider-options='{ "slidesPerView": 1, "spaceBetween": 0, "direction": "vertical", "autoplay": { "delay": 2000, "disableOnInteraction": false }, "pagination": { "el": ".swiper-vertical-pagination", "clickable": true }, "autoplay": { "delay": 5500, "disableOnInteraction": true }, "loop": false, "iOSEdgeSwipeThreshold": 200, "keyboard": { "enabled": true, "onlyInViewport": true }, "touchReleaseOnEdges": true }'
          data-slider-md-direction="horizontal"

          // className="swiper-container full-screen md-landscape-h-600px white-move   "
          // data-slider-options='{ "slidesPerView": 1, "loop": true, "pagination": { "el": ".swiper-pagination", "clickable": true }, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "autoplay": { "delay": 5500, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'
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
          {/* <div className="swiper-number-pagination">
            <div className="swiper-pagination-current" />
            <div className="swiper-pagination-total" />
          </div> */}
          {/* end slider number pagination */}
        </div>
        {/* <div className="scroll-down-bottom">
          <a
            href="#welcome"
            className="section-link d-block w-2px h-35px bg-white mx-auto right-0px left-0px position-absolute"
          >
            <span class="scroll-down-text alt-font font-weight-600 text-white-gray letter-spacing-minus-1-half margin-5px-bottom">
              scroll
            </span>
          </a>
        </div> */}
      </section>

      <section
        id="welcome"
        className="padding-90px-tb border-bottom border-color-medium-gray md-padding-75px-tb sm-padding-50px-tb"
      >
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center">
            {features.map((item, i) => {
              return (
                <div
                  className="col md-margin-35px-bottom wow animate__fadeIn mt-5"
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
                    require("../media/rbk/sa/IMG-20210711-WA0029.jpg")
                      .default
                  }`}
                  alt=""
                  style={{borderRadius: 8}}
                />
              </div>
              <div
                className="position-absolute right-25px bottom-minus-50px w-55 md-right-15px md-bottom-minus-30px"
                data-parallax-layout-ratio="1.1"
              >
                <img
                  src={`${
                    require("../media/rbk/sa/IMG-20210711-WA0023.jpg")
                      .default
                  }`}
                  alt=""
                  style={{borderRadius: 8}}
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
                    About RKB Student Accommodation
                  </span>
                </div>
              </div>
              <h4 className="alt-font text-extra-dark-gray font-weight-600 w-85 margin-35px-bottom lg-w-100 sm-margin-25px-bottom">
                Classic, beautiful and modern decor
              </h4>
              <p 
              // className="w-80 lg-w-100"
              className="text-large line-height-38px w-90 lg-w-100 md-w-80 sm-w-100 wow animate__fadeIn"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeIn",
              }}
              >
               At RKB  Student accommodations, Abuja, we seek to create an  unmatched hostel solution as well as creating home away from home experience for  students.
               <br/>
               RKB  also provides  serene environment for relaxation and creativity for academic pursuit.
              </p>
              {/* <a
                href="#accommdations"
                className="btn btn-fancy btn-medium btn-dark-gray margin-20px-top section-link"
              >
                Our Accommodations
              </a> */}
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative overflow-visible p-0">
        <div className="container-fluid">
          <div className="row">
            <div
              className="absolute-middle-center z-index-1 top-0px left-0px lg-w-250px d-none d-md-block wow animate__fadeIn"
              style={{ visibility: "visible", animationName: "fadeIn" }}
            >
              <img
                src="images/home-digital-agency-img-01.png"
                alt=""
                data-no-retina
              />
            </div>
            <div
              className="col-12 col-xl-7 col-lg-6 bg-extra-dark-gray padding-10-rem-tb padding-nine-lr xl-padding-six-all md-padding-ten-all sm-padding-ten-lr sm-padding-fifteen-tb wow animate__fadeIn"
              style={{ visibility: "visible", animationName: "fadeIn" }}
            >
              <span
                className="alt-font font-weight-500 text-primary letter-spacing-2px text-uppercase d-block margin-2-half-rem-bottom wow animate__fadeIn"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeIn",
                }}
              >
                RKB Services
              </span>
              <h4
                className="alt-font font-weight-600 text-white letter-spacing-minus-1-half w-90 margin-3-rem-bottom xl-w-100 md-w-90 sm-w-100 wow animate__fadeIn"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeIn",
                }}
              > <span style={{ color: "transparent" }}>PP</span>We pride ourselves on top-notch facilities, 24/7 security &amp;  power, free internet access  and  quality welfare services to our esteemed residents. 
                <br/>
                <br/>
                <span style={{ color: "transparent" }}>PP</span>Our services cover wide range of opportunities for students who want to have convenience with academic excellence.
                <br/>
                <br/>
                <span style={{ color: "#007bff", fontStyle: "italic", fontFamily: "'Fuggles', cursive", fontSize: 50 }}>RKB -  Green & Smart Student Accommodations.</span>
              </h4>

              {/* <p
                className="text-large line-height-38px w-90 lg-w-100 md-w-80 sm-w-100 wow animate__fadeIn"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeIn",
                }}
              >
                
              </p> */}
              <a
                href="#room-list"
                className="section-link btn btn-link scroll-down-text btn-extra-large text-white margin-15px-top letter-spacing-1px wow animate__fadeIn"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeIn",
                }}
              >
                Check the rooms
              </a>
            </div>
       
            <div
              className="col-12 col-xl-5 col-lg-6 cover-background md-h-500px sm-h-350px wow animate__fadeIn"
              data-wow-delay="0.1s"
              style={{
                backgroundImage: `url("${require("../media/rbk/20210719_125009_new.jpg").default}")`,
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            />
          </div>
        </div>
      </section>
            <div id="room-list" />
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


