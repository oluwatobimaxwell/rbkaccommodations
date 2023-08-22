import React from "react";
import { Layout } from "../components/Layout";

const data = { female: 36, male: 29 }

export const Gallery = ({ match }) => {
  const type = match?.params?.type;

  return (
    <Layout
      subtitle={"Gallery"}
      title={"RKB " + type + " Accommdation Gallery"}
      boxheader={`navbar top-space navbar-expand-lg navbar-light bg-white header-light fixed-top header-reverse-scroll navbar-boxed`}
    >

      <section class="border-top border-width-1px border-color-medium-gray padding-six-lr lg-no-padding-lr">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <ul
                className="portfolio-colorful portfolio-wrapper grid grid-loading grid-4col xl-grid-4col lg-grid-4col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large text-center"
                data-opacity="0.9"
                data-backgroundcolor="#58bc4b,#d9a026,#813ea9,#82bc13,#214bdf,#e28e1a,#04c05c,#e52d8c,"
              >
                <li className="grid-sizer" />
                {(new Array(data[type])).fill(1).map((item, i) => {
                  return (
                    <li className="grid-item wow animate__fadeIn">
                      <a
                        href={`../rbk/gallery/${type}/${i + 1}.jpg`}
                        title={item.title}
                        data-group="lightbox-gallery-3"
                        className="lightbox-group-gallery-item"
                      >
                        <div className="portfolio-box">
                          <div className="portfolio-image bg-secondary">
                            <img src={`../rbk/gallery/${type}/${i + 1}.jpg`} alt="" />
                            <div className="portfolio-hover justify-content-end d-flex flex-column padding-50px-tb lg-padding-30px-tb xs-padding-15px-tb">
                              <i className="feather icon-feather-zoom-in portfolio-plus-icon font-weight-300 text-white absolute-middle-center icon-small move-top-bottom" />
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
