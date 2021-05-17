import React from "react";
import { Layout } from "../components/Layout";

export const HomeLanding = () => {
  return (
    <Layout
      boxheader={`navbar top-space navbar-expand-lg navbar-light bg-white header-light fixed-top header-reverse-scroll navbar-boxed`}
    >
      <section className="p-0 home-decor bg-white">
        <article className="content">
          <div
            id="rev_slider_31_1_wrapper"
            className="rev_slider_wrapper fullwidthbanner-container"
            data-alias="mask-showcase"
            data-source="gallery"
          >
            {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
            <div
              id="rev_slider_31_1"
              className="rev_slider fullwidthbanner bg-penguin-white"
              style={{ display: "none" }}
              data-version="5.4.1"
            >
              <ul>
                {/* SLIDE 01 */}
                <li
                  data-index="rs-73"
                  data-transition="fade"
                  data-slotamount="default"
                  data-hideafterloop={0}
                  data-hideslideonmobile="off"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed={300}
                  data-thumb="http://works.themepunch.com/revolution_5_3/wp-content/"
                  data-rotate={0}
                  data-saveperformance="off"
                  data-title="Slide"
                  data-param1={1}
                  data-description
                >
                  {/* MAIN IMAGE */}
                  <img
                    src="images/transparent.png"
                    alt=""
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    data-bgcolor="#FAF6F3"
                    data-bgparallax="off"
                    className="rev-slidebg"
                    data-no-retina
                  />
                  {/* big circle */}
                  <div
                    className="tp-caption  tp-no-events tp-shape tp-shapewrapper"
                    data-x="['right','right','right','right']"
                    data-hoffset="['-330','-20','-150','-50']"
                    data-y="['middle','top','top','top']"
                    data-voffset="['130','-50','-95','-100']"
                    data-width="['936','650','570','500']"
                    data-height="['936','650','570','500']"
                    data-whitespace="nowrap"
                    data-type="shape"
                    data-transform_idle="o:1;"
                    data-transform_in="opacity:0;s:300;e:Power2.easeInOut;"
                    data-transform_out="opacity:0;s:300;s:300;"
                    data-start={500}
                    data-responsive="on"
                    data-responsive_offset="on"
                    data-frames='[{"delay":800,"speed":2000,"frame":"0","from":"o:0;sX:0;sY:0;","to":"o:1;sX:1;sY:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":600,"frame":"999","to":"auto:auto;fb:0;","ease":"Power3.easeInOut"}]'
                    data-blendmode="normal"
                    style={{
                      zIndex: 0,
                      pointerEvents: "none",
                      background: "rgb(240,230,218) !important",
                      borderRadius: "50%",
                    }}
                  >
                    <div
                      className="rs-looped rs-wave"
                      data-type="shape"
                      data-easing="Linear.easeNone"
                      data-angle={360}
                      data-radius={5}
                      data-speed={10}
                      data-origin="50% 50%"
                    ></div>
                  </div>
                  {/* flower pot table layer */}
                  <div
                    className="tp-caption tp-resizeme rs-parallaxlevel-2"
                    data-frames='[{"delay": 2000, "speed": 1000, "from": "opacity: 0", "to": "opacity: 1","ease":"Power3.easeInOut"},{"delay": "wait", "speed": 300, "to": "opacity: 0"}]'
                    data-type="image"
                    data-x="['right','right','right','center']"
                    data-hoffset="['-148','100','10','118']"
                    data-y="['middle','middle','middle','top']"
                    data-voffset="['130','70','37','150']"
                    data-width="['auto']"
                    data-height="['auto']"
                    data-responsive="on"
                    data-responsive_offset="on"
                  >
                    <img
                      src="images/home-decor-img-07.png"
                      data-ww="['196px','120px','110px','90px']"
                      data-hh="['auto','auto','auto','auto']"
                      alt="App Store"
                      width={130}
                      height={40}
                    />
                  </div>
                  {/* chair layer */}
                  <div
                    className="tp-caption tp-resizeme rs-parallaxlevel-3"
                    data-frames='[{"delay": 1600, "speed": 1000, "from": "opacity: 0", "to": "opacity: 1","ease":"Power3.easeInOut"},{"delay": "wait", "speed": 300, "to": "opacity: 0"}]'
                    data-type="image"
                    data-x="['right','right','right','center']"
                    data-hoffset="['4','200','90','-52']"
                    data-y="['middle','middle','middle','top']"
                    data-voffset="['150','100','57','140']"
                    data-width="['auto']"
                    data-height="['auto']"
                    data-responsive="on"
                    data-responsive_offset="on"
                  >
                    <img
                      src="images/home-decor-img-08.png"
                      data-ww="['554px','365px','310px','300px']"
                      data-hh="['auto','auto','auto','auto']"
                      alt="App Store"
                      width={130}
                      height={40}
                    />
                  </div>
                  {/* lamp layer */}
                  <div
                    className="tp-caption tp-resizeme rs-parallaxlevel-6"
                    data-frames='[{"delay": 2300, "speed": 1000, "from": "x:0;y:-250px;", "to": "x:0;y:0;","ease":"Power3.easeInOut"},{"delay": "wait", "speed": 300, "to": "opacity: 0"}]'
                    data-type="image"
                    data-x="['right','right','right','center']"
                    data-hoffset="['187','300','170','0']"
                    data-y="['top','top','top','top']"
                    data-voffset="['-65','0','0','-20']"
                    data-width="['auto']"
                    data-height="['auto']"
                    data-responsive="on"
                    data-responsive_offset="on"
                  >
                    <img
                      src="images/home-decor-img-09.png"
                      data-ww="['220px','130px','110px','100px']"
                      data-hh="['auto','auto','auto','auto']"
                      alt="App Store"
                      width={130}
                      height={40}
                    />
                  </div>
                  {/* classical home decor text */}
                  <div
                    className="tp-caption tp-resizeme alt-font text-extra-large font-weight-500 d-inline-block text-uppercase"
                    data-x="['left','left','left','center']"
                    data-hoffset="['2','42','35','0']"
                    data-y="['middle','middle','middle','bottom']"
                    data-voffset="['-130','-140','-110','340']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-fontsize="['15','15','15','15']"
                    data-lineheight="['15','15','15','15']"
                    data-color="#BF8C4C"
                    data-type="text"
                    data-responsive_offset="on"
                    data-responsive="on"
                    data-frames='[{"delay":100,"split":"chars","splitdelay":0.05,"speed":500,"frame":"0","from":"sX:0.8;sY:0.8;opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","split":"chars","splitdelay":0.03,"speed":500,"frame":"999","to":"sX:0.9;sY:0.9;opacity:0;","ease":"Power3.easeIn"}]'
                    data-textalign="['left','left','center','center']"
                  >
                    classical home decor
                  </div>
                  {/* new decor collection layer */}
                  <div
                    className="tp-caption tp-resizeme alt-font font-weight-700 text-extra-dark-gray"
                    data-x="['left','left','left','center']"
                    data-hoffset="['0','40','35','0']"
                    data-y="['middle','middle','middle','bottom']"
                    data-voffset="['-10','-30','-20','200']"
                    data-fontsize="['81','60','45','50']"
                    data-lineheight="['86','60','45','50']"
                    data-letterspacing="['-1',''-1',''-1',''-1']"
                    data-color="#232323"
                    data-width="auto"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-responsive="on"
                    data-responsive_offset="on"
                    data-frames='[{"delay":600,"speed":1000,"frame":"0","from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:[-100%];y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['left','left','left','center']"
                  >
                    New decor
                    <br />
                    collection
                  </div>
                  {/* view collection button layer */}
                  <a
                    className="tp-caption btn btn-extra-large btn-expand-ltr collection-btn btn-rounded text-extra-dark-gray font-weight-600"
                    href="shop-wide.html"
                    data-x="['left','left','left','center']"
                    data-hoffset="['0','40','34','0']"
                    data-y="['middle','middle','middle','bottom']"
                    data-voffset="['150','95','79','100']"
                    data-whitespace="nowrap"
                    data-fontsize="['15','12','12','12']"
                    data-line-height="['15','12','12','12']"
                    data-type="button"
                    data-responsive="off"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1100,"speed":200,"frame":"0","from":"o:0;","to":"o:1;","ease":"Power3.easeInOut"}]'
                    data-textalign="['left','left','left','center']"
                  >
                    view collections
                    <i
                      className="line-icon-Arrow-OutRight right-icon"
                      aria-hidden="true"
                      style={{
                        opacity: 1,
                        fontSize: "30px",
                        lineHeight: "30px",
                        marginLeft: "17px",
                        transition: "0.3s ease-in-out",
                      }}
                    />
                    <span
                      style={{
                        background: "#BF8C4C",
                        opacity: "0.3",
                        width: "50px",
                        height: "50px",
                        transform: "translateY(-50%)",
                        top: "50%",
                      }}
                    />
                  </a>
                  {/* 01 text layer */}
                  <div
                    className="tp-caption tp-resizeme text-white alt-font font-weight-400 d-inline-block text-uppercase"
                    data-x="['left','left','left','left']"
                    data-hoffset="['-490','-100','-872','-872']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['0','-25','-25','-25']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-fontsize="['310','100','357','357']"
                    data-lineheight="['310','100','357','357']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-responsive="on"
                    data-frames='[{"delay":100,"speed":1500,"frame":"0","from":"o:0;x:-50px","to":"o:1;x:0;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['left','left','center','center']"
                  >
                    01
                  </div>
                </li>
                {/* SLIDE 02 */}
                <li
                  data-index="rs-74"
                  data-transition="fade"
                  data-slotamount="default"
                  data-hideafterloop={0}
                  data-hideslideonmobile="off"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed={300}
                  data-thumb="http://works.themepunch.com/revolution_5_3/wp-content/"
                  data-rotate={0}
                  data-saveperformance="off"
                  data-title="Slide"
                  data-param1={2}
                  data-description
                >
                  {/* MAIN IMAGE */}
                  <img
                    src="images/transparent.png"
                    alt=""
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    data-bgcolor="#FAF6F3"
                    data-bgparallax="off"
                    className="rev-slidebg"
                    data-no-retina
                  />
                  {/* big circle */}
                  <div
                    className="tp-caption  tp-no-events tp-shape tp-shapewrapper"
                    data-x="['right','right','right','right']"
                    data-hoffset="['-330','-20','-150','-50']"
                    data-y="['middle','top','top','top']"
                    data-voffset="['130','-50','-95','-100']"
                    data-width="['936','650','570','500']"
                    data-height="['936','650','570','500']"
                    data-whitespace="nowrap"
                    data-type="shape"
                    data-transform_idle="o:1;"
                    data-transform_in="opacity:0;s:300;e:Power2.easeInOut;"
                    data-transform_out="opacity:0;s:300;s:300;"
                    data-start={500}
                    data-responsive="on"
                    data-responsive_offset="on"
                    data-frames='[{"delay":800,"speed":2000,"frame":"0","from":"o:0;sX:0;sY:0;","to":"o:1;sX:1;sY:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":600,"frame":"999","to":"auto:auto;fb:0;","ease":"Power3.easeInOut"}]'
                    data-blendmode="normal"
                    style={{
                      zIndex: 0,
                      pointerEvents: "none",
                      background: "rgb(240,230,218) !important",
                      borderRadius: "50%",
                    }}
                  >
                    <div
                      className="rs-looped rs-wave"
                      data-type="shape"
                      data-easing="Linear.easeNone"
                      data-angle={360}
                      data-radius={5}
                      data-speed={10}
                      data-origin="50% 50%"
                    ></div>
                  </div>
                  {/* flower pot table layer */}
                  <div
                    className="tp-caption tp-resizeme rs-parallaxlevel-2"
                    data-frames='[{"delay": 2000, "speed": 1000, "from": "opacity: 0", "to": "opacity: 1","ease":"Power3.easeInOut"},{"delay": "wait", "speed": 300, "to": "opacity: 0"}]'
                    data-type="image"
                    data-x="['right','right','right','center']"
                    data-hoffset="['-235','10','-50','128']"
                    data-y="['middle','middle','middle','top']"
                    data-voffset="['90','120','40','190']"
                    data-width="['auto']"
                    data-height="['auto']"
                    data-responsive="on"
                    data-responsive_offset="on"
                  >
                    <img
                      src="images/home-decor-img-10.png"
                      data-ww="['332px','250px','195px','180px']"
                      data-hh="['auto','auto','auto','auto']"
                      alt="App Store"
                      width={130}
                      height={40}
                    />
                  </div>
                  {/* chair layer */}
                  <div
                    className="tp-caption tp-resizeme rs-parallaxlevel-3"
                    data-frames='[{"delay": 1600, "speed": 1000, "from": "opacity: 0", "to": "opacity: 1","ease":"Power3.easeInOut"},{"delay": "wait", "speed": 300, "to": "opacity: 0"}]'
                    data-type="image"
                    data-x="['right','right','right','center']"
                    data-hoffset="['12','200','90','-52']"
                    data-y="['middle','middle','middle','top']"
                    data-voffset="['38','100','20','140']"
                    data-width="['auto']"
                    data-height="['auto']"
                    data-responsive="on"
                    data-responsive_offset="on"
                  >
                    <img
                      src="images/home-decor-img-11.png"
                      data-ww="['545px','365px','310px','280px']"
                      data-hh="['auto','auto','auto','auto']"
                      alt="App Store"
                      width={130}
                      height={40}
                    />
                  </div>
                  {/* lamp layer */}
                  <div
                    className="tp-caption tp-resizeme rs-parallaxlevel-6"
                    data-frames='[{"delay": 2300, "speed": 1000, "from": "x:0;y:-250px;", "to": "x:0;y:0;","ease":"Power3.easeInOut"},{"delay": "wait", "speed": 300, "to": "opacity: 0"}]'
                    data-type="image"
                    data-x="['right','right','right','center']"
                    data-hoffset="['30','300','130','0']"
                    data-y="['top','top','top','top']"
                    data-voffset="['-100','-50','-60','-40']"
                    data-width="['auto']"
                    data-height="['auto']"
                    data-responsive="on"
                    data-responsive_offset="on"
                  >
                    <img
                      src="images/home-decor-img-12.png"
                      data-ww="['140px','105px','90px','70px']"
                      data-hh="['auto','auto','auto','auto']"
                      alt="App Store"
                      width={130}
                      height={40}
                    />
                  </div>
                  {/* classical home decor text */}
                  <div
                    className="tp-caption tp-resizeme alt-font text-extra-large font-weight-500 d-inline-block text-uppercase"
                    data-x="['left','left','left','center']"
                    data-hoffset="['2','42','35','0']"
                    data-y="['middle','middle','middle','bottom']"
                    data-voffset="['-130','-140','-110','340']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-fontsize="['15','15','15','15']"
                    data-lineheight="['15','15','15','15']"
                    data-color="#BF8C4C"
                    data-type="text"
                    data-responsive_offset="on"
                    data-responsive="on"
                    data-frames='[{"delay":100,"split":"chars","splitdelay":0.05,"speed":500,"frame":"0","from":"sX:0.8;sY:0.8;opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","split":"chars","splitdelay":0.03,"speed":500,"frame":"999","to":"sX:0.9;sY:0.9;opacity:0;","ease":"Power3.easeIn"}]'
                    data-textalign="['left','left','center','center']"
                  >
                    classical home decor
                  </div>
                  {/* new decor collection layer */}
                  <div
                    className="tp-caption tp-resizeme alt-font font-weight-700 text-extra-dark-gray"
                    data-x="['left','left','left','center']"
                    data-hoffset="['0','40','35','0']"
                    data-y="['middle','middle','middle','bottom']"
                    data-voffset="['-10','-30','-20','200']"
                    data-fontsize="['81','60','45','50']"
                    data-lineheight="['86','60','45','50']"
                    data-letterspacing="['-1',''-1',''-1',''-1']"
                    data-color="#232323"
                    data-width="auto"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-responsive="on"
                    data-responsive_offset="on"
                    data-frames='[{"delay":600,"speed":1000,"frame":"0","from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:[-100%];y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['left','left','left','center']"
                  >
                    New chair
                    <br />
                    collection
                  </div>
                  {/* view collection button layer */}
                  <a
                    className="tp-caption btn btn-extra-large btn-expand-ltr collection-btn btn-rounded text-extra-dark-gray font-weight-600"
                    href="shop-wide.html"
                    data-x="['left','left','left','center']"
                    data-hoffset="['0','40','34','0']"
                    data-y="['middle','middle','middle','bottom']"
                    data-voffset="['150','95','79','100']"
                    data-whitespace="nowrap"
                    data-fontsize="['15','12','12','12']"
                    data-line-height="['15','12','12','12']"
                    data-type="button"
                    data-responsive="off"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1100,"speed":200,"frame":"0","from":"o:0;","to":"o:1;","ease":"Power3.easeInOut"}]'
                    data-textalign="['left','left','left','center']"
                  >
                    view collections
                    <i
                      className="line-icon-Arrow-OutRight right-icon"
                      aria-hidden="true"
                      style={{
                        opacity: 1,
                        fontSize: "30px",
                        lineHeight: "30px",
                        marginLeft: "17px",
                        transition: "0.3s ease-in-out",
                      }}
                    />
                    <span
                      style={{
                        background: "#BF8C4C",
                        opacity: "0.3",
                        width: "50px",
                        height: "50px",
                        transform: "translateY(-50%)",
                        top: "50%",
                      }}
                    />
                  </a>
                  {/* 01 text layer */}
                  <div
                    className="tp-caption tp-resizeme text-white alt-font font-weight-400 d-inline-block text-uppercase"
                    data-x="['left','left','left','left']"
                    data-hoffset="['-490','-100','-872','-872']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['0','-25','-25','-25']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-fontsize="['310','100','357','357']"
                    data-lineheight="['310','100','357','357']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-responsive="on"
                    data-frames='[{"delay":100,"speed":1500,"frame":"0","from":"o:0;x:-50px","to":"o:1;x:0;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['left','left','center','center']"
                  >
                    02
                  </div>
                </li>
                {/* SLIDE 03 */}
                <li
                  data-index="rs-75"
                  data-transition="fade"
                  data-slotamount="default"
                  data-hideafterloop={0}
                  data-hideslideonmobile="off"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed={300}
                  data-thumb="http://works.themepunch.com/revolution_5_3/wp-content/"
                  data-rotate={0}
                  data-saveperformance="off"
                  data-title="Slide"
                  data-param1={3}
                  data-description
                >
                  {/* MAIN IMAGE */}
                  <img
                    src="images/transparent.png"
                    alt=""
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    data-bgcolor="#FAF6F3"
                    data-bgparallax="off"
                    className="rev-slidebg"
                    data-no-retina
                  />
                  {/* big circle */}
                  <div
                    className="tp-caption  tp-no-events tp-shape tp-shapewrapper"
                    data-x="['right','right','right','right']"
                    data-hoffset="['-330','-20','-150','-50']"
                    data-y="['middle','top','top','top']"
                    data-voffset="['130','-50','-95','-100']"
                    data-width="['936','650','570','500']"
                    data-height="['936','650','570','500']"
                    data-whitespace="nowrap"
                    data-type="shape"
                    data-transform_idle="o:1;"
                    data-transform_in="opacity:0;s:300;e:Power2.easeInOut;"
                    data-transform_out="opacity:0;s:300;s:300;"
                    data-start={500}
                    data-responsive="on"
                    data-responsive_offset="on"
                    data-frames='[{"delay":800,"speed":2000,"frame":"0","from":"o:0;sX:0;sY:0;","to":"o:1;sX:1;sY:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":600,"frame":"999","to":"auto:auto;fb:0;","ease":"Power3.easeInOut"}]'
                    data-blendmode="normal"
                    style={{
                      zIndex: 0,
                      pointerEvents: "none",
                      background: "rgb(240,230,218) !important",
                      borderRadius: "50%",
                    }}
                  >
                    <div
                      className="rs-looped rs-wave"
                      data-type="shape"
                      data-easing="Linear.easeNone"
                      data-angle={360}
                      data-radius={5}
                      data-speed={10}
                      data-origin="50% 50%"
                    ></div>
                  </div>
                  {/* flower pot table layer */}
                  <div
                    className="tp-caption tp-resizeme rs-parallaxlevel-2"
                    data-frames='[{"delay": 2000, "speed": 1000, "from": "opacity: 0", "to": "opacity: 1","ease":"Power3.easeInOut"},{"delay": "wait", "speed": 300, "to": "opacity: 0"}]'
                    data-type="image"
                    data-x="['right','right','right','center']"
                    data-hoffset="['115','290','150','-40']"
                    data-y="['middle','middle','middle','top']"
                    data-voffset="['15','10','-20','150']"
                    data-width="['auto']"
                    data-height="['auto']"
                    data-responsive="on"
                    data-responsive_offset="on"
                  >
                    <img
                      src="images/home-decor-img-14.png"
                      data-ww="['410px','250px','220px','200px']"
                      data-hh="['auto','auto','auto','auto']"
                      alt="App Store"
                      width={130}
                      height={40}
                    />
                  </div>
                  {/* chair layer */}
                  <div
                    className="tp-caption tp-resizeme rs-parallaxlevel-3"
                    data-frames='[{"delay": 1600, "speed": 1000, "from": "opacity: 0", "to": "opacity: 1","ease":"Power3.easeInOut"},{"delay": "wait", "speed": 300, "to": "opacity: 0"}]'
                    data-type="image"
                    data-x="['right','right','right','center']"
                    data-hoffset="['-285','50','-40','110']"
                    data-y="['middle','middle','middle','top']"
                    data-voffset="['48','50','20','140']"
                    data-width="['auto']"
                    data-height="['auto']"
                    data-responsive="on"
                    data-responsive_offset="on"
                  >
                    <img
                      src="images/home-decor-img-13.png"
                      data-ww="['565px','340px','290px','280px']"
                      data-hh="['auto','auto','auto','auto']"
                      alt="App Store"
                      width={130}
                      height={40}
                    />
                  </div>
                  {/* lamp layer */}
                  <div
                    className="tp-caption tp-resizeme rs-parallaxlevel-6"
                    data-frames='[{"delay": 2300, "speed": 1000, "from": "x:0;y:-250px;", "to": "x:0;y:0;","ease":"Power3.easeInOut"},{"delay": "wait", "speed": 300, "to": "opacity: 0"}]'
                    data-type="image"
                    data-x="['right','right','right','center']"
                    data-hoffset="['180','290','170','0']"
                    data-y="['top','top','top','top']"
                    data-voffset="['-62','0','-15','-20']"
                    data-width="['auto']"
                    data-height="['auto']"
                    data-responsive="on"
                    data-responsive_offset="on"
                  >
                    <img
                      src="images/home-decor-img-15.png"
                      data-ww="['190px','100px','100px','80px']"
                      data-hh="['auto','auto','auto','auto']"
                      alt="App Store"
                      width={130}
                      height={40}
                    />
                  </div>
                  {/* classical home decor text */}
                  <div
                    className="tp-caption tp-resizeme alt-font text-extra-large font-weight-500 d-inline-block text-uppercase"
                    data-x="['left','left','left','center']"
                    data-hoffset="['2','42','35','0']"
                    data-y="['middle','middle','middle','bottom']"
                    data-voffset="['-130','-140','-110','340']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-fontsize="['15','15','15','15']"
                    data-lineheight="['15','15','15','15']"
                    data-color="#BF8C4C"
                    data-type="text"
                    data-responsive_offset="on"
                    data-responsive="on"
                    data-frames='[{"delay":100,"split":"chars","splitdelay":0.05,"speed":500,"frame":"0","from":"sX:0.8;sY:0.8;opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","split":"chars","splitdelay":0.03,"speed":500,"frame":"999","to":"sX:0.9;sY:0.9;opacity:0;","ease":"Power3.easeIn"}]'
                    data-textalign="['left','left','center','center']"
                  >
                    classical home decor
                  </div>
                  {/* new decor collection layer */}
                  <div
                    className="tp-caption tp-resizeme alt-font font-weight-700 text-extra-dark-gray"
                    data-x="['left','left','left','center']"
                    data-hoffset="['0','40','35','0']"
                    data-y="['middle','middle','middle','bottom']"
                    data-voffset="['-10','-30','-20','200']"
                    data-fontsize="['81','60','45','50']"
                    data-lineheight="['86','60','45','50']"
                    data-letterspacing="['-1',''-1',''-1',''-1']"
                    data-color="#232323"
                    data-width="auto"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-responsive="on"
                    data-responsive_offset="on"
                    data-frames='[{"delay":600,"speed":1000,"frame":"0","from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:[-100%];y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['left','left','left','center']"
                  >
                    New chair
                    <br />
                    collection
                  </div>
                  {/* view collection button layer */}
                  <a
                    className="tp-caption btn btn-extra-large btn-expand-ltr collection-btn btn-rounded text-extra-dark-gray font-weight-600"
                    href="shop-wide.html"
                    data-x="['left','left','left','center']"
                    data-hoffset="['0','40','34','0']"
                    data-y="['middle','middle','middle','bottom']"
                    data-voffset="['150','95','79','100']"
                    data-whitespace="nowrap"
                    data-fontsize="['15','12','12','12']"
                    data-line-height="['15','12','12','12']"
                    data-type="button"
                    data-responsive="off"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1100,"speed":200,"frame":"0","from":"o:0;","to":"o:1;","ease":"Power3.easeInOut"}]'
                    data-textalign="['left','left','left','center']"
                  >
                    view collections
                    <i
                      className="line-icon-Arrow-OutRight right-icon"
                      aria-hidden="true"
                      style={{
                        opacity: 1,
                        fontSize: "30px",
                        lineHeight: "30px",
                        marginLeft: "17px",
                        transition: "0.3s ease-in-out",
                      }}
                    />
                    <span
                      style={{
                        background: "#BF8C4C",
                        opacity: "0.3",
                        width: "50px",
                        height: "50px",
                        transform: "translateY(-50%)",
                        top: "50%",
                      }}
                    />
                  </a>
                  {/* 01 text layer */}
                  <div
                    className="tp-caption tp-resizeme text-white alt-font font-weight-400 d-inline-block text-uppercase"
                    data-x="['left','left','left','left']"
                    data-hoffset="['-490','-100','-872','-872']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['0','-25','-25','-25']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-fontsize="['310','100','357','357']"
                    data-lineheight="['310','100','357','357']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-responsive="on"
                    data-frames='[{"delay":100,"speed":1500,"frame":"0","from":"o:0;x:-50px","to":"o:1;x:0;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['left','left','center','center']"
                  >
                    03
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
      <section className="padding-90px-tb border-bottom border-color-medium-gray md-padding-75px-tb sm-padding-50px-tb">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center">
            {/* start feature box item */}
            <div
              className="col md-margin-35px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeIn",
              }}
            >
              <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                <div className="feature-box-icon margin-30px-right line-height-0px lg-margin-25px-right">
                  <i className="line-icon-Headset icon-very-medium text-tussock" />
                </div>
                <div className="feature-box-content line-height-22px">
                  <div className="text-extra-dark-gray font-weight-500 text-extra-medium line-height-20px margin-5px-bottom">
                    Expert support
                  </div>
                  <span>Contact support team</span>
                </div>
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div
              className="col md-margin-35px-bottom wow animate__fadeIn"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeIn",
              }}
            >
              <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                <div className="feature-box-icon margin-30px-right line-height-0px lg-margin-25px-right">
                  <span className="line-icon-Like-2 icon-very-medium text-tussock" />
                </div>
                <div className="feature-box-content line-height-22px">
                  <div className="text-extra-dark-gray font-weight-500 text-extra-medium line-height-20px margin-5px-bottom">
                    Perfect quality
                  </div>
                  <span>Perfect design quality</span>
                </div>
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div
              className="col xs-margin-35px-bottom wow animate__fadeIn"
              data-wow-delay="0.6s"
              style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeIn",
              }}
            >
              <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                <div className="feature-box-icon margin-30px-right line-height-0px lg-margin-25px-right">
                  <i className="line-icon-Shield icon-very-medium text-tussock" />
                </div>
                <div className="feature-box-content line-height-22px">
                  <div className="text-extra-dark-gray font-weight-500 text-extra-medium line-height-20px margin-5px-bottom">
                    Security checkout
                  </div>
                  <span>Safe and trustworthy</span>
                </div>
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div
              className="col wow animate__fadeIn"
              data-wow-delay="0.8s"
              style={{
                visibility: "visible",
                animationDelay: "0.8s",
                animationName: "fadeIn",
              }}
            >
              <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                <div className="feature-box-icon margin-30px-right line-height-0px lg-margin-25px-right">
                  <i className="line-icon-Coin icon-very-medium text-tussock" />
                </div>
                <div className="feature-box-content line-height-22px">
                  <div className="text-extra-dark-gray font-weight-500 text-extra-medium line-height-20px margin-5px-bottom">
                    Instant discounts
                  </div>
                  <span>Use your coupon now</span>
                </div>
              </div>
            </div>
            {/* end feature box item */}
          </div>
        </div>
      </section>
      <section
        className="overflow-visible cover-background wow animate__fadeIn"
        style={{ backgroundImage: 'url("images/home-decor-bg-img-02.jpg")' }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-12 col-lg-6 col-md-10 margin-20px-bottom md-margin-8-rem-bottom sm-margin-10-rem-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="w-70 margin-4-rem-bottom sm-no-margin-bottom">
                <img src="images/home-decor-img-01.jpg" alt="" />
              </div>
              <div
                className="position-absolute right-25px bottom-minus-50px w-55 md-right-15px md-bottom-minus-30px"
                data-parallax-layout-ratio="1.1"
              >
                <img src="images/home-decor-img-01.png" alt="" />
              </div>
            </div>
            <div
              className="col-12 col-lg-5 offset-lg-1 col-md-10 wow animate__fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="alt-font text-medium font-weight-500 margin-30px-bottom media">
                <span className="w-40px h-1px bg-tussock opacity-7 align-self-center margin-20px-right" />
                <div className="media-body">
                  <span className="text-tussock text-uppercase">
                    About our company
                  </span>
                </div>
              </div>
              <h4 className="alt-font text-extra-dark-gray font-weight-600 w-85 margin-35px-bottom lg-w-100 sm-margin-25px-bottom">
                Classic beautiful and modern decor presence of design
              </h4>
              <p className="w-80 lg-w-100">
                Lorem ipsum dolor sit amet consectetur adipiscing do eiusmod
                tempor incididunt ut labore dolore magna enim veniam nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
              <a
                href="#specialization"
                className="btn btn-fancy btn-medium btn-dark-gray margin-20px-top section-link"
              >
                Our services
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-penguin-white p-0 wow animate__fadeIn">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-12 col-xl-6 col-lg-4 cover-background d-flex justify-content-center align-items-center md-h-450px xs-h-300px wow animate__fadeInLeft"
              style={{ backgroundImage: 'url("images/home-decor-img-05.jpg")' }}
            ></div>
            <div className="col-12 col-xl-6 col-lg-8">
              <div className="d-flex flex-column">
                <div className="row">
                  <div
                    className="col-12 col-sm-6 cover-background xs-h-300px wow animate__fadeIn"
                    data-wow-delay="0.4s"
                    style={{
                      backgroundImage: 'url("images/home-decor-img-06.jpg")',
                    }}
                  />
                  <div
                    className="col-12 col-sm-6 bg-penguin-white wow animate__fadeIn"
                    data-wow-delay="0.5s"
                    style={{
                      backgroundImage: 'url("images/home-decor-img-05.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "bottom -25px right 5px",
                    }}
                  >
                    <div className="padding-6-rem-lr padding-8-rem-tb md-padding-3-rem-lr md-padding-6-rem-tb xl-padding-3-rem-lr xl-padding-4-rem-tb">
                      <span className="alt-font font-weight-600 text-extra-dark-gray text-large margin-20px-bottom d-block">
                        Creativity ideas
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                      <a
                        href="shop-left-sidebar.html"
                        className="btn btn-small btn-tussock margin-5px-top"
                      >
                        View collection
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-12 col-sm-6 cover-background order-sm-2 xs-h-300px wow animate__fadeIn"
                    data-wow-delay="0.8s"
                    style={{
                      backgroundImage: 'url("images/home-decor-img-07.jpg")',
                    }}
                  />
                  <div
                    className="col-12 col-sm-6 bg-penguin-white order-sm-1 wow animate__fadeIn"
                    data-wow-delay="0.9s"
                    style={{
                      backgroundImage: 'url("images/home-decor-img-06.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "bottom -35px right 25px",
                    }}
                  >
                    <div className="padding-6-rem-lr padding-8-rem-tb md-padding-3-rem-lr md-padding-6-rem-tb xl-padding-3-rem-lr xl-padding-4-rem-tb">
                      <span className="alt-font font-weight-600 text-extra-dark-gray text-large margin-20px-bottom d-block">
                        Innovation concept
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                      <a
                        href="shop-left-sidebar.html"
                        className="btn btn-small btn-tussock margin-5px-top"
                      >
                        View collection
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wow animate__fadeIn">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 text-center">
              <div className="instagram-follow-api swiper-container">
                <div
                  className="swiper-wrapper instafeed-grid instafeed-wrapper"
                  data-total={8}
                  data-slider-options='{"loop": true, "slidesPerView": 2, "spaceBetween": 15, "autoplay": { "delay": 3500, "disableOnInteraction": false },  "keyboard": { "enabled": true, "onlyInViewport": true }, "pagination": { "el": ".swiper-pagination", "clickable": true, "dynamicBullets": true }, "navigation": { "nextEl": ".swiper-button-next", "prevEl": ".swiper-button-prev" }, "breakpoints": { "1200": { "slidesPerView": 6 }, "992": { "slidesPerView": 3 }, "768": { "slidesPerView": 3 } } }'
                >
                  <div className="swiper-slide">
                    <figure>
                      <a href="#" data-href="{{link}}" target="_blank">
                        <img
                          src="#"
                          data-src="{{image}}"
                          className="insta-image"
                          alt=""
                        />
                        <span className="insta-counts">
                          <i className="fab fa-instagram" />
                          {"{"}
                          {"{"}likes{"}"}
                          {"}"}
                        </span>
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="instagram-title alt-font absolute-middle-center bg-white text-extra-dark-gray border-radius-2px letter-spacing-1px font-weight-500 text-medium text-uppercase">
                  #Instagram decor
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
