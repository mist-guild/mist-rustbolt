import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./Slider3.module.scss";
import Layout from "../../layouts/Layout/Layout";

export default (props) => {
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleClick = () => {
    return props.scrollto.current?.scrollIntoView({behavior: 'smooth'});
  };

  const slideList = props.data.map((item, index) => (
    <article key={index}>
      <Layout
        style={{
          background: "url(" + item.image + ") center/cover",
          minHeight:'100vh',
          height:'fit-content',
        }}
        col="1"
        mode="dark"
      >
        <div className={styles.slide} style={{justifyContent:'center'}}>
          <i
            className={"las la-long-arrow-alt-left " + styles.leftarrow}
            onClick={() => sliderRef.slickPrev()}
            style={{visibility: index === 0 ? 'hidden' : 'visible'}}
          />
          <div className={styles.intro} style={{maxWidth:'unset'}}>
            <h1>{item.title}</h1>
            {
              index !==0 && index!==4?
            <div className="card2 user" style={{height:'fit-content', width:'100%'}}>
              <span className="inner-card-backface" style={{background:'transparent'}}>
                <span className="flip-inner-card">
                </span>
              </span>
              <span className="inner-card" style={{background:'transparent', width:'100%'}}>
                <div className="intro" style={{maxWidth:'unset', padding:'100px', borderRadius:'25px'}}>
                  <div className="goals" style={{justifyContent:'center'}}>
                    <ul style={index===3? {padding:'20px'} : {}}>
                      {item.data.map((item2, index2) => (
                        index===3?
                        <li key={index2} style={{marginBottom:'20px'}}><a href={item2.link}>{item2.title}</a></li>
                        :
                        <li key={index2} style={{marginBottom:'20px'}}> {item2.title} </li>
                      ))}
                    </ul> 
                  </div>
                </div>
                <span className="glare"></span>
              </span>
            </div>
            : index ===4?
            <button className="scroll" onClick={() => handleClick()}></button>
            : null
          }
          </div>
          <i
            className={"las la-long-arrow-alt-right " + styles.rightarrow}
            onClick={() => sliderRef.slickNext()}
            style={{visibility: index === 4 ? 'hidden' : 'visible'}}
          />
        </div>
      </Layout>
    </article>
  ));

  return (
    <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
      {slideList}
    </Slider>
  );
};
