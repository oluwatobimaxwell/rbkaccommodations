import React from "react";
import { Layout } from "../components/Layout";

export const Home = ({ match }) => {
  const source = require("../data/home.json");
  const data = source[match?.params?.type];
  let { carousel, fancy, slider } = data || source.female;
  return (
    <Layout>
      <section className="p-0 sm-border-bottom border-color-medium-gray mobile-height">
        <div className="container-fluid position-relative">
          <div className="row">
            <div
              className="swiper-container full-screen md-landscape-h-600px white-move"
              data-slider-options='{ "slidesPerView": 1, "loop": true, "pagination": { "el": ".swiper-pagination", "clickable": true }, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "autoplay": { "delay": 5500, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'
            >
              <div className="swiper-wrapper">
                {/* start slider item */}
                {slider.map((item, i) => {
                  return (
                    <div
                      key={"upshh-slider-" + i}
                      className="swiper-slide cover-background"
                      style={{
                        backgroundImage: `url("${item.image}")`,
                      }}
                    >
                      <div className="d-flex flex-column justify-content-end ml-auto w-600px h-100 xl-w-550px sm-w-70 sm-w-100">
                        <div className="bg-white padding-7-rem-tb padding-8-rem-lr xl-padding-5-rem-tb xl-padding-6-rem-lr xs-padding-2-half-rem-all">
                          <div className="col-12 p-0 margin-25px-bottom d-md-inline-block align-items-center justify-content-center">
                            <span className="alt-font text-yellow-ochre-light d-inline-block font-weight-500 align-middle">
                              0{i + 1}
                            </span>
                            <span className="w-35px h-1px d-inline-block align-middle bg-medium-gray margin-15px-left margin-15px-right" />
                            <span className="d-inline-block alt-font text-yellow-ochre-light text-uppercase font-weight-500 align-middle">
                              {item.desc}
                            </span>
                          </div>
                          <div className="col-12 p-0 alt-font justify-content-center margin-10px-bottom">
                            <div className="media">
                              <h3 className="m-0 align-self-center text-extra-dark-gray text-uppercase font-weight-700 letter-spacing-minus-2px w-80">
                                {item.title}
                              </h3>
                              <span className="align-self-center text-center margin-30px-left">
                                <a
                                  href="#"
                                  className="d-inline-block line-height-65px rounded-circle bg-extra-dark-gray w-60px h-60px"
                                >
                                  <i className="feather icon-feather-arrow-right text-extra-large text-white" />
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* start slider arrow */}
              <div className="swiper-button-previous-nav swiper-button-prev slider-navigation-style-05">
                <i className="line-icon-Arrow-OutLeft" />
              </div>
              <div className="swiper-button-next-nav swiper-button-next slider-navigation-style-05">
                <i className="line-icon-Arrow-OutRight" />
              </div>
              {/* end slider arrow */}
              {/* start slider pagination */}
              <div className="swiper-pagination swiper-light-pagination swiper-pagination-dot d-none d-md-block" />
              {/* end slider pagination */}
            </div>
          </div>
        </div>
      </section>
      {/* end slider section */}
      {/* start section */}
      <section className="big-section overflow-visible position-relative z-index-1 wow animate__fadeIn">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-lg-4 col-md-6 col-sm-7 d-flex flex-column md-margin-6-rem-bottom sm-margin-5-rem-bottom wow animate__fadeIn">
              <h6 className="alt-font text-uppercase w-80 text-extra-dark-gray font-weight-700 margin-20px-bottom lg-w-90 md-w-75 md-margin-10px-bottom">
                Accommodation at DAMAC Maison Mall Street
              </h6>
              <div className="mt-auto w-70 mx-lg-0">
                <a
                  href="mailto:hello@rbkaccommodation.com"
                  className="alt-font text-yellow-ochre-light text-extra-dark-gray-hover text-decoration-line-bottom font-weight-500"
                >
                  hello@rbkaccommodation.com
                </a>
                <a
                  href="/contact"
                  className="btn btn-fancy btn-small btn-transparent-dark-gray margin-2-rem-top d-table"
                >
                  Book Now
                </a>
              </div>
            </div>
            <div
              className="col-12 col-lg-4 col-md-6 last-paragraph-no-margin  md-margin-6-rem-bottom sm-margin-50px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
              data-wow-duration="0.3"
            >
              <div className="alt-font text-uppercase text-extra-medium font-weight-600 text-extra-dark-gray margin-25px-bottom sm-margin-15px-bottom">
                Situation at the heart of ABuja
              </div>
              <p className="w-85 xl-w-100">
                Set in the heart of the bustling Downtown Area of Dubai, the
                DAMAC Maison Mall Street offers dynamic city living with
                personalized service and ultimate privacy. It is just a short
                walk to the world’s largest shopping complex, the Dubai Mall,
                with views across the Dubai skyline and the famous Dubai
                Fountains.
              </p>
              <p className="w-85 xl-w-100">
                Crafted for total tranquillity, our luxurious suites provide a
                private Dubai accommodation, where lavish furnishings,
                state-of-the-art entertainment systems, world-class amenities,
                stellar service and stunning views of Dubai entice you to relax
                and unwind. This lush hotel in Downtown Dubai provides the
                perfect location for work and play.
              </p>
            </div>
            <div className="col-12 col-lg-4 last-paragraph-no-margin">
              <div className="outside-box-bottom position-relative">
                <img
                  src={
                    require("../media/rbk/pexels-catherine-augustin-3049121.jpg")
                      .default
                  }
                  className="wow animate__fadeIn"
                  data-wow-delay="0.5s"
                  alt=""
                />
                <a
                  href="https://www.youtube.com/watch?v=g0f_BRYJLJE"
                  className="bg-penguin-white position-absolute right-0px bottom-minus-25px padding-2-half-rem-all popup-youtube video-icon-box video-icon-medium position-relative wow animate__fadeIn"
                  data-wow-delay="0.5s"
                >
                  <span>
                    <span className="video-icon bg-extra-dark-gray margin-15px-right">
                      <i className="icon-simple-line-control-play text-white" />
                      <span className="video-icon-sonar">
                        <span className="video-icon-sonar-bfr bg-extra-dark-gray opacity-7" />
                      </span>
                    </span>
                    <span className="video-icon-text alt-font text-extra-dark-gray text-medium text-uppercase font-weight-600">
                      About RBK
                      <br />
                      Accommodation
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section */}
      <section className="bg-penguin-white position-relative padding-thirteen-top lg-padding-nine-top">
        <div className="container">
          <div className="row justify-content-lg-center">
            <div
              className="col-12 overflow-hidden alt-font font-weight-600 text-white text-overlap-style-02 d-none d-xl-block wow animate__fadeInDown"
              data-wow-delay="0.2s"
            >
              RBK
            </div>
            <div className="col-12 col-lg-6 col-sm-8 text-lg-center margin-6-rem-bottom lg-margin-4-rem-bottom md-margin-3-rem-bottom xs-margin-5-rem-bottom wow animate__fadeIn">
              <span className="alt-font font-weight-500 text-yellow-ochre-light text-uppercase d-block margin-20px-bottom">
                check these out
              </span>
              <h5 className="alt-font font-weight-700 text-uppercase text-extra-dark-gray letter-spacing-minus-1px m-0">
                Available rooms for booking
              </h5>
            </div>
          </div>

          <div className="row">
            <div
              className="col-12 px-lg-0 wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div
                className="swiper-container portfolio-classic position-relative"
                data-slider-options='{ "slidesPerView": 1, "spaceBetween": 30, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "autoplay": { "delay": 3000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "1200": { "slidesPerView": 4 }, "992": { "slidesPerView": 3 }, "768": { "slidesPerView": 2 } }, "effect": "slide" }'
              >
                <div className="swiper-wrapper">
                  {carousel.map((item, i) => {
                    return (
                      <div
                        className="swiper-slide overflow-hidden"
                        key={"sshh-shshs-s" + i}
                      >
                        <div className="portfolio-box text-center">
                          <div className="portfolio-image bg-parrot-green">
                            <a href={item.link}>
                              <img src={item.image} alt="" />
                            </a>
                            <div className="portfolio-hover align-items-center justify-content-center d-flex">
                              <div className="portfolio-icon">
                                <a
                                  href={item.link}
                                  className="border-all border-width-2px rounded-circle border-color-white bg-white"
                                >
                                  <i className="ti-arrow-right text-extra-dark-gray" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="portfolio-caption padding-30px-tb sm-padding-15px-tb">
                            <a
                              href={item.link}
                              className="alt-font text-black font-weight-800 text-uppercase d-inline-block margin-5px-bottom"
                            >
                              {item.name}
                            </a>
                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">
                              {item.desc}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section
        className="overflow-visible cover-background wow animate__fadeIn"
        style={{
          backgroundImage: `url("${
            require("../media/images/home-interior-design-about-bg.jpg").default
          }")`,
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-12 col-lg-6 col-md-10 margin-twenty-five-top lg-margin-30px-top md-margin-9-rem-bottom sm-margin-9-rem-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div
                className="position-absolute right-15px bottom-0px w-65 lg-bottom-minus-50px xs-bottom-minus-25px"
                data-parallax-layout-ratio="1.1"
              >
                <img
                  src={
                    require("../media/rbk/pexels-cats-coming-707579.jpg")
                      .default
                  }
                  alt=""
                />
              </div>
              <div className="w-50 overflow-hidden position-relative md-w-70">
                <img
                  src={
                    require("../media/rbk/pexels-victoria-borodinova-3315291.jpg")
                      .default
                  }
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-12 col-lg-5 offset-lg-1 col-md-10 wow animate__fadeIn"
              data-wow-delay="0.4s"
            >
              <div className="alt-font font-weight-500 margin-30px-bottom media">
                <span className="w-30px h-1px bg-yellow-ochre-light opacity-7 align-self-center margin-20px-right" />
                <div className="media-body">
                  <span className="text-yellow-ochre-light text-uppercase">
                    Best of it's Kind
                  </span>
                </div>
              </div>
              <h5 className="alt-font text-uppercase text-extra-dark-gray font-weight-700 w-85 margin-30px-bottom xl-w-100">
                Dining at DAMAC Maison Mall Street
              </h5>
              <p className="w-75 xl-w-100">
                The apartments in DAMAC Maison Mall street include 350 fully
                furnished suites, available in deluxe, one, two, and three
                bedrooms. The icing on the cake is the convenience of staying in
                a luxury hotel near The Dubai Mall.
              </p>
              <a
                href="/contact"
                className="btn btn-fancy btn-large btn-dark-gray margin-20px-top"
              >
                Book NOw
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section */}
      <section
        className="bg-extra-dark-gray fancy-box-background big-section cover-background p-0 wow animate__fadeIn"
        style={{
          backgroundImage: `url("${
            require("../media/rbk/pexels-m&w-studios-90317.jpg").default
          }")`,
        }}
      >
        <div className="opacity-very-light opacity-3 bg-extra-dark-gray" />
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-xl-4 row-cols-sm-2 align-items-center justify-content-center">
            {/* start fancy text box item */}
            {/* end fancy text box item */}

            {fancy.map((item, i) => {
              return (
                // <div className="swiper-slide">
                <div
                  className="col p-0 fancy-box-item border-right border-color-dark-white-transparent lg-border-bottom xs-no-border-right wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <div
                    className="bg-banner-image cover-background"
                    style={{
                      backgroundImage: `url("${item.image}")`,
                    }}
                  >
                    <div className="opacity-very-light opacity-3 bg-black" />
                  </div>
                  <div className="fancy-text-box h-800px fancy-text-box-style-03 xl-h-500px xs-h-250px">
                    <div className="fancy-text-content padding-5-rem-lr padding-4-half-rem-tb xl-padding-2-rem-lr xl-padding-1-half-rem-tb lg-padding-4-rem-all">
                      <h6 className="alt-font font-weight-600 text-white text-uppercase margin-20px-bottom w-80 xl-w-100 lg-w-60 md-w-80">
                        {item.title}
                      </h6>
                      <div className="fancy-text-box-bottom justify-content-center">
                        <div className="media">
                          <p className="m-0 align-self-center w-75 text-white opacity-6">
                            {item.desc}
                          </p>
                          <span className="align-self-center text-center ml-auto">
                            <a
                              href="#"
                              className="d-inline-block line-height-40px rounded-circle bg-extra-dark-gray h-40px w-40px"
                            >
                              <i className="feather icon-feather-arrow-right text-white" />
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="feature-box-overlay bg-yellow-ochre-light" />
                    </div>
                  </div>
                </div>
                // </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* end section */}
      <section className="p-0 wow animate__fadeIn">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 h-400px p-0 md-h-450px xs-h-300px">
              <iframe
                className="w-100 h-100 filter-grayscale-100"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15761.04702017564!2d7.4723841!3d9.0398707!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a445dad6c5a0a80!2sThe%20Boolean%20Technologies%20Nig%20Ltd!5e0!3m2!1sen!2sng!4v1621033934847!5m2!1sen!2sng"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="big-section parallax wow animate__fadeIn"
        data-parallax-background-ratio="0.1"
        style={{
          backgroundImage: `url("${
            require("../media/rbk/pexels-m&w-studios-90317.jpg").default
          }")`,
        }}
      >
        <div className="opacity-full bg-extra-dark-gray" />
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-12 col-xl-7 col-lg-8 col-md-10 text-center wow animate__zoomIn"
              data-wow-delay="0.4s"
            >
              <span className="alt-font font-weight-500 text-white text-uppercase letter-spacing-2px opacity-5 d-block margin-30px-bottom md-margin-20px-bottom">
                comfort enhances your study
              </span>
              <h2 className="alt-font font-weight-500 text-white letter-spacing-minus-2px margin-50px-bottom md-margin-40px-bottom">
                With complementary breakfast & dinner
              </h2>
              <a
                href="/contact"
                className="btn btn-fancy btn-large btn-gradient-tan-geraldine btn-round-edge-small"
              >
                Request Booking Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
