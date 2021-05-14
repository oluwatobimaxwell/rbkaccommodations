import React from "react";
import { Layout } from "../components/Layout";

const data = {
  site: require("../data/site.json"),
};

const { site } = data;

const addresses = [
  {
    name: "Abuja - Nigeria",
    address:
      "Suite SF03 Olive Plaza, Plot 913 Alexandra Crescent, Wuse II, Abuja",
    phone: "07054545477",
    email: "info@gankcoenergy.com",
    flag: "https://www.countryflags.com/wp-content/uploads/nigeria-flag-png-xl.png",
    bg: "images/contact-us-classic-bg-1.jpg",
  },
  {
    name: "Lagos - Nigeria",
    address:
      "Gilgal Office Suites 1st Floor, Plot 23 Water Corporation Drive, Victoria Island Lagos.",
    phone: "07054545477",
    email: "info@gankcoenergy.com",
    flag: "https://www.countryflags.com/wp-content/uploads/nigeria-flag-png-xl.png",
    bg: "images/contact-us-classic-bg-2.jpg",
  },
  {
    name: "New Jersey - USA",
    address: "11 Kinder Drive Bloomfield, New Jersey 07003, United States",
    phone: "07054545477",
    email: "info@gankcoenergy.com",
    flag: "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
    bg: "images/contact-us-classic-bg-3.jpg",
  },
];

