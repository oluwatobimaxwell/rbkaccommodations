import React from "react";

export const RoomSlider = ({ media }) => {
  return (
    <section className="p-0">
  <div className="container-fluid position-relative">
    <div className="row">
      <div className="swiper-container white-move full-screen md-h-650px sm-h-500px" data-slider-options="{ &quot;slidesPerView&quot;: 1, &quot;loop&quot;: true, &quot;autoplay&quot;: { &quot;delay&quot;: 4500, &quot;disableOnInteraction&quot;: false },  &quot;pagination&quot;: { &quot;el&quot;: &quot;.swiper-pagination&quot;, &quot;clickable&quot;: true }, &quot;navigation&quot;: { &quot;nextEl&quot;: &quot;.swiper-button-next-nav&quot;, &quot;prevEl&quot;: &quot;.swiper-button-previous-nav&quot; }, &quot;keyboard&quot;: { &quot;enabled&quot;: true, &quot;onlyInViewport&quot;: true }, &quot;effect&quot;: &quot;slide&quot; }">
        <div className="swiper-wrapper">
          {/* start slider item */}
          {(media || []).map((image, i)=> {
              return (
                <div className="swiper-slide cover-background" style={{backgroundImage: `url("${image.image}")`}}>
                <div className="container h-100">
                  <div className="row justify-content-center h-100">
                    {/* <div className="col-12 col-xl-6 col-sm-7 d-flex flex-column justify-content-center text-center h-100">
                      <span className="alt-font font-weight-500 text-extra-medium letter-spacing-2px text-white text-uppercase d-block margin-35px-bottom sm-margin-15px-bottom">Package start only $250</span>
                      <h1 className="alt-font font-weight-800 title-large text-white text-uppercase letter-spacing-minus-4px margin-45px-bottom sm-letter-spacing-minus-1px sm-margin-30px-bottom text-shadow-large sm-no-text-shadow xs-w-90 mx-auto">Deserts discovery</h1>
                      <a href="#" className="btn btn-fancy btn-large btn-dark-gray btn-box-shadow align-self-center">Discover Tour</a>
                    </div> */}
                  </div>
                </div>
              </div>
              )
          })}
          {/* end slider item */}
                              
        </div>
        {/* start slider pagination */}
        <div className="swiper-pagination swiper-light-pagination d-sm-none" />
        {/* end slider pagination */}
        {/* start slider navigation */}
        <div className="swiper-button-next-nav swiper-button-next rounded-circle slider-navigation-style-07 d-none d-sm-flex"><i className="feather icon-feather-arrow-right" /></div>
        <div className="swiper-button-previous-nav swiper-button-prev rounded-circle slider-navigation-style-07 d-none d-sm-flex"><i className="feather icon-feather-arrow-left" /></div>
        {/* end slider navigation */}
      </div>
    </div>
  </div>
</section>

    );
};
