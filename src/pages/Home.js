import React from "react";
import { Layout } from "../components/Layout";

export const Home = () => {
  return (
    <Layout>
      {/* start hero section */}
      <section
        className="p-0 mobile-height parallax"
        data-parallax-background-ratio="0.5"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/87236/pexels-photo-87236.jpeg")',
        }}
      >
        <div className="opacity-light bg-gradient-black-blue z-index-0" />
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-6 col-lg-7 col-md-10 d-flex flex-column justify-content-center text-center full-screen position-relative z-index-1 md-landscape-h-600px">
              <span className="margin-35px-bottom alt-font text-large text-white font-weight-300 d-block xs-margin-15px-bottom">
                Welcome to <strong>Gankco Energy</strong>, we are
              </span>
              <h2
                className="text-white alt-font font-weight-600 letter-spacing-minus-1 text-shadow-large sm-no-text-shadow"
                style={{ fontSize: "3.7rem !important" }}
              >
                Creative, Honest and Dependable
              </h2>
              <div className="text-center position-absolute bottom-100px left-0px w-100 sm-bottom-50px">
                <a
                  href="https://www.youtube.com/watch?v=Uti2niW2BRA"
                  className="popup-youtube video-icon-box video-icon-large position-relative"
                >
                  <span>
                    <span className="video-icon bg-shamrock-green margin-15px-right">
                      <i className="fas fa-play text-extra-dark-gray text-extra-large" />
                      <span className="video-icon-sonar">
                        <span className="video-icon-sonar-bfr bg-shamrock-green opacity-7" />
                      </span>
                    </span>
                    <span className="video-icon-text alt-font text-medium text-white text-uppercase text-decoration-line-bottom d-inline-block align-middle font-weight-500">
                      Gankco at a glance
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end hero section */}
      {/* start section */}
      <section className="big-section">
        <div className="container">
          <div className="row align-items-lg-center justify-content-center">
            <div className="col-12 col-lg-4 col-md-6 fancy-text-box-style-01 text-center text-md-left md-margin-50px-bottom sm-margin-40px-bottom wow animate__fadeIn">
              <div className="fancy-text-box padding-3-half-rem-all md-padding-4-rem-all xs-padding-30px-all">
                <div className="fancy-text-box-border-left border-color-shamrock-green" />
                <h1 className="alt-font fancy-text-content font-weight-600 text-extra-dark-gray d-inline-block align-middle letter-spacing-minus-5px">
                  28
                </h1>
                <div className="alt-font text-extra-medium text-extra-dark-gray font-weight-500 text-left d-inline-block align-middle w-90px mx-auto line-height-20px position-relative top-minus-4px">
                  Years experience working
                </div>
                <div className="fancy-text-box-border-right border-color-shamrock-green" />
              </div>
            </div>
            <div
              className="col-12 col-lg-3 col-md-4 text-center text-md-left wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <span className="alt-font text-medium text-uppercase margin-20px-bottom d-block">
                Since 2017
              </span>
              <div className="alt-font text-extra-large text-extra-dark-gray font-weight-500 line-height-34px w-85 lg-w-100 sm-margin-15px-bottom">
                Trully corporate company based in Lagos, Nigeria.
              </div>
            </div>
            <div
              className="col-12 col-lg-5 col-md-10 text-center text-md-left wow animate__fadeIn"
              data-wow-delay="0.4s"
            >
              <p className="w-85 lg-w-100">
                Since 2017, Gankco Energy in Abuja has been a company with a
                total commitment to quality, safety, and timely delivery of
                projects within the clients’ specified schedule. Being a team of
                qualified and experienced professionals...
              </p>
              <a
                href="/about"
                className="btn btn-link thin btn-extra-large text-extra-dark-gray"
              >
                About company
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section className="big-section bg-light-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-md-8 col-sm-8 text-center margin-6-rem-bottom wow animate__fadeIn">
              <h4 className="alt-font font-weight-600 text-extra-dark-gray letter-spacing-minus-1px">
                Deploying World-Class Solutions in Energy and Other Major
                Sectors
              </h4>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-content-center">
            {/* start feature box item */}
            <div className="col md-margin-50px-bottom wow animate__fadeIn">
              <div className="feature-box padding-3-rem-lr lg-padding-2-rem-lr sm-padding-1-rem-lr">
                <div className="feature-box-icon feature-box-icon-rounded dark bg-white w-130px h-130px rounded-circle box-shadow-large margin-40px-bottom sm-margin-30px-bottom">
                  <i className=" line-icon-Fog-Day icon-large text-shamrock-green" />
                  <div className="feature-box-icon-hover bg-gradient-shamrock-green-light-orange rounded-circle" />
                </div>
                <div className="feature-box-content">
                  <span className="alt-font font-weight-500 margin-15px-bottom d-block text-extra-dark-gray">
                    Our Vision
                  </span>
                  <p>
                    To be a global leader in the energy service industry
                    contributing to the local capacity development with...
                  </p>
                  <a
                    href="/about"
                    className="btn btn-link thin btn-large text-extra-dark-gray"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div
              className="col md-margin-50px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="feature-box padding-3-rem-lr lg-padding-2-rem-lr sm-padding-1-rem-lr">
                <div className="feature-box-icon feature-box-icon-rounded dark bg-white w-130px h-130px rounded-circle box-shadow-large margin-40px-bottom sm-margin-30px-bottom">
                  <i className="line-icon-Gear-2 icon-large text-shamrock-green" />
                  <div className="feature-box-icon-hover bg-gradient-shamrock-green-light-orange rounded-circle" />
                </div>
                <div className="feature-box-content">
                  <span className="alt-font font-weight-500 margin-15px-bottom d-block text-extra-dark-gray">
                    Our Mission
                  </span>
                  <p>
                    To provide excellent service delivery by building strong
                    partnership with our customers, bringing innovations...
                  </p>
                  <a
                    href="/about"
                    className="btn btn-link thin btn-large text-extra-dark-gray"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div className="col wow animate__fadeIn" data-wow-delay="0.4s">
              <div className="feature-box padding-3-rem-lr lg-padding-2-rem-lr sm-padding-1-rem-lr">
                <div className="feature-box-icon feature-box-icon-rounded dark bg-white w-130px h-130px rounded-circle box-shadow-large margin-40px-bottom sm-margin-30px-bottom">
                  <i className="line-icon-Business-Mens  icon-large text-shamrock-green" />
                  <div className="feature-box-icon-hover bg-gradient-shamrock-green-light-orange rounded-circle" />
                </div>
                <div className="feature-box-content">
                  <span className="alt-font font-weight-500 margin-15px-bottom d-block text-extra-dark-gray">
                    Core Values
                  </span>
                  <p>
                    Our strength lies in our dynamism, commitment to
                    improvement, and relationships we’ve built...
                  </p>
                  <a
                    href="/about"
                    className="btn btn-link thin btn-large text-extra-dark-gray"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            {/* end feature box item */}
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section
        className="big-section cover-background"
        style={{
          backgroundImage: 'url("images/home-corporate-hand-crafted-bg.jpg")',
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-10 col-lg-6 md-margin-9-rem-bottom wow animate__fadeIn">
              <div className="w-70 overflow-hidden position-relative xs-w-80">
                <img
                  src={
                    require("../media/mick-truyts-x6WQeNYJC1w-unsplash.jpg")
                      .default
                  }
                  alt=""
                />
              </div>
              <div
                className="position-absolute right-35px bottom-minus-50px w-50 lg-bottom-minus-30px xs-right-15px"
                data-wow-delay="0.2s"
                data-parallax-layout-ratio="1.1"
              >
                <img
                  src={
                    require("../media/alessandro-bianchi-_kdTyfnUFAc-unsplash.jpg")
                      .default
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="col-10 col-xl-4 col-lg-5 offset-lg-1">
              <h4 className="alt-font text-extra-dark-gray letter-spacing-minus-1px font-weight-600 margin-4-rem-bottom md-margin-3-rem-bottom wow animate__fadeIn">
                Committed to Delivering the Best
              </h4>
              <div className="row">
                {/* start feature box item */}
                <div
                  className="col-12 wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <div className="feature-box feature-box-left-icon">
                    <div className="feature-box-content last-paragraph-no-margin">
                      <span className="alt-font text-black font-weight-500 d-block margin-5px-bottom">
                        Gankco Energy
                      </span>
                      <p className="w-85 xs-w-100">
                        We provide engineering solutions to the Oil & Gas
                        (Upstream) sector with specialities in remedial services
                        for oil & gas wells, oilfield equipment sales and
                        rentals. Our organization is built on the foundation of
                        HSE, Quality and excellent project delivery. With a team
                        of experienced oil & gas professionals, we provide
                        support and respond to our customers’ needs at short
                        notice.
                      </p>
                    </div>
                  </div>
                </div>

                {/* end feature box item */}
                <div
                  className="col-12 margin-4-rem-top d-inline-block wow animate__fadeIn"
                  data-wow-delay="0.4s"
                >
                  <a
                    href="/about"
                    className="btn btn-large btn-expand-ltr text-black section-link"
                  >
                    About Us
                    <span className="bg-shamrock-green" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section className="bg-light-gray">
        <div className="container">
          <div className="row justify-content-center wow animate__fadeIn">
            <div className="col-12 col-lg-6 col-md-8 col-sm-10 text-center margin-6-rem-bottom md-margin-4-rem-bottom">
              <h4 className="alt-font font-weight-600 text-extra-dark-gray letter-spacing-minus-1px">
                Our Services & Solutions
              </h4>
              <p className="w-80 mx-auto md-w-100 mb-0">
                Gankco Energy in Abuja is committed to providing services that
                guarantee customers satisfaction by ensuring that customer’s
                requirements are processed efficiently and correctly.
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2">
            {/* start interactive banner item */}
            <div className="col md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn">
              <div className="interactive-banners-style-08 box-shadow-large bg-white h-100 border-radius-6px overflow-hidden">
                <div className="interactive-banners-box-image">
                  <a href="/solutions#oilandgas">
                    <img
                      src={
                        require("../media/pexels-gustavo-fring-4173096.jpg")
                          .default
                      }
                      alt=""
                    />
                    <div className="btn btn-white btn-rounded">
                      <i className="fas fa-arrow-right" />
                    </div>
                    <div className="interactive-banners-box-hover opacity-full-dark bg-transparent-gradient-shamrock-green-light-orange" />
                  </a>
                </div>
                <div className="interactive-banners-box-content padding-35px-all text-center xs-padding-25px-all">
                  <a
                    href="#"
                    className="text-extra-dark-gray text-uppercase text-extra-dark-gray-hover text-medium alt-font font-weight-500 d-block line-height-26px"
                  >
                    Oil & Gas Wells Remedial Services
                  </a>
                  <div className="position-relative">
                    <span>Solutions</span>
                    <div className="interactive-banners-box-sub-title">
                      <a
                        href="/solutions"
                        className="btn btn-link thin btn-large text-shamrock-green"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end interactive banner item */}
            {/* start interactive banner item */}
            <div
              className="col md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="interactive-banners-style-08 box-shadow-large bg-white h-100 border-radius-6px overflow-hidden">
                <div className="interactive-banners-box-image">
                  <a href="/solutions#drilling">
                    <img
                      src={
                        require("../media/pexels-pixabay-162568.jpg").default
                      }
                      alt=""
                    />
                    <div className="btn btn-white btn-rounded">
                      <i className="fas fa-arrow-right" />
                    </div>
                    <div className="interactive-banners-box-hover opacity-full-dark bg-transparent-gradient-shamrock-green-light-orange" />
                  </a>
                </div>
                <div className="interactive-banners-box-content padding-35px-all text-center xs-padding-25px-all">
                  <a
                    href="#"
                    className="text-extra-dark-gray text-uppercase text-extra-dark-gray-hover text-medium alt-font font-weight-500 d-block line-height-26px"
                  >
                    Drilling Services
                  </a>
                  <div className="position-relative">
                    <span>Solutions</span>
                    <div className="interactive-banners-box-sub-title">
                      <a
                        href="/solutions"
                        className="btn btn-link thin btn-large text-shamrock-green"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end interactive banner item */}
            {/* start interactive banner item */}
            <div
              className="col xs-margin-15px-bottom wow animate__fadeIn"
              data-wow-delay="0.4s"
            >
              <div className="interactive-banners-style-08 box-shadow-large bg-white h-100 border-radius-6px overflow-hidden">
                <div className="interactive-banners-box-image">
                  <a href="/solutions#equipmentrental">
                    <img
                      src={
                        require("../media/pexels-pixabay-209251.jpg").default
                      }
                      alt=""
                    />
                    <div className="btn btn-white btn-rounded">
                      <i className="fas fa-arrow-right" />
                    </div>
                    <div className="interactive-banners-box-hover opacity-full-dark bg-transparent-gradient-shamrock-green-light-orange" />
                  </a>
                </div>
                <div className="interactive-banners-box-content padding-35px-all text-center xs-padding-25px-all">
                  <a
                    href="#"
                    className="text-extra-dark-gray text-uppercase text-extra-dark-gray-hover text-medium alt-font font-weight-500 d-block line-height-26px"
                  >
                    Equipment Rental Services
                  </a>
                  <div className="position-relative">
                    <span>Solutions</span>
                    <div className="interactive-banners-box-sub-title">
                      <a
                        href="/solutions"
                        className="btn btn-link thin btn-large text-shamrock-green"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end interactive banner item */}
            {/* start interactive banner item */}
            {/* end interactive banner item */}
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section className="wow animate__fadeIn">
        <div className="container">
          <div className="row margin-8-rem-bottom md-margin-5-rem-bottom xs-margin-3-rem-bottom">
            <div className="col-12 col-xl-4 col-lg-5 col-md-6 sm-margin-5-rem-bottom xs-margin-2-rem-bottom">
              <h4 className="alt-font font-weight-600 text-extra-dark-gray letter-spacing-minus-1px margin-30px-bottom">
                Health Safety & Security
              </h4>
              <p className="w-90 sm-w-100">
                It is the application of preventive and risk-based approaches
                that cover all our project phases.
              </p>
            </div>
            <div className="col-12 col-lg-6 offset-xl-2 offset-lg-1 col-md-6 margin-30px-bottom">
              {/* start progress bar item */}
              <div className="progress progress-step-style-01 margin-4-half-rem-bottom sm-margin-6-rem-bottom">
                <span className="progress-title alt-font text-small text-extra-dark-gray text-uppercase font-weight-500">
                  Oil & Gas Wells Services
                </span>
                <div
                  className="progress-bar bg-gradient-shamrock-green-light-orange"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span className="alt-font text-small text-extra-dark-gray font-weight-500">
                    100%
                  </span>
                </div>
              </div>
              {/* end progress bar item */}
              {/* start progress bar item */}
              <div className="progress progress-step-style-01 margin-4-half-rem-bottom sm-margin-6-rem-bottom">
                <span className="progress-title alt-font text-small text-extra-dark-gray text-uppercase font-weight-500">
                  Drilling Services
                </span>
                <div
                  className="progress-bar bg-gradient-shamrock-green-light-orange"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span className="alt-font text-small text-extra-dark-gray font-weight-500">
                    100%
                  </span>
                </div>
              </div>
              {/* end progress bar item */}
              {/* start progress bar item */}
              <div className="progress progress-step-style-01">
                <span className="progress-title alt-font text-small text-extra-dark-gray text-uppercase font-weight-500">
                  Rental Services
                </span>
                <div
                  className="progress-bar bg-gradient-shamrock-green-light-orange"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span className="alt-font text-small text-extra-dark-gray font-weight-500">
                    100%
                  </span>
                </div>
              </div>
              {/* end progress bar item */}
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center">
            {/* start feature box item */}
            <div className="col col-sm-9 md-margin-40px-bottom xs-margin-30px-bottom wow animate__fadeIn">
              <div className="feature-box feature-box-left-icon">
                <div className="feature-box-icon">
                  <i className="line-icon-Navigation-LeftWindow icon-medium text-shamrock-green margin-35px-bottom md-margin-15px-bottom sm-margin-10px-bottom" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                    Safety First
                  </span>
                  <p className="w-80 lg-w-100 md-w-90 sm-w-100">
                    Provide a safe and healthy working environment for all
                    employees
                  </p>
                </div>
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div
              className="col col-sm-9 md-margin-40px-bottom xs-margin-30px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="feature-box feature-box-left-icon">
                <div className="feature-box-icon">
                  <i className="line-icon-Cursor-Click2 icon-medium text-shamrock-green margin-35px-bottom md-margin-15px-bottom sm-margin-10px-bottom" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                    Cost-Effective Safety
                  </span>
                  <p className="w-80 lg-w-100 md-w-90 sm-w-100">
                    Reduce occupational injuries and illnesses by implementing
                    cost-effective safety and health programmes
                  </p>
                </div>
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div
              className="col col-sm-9 wow animate__fadeIn"
              data-wow-delay="0.4s"
            >
              <div className="feature-box feature-box-left-icon">
                <div className="feature-box-icon">
                  <i className="line-icon-Gear-2 icon-medium text-shamrock-green margin-35px-bottom md-margin-15px-bottom sm-margin-10px-bottom" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                    Health Excellence
                  </span>
                  <p className="w-80 lg-w-100 md-w-90 sm-w-100">
                    Promote a constant commitment to achieving safety and health
                    excellence throughout GANKCO
                  </p>
                </div>
              </div>
            </div>
            {/* end feature box item */}
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      {/* <section className="bg-light-gray wow animate__fadeIn">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-12 col-lg-6 col-md-9 p-0 md-margin-30px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="position-relative">
                <div
                  className="swiper-container slider-one-slide black-move"
                  data-slider-options='{ "slidesPerView": 1, "loop": true, "pagination": { "el": ".swiper-pagination", "clickable": true }, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "autoplay": { "delay": 4500, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide padding-15px-all">
                      <div className="h-100 bg-white box-shadow position-relative">
                        <img
                          src="images/home-business-corporate-img-01.jpg"
                          alt=""
                        />
                        <div className="padding-4-half-rem-lr padding-3-half-rem-tb feature-box feature-box-left-icon-middle last-paragraph-no-margin lg-padding-2-half-rem-lr sm-padding-4-rem-lr xs-padding-2-rem-all">
                          <div className="feature-box-icon margin-40px-right lg-margin-35px-right xs-margin-15px-right">
                            <h4 className="alt-font font-weight-600 text-extra-dark-gray mb-0">
                              01
                            </h4>
                          </div>
                          <div className="feature-box-content padding-40px-left border-left border-width-2px border-color-shamrock-green lg-padding-35px-left xs-padding-15px-left">
                            <span className="text-extra-dark-gray alt-font font-weight-500 d-block text-extra-medium margin-5px-bottom">
                              Unlimited power customization
                            </span>
                            <p>
                              Lorem ipsum dolor sit amet consectetur do eiusmod
                              tempor incididunt elit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide padding-15px-all">
                      <div className="h-100 bg-white box-shadow position-relative">
                        <img
                          src="images/home-business-corporate-img-02.jpg"
                          alt=""
                        />
                        <div className="padding-4-half-rem-lr padding-3-half-rem-tb feature-box feature-box-left-icon-middle last-paragraph-no-margin lg-padding-2-half-rem-lr sm-padding-4-rem-lr xs-padding-2-rem-all">
                          <div className="feature-box-icon margin-40px-right lg-margin-35px-right xs-margin-15px-right">
                            <h4 className="alt-font font-weight-600 text-extra-dark-gray mb-0">
                              02
                            </h4>
                          </div>
                          <div className="feature-box-content padding-40px-left border-left border-width-2px border-color-shamrock-green lg-padding-35px-left xs-padding-15px-left">
                            <span className="text-extra-dark-gray alt-font font-weight-500 d-block text-extra-medium margin-5px-bottom">
                              Powerful creatives designer
                            </span>
                            <p>
                              Lorem ipsum dolor sit amet consectetur do eiusmod
                              tempor incididunt elit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide padding-15px-all">
                      <div className="h-100 bg-white box-shadow position-relative">
                        <img
                          src="images/home-business-corporate-img-03.jpg"
                          alt=""
                        />
                        <div className="padding-4-half-rem-lr padding-3-half-rem-tb feature-box feature-box-left-icon-middle last-paragraph-no-margin lg-padding-2-half-rem-lr sm-padding-4-rem-lr xs-padding-2-rem-all">
                          <div className="feature-box-icon margin-40px-right lg-margin-35px-right xs-margin-15px-right">
                            <h4 className="alt-font font-weight-600 text-extra-dark-gray mb-0">
                              03
                            </h4>
                          </div>
                          <div className="feature-box-content padding-40px-left border-left border-width-2px border-color-shamrock-green lg-padding-35px-left xs-padding-15px-left">
                            <span className="text-extra-dark-gray alt-font font-weight-500 d-block text-extra-medium margin-5px-bottom">
                              Advanced customization options
                            </span>
                            <p>
                              Lorem ipsum dolor sit amet consectetur do eiusmod
                              tempor incididunt elit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next-nav swiper-button-next slider-navigation-style-08 dark">
                  <i className="feather icon-feather-arrow-right text-extra-large" />
                </div>
                <div className="swiper-button-previous-nav swiper-button-prev slider-navigation-style-08 dark">
                  <i className="feather icon-feather-arrow-left text-extra-large" />
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-5 offset-lg-1 col-md-9 wow animate__fadeInRight"
              data-wow-delay="0.2s"
            >
              <h4 className="alt-font cd-headline slide font-weight-600 text-extra-dark-gray letter-spacing-minus-1px line-height-40px margin-40px-bottom cd-headline sm-w-75 sm-line-height-30px xs-w-80 xs-margin-20px-bottom">
                <span className="p-0 d-block">Hand crafted pixel </span>
                <span className="cd-words-wrapper">
                  <b className="text-decoration-line-bottom-thick padding-5px-bottom is-visible">
                    perfect design
                  </b>
                  <b className="text-decoration-line-bottom-thick padding-5px-bottom">
                    perfect layout
                  </b>
                  <b className="text-decoration-line-bottom-thick padding-5px-bottom">
                    perfect color
                  </b>
                </span>
              </h4>
              <p className="w-90 md-w-100 margin-30px-bottom">
                Lorem ipsum dolor sit amet consectetur adipiscing elit do
                eiusmod tempor incididunt ut labore et dolore magna ut enim ad
                minim veniam nostrud exercitation.
              </p>
              <ul className="w-90 list-style-01 font-weight-500 text-extra-dark-gray lg-w-100 sm-w-85 xs-w-100">
                <li>
                  <i className="fas fa-check text-extra-medium-gray" /> Advanced
                  customization theme options
                  <span className="list-hover bg-white box-shadow-small border-radius-5px" />
                </li>
                <li>
                  <i className="fas fa-check text-extra-medium-gray" />
                  Manage and share your workspace
                  <span className="list-hover bg-white box-shadow-small border-radius-5px" />
                </li>
                <li>
                  <i className="fas fa-check text-extra-medium-gray" />
                  Powerful theme for creatives designer
                  <span className="list-hover bg-white box-shadow-small border-radius-5px" />
                </li>
                <li>
                  <i className="fas fa-check text-extra-medium-gray" />
                  Browse amazing popular social features
                  <span className="list-hover bg-white box-shadow-small border-radius-5px" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
      {/* end section */}
      {/* start section */}
      {/* <section className="bg-light-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 col-md-8 text-center margin-5-rem-bottom md-margin-4-rem-bottom wow animate__fadeIn">
              <h4 className="alt-font font-weight-600 text-extra-dark-gray letter-spacing-minus-1px">
                Meet the people
              </h4>
              <p className="w-80 mx-auto md-w-100 mb-0">
                Lorem ipsum dolor amet consectetur adipiscing elit eiusmod
                tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center">
            <div
              className="col team-style-01 text-center md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <figure className="border-radius-5px">
                <div className="team-member-image">
                  <img alt="" src="images/home-events-conference-img-11.jpg" />
                  <div className="team-overlay bg-transparent-gradient-shamrock-green-light-orange" />
                </div>
                <figcaption className="align-items-center justify-content-center d-flex flex-column padding-20px-lr padding-30px-tb">
                  <span className="team-title d-block alt-font text-white">
                    Alexander Harvard
                  </span>
                  <span className="team-sub-title text-small d-block text-white text-uppercase">
                    Co Founder
                  </span>
                  <div className="social-icon w-100 position-absolute bottom-30px left-0px">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="text-white"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="text-white"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      className="text-white"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div
              className="col team-style-01 text-center md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn"
              data-wow-delay="0.4s"
            >
              <figure className="border-radius-5px">
                <div className="team-member-image">
                  <img alt="" src="images/home-events-conference-img-07.jpg" />
                  <div className="team-overlay bg-transparent-gradient-shamrock-green-light-orange" />
                </div>
                <figcaption className="align-items-center justify-content-center d-flex flex-column padding-20px-lr padding-30px-tb">
                  <span className="team-title d-block alt-font text-white">
                    Bryan Jonhson
                  </span>
                  <span className="team-sub-title text-small d-block text-white text-uppercase">
                    Manager
                  </span>
                  <div className="social-icon w-100 position-absolute bottom-30px left-0px">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="text-white"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="text-white"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      className="text-white"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div
              className="col team-style-01 text-center xs-margin-15px-bottom wow animate__fadeIn"
              data-wow-delay="0.6s"
            >
              <figure className="border-radius-5px">
                <div className="team-member-image">
                  <img alt="" src="images/home-events-conference-img-08.jpg" />
                  <div className="team-overlay bg-transparent-gradient-shamrock-green-light-orange" />
                </div>
                <figcaption className="align-items-center justify-content-center d-flex flex-column padding-20px-lr padding-30px-tb">
                  <span className="team-title d-block alt-font text-white">
                    Jemmy Watson
                  </span>
                  <span className="team-sub-title text-small d-block text-white text-uppercase">
                    Designer
                  </span>
                  <div className="social-icon w-100 position-absolute bottom-30px left-0px">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="text-white"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="text-white"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      className="text-white"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div
              className="col team-style-01 text-center wow animate__fadeIn"
              data-wow-delay="0.8s"
            >
              <figure className="border-radius-5px">
                <div className="team-member-image">
                  <img alt="" src="images/home-events-conference-img-09.jpg" />
                  <div className="team-overlay bg-transparent-gradient-shamrock-green-light-orange" />
                </div>
                <figcaption className="align-items-center justify-content-center d-flex flex-column padding-20px-lr padding-30px-tb">
                  <span className="team-title d-block alt-font text-white">
                    Jeremy Dupont
                  </span>
                  <span className="team-sub-title text-small d-block text-white text-uppercase">
                    Manager
                  </span>
                  <div className="social-icon w-100 position-absolute bottom-30px left-0px">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="text-white"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="text-white"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      className="text-white"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section> */}
      {/* end section */}
      {/* start section */}
      {/* <section className="bg-light-gray wow animate__fadeIn">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 col-md-8 text-center margin-5-rem-bottom md-margin-3-rem-bottom">
              <h4 className="alt-font font-weight-600 text-extra-dark-gray letter-spacing-minus-1px">
                Interesting articles
              </h4>
              <p className="w-80 mx-auto md-w-100 mb-0">
                Lorem ipsum dolor amet consectetur adipiscing elit eiusmod
                tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 blog-content">
              <ul className="blog-grid blog-wrapper grid grid-loading grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large">
                <li className="grid-sizer" />
                <li className="grid-item wow animate__fadeIn">
                  <div className="blog-post border-radius-5px bg-white box-shadow-medium">
                    <div className="blog-post-image bg-medium-slate-blue">
                      <a href="blog-post-layout-01.html" title>
                        <img src="images/blog-img79.jpg" alt="" />
                      </a>
                      <a
                        href="blog-masonry.html"
                        className="blog-category alt-font"
                      >
                        Creative
                      </a>
                    </div>
                    <div className="post-details padding-3-rem-lr padding-2-half-rem-tb">
                      <a
                        href="blog-masonry.html"
                        className="alt-font text-small text-shamrock-green-hover d-inline-block margin-10px-bottom"
                      >
                        18 February 2020
                      </a>
                      <a
                        href="blog-post-layout-01.html"
                        className="alt-font font-weight-500 text-extra-medium text-extra-dark-gray text-shamrock-green-hover margin-15px-bottom d-block"
                      >
                        Never give in except to convictions good sense
                      </a>
                      <p>
                        Lorem ipsum is simply dummy text printing typesetting
                        industry lorem ipsum been dummy...
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          className="avtar-image"
                          src="images/avtar28.jpg"
                          alt=""
                        />
                        <span className="alt-font text-small mr-auto">
                          By{" "}
                          <a
                            href="blog-masonry.html"
                            className="text-shamrock-green-hover"
                          >
                            Torrie asai
                          </a>
                        </span>
                        <a
                          href="blog-post-layout-01.html"
                          className="blog-like alt-font text-extra-small text-shamrock-green-hover"
                        >
                          <i className="far fa-heart" />
                          <span>28</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="grid-item wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <div className="blog-post border-radius-5px bg-white box-shadow-medium">
                    <div className="blog-post-image bg-medium-slate-blue">
                      <a href="blog-post-layout-02.html" title>
                        <img src="images/blog-img80.jpg" alt="" />
                      </a>
                      <a
                        href="blog-masonry.html"
                        className="blog-category alt-font"
                      >
                        Concept
                      </a>
                    </div>
                    <div className="post-details padding-3-rem-lr padding-2-half-rem-tb">
                      <a
                        href="blog-masonry.html"
                        className="alt-font text-small text-shamrock-green-hover d-inline-block margin-10px-bottom"
                      >
                        09 January 2020
                      </a>
                      <a
                        href="blog-post-layout-02.html"
                        className="alt-font font-weight-500 text-extra-medium text-extra-dark-gray text-shamrock-green-hover margin-15px-bottom d-block"
                      >
                        Simplicity is the ultimate sophistication
                      </a>
                      <p>
                        Lorem ipsum is simply dummy text printing typesetting
                        industry lorem ipsum been dummy...
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          className="avtar-image"
                          src="images/avtar27.jpg"
                          alt=""
                        />
                        <span className="alt-font text-small mr-auto">
                          By{" "}
                          <a
                            href="blog-masonry.html"
                            className="text-shamrock-green-hover"
                          >
                            Walton smith
                          </a>
                        </span>
                        <a
                          href="blog-post-layout-02.html"
                          className="blog-like alt-font text-extra-small text-shamrock-green-hover"
                        >
                          <i className="far fa-heart" />
                          <span>30</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="grid-item wow animate__fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div className="blog-post border-radius-5px bg-white box-shadow-medium">
                    <div className="blog-post-image bg-medium-slate-blue">
                      <a href="blog-post-layout-03.html" title>
                        <img src="images/blog-img81.jpg" alt="" />
                      </a>
                      <a
                        href="blog-masonry.html"
                        className="blog-category alt-font"
                      >
                        Nature
                      </a>
                    </div>
                    <div className="post-details padding-3-rem-lr padding-2-half-rem-tb">
                      <a
                        href="blog-masonry.html"
                        className="alt-font text-small text-shamrock-green-hover d-inline-block margin-10px-bottom"
                      >
                        12 December 2020
                      </a>
                      <a
                        href="blog-post-layout-03.html"
                        className="alt-font font-weight-500 text-extra-medium text-extra-dark-gray text-shamrock-green-hover margin-15px-bottom d-block"
                      >
                        People ignore designs that ignore people
                      </a>
                      <p>
                        Lorem ipsum is simply dummy text printing typesetting
                        industry lorem ipsum been dummy...
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          className="avtar-image"
                          src="images/avtar29.jpg"
                          alt=""
                        />
                        <span className="alt-font text-small mr-auto">
                          By{" "}
                          <a
                            href="blog-masonry.html"
                            className="text-shamrock-green-hover"
                          >
                            Bill gardner
                          </a>
                        </span>
                        <a
                          href="blog-post-layout-03.html"
                          className="blog-like alt-font text-extra-small text-shamrock-green-hover"
                        >
                          <i className="far fa-heart" />
                          <span>23</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <a
                href="blog-masonry.html"
                className="btn btn-link thin btn-extra-large text-extra-dark-gray margin-70px-top d-inline-block md-margin-40px-top sm-margin-20px-top"
              >
                View all articles
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="padding-100px-tb md-padding-75px-tb sm-padding-50px-tb wow animate__fadeIn">
        <div className="container">
          <div className="row align-items-center row-cols-1 row-cols-lg-4 row-cols-sm-2 client-logo-style-02">
            <div className="col text-center sm-no-margin wow animate__fadeIn">
              <a href="#" className="client-logo">
                <img alt="" src="images/company-logo-09.png" />
              </a>
            </div>
            <div
              className="col text-center sm-no-margin wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <a href="#" className="client-logo">
                <img alt="" src="images/company-logo-02.png" />
              </a>
            </div>
            <div
              className="col text-center sm-no-margin wow animate__fadeIn"
              data-wow-delay="0.4s"
            >
              <a href="#" className="client-logo">
                <img alt="" src="images/company-logo-06.png" />
              </a>
            </div>
            <div
              className="col text-center sm-no-margin wow animate__fadeIn"
              data-wow-delay="0.6s"
            >
              <a href="#" className="client-logo">
                <img alt="" src="images/company-logo-07.png" />
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <section
        className="fix-background padding-100px-tb md-padding-75px-tb sm-padding-50px-tb"
        style={{
          backgroundImage: `url("${
            require("../media/pexels-christina-morillo-1181396.jpg").default
          }")`,
        }}
      >
        <div className="opacity-medium bg-dark-slate-blue" />
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-xl-7 col-md-8 col-sm-10 text-center text-md-left sm-margin-30px-bottom">
              <h4 className="alt-font font-weight-600 text-white mb-0">
                Gearing your company through an Innovative strategy
              </h4>
            </div>
            <div className="col-12 col-xl-5 col-md-4 text-center text-md-right">
              <a
                href="/downloads/Gankco-Energy-Company-Profile.docx.pdf"
                className="btn btn-large btn-gradient-shamrock-green-light-orange"
              >
                <i className=" fas fa-download mr-3" /> Company Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
