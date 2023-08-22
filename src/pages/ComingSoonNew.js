import React from "react";
import { Layout } from "../components/Layout";

export const Home = ({ match }) => {
  const type = (match?.params?.type || "").replace(/home/g, "");
  const source = require("../data/home.json");
  const data = source[type];
  let { slider = [] } = data || source.female;


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
                        <div className="bg-transparent-white padding-7-rem-tb padding-8-rem-lr xl-padding-5-rem-tb xl-padding-6-rem-lr xs-padding-2-half-rem-all" style={{borderRadius: 8, margin: 20, }}>
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
    </Layout>
  );
};
