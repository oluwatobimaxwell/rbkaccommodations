/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useState } from "react";
import numeral from "numeral"
import { Layout } from "../components/Layout";

export const Rooms = () => {
  return (
    <Layout
      subtitle={"Rooms"}
      title={"RKB Rooms"}
      boxheader={`navbar top-space navbar-expand-lg navbar-light bg-white header-light fixed-top header-reverse-scroll navbar-boxed`}
    >
      <RoomsInner />
    </Layout>
  );
};

export const RoomsInner = () => {
  const roomsavailable = require("../data/rooms.json");

  return (
    <section class="border-top border-width-1px border-color-medium-gray padding-six-lr lg-no-padding-lr">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {/* start filter navigation */}
            <ul className="blog-filter grid-filter nav nav-tabs justify-content-center border-0 text-uppercase font-weight-500 alt-font padding-6-rem-bottom md-padding-4-half-rem-bottom sm-padding-2-rem-bottom">
              <li className="nav active">
                <a data-filter="*" href="#">
                  All
                </a>
              </li>
              <li className="nav">
                <a data-filter=".female" href="#">
                  Female
                </a>
              </li>

            </ul>
            {/* end filter navigation */}
          </div>
        </div>
      </div>
      <div className="container-fluid rooms">
        <div className="row">
          <div className="col-12 blog-content">

            <ul className="blog-clean blog-wrapper grid grid-loading grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large">
              <li className="grid-sizer" />
              {roomsavailable.filter(({ category }) => category === "female").map((item, i) => {
                return (
                  <RoomItemCard item={item} key={"shhshs-wehe-" + i} />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


export const RoomItemCard = ({ item, id }) => {
  return (
    <li
      className={`grid-item ${item.category} wow animate__fadeIn`}
    >
      <div
        className="position-relative h-100 d-flex align-items-center cover-background text-center"
        style={{
          backgroundImage: `url("${item?.mediadata ? item?.mediadata?.location + "/image-" + (item?.mediadata?.index || 0) + ".jpg" : item?.image}")`,
          borderRadius: 8,
        }}
      >
        <div className="opacity-extra-medium-2 bg-extra-dark-gray" />
        <div className="position-relative z-index-1 w-100 padding-4-rem-tb lg-padding-5-rem-tb">
          <div style={{ display: "flex", margin: "auto", width: "60%" }}>
            {item.option_prices.option1 && (
              <span className="w-50 d-block text-extra-medium text-white opacity-6 alt-font letter-spacing-2px text-uppercase margin-25px-bottom">
                <div className="option-price-value">N{numeral(item.option_prices.option1 * 1000).format('0.00a')}</div>
                {/* <div className="option-price-value strike-through">N{item.option_prices.option1}k</div> */}
                <label className="option-price-label">
                  Option 1
                </label>
              </span>
            )}
            {item.option_prices.option2 && (
              <span className="w-50 d-block text-extra-medium text-white opacity-6 alt-font letter-spacing-2px text-uppercase margin-25px-bottom">
                <div className="option-price-value">N{numeral(item.option_prices.option2 * 1000).format('0.00a')}</div>
                {/* <div className="option-price-value strike-through">N{item.option_prices.option2}k</div> */}
                <label className="option-price-label">
                  Option 2
                </label>
              </span>
            )}
          </div>
          <h4 className="alt-font text-white text-uppercase w-90 lg-w-85 mx-auto margin-35px-bottom font-weight-500 " style={item?.twoinroom ? { marginBottom: 0 } : {}}>
            {item.name}
            {item.twoinroom && (
              <>
                <br />
                <div style={{ fontSize: 14, marginTop: -12 }}>[Two In A Room]</div>
              </>
            )}
            {item.roominfo && (
              <>
                <br />
                <div style={{ fontSize: 14, marginTop: -12 }}>[{item.roominfo}]</div>
              </>
            )}
          </h4>

          <div
            style={{
              borderRadius: "8px",
              display: "flex",
              width: "max-content",
              margin: "auto",
              marginBottom: "15px",
            }}
          >
            <div
              className="padding-3-half-rem-lr padding-10px-tb border-right border-color-white-transparent xl-padding-1-half-rem-lr md-padding-3-rem-lr xs-no-padding xs-margin-20px-bottom xs-no-border-right"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <span className="alt-font font-weight-500 text-white d-inline-block d-sm-block margin-5px-bottom xs-margin-10px-right xs-no-margin-bottom margin-5px-right">
                <i className="feather  icon-feather-user   " />
              </span>
              <span
                className="alt-font text-medium text-uppercase d-inline-block d-sm-block"
                style={{ color: "#c9c7c5" }}
              >
                {item.category?.includes("female") ? "Female" : "Male"}
              </span>
            </div>
            <div
              className="padding-3-half-rem-lr padding-10px-tb border-color-white-transparent xl-padding-1-half-rem-lr md-padding-3-rem-lr xs-no-padding xs-margin-30px-bottom xs-no-border-right"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <span className="alt-font font-weight-500 text-white d-inline-block d-sm-block margin-5px-bottom xs-margin-10px-right xs-no-margin-bottom margin-5px-right">
                <i className="feather icon-feather-map-pin " />
              </span>
              <span
                className="alt-font text-medium text-uppercase d-inline-block d-sm-block"
                style={{ color: "#c9c7c5" }}
              >
                {item.location}
              </span>
            </div>
          </div>
          {item.cta_booknow ? (
            <a
              href={`https://wa.me/+2349058350009?text=Hello, I would like to book the ${item.category.toUpperCase()},%20${item.name}%20@${item.location}.`}
              target="_blank"
              className={" btn btn-medium btn-fancy btn-round-edge-small btn-box-shadow btn-white section-link"}
              rel="noreferrer" 
            >
              Book Now
            </a>
          ) : (
            <a
              href={`/single-room/${item.name}?location=${item.location}`}
              className={
                " btn btn-medium btn-fancy btn-round-edge-small btn-box-shadow btn-white section-link"
              }
            >
              View Room
            </a>
          )}

          <ModalBox id={"view-room-" + id}>
            <SingleRoom room={item} />
          </ModalBox>
        </div>
      </div>
    </li>
  )
}


export const ModalBox = ({ children, id, width }) => {
  return (
    <div
      id={id}
      className={`white-popup-block col-xl-${width || 8
        } col-lg-7 col-sm-9  p-0 mx-auto mfp-hide border-radius-15px m-4`}
    >
      {children}
    </div>
  );
};

export const SingleRoom = ({ room = {}, revId = "" }) => {
  const [data, setdata] = useState({});
  const [showbook, setshowbook] = useState(false);
  const [option, setoption] = useState("option1")


  const toggleView = useCallback(() => {
    window[revId] = !(window[revId] === true);
    const book = document.getElementById("box-area-book-" + revId);
    const box = document.getElementById("box-area-" + revId);
    if (window[revId]) {
      book.classList.add("show-in");
      book.classList.remove("show-out");
      box.classList.add("show-out");
      box.classList.remove("show-in");
    } else {
      book.classList.add("show-out");
      book.classList.remove("show-in");
      box.classList.add("show-in");
      box.classList.remove("show-out");
    }
  }, [revId]);

  const addEvent = useCallback(() => {
    window[revId] = false;
    const btk = document.getElementById("bookbtn-" + revId);

    if (btk) {
      btk.addEventListener("click", (e) => {
        e.preventDefault();
        toggleView();
      });
    }
  }, [revId, toggleView]);

  useEffect(() => {
    if (room?.name) {
      setdata(room);
      setTimeout(() => {
        addEvent();
      }, 2000);
    }
  }, [addEvent, room, room?.name]);





  if (!data?.name) return <div />;
  return (
    <div className="room">
      <section
        className="p-0 home-architecture no-transition"
        style={{ borderRadius: "6px 6px 0 0" }}
      >
        <article className="content">
          <div
            id="rev_slider_27_1_wrapper"
            className="rev_slider_wrapper fullscreen-container"
            data-alias="cleanproductshowcase"
            data-source="gallery"
            style={{ background: "#1c1c1c", padding: "0px", height: 500 }}
          >
            {/* START REVOLUTION SLIDER 5.4.3.3 fullscreen mode */}
            <SwiperSlide slides={data} book={() => setshowbook(!showbook)} />
          </div>
        </article>
      </section>
      <section
        style={{ borderRadius: "0 0 6px 6px" }}
        className="sm-no-padding-top p-5 bg-extra-medium-slate-blue"
      >
        <div className="containerx">
          <div className="row justify-content-center">

            {/* <div className="col-12 col-lg-5 col-lg-6  bottom-0px right-0px d-flex flex-column flex-sm-row padding-1-half-rem-tb padding-2-rem-lr xl-padding-2-rem-lr lg-padding-3-rem-tb sm-position-relative sm-no-padding-top text-center text-sm-left architecture-overlap" style={{borderRadius: 8}}>
              
            </div>

       */}
            <div
              className="col-12 col-lg-6 col-md-6 architecture fancy-text-box-style-01 text-center text-md-left md-margin-50px-bottom sm-margin-50px-bottom wow animate__fadeIn"
              data-wow-delay="0.1s"
            >
              <div className="architecture-overlap" style={{ borderRadius: 8, display: "flex", margin: 0, marginBottom: 15 }}>
                <div className="padding-3-half-rem-lr padding-10px-tb border-right border-color-white-transparent xl-padding-1-half-rem-lr md-padding-3-rem-lr xs-no-padding xs-margin-20px-bottom xs-no-border-right">
                  <span className="alt-font font-weight-500 text-white d-inline-block d-sm-block margin-5px-bottom xs-margin-10px-right xs-no-margin-bottom">
                    <i className="feather  icon-feather-user   " />
                  </span>
                  <span className="alt-font text-medium text-uppercase d-inline-block d-sm-block">
                    {data?.category}
                  </span>
                </div>
                <div className="padding-3-half-rem-lr padding-10px-tb border-color-white-transparent xl-padding-1-half-rem-lr md-padding-3-rem-lr xs-no-padding xs-margin-30px-bottom xs-no-border-right">
                  <span className="alt-font font-weight-500 text-white d-inline-block d-sm-block margin-5px-bottom xs-margin-10px-right xs-no-margin-bottom">
                    <i className="feather icon-feather-map-pin " />
                  </span>
                  <span className="alt-font text-medium text-uppercase d-inline-block d-sm-block">
                    {data?.location}
                  </span>
                </div>
              </div>



              <div className="fancy-text-box padding-2-half-rem-all md-padding-4-rem-all xs-padding-30px-all" style={{ minHeight: 300 }} >
                <div className="fancy-text-box-border-left border-color-white-transparent" style={{ borderRadius: 8 }} />

                <div className="w-100">
                  <a onClick={() => setoption("option1")} href="#" className={`w-50 btn btn-large btn-${option === "option1" ? "transparent-" : ""}white btn-slide-up-bg d-table d-lg-inline-block lg-margin-15px-bottom md-margin-auto-lr`}>Option 1<span className={option === "option1" ? "bg-white" : "bg-transparent"} /></a>
                  <a onClick={() => alert("option2")} href="#" className={`w-50 btn btn-large btn-${option === "option2" ? "transparent-" : ""}white btn-slide-up-bg d-table d-lg-inline-block lg-margin-15px-bottom md-margin-auto-lr`}>Option 2<span className={option === "option2" ? "bg-white" : "bg-transparent"} /></a>
                </div>
                <h1
                  className="alt-font w-100 text-center fancy-text-content font-weight-600 text-parrot-green d-inline-block align-middle letter-spacing-minus-5px"
                  style={{ fontSize: 75, marginTop: 60 }}
                >
                  N{data?.option_prices[option]}K
                </h1>
                <div className="alt-font w-100 text-center text-extra-medium text-white text-left d-inline-block align-middle w-90px mx-auto line-height-24px position-relative top-minus-4px">
                  Per Student Per Semester
                </div>
                <div className="fancy-text-box-border-right border-color-white-transparent" style={{ borderRadius: 8 }} />
              </div>
              <button
                id={"bookbtn-" + revId}
                className="bookbtn btn btn-large mt-4 btn-transparent-white w-100 d-lg-inline-block lg-margin-15px-bottom md-margin-auto-lr pointer-events"
                style={{ borderRadius: 8 }}
              >
                Book Now
              </button>
            </div>

            <div
              className={`col-12 col-lg-6 col-md-10 text-center text-md-left wow animate__fadeIn show-out`}
              data-wow-delay="0.5s"
              id={"box-area-book-" + revId}
            >
              <BookingForm data={data} id={revId} toggle={() => toggleView()} />
            </div>

            <div
              className={`col-12 col-lg-6 col-md-10 text-center text-md-left wow animate__fadeIn show-in`}
              id={"box-area-" + revId}
              data-wow-delay="0.5s"
            >
              {(data?.contents && data?.contents?.length > 0 && (
                <div className="row border-top border-width-1px ">
                  {/* start tab navigation */}
                  <div className="col-12 p-0 tab-style-07">
                    <ul className="nav nav-tabs justify-content-center text-center text-uppercase font-weight-400 alt-font margin-1-rem-bottom lg-margin-1-rem-bottom border-bottom md-margin-1-rem-bottom">
                      {data.contents.map((content, i) => {
                        return (
                          <li className="nav-item" key={"enumberas-" + i}>
                            <a
                              data-toggle="tab"
                              href={"#tab-" + content.name}
                              className={`nav-link ${i === 0 ? "active" : ""}`}
                            >
                              <i
                                className={`${content.icon}  right-icon mr-3`}
                              ></i>{" "}
                              {content.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                    {/* end tab navigation */}
                  </div>
                  <div className="container">
                    <div className="tab-content">
                      {/* start tab item 
                        tab-pane fade in active show
                        */}
                      {data.contents.map((content, i) => {
                        return (
                          <div
                            id={"tab-" + content.name}
                            className={`tab-pane fade ${i === 0 ? "in active show" : ""
                              }`}
                            key={"tab-" + content.name}
                          >
                            <p
                              className="w-100 lg-w-100 m-0 room-read-content"
                              dangerouslySetInnerHTML={{
                                __html: content.content,
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )) || (
                  <p
                    className="w-100 lg-w-100 m-0 room-read-content"
                    dangerouslySetInnerHTML={{
                      __html:
                        data.content ||
                        `<div class="empty-content"> <i class="feather  icon-feather-alert-circle" ></i> Empty content!!!</div>`,
                    }}
                  />
                )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const SwiperSlide = ({ slides = {} }) => {
  useEffect(() => {
    window.$ &&
      window.$(".popup-with-form").on("click", () => {
        window.A();
      });
  }, [slides]);

  return (
    <div className="container-fluid position-relative">
      <div className="row">
        <div
          className="swiper-container white-move one-fifth-screen sm-h-500px lg-h-720px"
          data-slider-options='{ "slidesPerView": 1, "loop": true, "pagination": { "el": ".swiper-pagination", "clickable": true }, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "autoplay": { "delay": 6000, "disableOnInteraction": false },  "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'
        >
          <div className="swiper-wrapper">
            {(slides?.media &&
              slides?.media.length > 0 &&
              slides?.media.map((media, i) => {
                return (
                  <div
                    key={"swiper-item-slider-" + i}
                    className="swiper-slide cover-background"
                    style={{
                      backgroundImage: `url("${media.image}")`,
                    }}
                  >
                    <div className="opacity-light opacity-4 bg-extra-dark-gray" />
                    <div className="container h-100">
                      <div className="row justify-content-center h-100">
                        <div className="col-12 col-lgxl-10 col-lg-12 d-flex flex-column justify-content-center h-100 text-center">
                          <h2 className="alt-font font-weight-300 text-white ">
                            <span className="font-weight-600">
                              {slides.name}
                            </span>{" "}
                            <br />
                            {media?.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })) || (
                <div
                  className="swiper-slide cover-background"
                  style={{
                    backgroundImage: `url("${slides.image}")`,
                  }}
                >
                  <div className="opacity-light opacity-4 bg-extra-dark-gray" />
                  <div className="container h-100">
                    <div className="row justify-content-center h-100">
                      <div className="col-12 col-lgxl-10 col-lg-12 d-flex flex-column justify-content-center h-100 text-center">
                        <h2 className="alt-font font-weight-300 text-white margin-4-rem-bottom">
                          <span className="font-weight-600">{slides.name}</span>{" "}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
          {/* start slider arrow */}

          <div class="swiper-button-next-nav swiper-button-next rounded-circle slider-navigation-style-07 dark">
            <i class="ti-arrow-right text-extra-small"></i>
          </div>
          <div class="swiper-button-previous-nav swiper-button-prev rounded-circle slider-navigation-style-07 dark">
            <i class="ti-arrow-left text-extra-small"></i>
          </div>
          {/* end slider arrow */}

          {/* start slider pagination */}

          <div className="swiper-pagination swiper-light-pagination" />
          {/* end slider pagination */}
        </div>
      </div>
    </div>
  );
};

export const BookingForm = ({ id, toggle }) => {
  const [form, setform] = useState({});


  const submit = useCallback((e) => {
    e.style.cursor = "wait !important";
    var d = document.getElementById("book-form-" + id);
    if (d) {
      var c = d.getElementsByTagName("input");
      var k = {};
      for (let j = 0; j < c.length; j++) {
        const field = c.item(j);
        k = { ...k, [field.name]: field.value };
      }
      console.log(k);
      alert("Thank you for your reservation! We will contact you shortly!");
      toggle();
    }
  }, [id, toggle]);

  useEffect(() => {
    const btn = document.getElementById("submit-btn-" + id);
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        submit(btn);
      });
    }
  }, [id, submit]);

  return (
    <div className="row align-items-center justify-content-center text-center text-md-left">
      <div className="col-12 col-md-10 col-lg-10 offset-lg-1 notify-form padding-80px-bottom md-padding-30px-bottom sm-no-padding-bottom">
        <h4 className="alt-font text-white font-weight-600 margin-15px-bottom">
          Reserve this room
        </h4>

        <form
          id={"book-form-" + id}
          className="newsletter-email position-relative w-100 sm-w-100 d-inline-block"
        >
          <input
            className="border-radius-5px extra-large-input m-0 required"
            name="name"
            placeholder="Your name"
            type="text"
            onInput={(e) => setform({ ...form, name: e.target.value })}
          />
          <input
            className="border-radius-5px extra-large-input m-0 required mt-3"
            name="email"
            placeholder="Your email address"
            type="email"
            onInput={(e) => setform({ ...form, email: e.target.value })}
          />
          <input
            className="border-radius-5px extra-large-input m-0 required mt-3"
            name="phone"
            placeholder="Your phone number"
            type="tel"
            onInput={(e) => setform({ ...form, phone: e.target.value })}
          />
        </form>
        <button
          id={"submit-btn-" + id}
          class="btn btn-large mt-4 btn-white border-radius-5px d-table d-lg-inline-block lg-margin-15px-bottom md-margin-auto-lr w-100"
        >
          Submit
        </button>
        <div className="form-results d-none border-radius-5px" />
      </div>
    </div>
  );
};
