import React from "react";
import { Layout } from "../components/Layout";

export const About = () => {
  const people = [
    {
      image: "",
      name: "Naomi Peters",
      position: "Managing Director",
      note: "Sound commercial, negotiation, communication and interpersonal skills with over 15 years in leadership and strategic management in business frontiers, human capacity development and Oil & Gas.  Experienced in multitasking, working under pressure and adhering to strict deadlines.  Proficient in project monitoring and evaluation, as well as determination and implementation of the needed modifications.",
      linkedin: "",
      instagram: "",
      facebook: "",
    },
    {
      image: "",
      name: "Abiodun E. Olaoye",
      position: "Head, Engineering & Operations",
      note: "A top-performing and result-oriented Petroleum Engineer with 26 years’ experience in Well Engineering, Brown field development, Asset Management and Production Enhancement. Adept at managing well site operations, identifying production improvement opportunities, contributing to successful exploration and development efforts with focus on cost reduction and ROI. ",
      linkedin: "",
      instagram: "",
      facebook: "",
    },
    {
      image: "",
      name: "Andrew Agenmomen",
      position: "Engineering Manager",
      note: "Experienced Well Engineer with strong technical and operations management skill. With Oil & Gas industry experience of 25 years, successfully lead and delivered drilling, workover and production enhancement projects in UK, Netherlands, Middle East and Nigeria.",
      linkedin: "",
      instagram: "",
      facebook: "",
    },
    {
      image: "",
      name: "Adaora Ayoade",
      position: "Head, Business Support, HR & Administration",
      note: "A seasoned and technically skilled business professional with a proven record of accomplishment.  Sound commercial, negotiation, managerial, communication and interpersonal skills. Versatile skill-set developed over 20 years of successful extensive experience at the corporate level in human resources, budgeting, sales, marketing, training, development and administration.  ",
      linkedin: "",
      instagram: "",
      facebook: "",
    },
  ];
  return (
    <Layout
      subtitle={"About our company"}
      title={"we are an innovative energy solutions provider"}
      bgimage={require("../media/pexels-mohammad-danish-891059.jpg").default}
      jumpto="about"
    >
      {/* start section */}
      <section id="about" className="bg-light-gray">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 pr-lg-0 d-flex md-margin-30px-bottom">
              <div
                className="w-100 md-h-700px sm-h-550px xs-h-450px cover-background"
                style={{
                  backgroundImage: `url("${
                    require("../media/pexels-thisisengineering-3862365.jpg")
                      .default
                  }")`,
                }}
              />
            </div>
            <div className="col-12 col-lg-4 col-md-6 pl-lg-0 d-flex sm-margin-30px-bottom">
              <div className="justify-content-center w-100 d-flex flex-column bg-fast-blue padding-5-half-rem-lr lg-padding-3-rem-lr md-padding-4-rem-all">
                <span className="text-extra-large alt-font font-weight-500 text-white margin-20px-bottom d-block">
                  We provide engineering solutions to the Oil & Gas (Upstream)
                  sector
                </span>
                <p className="text-white opacity-7">
                  with specialities in remedial services for oil & gas wells,
                  oilfield equipment sales and rentals. Our organization is
                  built on the foundation of HSE, Quality and excellent project
                  delivery.
                </p>
                <a
                  href="/solutions"
                  className="btn btn-large btn-link text-white text-white-hover align-self-start"
                >
                  Company overview
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6">
              <img
                src={
                  require("../media/pexels-christina-morillo-1181396.jpg")
                    .default
                }
                alt=""
              />
              <div className="bg-white padding-3-half-rem-lr padding-3-rem-tb lg-padding-2-rem-all md-padding-2-half-rem-all sm-padding-4-rem-all last-paragraph-no-margin">
                <span className="alt-font text-extra-dark-gray font-weight-500 margin-10px-bottom d-block">
                  Great & Experience Team
                </span>
                <p>
                  With a team of experienced oil & gas professionals, we provide
                  support and respond to our customers’ needs at short notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section */}
      <section className=" wow animate__fadeIn">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center">
            {/* start fancy text box item */}
            <div className="col col-md-9 md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn">
              <div className="feature-box h-100 feature-box-left-icon-middle padding-4-rem-all bg-white box-shadow-small box-shadow-large-hover border-radius-8px overflow-hidden last-paragraph-no-margin lg-padding-2-half-rem-all md-padding-4-rem-all">
                <div className="feature-box-icon margin-20px-right">
                  <i className="line-icon-Transform icon-medium text-fast-blue" />
                </div>
                <div className="feature-box-content line-height-22px">
                  <div className="text-extra-dark-gray alt-font font-weight-500 line-height-20px">
                    Our Vision
                  </div>
                  <span className="text-small alt-font">
                    To be a global leader
                  </span>
                </div>
                <div className="bg-medium-light-gray margin-25px-top w-100 h-1px" />
                <p className="margin-25px-top">
                  To be a global leader in the energy service industry
                  contributing to the local capacity development with emphasis
                  on HSE, timely project execution and social responsibility.
                </p>
                <h3 className="alt-font opacity-2 font-weight-500 letter-spacing-minus-2px position-absolute bottom-minus-20px sm-bottom-minus-15px right-50px m-0">
                  Vision
                </h3>
              </div>
            </div>
            {/* end fancy text box item */}
            {/* start fancy text box item */}
            <div
              className="col col-md-9 md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="feature-box h-100 feature-box-left-icon-middle padding-4-rem-all bg-white box-shadow-small box-shadow-large-hover border-radius-8px overflow-hidden last-paragraph-no-margin lg-padding-2-half-rem-all md-padding-4-rem-all">
                <div className="feature-box-icon margin-20px-right">
                  <i className="line-icon-Gear-2 icon-medium text-fast-blue" />
                </div>
                <div className="feature-box-content line-height-22px">
                  <div className="text-extra-dark-gray alt-font font-weight-500 line-height-20px">
                    Our Mission
                  </div>
                  <span className="text-small alt-font">
                    To provide excellent service
                  </span>
                </div>
                <div className="bg-medium-light-gray margin-25px-top w-100 h-1px" />
                <p className="margin-25px-top">
                  To provide excellent service delivery by building strong
                  partnership with our customers, bringing innovations through
                  collaborations with our alliance partners.
                </p>
                <h3 className="alt-font opacity-2 font-weight-500 letter-spacing-minus-2px position-absolute bottom-minus-20px sm-bottom-minus-15px right-50px m-0">
                  Mission
                </h3>
              </div>
            </div>
            {/* end fancy text box item */}
            {/* start fancy text box item */}
            <div
              className="col col-md-9 wow animate__fadeIn"
              data-wow-delay="0.4s"
            >
              <div className="feature-box h-100 feature-box-left-icon-middle padding-4-rem-all bg-white box-shadow-small box-shadow-large-hover border-radius-8px overflow-hidden last-paragraph-no-margin lg-padding-2-half-rem-all md-padding-4-rem-all">
                <div className="feature-box-icon margin-20px-right">
                  <i className="line-icon-Heart icon-medium text-fast-blue" />
                </div>
                <div className="feature-box-content line-height-22px">
                  <div className="text-extra-dark-gray alt-font font-weight-500 line-height-20px">
                    Our Core Values
                  </div>
                  <span className="text-small alt-font">
                    Our strength, our dynamism
                  </span>
                </div>
                <div className="bg-medium-light-gray margin-25px-top w-100 h-1px" />
                <p className="margin-25px-top">
                  Our strength lies in our dynamism, commitment to improvement,
                  and relationships we’ve built over the years both with and
                  outside the country.
                </p>
                <h3 className="alt-font opacity-2 font-weight-500 letter-spacing-minus-2px position-absolute bottom-minus-20px sm-bottom-minus-15px right-50px m-0">
                  Values
                </h3>
              </div>
            </div>
            {/* end fancy text box item */}
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section */}
      {/* <section className="wow animate__fadeIn">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-xl-7 col-lg-8 col-md-7 col-sm-10 text-center text-md-left sm-margin-30px-bottom">
              <h5 className="alt-font text-extra-dark-gray font-weight-500 mb-0">
                <strong className="text-fast-blue text-decoration-underline">
                  25 years
                </strong>{" "}
                we have created websites for global brands. Our success story.
              </h5>
            </div>
            <div className="col-12 col-xl-3 offset-xl-2 col-lg-4 col-md-5 text-center text-md-right">
              <a
                href="https://www.youtube.com/watch?v=g0f_BRYJLJE"
                className="popup-youtube btn btn-extra-large btn-gradient-fast-blue-purple btn-round-edge"
              >
                <i
                  className="fa fa-arrow-right line-icon-Video-5 icon-large d-inline-block no-margin-left margin-15px-right align-middle"
                  aria-hidden="true"
                />{" "}
                <div className="d-inline-block text-left align-middle">
                  <span className="opacity-6 text-medium d-block font-weight-500 line-height-15px">
                    Story video
                  </span>
                  Watch
                </div>
              </a>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 client-logo-style-01 align-items-center margin-7-half-rem-top sm-margin-5-rem-top">
            <div className="col text-center margin-30px-bottom sm-margin-15px-bottom wow animate__fadeIn">
              <div className="client-box padding-15px-all border border-color-dark-gray">
                <a href="#">
                  <img
                    className="client-box-image"
                    src="images/client-logo-35.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div
              className="col text-center margin-30px-bottom sm-margin-15px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="client-box padding-15px-all border border-color-dark-gray">
                <a href="#">
                  <img
                    className="client-box-image"
                    src="images/client-logo-37.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div
              className="col text-center margin-30px-bottom sm-margin-15px-bottom wow animate__fadeIn"
              data-wow-delay="0.4s"
            >
              <div className="client-box padding-15px-all border border-color-dark-gray">
                <a href="#">
                  <img
                    className="client-box-image"
                    src="images/client-logo-33.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div
              className="col text-center margin-30px-bottom sm-margin-15px-bottom wow animate__fadeIn"
              data-wow-delay="0.6s"
            >
              <div className="client-box padding-15px-all border border-color-dark-gray">
                <a href="#">
                  <img
                    className="client-box-image"
                    src="images/client-logo-38.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col text-center sm-margin-15px-bottom wow animate__fadeIn">
              <div className="client-box padding-15px-all border border-color-dark-gray">
                <a href="#">
                  <img
                    className="client-box-image"
                    src="images/client-logo-39.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div
              className="col text-center sm-margin-15px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="client-box padding-15px-all border border-color-dark-gray">
                <a href="#">
                  <img
                    className="client-box-image"
                    src="images/client-logo-34.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div
              className="col text-center xs-margin-15px-bottom wow animate__fadeIn"
              data-wow-delay="0.4s"
            >
              <div className="client-box padding-15px-all border border-color-dark-gray">
                <a href="#">
                  <img
                    className="client-box-image"
                    src="images/client-logo-40.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div
              className="col text-center wow animate__fadeIn"
              data-wow-delay="0.6s"
            >
              <div className="client-box padding-15px-all border border-color-dark-gray">
                <a href="#">
                  <img
                    className="client-box-image"
                    src="images/client-logo-36.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* end section */}
      {/* start section */}
      <section className=" bg-light-gray wow animate__fadeIn">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 col-sm-8 text-center margin-5-rem-bottom md-margin-3-rem-bottom">
              <h5 className="alt-font text-extra-dark-gray font-weight-500 margin-2-rem-bottom sm-w-100">
                Integrity, Perseverance, Innovation and Learning
              </h5>
              <span className="text-extra-medium margin-15px-bottom alt-font d-block w-100">
                are the four corners of our organizational culture upon which
                the company is built.
              </span>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 justify-content-center">
            <div className="col col-md-9 margin-30px-bottom xs-margin-15px-bottom">
              <div className="feature-box h-100 feature-box-left-icon border-radius-5px bg-white box-shadow-small feature-box-dark-hover overflow-hidden padding-4-rem-all">
                <div className="feature-box-icon">
                  <i className="line-icon-Navigation-LeftWindow icon-medium text-fast-blue" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                    Strong Ethical Behaviour
                  </span>
                  <p>
                    Our individual and corporate actions are based on strong
                    ethical behaviour, building trust as we deliver best in
                    class solutions.
                  </p>
                </div>
                <div className="feature-box-overlay bg-gradient-fast-blue-purple" />
              </div>
            </div>
            <div className="col col-md-9 margin-30px-bottom xs-margin-15px-bottom">
              <div className="feature-box h-100 feature-box-left-icon border-radius-5px bg-white box-shadow-small feature-box-dark-hover overflow-hidden padding-4-rem-all">
                <div className="feature-box-icon">
                  <i className="line-icon-Cursor-Click2 icon-medium text-fast-blue" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                    Drive Towards Success
                  </span>
                  <p>
                    We continuously drive towards success in spite of known and
                    unknown challenges.
                  </p>
                </div>
                <div className="feature-box-overlay bg-gradient-fast-blue-purple" />
              </div>
            </div>
            <div className="col col-md-9 md-margin-30px-bottom xs-margin-15px-bottom">
              <div className="feature-box h-100 feature-box-left-icon border-radius-5px bg-white box-shadow-small feature-box-dark-hover overflow-hidden padding-4-rem-all">
                <div className="feature-box-icon">
                  <i className="line-icon-Like-2 icon-medium text-fast-blue" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                    Service Delivery
                  </span>
                  <p>
                    It is our believe that a continuously improving our process
                    underpins an innovative approach to excellent service
                    delivery.
                  </p>
                </div>
                <div className="feature-box-overlay bg-gradient-fast-blue-purple" />
              </div>
            </div>
            <div className="col col-md-9">
              <div className="feature-box h-100 feature-box-left-icon border-radius-5px bg-white box-shadow-small feature-box-dark-hover overflow-hidden padding-4-rem-all">
                <div className="feature-box-icon">
                  <i className="line-icon-One-FingerTouch icon-medium text-fast-blue" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                    Corporate Responsibilities
                  </span>
                  <p>
                    All these create a learning environment where we can attain
                    our full potentials as individuals and as a corporate body.
                  </p>
                </div>
                <div className="feature-box-overlay bg-gradient-fast-blue-purple" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section className="wow animate__fadeIn">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 md-margin-50px-bottom wow animate__fadeIn">
              {/* start slider */}
              <div
                className="swiper-container white-move border-all border-width-12px border-color-white box-shadow-large border-radius-8px"
                data-slider-options='{ "slidesPerView": 1, "loop": true, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'
              >
                <div className="swiper-wrapper">
                  {/* start slider item */}
                  <div className="swiper-slide">
                    <img src="images/about-us-img-08.jpg" alt="" />
                  </div>
                  {/* end slider item */}
                  {/* start slider item */}
                  <div className="swiper-slide">
                    <img src="images/about-us-img-09.jpg" alt="" />
                  </div>
                  {/* end slider item */}
                  {/* start slider item */}
                  <div className="swiper-slide">
                    <img src="images/about-us-img-10.jpg" alt="" />
                  </div>
                  {/* end slider item */}
                </div>
                {/* start slider navigation */}
                <div className="swiper-button-next-nav swiper-button-next slider-navigation-style-01 light">
                  <i
                    className="feather icon-feather-arrow-right"
                    aria-hidden="true"
                  />
                </div>
                <div className="swiper-button-previous-nav swiper-button-prev slider-navigation-style-01 light">
                  <i
                    className="feather icon-feather-arrow-left"
                    aria-hidden="true"
                  />
                </div>
                {/* end slider navigation */}
              </div>
              {/* end slider */}
            </div>
            <div
              className="col-12 col-lg-5 offset-lg-1 wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <h5 className="alt-font text-extra-dark-gray font-weight-500">
                Our Service Philosophy
              </h5>

              <ul className="p-0 list-style-02 margin-2-rem-top margin-3-rem-bottom">
                <li className="margin-15px-bottom">
                  <i
                    className="feather icon-feather-arrow-right-circle text-large text-fast-blue margin-10px-right"
                    aria-hidden="true"
                  />
                  <span className="text-extra-dark-gray alt-font">
                    Understand customers’ needs and proffer appropriate, timely
                    and cost effective solutions without compromising safety
                  </span>
                </li>
                <li className="margin-15px-bottom">
                  <i
                    className="feather icon-feather-arrow-right-circle text-large text-fast-blue margin-10px-right"
                    aria-hidden="true"
                  />
                  <span className="text-extra-dark-gray alt-font">
                    Analyze historical and environmental data to establish
                    performance benchmark
                  </span>
                </li>
                <li className="margin-15px-bottom">
                  <i
                    className="feather icon-feather-arrow-right-circle text-large text-fast-blue margin-10px-right"
                    aria-hidden="true"
                  />
                  <span className="text-extra-dark-gray alt-font">
                    Continuously Improving performance and effectively
                    communicate same to our customers
                  </span>
                </li>
              </ul>
              <a
                href="/contact"
                className="btn btn-medium btn-fast-blue btn-round-edge"
              >
                Get In-touch Now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* start section */}
      <section className="bg-slate-blue overlap-height xs-no-padding wow animate__fadeIn">
        <div className="container xs-no-padding">
          <div className="row align-items-center overlap-gap-section no-margin-lr">
            <div
              className="col-12 col-lg-6 align-self-lg-stretch p-0 cover-background md-h-400px wow animate__fadeIn"
              style={{
                backgroundImage: `url("${
                  require("../media/pexels-thisisengineering-3862365.jpg")
                    .default
                }")`,
              }}
            />
            <div
              className="col-12 col-lg-6 p-0 text-center wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="bg-gradient-sky-blue-pink padding-6-rem-lr padding-7-rem-tb lg-padding-4-rem-lr lg-padding-5-rem-tb md-padding-5-rem-all">
                <a
                  href="https://www.youtube.com/watch?v=Uti2niW2BRA"
                  className="popup-youtube video-icon-box video-icon-large position-relative margin-50px-bottom d-block"
                >
                  <span>
                    <span className="video-icon bg-white">
                      <i className="icon-simple-line-control-play text-gradient-light-purple-light-orange" />
                      <span className="video-icon-sonar">
                        <span className="video-icon-sonar-bfr bg-white opacity-7" />
                        <span className="video-icon-sonar-afr bg-white" />
                      </span>
                    </span>
                  </span>
                </a>
                <span className="text-extra-medium alt-font margin-20px-bottom d-block text-white opacity-7">
                  Committed to Delivering the Best
                </span>
                <h5 className="alt-font text-white font-weight-500 margin-40px-bottom xs-margin-20px-bottom">
                  Deploying World-Class Solutions in Energy and Other Major
                  Sectors
                </h5>
                <a
                  href="/contact"
                  className="btn btn-extra-large btn-link text-white text-extra-dark-gray-hover"
                >
                  Contact Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section className="wow animate__fadeIn pt-md-0 pb-md-0 overflow-visible sm-border-bottom sm-border-color-medium-gray">
        <div className="container">
          <div className="row align-items-center justify-content-center no-margin-lr overlap-section">
            <div className="col-12 box-shadow-medium bg-white align-items-center padding-4-rem-all sm-no-padding-tb sm-padding-15px-lr sm-box-shadow-none">
              <div className="row row-cols-1 row-cols-md-3">
                {/* start counter item */}
                <div className="col border-right border-color-medium-gray text-center sm-no-border-right sm-margin-30px-bottom">
                  <h4
                    className="text-fast-blue alt-font font-weight-500 mb-xl-0 d-inline-block align-middle w-130px lg-w-100 counter"
                    data-speed={2000}
                    data-to={57}
                  />
                  <div className="d-inline-block align-middle text-center text-xl-left">
                    <span className="alt-font text-extra-dark-gray font-weight-500 line-height-14px d-block ">
                      Winning awards
                    </span>
                    <span className="alt-font">For energy solutions</span>
                  </div>
                </div>
                {/* end counter item */}
                {/* start counter item */}
                <div className="col border-right border-color-medium-gray text-center sm-no-border-right sm-margin-30px-bottom">
                  <h4
                    className="text-fast-blue alt-font font-weight-500 mb-xl-0 d-inline-block align-middle w-130px lg-w-100 counter"
                    data-speed={2000}
                    data-to={1947}
                  />
                  <div className="d-inline-block align-middle text-center text-xl-left">
                    <span className="alt-font text-extra-dark-gray font-weight-500 line-height-14px d-block">
                      Working hours
                    </span>
                    <span className="alt-font">Desperate for work</span>
                  </div>
                </div>
                {/* end counter item */}
                {/* start counter item */}
                <div className="col text-center">
                  <h4
                    className="text-fast-blue alt-font font-weight-500 mb-xl-0 d-inline-block align-middle w-130px lg-w-100 counter"
                    data-speed={2000}
                    data-to={765}
                  />
                  <div className="d-inline-block align-middle text-center text-xl-left">
                    <span className="alt-font text-extra-dark-gray font-weight-500 line-height-14px d-block">
                      Happy clients
                    </span>
                    <span className="alt-font">We love clients</span>
                  </div>
                </div>
                {/* end counter item */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section className="wow animate__fadeIn">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 text-center margin-4-half-rem-bottom sm-margin-3-rem-bottom">
              <span className="alt-font text-extra-medium">
                Key Personnel Resume
              </span>
              <h5 className="alt-font text-extra-dark-gray font-weight-500">
                Creative & Innovative people
              </h5>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-4 row-cols-sm-1 justify-content-center">
            {/* start team item */}
            {people.map((person, i) => {
              return (
                <div
                  key={"sksksjsjshsh-wwuwuw-" + i}
                  className="col team-style-02 text-center sm-margin-15px-bottom wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <figure>
                    <div className="team-member-image border-radius-5px overflow-hidden">
                      <img
                        alt=""
                        src={
                          person.image ||
                          require("../media/No-Image-Placeholder.svg").default
                        }
                      />
                      <div className="team-member-details bg-transparent-gradient-light-purple-light-orange padding-2-half-rem-lr align-items-center justify-content-center d-flex flex-column">
                        <div
                          className="text-white text-uppercase alt-font font-weight-500"
                          style={{ fontSize: 12, lineHeight: 1.5 }}
                        >
                          {person.note}
                        </div>
                        {/* <div className="social-icon w-100 position-absolute bottom-40px left-0px">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        className="icon-very-small text-white"
                      >
                        <i aria-hidden="true" className="fab fa-facebook-f" />
                      </a>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        className="icon-very-small text-white"
                      >
                        <i aria-hidden="true" className="fab fa-twitter" />
                      </a>
                      <a
                        href="https://www.dribbble.com/"
                        target="_blank"
                        className="icon-very-small text-white"
                      >
                        <i aria-hidden="true" className="fab fa-dribbble" />
                      </a>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        className="icon-very-small text-white"
                      >
                        <i aria-hidden="true" className="fab fa-linkedin-in" />
                      </a>
                    </div> */}
                      </div>
                    </div>
                    <figcaption className="team-member-position padding-35px-tb text-center">
                      <div className="text-extra-dark-gray alt-font line-height-18px text-medium text-uppercase font-weight-500">
                        {person.name}
                      </div>
                      <span className="text-small text-uppercase">
                        {person.position}
                      </span>
                    </figcaption>
                  </figure>
                </div>
              );
            })}
            {/* end team item */}
          </div>
          <div className="bg-medium-light-gray margin-6-rem-bottom margin-3-rem-top w-100 h-1px" />
          <div className="row align-items-center justify-content-center">
            <div
              className="col-12 col-xl-7 col-md-8 col-sm-10 text-center text-md-left sm-margin-30px-bottom wow animate__fadeIn"
              data-wow-delay="0.1s"
            >
              <h6 className="alt-font text-extra-dark-gray font-weight-500 mb-0 md-w-90 sm-w-100">
                <strong className="text-decoration-underline">
                  Creative thinkers,
                </strong>{" "}
                clever engineers and management superheroes apply for work with
                us.
              </h6>
            </div>
            <div
              className="col-12 col-xl-5 col-md-4 text-center text-md-right wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <a
                href="/career"
                className="btn btn-large btn-round-edge btn-transparent-fast-blue btn-slide-right-bg"
              >
                Join the team
                <span className="bg-fast-blue" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
    </Layout>
  );
};
