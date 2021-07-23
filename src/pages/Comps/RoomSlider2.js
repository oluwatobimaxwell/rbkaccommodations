/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export const RoomSlider2 = ({ meida = [] }) => {
    return (
<section className="py-0 position-relative">
  <div className="slider-blog-banner swiper-container black-move" data-slider-options="{ &quot;loop&quot;: true, &quot;centeredSlides&quot;: true, &quot;slidesPerView&quot;: &quot;1&quot;, &quot;speed&quot;: 1000, &quot;pagination&quot;: { &quot;el&quot;: &quot;.swiper-pagination&quot;, &quot;clickable&quot;: true }, &quot;autoplay&quot;: { &quot;delay&quot;: 2000, &quot;disableOnInteraction&quot;: false }, &quot;keyboard&quot;: { &quot;enabled&quot;: true, &quot;onlyInViewport&quot;: true }, &quot;navigation&quot;: { &quot;nextEl&quot;: &quot;.swiper-button-next-nav&quot;, &quot;prevEl&quot;: &quot;.swiper-button-previous-nav&quot; }, &quot;breakpoints&quot;: { &quot;992&quot;: { &quot;slidesPerView&quot;: &quot;auto&quot; } }, &quot;effect&quot;: &quot;slide&quot; }">
    <div className="swiper-wrapper">
      {/* start slider item */}
     
        {meida.map((item, i) => {
            return (
              <div key={"sshh-weeye-wueue-"+i} className="swiper-slide w-55">
                <img
                  src={item.image}
                  className="w-100"
                  alt
                  style={{
                    // height: 600,
                    // backgroundRepeat: "round"
                  }}
                />
              </div>
            );
        })}
      {/* end slider item */}
    </div>
    {/* start slider pagination */}
    {/*<div class="swiper-pagination"></div>*/}
    {/* end slider pagination */}
    {/* start slider navigation */}
    <div className="swiper-button-previous-nav swiper-button-prev rounded-circle slider-navigation-style-07 box-shadow-large bg-white"><i className="feather icon-feather-arrow-left text-extra-dark-gray" /></div>
    <div className="swiper-button-next-nav swiper-button-next rounded-circle slider-navigation-style-07 box-shadow-large bg-white"><i className="feather icon-feather-arrow-right text-extra-dark-gray" /></div>
    {/* end slider navigation */}
  </div>  
</section>

        );
}
