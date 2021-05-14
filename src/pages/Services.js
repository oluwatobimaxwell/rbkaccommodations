/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { Layout } from "../components/Layout";

export const Services = () => {
  return (
    <Layout
      subtitle={"Our Solutions & Services"}
      title={"we provide high quality services."}
      bgimage={require("../media/pexels-skitterphoto-633850.jpg").default}
      jumpto="services"
    >
      <section
        id="services"
        className="position-relative background-no-repeat parallax overlap-height md-no-overlap-section"
        data-parallax-background-ratio="0.5"
      >
        <div className="opacity-medium bg-white" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mx-lg-auto overlap-gap-section sm-margin-30px-bottom">
              <div className="media align-items-center alt-font text-extra-medium font-weight-500 margin-30px-bottom">
                <span className="w-30px h-1px bg-fast-blue margin-20px-right" />
                <div className="media-body text-fast-blue">
                  100% indigenous Nigerian company
                </div>
              </div>
              <h5 className="alt-font font-weight-500 text-extra-dark-gray m-0">
                We provide engineering solutions to the Oil & Gas (Upstream)
                sector.
              </h5>
            </div>
            <div className="col-12 col-lg-5 mx-lg-auto col-md-6 overlap-gap-section">
              <p className="w-90">
                Gankco’s Quality Management System drives our commitment to
                provision of services that guarantee customers satisfaction such
                that their requirements are processed efficiently and correctly.
              </p>
              <a
                href="https://www.youtube.com/watch?v=Uti2niW2BRA"
                className="popup-youtube video-icon-box video-icon-small position-relative margin-20px-top d-inline-block"
              >
                <span>
                  <span className="video-icon bg-fast-blue margin-15px-right">
                    <i className="icon-simple-line-control-play text-white" />
                    <span className="video-icon-sonar">
                      <span className="video-icon-sonar-bfr bg-fast-blue opacity-7" />
                      <span className="video-icon-sonar-afr bg-fast-blue" />
                    </span>
                  </span>
                  <span className="video-icon-text alt-font text-medium text-extra-dark-gray text-uppercase text-decoration-line-bottom d-inline-block font-weight-500 align-middle">
                    Watch a projects
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section className="bg-light-gray overflow-visible wow animate__fadeIn">
        <div className="container">
          <div className="z-index-6 overlap-section margin-8-rem-bottom sm-margin-7-rem-bottom">
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center">
              {/* start feature box item */}
              <div className="col col-sm-8 md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn">
                <div className="feature-box text-left h-100 feature-box-dark-hover box-shadow-small border-radius-5px bg-white overflow-hidden padding-4-rem-all">
                  <div className="feature-box-icon">
                    <i className="line-icon-Cursor-Click2 icon-large text-fast-blue margin-35px-bottom md-margin-15px-bottom" />
                  </div>
                  <div className="feature-box-content">
                    <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray text-extra-medium">
                      Oil & Gas Wells Remedial Services
                    </span>
                    <p>
                      <ul className="list-style-03">
                        <li>Well Intervention & Production Enhancement</li>
                        <li>
                          Re-entry and Workover Operations (Planning,
                          Engineering and Support)
                        </li>
                        <li>
                          Wireline Data Acquisition Services (Cased Hole
                          Logging, Borehole Survey)
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div className="feature-box-overlay bg-fast-blue" />
                </div>
              </div>
              {/* end feature box item */}
              {/* start feature box item */}
              <div
                className="col col-sm-8 md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn"
                data-wow-delay="0.2s"
              >
                <div className="feature-box text-left h-100 feature-box-dark-hover box-shadow-small border-radius-5px bg-white overflow-hidden padding-4-rem-all">
                  <div className="feature-box-icon">
                    <i className="line-icon-Archery-2 icon-large text-fast-blue margin-35px-bottom md-margin-15px-bottom" />
                  </div>
                  <div className="feature-box-content">
                    <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray text-extra-medium">
                      Drilling Services
                    </span>
                    <p>
                      <ul className="list-style-03">
                        <li>Front End Well Engineering Support</li>
                        <li>Other Drilling Support Services</li>
                        <li>Wellhead Sales & Services</li>
                      </ul>
                    </p>

                    {/* <a
                      href="our-story.html"
                      className="btn btn-extra-large btn-link text-extra-dark-gray"
                    >
                      Read more
                    </a> */}
                  </div>
                  <div className="feature-box-overlay bg-fast-blue" />
                </div>
              </div>
              {/* end feature box item */}
              {/* start feature box item */}
              <div
                className="col col-sm-8 wow animate__fadeIn"
                data-wow-delay="0.4s"
              >
                <div className="feature-box text-left h-100 feature-box-dark-hover box-shadow-small border-radius-5px bg-white overflow-hidden padding-4-rem-all">
                  <div className="feature-box-icon">
                    <i className="line-icon-Medal-2 icon-large text-fast-blue margin-35px-bottom md-margin-15px-bottom" />
                  </div>
                  <div className="feature-box-content">
                    <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray text-extra-medium">
                      Equipment Rental Services
                    </span>
                    <p>
                      <ul className="list-style-03">
                        <li>Slickline, Coiled Tubing and Wireline Equipment</li>
                        <li>OCTG</li>
                      </ul>
                    </p>

                    {/* <a
                      href="our-story.html"
                      className="btn btn-extra-large btn-link text-extra-dark-gray"
                    >
                      Read more
                    </a> */}
                  </div>
                  <div className="feature-box-overlay bg-fast-blue" />
                </div>
              </div>
              {/* end feature box item */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-12 col-md-4 offset-lg-1 d-flex flex-column flex-md-row align-items-center sm-margin-20px-bottom wow animate__fadeIn"
              data-wow-delay="0.4s"
            >
              <span className="w-30 h-1px bg-fast-blue margin-25px-right sm-w-90px sm-no-margin-right sm-margin-20px-bottom d-none d-md-inline-block" />
              <h2
                className="vertical-counter d-inline-flex font-weight-600 letter-spacing-minus-1px text-extra-dark-gray md-letter-spacing-normal mb-0"
                data-to={365 * (new Date().getFullYear() - 2017)}
              />
            </div>
            <div
              className="col-12 col-lg-6 col-sm-8 text-center wow animate__fadeIn"
              data-wow-delay="0.4s"
            >
              <h6 className="alt-font font-weight-500 text-extra-dark-gray text-center text-md-left d-inline-block w-90 mb-0 md-w-100">
                We started this company {new Date().getFullYear() - 2017} years
                ago out of a desire to provide engineering solutions to the Oil
                & Gas.
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section
        className="position-relative pb-0 overflow-visible wow animate__fadeIn"
        data-wow-delay="0.4s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 margin-70px-top lg-margin-30px-top md-margin-50px-bottom">
              <div className="w-70 border-radius-6px overflow-hidden position-relative">
                <img
                  src={
                    require("../media/pexels-anna-shvets-5324965.jpg").default
                  }
                  alt=""
                  style={{ maxHeight: 500 }}
                />
                <div className="opacity-extra-medium bg-gradient-sky-blue-pink" />
              </div>
              <div
                className="position-absolute right-15px bottom-0px w-70"
                data-parallax-layout-ratio="1.1"
              >
                <img
                  className="border-radius-6px"
                  src={
                    require("../media/alessandro-bianchi-_kdTyfnUFAc-unsplash.jpg")
                      .default
                  }
                  alt=""
                  style={{ maxHeight: 550 }}
                />
              </div>
            </div>
            <div className="col-12 col-lg-5 offset-lg-1">
              <div className="alt-font text-extra-medium font-weight-500 margin-30px-bottom">
                <span className="w-30px h-1px bg-fast-blue d-inline-block align-middle margin-20px-right" />
                <span className="text-fast-blue d-inline-block">
                  Looking for engineering expertise?
                </span>
              </div>
              <h5 className="alt-font text-extra-dark-gray font-weight-500 margin-30px-bottom w-95">
                Expect Quality Commitment and Constant Improvement
              </h5>
              <p className="w-95">
                With our global reach, we always grow our organization in
                various ways. To name a few, these are by investigating
                advancing technology, industry changes, creating international
                alliances and the varying needs of our clientele as our industry
                evolves.
              </p>
              <div className="btn-dual margin-15px-top d-inline-block">
                <a
                  href="/contact"
                  className="btn btn-medium btn-dark-gray btn-slide-right-bg"
                >
                  Discover Gankco
                  <span className="bg-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}

      <section className="wow animate__fadeIn">
        <div className="container">
          {/* <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 align-items-center justify-content-center">
            <div
              className="col text-center sm-margin-40px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <h4
                className="vertical-counter d-inline-flex text-extra-dark-gray alt-font appear font-weight-600 letter-spacing-minus-2px md-letter-spacing-normal mb-0"
                data-to={2530}
              />
              <span className="alt-font text-uppercase text-small d-block margin-5px-top">
                Working hours
              </span>
            </div>
            <div
              className="col text-center sm-margin-40px-bottom wow animate__fadeIn"
              data-wow-delay="0.4s"
            >
              <h4
                className="vertical-counter d-inline-flex text-extra-dark-gray alt-font appear font-weight-600 letter-spacing-minus-2px md-letter-spacing-normal mb-0"
                data-to={3200}
              />
              <span className="alt-font text-uppercase text-small d-block margin-5px-top">
                Photo capture
              </span>
            </div>
            <div
              className="col text-center xs-margin-40px-bottom wow animate__fadeIn"
              data-wow-delay="0.6s"
            >
              <h4
                className="vertical-counter d-inline-flex text-extra-dark-gray alt-font appear font-weight-600 letter-spacing-minus-2px md-letter-spacing-normal mb-0"
                data-to={2830}
              />
              <span className="alt-font text-uppercase text-small d-block margin-5px-top">
                Work completed
              </span>
            </div>
            <div
              className="col text-center wow animate__fadeIn"
              data-wow-delay="0.8s"
            >
              <h4
                className="vertical-counter d-inline-flex text-extra-dark-gray alt-font appear font-weight-600 letter-spacing-minus-2px md-letter-spacing-normal mb-0"
                data-to={2060}
              />
              <span className="alt-font text-uppercase text-small d-block margin-5px-top">
                Telephonic talk
              </span>
            </div>
          </div>
         */}
        </div>
      </section>

      {/* end section */}
      {/* start section */}
      {/* end section */}
      {/* start section */}
      {/* <section className="wow animate__fadeIn">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-12 col-lg-6 md-margin-50px-bottom wow animate__fadeInLeft"
              data-wow-delay="0.4s"
            >
              <div className="outside-box-left text-right">
                <img src="images/our-process-03.png" alt="our process03" />
              </div>
            </div>
            <div className="col-12 col-lg-5 offset-lg-1">
              <h5 className="alt-font font-weight-500 text-extra-dark-gray margin-50px-bottom xs-margin-30px-bottom">
                We are expert in search engine and social media optimization
              </h5>

              <div className="alt-font font-weight-500 d-inline-block text-extra-medium margin-15px-bottom">
                <span className="w-30px h-1px d-inline-block align-middle bg-fast-blue margin-15px-right" />
                <span className="text-fast-blue d-inline-block">
                  Unique designs
                </span>
              </div>
              <p className="w-75 lg-w-95">
                Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod
                tempor incididunt labore et dolore ut enim ad minim veniam
                nostrud.
              </p>


              <div className="alt-font font-weight-500 d-inline-block text-extra-medium margin-15px-bottom margin-20px-top">
                <span className="w-30px h-1px d-inline-block align-middle bg-fast-blue margin-15px-right" />
                <span className="text-fast-blue d-inline-block">
                  Creative concept designs
                </span>
              </div>
              <p className="w-75 lg-w-95">
                Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod
                tempor incididunt labore et dolore ut enim ad minim veniam
                nostrud.
              </p>

            </div>
          </div>
        </div>
      </section>
       */}
      {/* end section */}
      {/* start section */}
      <section
        id="reading"
        className="p-0 bg-extra-dark-gray wow animate__fadeIn"
      >
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-12 col-lg-6 padding-8-half-rem-all lg-padding-5-half-rem-all xs-padding-15px-lr"
              style={{
                background:
                  'url("images/our-process-bg-4.png") no-repeat top -45px left',
              }}
            >
              <h5 className="alt-font font-weight-500 text-white margin-4-rem-bottom ">
                We are committed to providing services that guarantee customers
                satisfaction.
              </h5>
              <div
                className="panel-group accordion-event accordion-style-02"
                id="accordion1"
                data-active-icon="icon-feather-minus"
                data-inactive-icon="icon-feather-plus"
              >
                <div className="panel bg-transparent">
                  <div className="panel-heading border-color-white-transparent active-accordion">
                    <a
                      className="accordion-toggle"
                      data-toggle="collapse"
                      data-parent="#accordion1"
                      href="#collapseOne"
                    >
                      <div className="panel-title">
                        <span className="alt-font text-white d-inline-block">
                          Engineering Designs
                        </span>
                        <i className="indicator text-white feather icon-feather-plus"></i>
                      </div>
                    </a>
                  </div>
                  <div
                    id="collapseOne"
                    className="panel-collapse collapse"
                    data-parent="#accordion1"
                  >
                    <div className="panel-body">
                      Our teams of experience engineers are capable of executing
                      Front End Engineering and Designs (FEED) i.e. engineering
                      designs from the conceptual stage through basic
                      engineering right to the detailed design stage which also
                      includes the design and drafting, as-built drwing stage
                      which also includes the designs and drafting, as-built
                      drawing and design manuals. We leave no stone unturned in
                      ensuring that we deliver qualitatively in line with
                      clients’specification, applicable codes and local and
                      international legislation.
                    </div>
                  </div>
                </div>

                <div className="panel bg-transparent">
                  <div className="panel-heading border-color-white-transparent active-accordion">
                    <a
                      className="accordion-toggle"
                      data-toggle="collapse"
                      data-parent="#accordion1"
                      href="#collapseTwo"
                    >
                      <div className="panel-title">
                        <span className="alt-font text-white d-inline-block">
                          Procurement Services
                        </span>
                        <i className="indicator text-white feather icon-feather-plus"></i>
                      </div>
                    </a>
                  </div>
                  <div
                    id="collapseTwo"
                    className="panel-collapse collapse "
                    data-parent="#accordion1"
                  >
                    <div className="panel-body">
                      <ul className="list-style-05">
                        <li>
                          {" "}
                          Production Surface Equipment and Accessories Acidizing
                          units, Beam pumps, Block stations, Block systems,
                          Chemical Injection, Dehydration etc.
                        </li>
                        <li>
                          Casing, Tubing, Liner, Connectors and Accessories
                          (OCTG) API 5, Chrome, Conductors, Couplings,
                          Crossovers, CS, ERW, Fox etc.
                        </li>
                        <li>
                          Cementing Equipment and Line Hnager Systems casing
                          centralizer, Casing Stop collas, Connections Drillable
                          Bridge plugs, Duplex Flows couplings
                        </li>
                        <li>
                          Drilling and Mud Control Instruments Automatic
                          controllers, Double shot, Directional survey, Magnets,
                          Packages consoles, Pressure controllers etc
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="panel bg-transparent">
                  <div className="panel-heading border-color-white-transparent active-accordion">
                    <a
                      className="accordion-toggle"
                      data-toggle="collapse"
                      data-parent="#accordion1"
                      href="#collapseThree"
                    >
                      <div className="panel-title">
                        <span className="alt-font text-white d-inline-block">
                          Manpower Outsourcing Support Services
                        </span>
                        <i className="indicator text-white feather icon-feather-plus"></i>
                      </div>
                    </a>
                  </div>
                  <div
                    id="collapseThree"
                    className="panel-collapse collapse "
                    data-parent="#accordion1"
                  >
                    <div className="panel-body">
                      <ul className="list-style-05">
                        <li>
                          We will assist in outsourcing service and support
                          teams which are vital to clients’ operations but are
                          not required to be in-house which will enable our
                          client to trade out overhead and higher fixed costs
                          for reduced and more efficient variable costs.
                        </li>
                        <li>
                          This will enable our clients to focus more on main
                          aspects of their core business and helps them to
                          benefit from immediate and on demand access to
                          inspection, evaluation and compliance network. These
                          services are readily available when needed.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 cover-background md-h-550px sm-h-400px xs-h-300px"
              style={{
                backgroundImage: `url("${
                  require("../media/pexels-anna-shvets-3727455.jpg").default
                }")`,
              }}
            >
              <a
                href="https://www.youtube.com/watch?v=Uti2niW2BRA"
                className="popup-youtube absolute-middle-center video-icon-box video-icon-large"
              >
                <span>
                  <span className="video-icon bg-white box-shadow-extra-large">
                    <i className="icon-simple-line-control-play text-gradient-light-purple-light-orange" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* <section className="bg-light-gray wow animate__fadeIn">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-5 col-sm-8 text-center margin-6-rem-bottom sm-margin-3-rem-bottom">
              <span className="alt-font text-extra-medium margin-20px-bottom d-block text-fast-blue font-weight-500">
                Simple work process
              </span>
              <h5 className="alt-font text-extra-dark-gray font-weight-500 d-inline-block">
                We provide high quality and cost effective services
              </h5>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2">

            <div className="col text-center process-step-style-01 last-paragraph-no-margin md-margin-50px-bottom wow animate__fadeIn">
              <div className="process-step-icon-box margin-40px-bottom sm-margin-30px-bottom">
                <span className="process-step-bfr bg-dark-gray w-80px h-1px opacity-2 d-none d-sm-block" />
                <div className="process-step-icon bg-white">
                  <i className="line-icon-Idea-5 icon-large text-gradient-light-purple-light-orange" />
                </div>
              </div>
              <span className="alt-font d-block font-weight-500 text-extra-dark-gray margin-10px-bottom">
                Project Research
              </span>
              <p className="w-85 d-inline-block lg-w-100 md-w-70 sm-w-90">
                Lorem ipsum is simply dummy text the printing industry
              </p>
            </div>


            <div
              className="col text-center process-step-style-01 last-paragraph-no-margin md-margin-50px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="process-step-icon-box margin-40px-bottom sm-margin-30px-bottom">
                <span className="process-step-bfr bg-dark-gray w-80px h-1px opacity-2 d-none d-lg-block" />
                <div className="process-step-icon bg-white">
                  <i className="line-icon-Fountain-Pen icon-large text-gradient-light-purple-light-orange" />
                </div>
              </div>
              <span className="alt-font d-block font-weight-500 text-extra-dark-gray margin-10px-bottom">
                Design Sketches
              </span>
              <p className="w-85 d-inline-block lg-w-100 md-w-70 sm-w-90">
                Lorem ipsum is simply dummy text the printing industry
              </p>
            </div>


            <div
              className="col text-center process-step-style-01 last-paragraph-no-margin xs-margin-50px-bottom wow animate__fadeIn"
              data-wow-delay="0.4s"
            >
              <div className="process-step-icon-box margin-40px-bottom sm-margin-30px-bottom">
                <span className="process-step-bfr bg-dark-gray w-80px h-1px opacity-2 d-none d-sm-block" />
                <div className="process-step-icon bg-white">
                  <i className="line-icon-Loading-2 icon-large text-gradient-light-purple-light-orange" />
                </div>
              </div>
              <span className="alt-font d-block font-weight-500 text-extra-dark-gray margin-10px-bottom">
                Selected Concept
              </span>
              <p className="w-85 d-inline-block lg-w-100 md-w-70 sm-w-90">
                Lorem ipsum is simply dummy text the printing industry
              </p>
            </div>


            <div
              className="col text-center process-step-style-01 last-paragraph-no-margin wow animate__fadeIn"
              data-wow-delay="0.6s"
            >
              <div className="process-step-icon-box margin-40px-bottom sm-margin-30px-bottom">
                <span className="process-step-bfr bg-dark-gray w-80px h-1px opacity-2" />
                <div className="process-step-icon bg-white">
                  <i className="line-icon-Juice icon-large text-gradient-light-purple-light-orange" />
                </div>
              </div>
              <span className="alt-font d-block font-weight-500 text-extra-dark-gray margin-10px-bottom">
                Client Presentation
              </span>
              <p className="w-85 d-inline-block lg-w-100 md-w-70 sm-w-90">
                Lorem ipsum is simply dummy text the printing industry
              </p>
            </div>

          </div>
          <div className="row">
            <div className="col text-center margin-8-rem-top lg-margin-6-half-rem-top">
              <a
                href="contact-us-modern.html"
                className="btn btn-large btn-white btn-box-shadow"
              >
                Get started now
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* start section */}
      {/* <section className="wow animate__fadeIn">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 client-logo-style-03">
            <div
              className="col text-center wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <a href="#">
                <img src="images/client-logo-4.png" alt="" />
              </a>
            </div>
            <div
              className="col text-center wow animate__fadeIn"
              data-wow-delay="0.4s"
            >
              <a href="#">
                <img src="images/client-logo-5.png" alt="" />
              </a>
            </div>
            <div
              className="col text-center wow animate__fadeIn"
              data-wow-delay="0.6s"
            >
              <a href="#">
                <img src="images/client-logo-6.png" alt="" />
              </a>
            </div>
            <div
              className="col text-center wow animate__fadeIn"
              data-wow-delay="0.8s"
            >
              <a href="#">
                <img src="images/client-logo-7.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
       */}
      {/* end section */}
      {/* start section */}
      {/* <section className="bg-light-gray wow animate__fadeIn">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-5 col-lg-6 col-sm-8 text-center margin-6-rem-bottom md-margin-5-rem-bottom sm-margin-3-rem-bottom">
              <span className="alt-font text-extra-medium margin-20px-bottom d-block text-fast-blue font-weight-500">
                What people say
              </span>
              <h5 className="alt-font text-extra-dark-gray font-weight-500">
                Perfect design and code delivered for your projects
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col position-relative">
              <div
                className="swiper-container black-move swiper-pagination-bottom"
                data-slider-options='{ "loop": true, "slidesPerView": 1, "spaceBetween": 30, "observer": true, "observeParents": true, "autoplay": { "delay": 4500, "disableOnInteraction": false }, "pagination": { "el": ".swiper-pagination", "clickable": true, "dynamicBullets": true }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "992": { "slidesPerView": 3 }, "768": { "slidesPerView": 2 } } }'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonials-style-02 border-radius-5px overflow-hidden">
                      <img
                        alt=""
                        className="d-inline-block"
                        src="images/testimonial-img-09.jpg"
                      />
                      <div className="testimonials-content padding-3-half-rem-all text-center bg-white lg-padding-2-half-rem-lr">
                        <div className="testimonials-rounded-icon bg-white rounded-circle">
                          <i className="fa fa-quote-left icon-small text-gradient-light-purple-light-orange" />
                        </div>
                        <p>
                          Lorem ipsum dolor amet consectetur do eiusmod tempor
                          incididunt labore ut enim ad minim veniam
                        </p>
                        <span className="alt-font font-weight-500 text-extra-dark-gray text-uppercase d-block">
                          Jeremy Smith
                        </span>
                        <span className="alt-font font-weight-500 text-small text-uppercase d-block">
                          Co Founder
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-style-02 border-radius-5px overflow-hidden">
                      <img
                        alt=""
                        className="d-inline-block"
                        src="images/testimonial-img-10.jpg"
                      />
                      <div className="testimonials-content padding-3-half-rem-all text-center bg-white lg-padding-2-half-rem-lr">
                        <div className="testimonials-rounded-icon bg-white rounded-circle">
                          <i className="fa fa-quote-left icon-small text-gradient-light-purple-light-orange" />
                        </div>
                        <p>
                          Lorem ipsum dolor amet consectetur do eiusmod tempor
                          incididunt labore ut enim ad minim veniam
                        </p>
                        <span className="alt-font font-weight-500 text-extra-dark-gray text-uppercase d-block">
                          Shoko mugikura
                        </span>
                        <span className="alt-font font-weight-500 text-small text-uppercase d-block">
                          Creative head
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-style-02 border-radius-5px overflow-hidden">
                      <img
                        alt=""
                        className="d-inline-block"
                        src="images/testimonial-img-11.jpg"
                      />
                      <div className="testimonials-content padding-3-half-rem-all text-center bg-white lg-padding-2-half-rem-lr">
                        <div className="testimonials-rounded-icon bg-white rounded-circle">
                          <i className="fa fa-quote-left icon-small text-gradient-light-purple-light-orange" />
                        </div>
                        <p>
                          Lorem ipsum dolor amet consectetur do eiusmod tempor
                          incididunt labore ut enim ad minim veniam
                        </p>
                        <span className="alt-font font-weight-500 text-extra-dark-gray text-uppercase d-block">
                          Herman miller
                        </span>
                        <span className="alt-font font-weight-500 text-small text-uppercase d-block">
                          HR manager
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-style-02 border-radius-5px overflow-hidden">
                      <img
                        alt=""
                        className="d-inline-block"
                        src="images/testimonial-img-12.jpg"
                      />
                      <div className="testimonials-content padding-3-half-rem-all text-center bg-white lg-padding-2-half-rem-lr">
                        <div className="testimonials-rounded-icon bg-white rounded-circle">
                          <i className="fa fa-quote-left icon-small text-gradient-light-purple-light-orange" />
                        </div>
                        <p>
                          Lorem ipsum dolor amet consectetur do eiusmod tempor
                          incididunt labore ut enim ad minim veniam
                        </p>
                        <span className="alt-font font-weight-500 text-extra-dark-gray text-uppercase d-block">
                          William Smith
                        </span>
                        <span className="alt-font font-weight-500 text-small text-uppercase d-block">
                          Creative head
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </div>
      </section>
       */}
      {/* end section */}
      {/* start section */}
      <section
        className="parallax wow animate__fadeIn"
        data-parallax-background-ratio="0.2"
        style={{ backgroundImage: 'url("images/our-process-bg-5.jpg")' }}
      >
        <div className="opacity-full bg-gradient-fast-blue-purple" />
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-xl-7 col-md-8 col-sm-10 text-center text-md-left sm-margin-30px-bottom">
              <h4 className="alt-font font-weight-600 text-white mb-0">
                Gearing your company through an Innovative strategy
              </h4>
            </div>
            <div className="col-12 col-xl-5 col-md-4 text-center text-md-right">
              <a
                href="/contact"
                className="btn btn-large btn-gradient-light-purple-light-orange"
              >
                Get In-touch Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
