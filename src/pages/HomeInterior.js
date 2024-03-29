import React from "react";
import { Layout } from "../components/Layout";
import { ComingSoon } from "./ComingSoon";
import { RoomItemCard } from "./Rooms";

export const HomeInterior = ({ match }) => {
  const type = (match?.params?.type || "").replace(/home/g, "");
  const source = require("../data/home.json");
  const data = source[type];
  let { slider = [], features = [], about, video, image, title, blacktitle, map, bottombg, privatefeatures = [] } = data || source.female;

  const accFeatures = [...features, ...privatefeatures];

  const carousel = require("../data/rooms.json").filter(
    (r) => r.category === type
  );

  const sliderSize = carousel?.length < 3 ? carousel.length : 3;

  if (["male-metroview"].includes(type)) {
    return <ComingSoon
      message="RKB Male Accommodation Coming Soon At Metroview Estate which is built by 1sqmbyDantata and owned by World Health Organization (WHO), right beside Nile university."
    />
  }

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
                      <div className="d-flex flex-column justify-content-end ml-auto w-600px h-100 xl-w-550px sm-w-70 sm-w-100" >
                        <div className="bg-transparent-white padding-7-rem-tb padding-8-rem-lr xl-padding-5-rem-tb xl-padding-6-rem-lr xs-padding-2-half-rem-all" style={{ borderRadius: 8, margin: 20, }}>
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
                                  href="#rooms-in-here"
                                  className="section-link d-inline-block line-height-65px rounded-circle bg-extra-dark-gray w-60px h-60px"
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
              <h6 className="alt-font text-uppercase w-80 text-extra-dark-gray font-weight-700 margin-20px-bottom lg-w-90 md-w-75 md-margin-10px-bottom cursive-me"
              >
                {blacktitle}
              </h6>
              <div className="mt-auto w-70 mx-lg-0">
                <a
                  href="mailto:info@rkbstudentaccommodation.com"
                  className="alt-font text-yellow-ochre-light text-extra-dark-gray-hover text-decoration-line-bottom font-weight-500"
                >
                  info@rkbstudentaccommodation.com
                </a>
                <a
                  href="#rooms-in-here"
                  className="btn btn-fancy btn-small btn-transparent-dark-gray margin-2-rem-top d-table"
                  style={{ borderRadius: 8 }}
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
                {title}
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: about }}
              />
            </div>
            <div className="col-12 col-lg-4 last-paragraph-no-margin">
              <div className="outside-box-bottom position-relative">
                <img
                  src={image}
                  className="wow animate__fadeIn"
                  data-wow-delay="0.5s"
                  alt=""
                  style={{ borderRadius: 8 }}
                />
                {video && (

                  <a
                    href={video}
                    className="bg-penguin-white position-absolute right-0px bottom-minus-25px padding-2-half-rem-all popup-youtube video-icon-box video-icon-medium position-relative wow animate__fadeIn"
                    data-wow-delay="0.5s"
                    style={{ borderRadius: 8 }}
                  >
                    <span>
                      <span className="video-icon bg-extra-dark-gray margin-15px-right">
                        <i className="icon-simple-line-control-play text-white" />
                        <span className="video-icon-sonar">
                          <span className="video-icon-sonar-bfr bg-extra-dark-gray opacity-7" />
                        </span>
                      </span>
                      <span className="video-icon-text alt-font text-extra-dark-gray text-medium text-uppercase font-weight-600">
                        About RKB {type}
                        <br />
                        Accommodation
                      </span>
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      
      {/* start section */}
      {carousel.length ? (
        <section
          id="rooms-in-here"
          className="room bg-penguin-white position-relative padding-thirteen-top lg-padding-nine-top"
        >
          <div className="container">
            <div className="row justify-content-lg-center">
              <div
                className="col-12 overflow-hidden alt-font font-weight-600 text-white text-overlap-style-02 d-none d-xl-block wow animate__fadeInDown"
                data-wow-delay="0.2s"
              >
                RKB
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
                  data-slider-options={`{ "slidesPerView": 1, "spaceBetween": 30, "loop": true, "pagination": { "el": ".swiper-pagination", "clickable": true }, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "autoplay": { "delay": 4500, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "1200": { "slidesPerView": ${sliderSize} }, "992": { "slidesPerView": ${sliderSize} }, "768": { "slidesPerView": 2 } }, "effect": "slide" }`}
                >
                  <div className="swiper-wrapper">
                    {carousel.map((item, i) => {
                      return (
                        <div
                          className="swiper-slide overflow-hidden"
                          key={"sshh-shshs-s" + i}
                        >
                          <RoomItemCard item={item} key={"sh93nshhsw-" + i} />
                        </div>
                      );
                    })}

                  </div>
                  {/* start slider pagination */}
                  <div className="swiper-pagination swiper-light-pagination" style={{ bottom: 15 }} />
                  {/* end slider pagination */}

                </div>
              </div>
            </div>
          </div>
        </section>
      ) : ""}
      {/* end section */}
      {/* end section */}
      {accFeatures.length ? (
        <section id="features" className="bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-12 col-lg-5 col-sm-6 text-center margin-5-half-rem-bottom md-margin-3-rem-bottom wow animate__fadeIn"
                style={{ visibility: "visible", animationName: "fadeIn" }}
              >
                <span className="text-yellow-ochre-light text-uppercase">
                  RKB Accommodation Features
                </span>
                <h4 className="alt-font font-weight-700 text-uppercase text-extra-dark-gray letter-spacing-minus-1px m-0">
                  features & facilities
                </h4>
              </div>
            </div>
            <div className="row row-cols-3 row-cols-lg-5 row-cols-sm-2">
              {/* start feature box item */}
              {(accFeatures).map((item, i) => {
                return (
                  <div
                    className="feature-item-holder col text-center border-radius-6px box-shadow-double-large-hover  transition wow animate__fadeIn"
                    data-wow-delay="0.1s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                      animationName: "fadeIn",
                    }}
                  >
                    <div className="w-100 h-100 feature-item padding-20px-tb border-radius-6px">
                      <div className="feature-box-icon line-height-0px lg-margin-25px-right lg-margin-25px-left">
                        <i className={`${item.icon || " line-icon-Bus"} icon-very-medium text-primary mt-4 mb-4`} />
                      </div>
                      <span className="text-extra-medium font-weight-500 text-extra-dark-gray d-block w-90 mx-auto xs-w-100 text-capitalize">
                        {item.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : ""}


      <section className="p-0 wow animate__fadeIn">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 h-400px p-0 md-h-450px xs-h-300px">
              <iframe
                title="Accommodation Map"
                className="w-100 h-100 filter-grayscale-100"
                src={map}
              />

            </div>
          </div>
        </div>
      </section>

      <section
        className="big-section parallax wow animate__fadeIn"
        data-parallax-background-ratio="0.1"
        style={{
          backgroundImage: `url("${bottombg}")`,
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
                With breakfast & dinner
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