export const Contact = () => {
  return (
    <Layout
      subtitle={"Get in-touch with us"}
      title={"Contact us Today."}
      bgimage={require("../media/pexels-mohammad-danish-891059.jpg").default}
      jumpto="contact"
    >
      <section id="contact" className="bg-light-gray">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center">
            {/* start fancy text box item */}
            <div className="col col-sm-8 md-margin-30px-bottom xs-margin-15px-bottom">
              <div className="feature-box feature-box-hide-show-hover bg-white border-radius-6px overflow-hidden box-shadow-large box-shadow-extra-large-hover">
                <div className="feature-box-move-bottom-top padding-5-rem-lr padding-15px-tb lg-padding-2-half-rem-lr md-padding-4-half-rem-lr">
                  <div className="feature-box-icon">
                    <i className="line-icon-Mail-Read d-block icon-medium text-fast-blue margin-25px-bottom" />
                  </div>
                  <div className="feature-box-content last-paragraph-no-margin">
                    <span className="text-extra-dark-gray text-extra-medium d-block alt-font font-weight-500">
                      How can we help you?
                    </span>
                    <a
                      href={"mailto:" + site.email}
                      className="alt-font text-decoration-underline"
                    >
                      Send us an email
                    </a>
                  </div>
                  <div className="move-bottom-top margin-10px-top last-paragraph-no-margin">
                    <p>Send us mail to {site.email}</p>
                  </div>
                </div>
                <div className="feature-box-overlay" />
              </div>
            </div>
            {/* end fancy text box item */}
            {/* start fancy text box item */}
            <div className="col col-sm-8 md-margin-30px-bottom xs-margin-15px-bottom">
              <div className="feature-box feature-box-hide-show-hover bg-white border-radius-6px overflow-hidden box-shadow-large box-shadow-extra-large-hover">
                <div className="feature-box-move-bottom-top padding-5-rem-lr padding-15px-tb lg-padding-2-half-rem-lr md-padding-4-half-rem-lr">
                  <div className="feature-box-icon">
                    <i className="line-icon-Phone-2 d-block icon-medium text-fast-blue margin-25px-bottom" />
                  </div>
                  <div className="feature-box-content last-paragraph-no-margin">
                    <span className="text-extra-dark-gray text-extra-medium d-block alt-font font-weight-500">
                      Feel free to get in touch?
                    </span>
                    <a
                      href={"mailto:" + site.phone1}
                      className="alt-font text-decoration-underline"
                    >
                      Give us a call toady
                    </a>
                  </div>
                  <div className="move-bottom-top margin-10px-top last-paragraph-no-margin">
                    <p>Contact us via mobile {site.phone1}</p>
                  </div>
                </div>
                <div className="feature-box-overlay" />
              </div>
            </div>
            {/* end fancy text box item */}
            {/* start fancy text box item */}
            <div className="col col-sm-8">
              <div className="feature-box feature-box-hide-show-hover bg-white border-radius-6px overflow-hidden box-shadow-large box-shadow-extra-large-hover">
                <div className="feature-box-move-bottom-top padding-5-rem-lr padding-15px-tb lg-padding-2-half-rem-lr md-padding-4-half-rem-lr">
                  <div className="feature-box-icon">
                    <i className="line-icon-Approved-Window d-block icon-medium text-fast-blue margin-25px-bottom" />
                  </div>
                  <div className="feature-box-content last-paragraph-no-margin">
                    <span className="text-extra-dark-gray text-extra-medium d-block alt-font font-weight-500">
                      Ready to request a quote?
                    </span>
                    <a
                      href="#project"
                      className="alt-font text-decoration-underline section-link"
                    >
                      Describe your project
                    </a>
                  </div>
                  <div className="move-bottom-top margin-10px-top last-paragraph-no-margin">
                    <p>Submit the form below, we will contact you back asap</p>
                  </div>
                </div>
                <div className="feature-box-overlay" />
              </div>
            </div>
            {/* end fancy text box item */}
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section className="wow animate__fadeIn">
        <div className="container" id="project">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="row justify-content-center">
                <div className="col-12 col-xl-6 col-lg-7 text-center margin-4-half-rem-bottom md-margin-3-rem-bottom">
                  <span className="alt-font letter-spacing-minus-1-half text-extra-medium d-block margin-5px-bottom">
                    Fill out the form and we’ll be in touch soon!
                  </span>
                  <h4 className="alt-font font-weight-600 text-extra-dark-gray">
                    How we can help you?
                  </h4>
                </div>
                <div className="col-12">
                  {/* start contact form */}
                  <form
                    action="https://lithohtml.themezaa.com/email-templates/contact-form.php"
                    method="post"
                  >
                    <div className="row row-cols-1 row-cols-md-2">
                      <div className="col margin-4-rem-bottom sm-margin-25px-bottom">
                        <input
                          className="medium-input bg-white margin-25px-bottom required"
                          type="text"
                          name="name"
                          placeholder="Your name"
                        />
                        <input
                          className="medium-input bg-white margin-25px-bottom required"
                          type="email"
                          name="email"
                          placeholder="Your email address"
                        />
                        <input
                          className="medium-input bg-white mb-0"
                          type="tel"
                          name="phone"
                          placeholder="Your mobile"
                        />
                      </div>
                      <div className="col margin-4-rem-bottom sm-margin-10px-bottom">
                        <textarea
                          className="medium-textarea h-200px bg-white"
                          name="comment"
                          placeholder="Your message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col text-left sm-margin-30px-bottom">
                        <input
                          type="checkbox"
                          name="terms_condition"
                          id="terms_condition"
                          defaultValue={1}
                          className="terms-condition d-inline-block align-top w-auto mb-0 margin-5px-top margin-10px-right"
                        />
                        <label
                          htmlFor="terms_condition"
                          className="text-small d-inline-block align-top w-85"
                        >
                          I accept the terms &amp; conditions and I understand
                          that my data will be hold securely in accordance with
                          the{" "}
                          <a
                            href="#"
                            className="text-decoration-underline text-extra-dark-gray"
                          >
                            privacy policy
                          </a>
                          .
                        </label>
                      </div>
                      <div className="col text-center text-md-right">
                        <input type="hidden" name="redirect" defaultValue />
                        <button
                          className="btn btn-medium btn-gradient-light-purple-light-orange mb-0 submit"
                          type="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                    <div className="form-results d-none" />
                  </form>
                  {/* end contact form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section
        className="bg-extra-dark-gray fancy-box-background big-section cover-background"
        style={{ backgroundImage: 'url("images/contact-us-classic-01.jpg")' }}
      >
        <div className="opacity-very-light opacity-0-half z-index-minus-1 bg-gradient-sky-blue-pink" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-7 col-md-9 text-center margin-5-half-rem-bottom sm-margin-3-half-rem-bottom">
              <span className="alt-font text-extra-medium text-white opacity-8 margin-10px-bottom d-block">
                Fill out the form and we’ll be in touch soon!
              </span>
              <h4 className="alt-font text-white font-weight-600">
                Gankco offices round the world
              </h4>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 align-items-center justify-content-center">
            {/* start fancy text box item */}
            {addresses.map((item, i) => {
              return (
                <div className="col col-sm-8 fancy-box-item md-margin-30px-bottom xs-margin-15px-bottom">
                  <div
                    className="bg-banner-image cover-background"
                    style={{
                      backgroundImage: `url(${item.bg})`,
                    }}
                  >
                    <div className="opacity-medium bg-gradient-sky-blue-pink" />
                  </div>
                  <div className="feature-box feature-box-left-icon-middle feature-box-dark-hover padding-4-rem-lr padding-3-rem-tb bg-white border-radius-5px overflow-hidden lg-padding-3-rem-lr">
                    <div className="feature-box-icon margin-15px-right">
                      <img
                        src={item.flag}
                        className="w-35px d-block"
                        alt="contact us img flag-01"
                      />
                    </div>
                    <div className="feature-box-content">
                      <span className="alt-font d-block font-weight-500 text-extra-dark-gray">
                        {item.name}
                      </span>
                    </div>
                    <div className="bg-medium-gray margin-20px-tb w-100 h-1px" />
                    <p className="margin-10px-bottom w-85 lg-w-100 sm-w-75 xs-w-85">
                      {item.address}
                    </p>
                    <span className="d-block font-weight-500 margin-10px-top text-extra-dark-gray line-height-20px w-100">
                      Phone: {item.phone}
                    </span>
                    <a
                      href={`mailto:${item.email}`}
                      className="text-fast-blue text-decoration-underline"
                    >
                      {item.email}
                    </a>
                    <div className="feature-box-overlay bg-extra-dark-gray" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section className="padding-100px-tb md-padding-75px-tb sm-padding-50px-tb wow animate__fadeIn">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-xl-3 col-lg-4 col-md-5 col-sm-6 text-center text-sm-right xs-margin-20px-bottom">
              <span className="alt-font font-weight-500 text-extra-large text-extra-dark-gray d-block letter-spacing-minus-1-half">
                Connect with social media
              </span>
            </div>
            <div className="col-12 col-md-2 d-none d-md-block">
              <span className="w-100 h-1px d-block bg-medium-gray" />
            </div>
            <div className="col-12 col-xl-3 col-lg-4 col-md-5 col-sm-6 social-icon-style-02 text-center text-sm-left">
              <ul className="small-icon">
                <li>
                  <a
                    className="facebook text-extra-dark-gray text-sm-left"
                    href={site.socials.facebook}
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    className="twitter text-extra-dark-gray text-sm-left"
                    href={site.socials.twitter}
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    className="instagram text-extra-dark-gray text-sm-left"
                    href={site.socials.instagram}
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin text-extra-dark-gray text-sm-left"
                    href={site.socials.linkedin}
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section className="p-0 wow animate__fadeIn">
        <div className="container-fluid">
          <div className="row">
            <div className="col h-600px p-0 md-h-450px xs-h-300px">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.791446025699!2d7.464904514624436!3d9.082754793483613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0aef1c9c84c1%3A0x344060b13288a43a!2sGankco%20Energy!5e0!3m2!1sen!2sng!4v1618490580074!5m2!1sen!2sng"
                className="w-100 h-100 filter-grayscale-100"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
