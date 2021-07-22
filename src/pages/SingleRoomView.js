import React, {useEffect} from "react";
import { Layout } from "../components/Layout";
import { RoomSlider } from "./Comps/RoomSlider";
import { NotFound } from "./NotFound";

export const SingleRoomView = ({match}) => {

    const roomName = match?.params?.roomname;
    const location = new URLSearchParams(window.location.search).get("location")

    const getNextIndex = (currentIndex, total) => {
        let next = currentIndex + 1;
        if(next >= total - 1){
            next = 0
        }
        return next
    }

    const getPreviewIndex = (currentIndex, total) => {
        let previous = currentIndex - 1;
        if(previous < 0){
            previous = total - 1;
        }
        return previous
    }

    const testimonials = require("../data/testimonials.json") 
    const rooms = require("../data/rooms.json") 
    const room = rooms.find(e => e.name === roomName && e.location === location)
    const roomIndex = rooms.findIndex(e => e.name === roomName && e.location === location)
    const next = rooms[getNextIndex(roomIndex, rooms.length)]
    const previous = rooms[getPreviewIndex(roomIndex, rooms.length)]

    if(roomIndex < 0) {
        return <NotFound pageName={roomName+" at "+location+" not found."} />
    }

  return (
    <Layout
      // subtitle={room.location}
      // title={room.name}
      // bgimage={room.image}
      // boxheader={`navbar navbar-expand-lg navbar-dark bg-transparent border-bottom border-color-white-transparent header-light fixed-top navbar-boxed header-reverse-scroll`}
      subtitle={room.category +" "+ room.name + " Room"}
      title={room.category +" "+ room.name + " Room"}
      boxheader={`navbar top-space navbar-expand-lg navbar-light bg-white header-light fixed-top header-reverse-scroll navbar-boxed`}
      base={"Room"}
      home={true}
    >
<style>
{`.section-link {
	display: none;
}

.parallax{
    background-repeat: round;
}

.navbar.navbar-expand-lg.navbar-dark.bg-transparent.border-bottom.border-color-white-transparent.header-light.fixed-top.navbar-boxed.header-reverse-scroll {
	// background: #000 !important;
}

`}
</style>
<RoomSlider media={room.media} />
<section className="overflow-visible pb-0" style={{ display: "none" }}>
  <div className="container">
    <div className="row align-items-center" >
      <div className="col-12 text-center overlap-section">
        <div className="overlap-section-inner">
        <div className="container" style={{margin: 'auto', width: '100%', background: '#fff', padding: '30px 0 30px 0', borderRadius: '10px', border: '1px solid #eaeaea'}}>
 
  <div className="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 justify-content-center" >
    {/* start feature box item */}
    <div className="col text-center md-margin-50px-bottom wow animate__fadeIn" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn'}}>
      <a href="#" className="text-medium-gray text-fast-blue-hover cursor-default">
        <i className=" line-icon-Remove  icon-large padding-20px-bottom" />
        <span className="alt-font font-weight-600 text-extra-dark-gray text-uppercase d-block">NGN{room?.option_prices?.option1}k</span>
        <div className="page option-price-label">Option 1
        <br/>
        <div className="inner-label">[Dinner & Laundry exclusive]</div>
        </div>
      </a>
    </div>
    {/* end feature box item */}
    {/* start feature box item */}
    <div className="col text-center md-margin-50px-bottom wow animate__fadeIn" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeIn'}}>
      <a href="#" className="text-medium-gray text-fast-blue-hover cursor-default">
        <i className="  line-icon-Add   icon-large padding-20px-bottom" />
        <span className="alt-font font-weight-600 text-extra-dark-gray text-uppercase d-block">NGN{room?.option_prices?.option2}k</span>
        <div className="page option-price-label">Option 2 
        <br/>
        <div className="inner-label">[Dinner & Laundry inclusive]</div>
        </div>
      </a>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>
</section>

<section  style={{ paddingBottom: `0px !important` }}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-lg-11">
        <div className="row">
          <div className="col-lg-4 padding-five-right lg-padding-15px-right md-margin-50px-bottom wow animate__fadeIn" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeIn'}}>
            <h5 className="alt-font text-extra-dark-gray font-weight-500 margin-4-rem-bottom letter-spacing-minus-1px">The room details</h5>
            <ul className="list-unstyled">
              <li className="border-bottom border-color-medium-gray padding-20px-bottom margin-20px-bottom text-capitalize">
                  <span className="text-uppercase text-extra-dark-gray w-35 d-inline-block font-weight-500 alt-font text-medium">Gender</span>{room.category}
            </li>
              <li className="border-bottom border-color-medium-gray padding-20px-bottom margin-20px-bottom text-capitalize">
                  <span className="text-uppercase text-extra-dark-gray w-35 d-inline-block font-weight-500 alt-font text-medium">Location</span>{room.location}
            </li>
              <li className="border-bottom border-color-medium-gray padding-20px-bottom margin-20px-bottom text-capitalize">
                  <span className="text-uppercase text-extra-dark-gray w-35 d-inline-block font-weight-500 alt-font text-medium">Availability</span>{room.availability || "Available"}
            </li>
            </ul>
          </div>
          <div className="col-lg-7 offset-lg-1 wow animate__fadeIn" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeIn'}}>
            <span className="alt-font text-medium text-uppercase font-weight-500 margin-20px-bottom d-inline-block text-extra-dark-gray">More about • {roomName} @{location}</span>
            <p
                dangerouslySetInnerHTML={{__html: room.content}}
            />
            <a href="#" className="btn btn-link btn-large text-extra-dark-gray">Book Room</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






<section className="big-section bg-light-gray wow animate__fadeIn" >
  <div className="container">
  
    <div className="row overlap-gap-section">
      <div className="col-12 col-md-4 position-relative sm-padding-10-rem-bottom xs-padding-9-rem-bottom">
        <h1 className="alt-font font-weight-600 text-extra-dark-gray letter-spacing-minus-2px margin-5-rem-bottom"><span className="text-border text-border-color-black text-border-width-2px opacity-3">Proud</span> stories</h1>
        <div className="swiper-button-next-nav-02 swiper-button-next slider-navigation-style-03 white rounded-circle"><i className="feather icon-feather-arrow-right" /></div>
        <div className="swiper-button-previous-nav-02 swiper-button-prev slider-navigation-style-03 white rounded-circle"><i className="feather icon-feather-arrow-left" /></div>
      </div>
      <div className="col-12 col-xl-5 col-lg-6 offset-lg-1 col-md-8 swiper-simple-arrow-style-1" data-wow-delay="0.2s">
        <div className="swiper-container black-move" data-slider-options="{ &quot;loop&quot;: true, &quot;slidesPerView&quot;: 1, &quot;observer&quot;: true, &quot;observeParents&quot;: true, &quot;navigation&quot;: { &quot;nextEl&quot;: &quot;.swiper-button-next-nav-02&quot;, &quot;prevEl&quot;: &quot;.swiper-button-previous-nav-02&quot; }, &quot;autoplay&quot;: { &quot;delay&quot;: 4500, &quot;disableOnInteraction&quot;: false }, &quot;keyboard&quot;: { &quot;enabled&quot;: true, &quot;onlyInViewport&quot;: true }, &quot;effect&quot;: &quot;slide&quot; }">
          <div className="swiper-wrapper">
            {/* start testimonial item */}
            
            {/* end testimonial item */}
            {testimonials.map((item, i) => {
              return (
                <div className="swiper-slide" key={"xsdhdht-testim"+i}>
              <span className="alt-font text-large line-height-38px md-line-height-32px letter-spacing-minus-1-half d-block margin-3-rem-bottom">{item.comment}</span>
              <div className="feature-box feature-box-left-icon-middle">
                <div className="feature-box-icon margin-25px-right">
                  <img className="rounded-circle w-85px h-85px" src={item.image || require("../media/no-image-resulta.jpg").default} alt="" />
                </div>
                <div className="feature-box-content">
                  <div className="text-extra-dark-gray text-large alt-font line-height-20px text-gradient-peacock-blue-crome-yellow-2 text-uppercase d-inline-block"><span className="font-weight-600">{item.firstname}</span> {item.lastname}</div>
                  <span className="alt-font text-medium d-block text-uppercase margin-5px-top">{item.school}</span>
                </div>
              </div>
            </div>
              )
            })}
          </div> 
        </div>
      </div>
    </div>
  </div>
</section>


<section>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-12 col-md col-sm-4 text-center text-sm-right alt-font text-extra-dark-gray text-uppercase text-medium font-weight-500 xs-margin-10px-bottom">Share this project</div>
      <div className="col-12 col-md col-sm-2"><div className="w-100 h-1px bg-medium-gray xs-margin-15px-tb" /></div>
      <div className="col-12 col-sm text-center text-sm-left social-icon-style-02">
        <ul className="small-icon">
          <li><a className="facebook" href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></a></li>
          <li><a className="dribbble" href="http://www.dribbble.com" target="_blank"><i className="fab fa-dribbble" /></a></li>
          <li><a className="behance" href="http://www.behance.com/" target="_blank"><i className="fab fa-behance" /></a></li>
          <li><a className="instagram" href="http://www.instagram.com" target="_blank"><i className="fab fa-instagram" /></a></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="fancy-box-background fancy-box-col bg-light-gray p-0">
  <div className="container-fluid">
    <div className="row row-cols-1 row-cols-sm-2 justify-content-center">
      {/* start prev pagination */}
      <div className="col fancy-box-item px-0">
        <a 
        href={`/single-room/${previous.name}?location=${previous.location}`}
        className="d-flex h-100 align-items-center justify-content-center justify-content-lg-between justify-content-sm-start padding-7-rem-lr padding-4-rem-tb xl-padding-3-rem-all xs-padding-2-rem-tb xs-no-padding-lr">
          <div className="bg-banner-image cover-background" style={{backgroundImage: `url(${previous?.image})`}} />
          <div className="light alt-font text-black font-weight-500 btn-slide-icon-left text-uppercase mr-lg-auto"><i className="line-icon-Arrow-OutLeft icon-medium align-middle margin-20px-right" /><span className="d-none d-lg-inline-block text-small">Prev room</span></div>
          <span className="light text-extra-large alt-font text-extra-dark-gray d-block font-weight-500">{previous?.name}</span>
        </a>
      </div>
      {/* end prev pagination */}
      {/* start next pagination */}
      <div className="col fancy-box-item px-0">
        <a 
        href={`/single-room/${next.name}?location=${next.location}`}
        className="d-flex h-100 align-items-center justify-content-center justify-content-sm-end justify-content-lg-between padding-7-rem-lr padding-4-rem-tb xl-padding-3-rem-all xs-padding-2-rem-tb xs-no-padding-lr">
          <div className="bg-banner-image cover-background" style={{backgroundImage: `url(${next?.image})`}} />
          <span className="light text-extra-large alt-font text-extra-dark-gray d-block font-weight-500 mr-lg-auto">{next?.name}</span>
          <div className="light alt-font text-black font-weight-500 btn-slide-icon text-uppercase"><span className="d-none d-lg-inline-block text-small">Next room </span><i className="line-icon-Arrow-OutRight icon-medium align-middle margin-20px-left" /></div>
        </a>
      </div>
      {/* end next pagination */}
    </div>
  </div>
</section>

</Layout>
  )
}