import React from "react";
import { useEffect, useRef, useState } from "react";
import { useCustomState } from "../../../state/state";
import { Layout } from "../../layouts";
import { Button } from "../../elements";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dragon from "./1.gif";
import { HomeTeams, VideoHeader } from "../../widgets";
import "./ParallaxHeader.css";

export default () => {
  //gsap init
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "none" });

  let calculateAngle = function (e, item, parent) {
    let dropShadowColor = `rgba(0, 0, 0, 0.3)`;
    if (parent.getAttribute("data-filter-color") !== null) {
      dropShadowColor = parent.getAttribute("data-filter-color");
    }

    parent.classList.add("animated");
    // Get the x position of the users mouse, relative to the button itself
    let x = Math.abs(item.getBoundingClientRect().x - e.clientX);
    // Get the y position relative to the button
    let y = Math.abs(item.getBoundingClientRect().y - e.clientY);

    // Calculate half the width and height
    let halfWidth = item.getBoundingClientRect().width / 2;
    let halfHeight = item.getBoundingClientRect().height / 2;

    // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
    // Changing these numbers will change the depth of the effect.
    let calcAngleX = (x - halfWidth) / 36;
    let calcAngleY = (y - halfHeight) / 34;

    let gX = (1 - x / (halfWidth * 2)) * 100;
    let gY = (1 - y / (halfHeight * 2)) * 100;

    item.querySelector(
      ".glare"
    ).style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgb(199 198 243), transparent)`;
    // And set its container's perspective.
    parent.style.perspective = `${halfWidth * 6}px`;
    item.style.perspective = `${halfWidth * 6}px`;

    // Set the items transform CSS property
    item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04)`;
    parent.querySelector(
      ".inner-card-backface"
    ).style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04) translateZ(-4px)`;

    if (parent.getAttribute("data-custom-perspective") !== null) {
      parent.style.perspective = `${parent.getAttribute(
        "data-custom-perspective"
      )}`;
    }

    // Reapply this to the shadow, with different dividers
    let calcShadowX = (x - halfWidth) / 3;
    let calcShadowY = (y - halfHeight) / 6;

    // Add a filter shadow - this is more performant to animate than a regular box shadow.
    item.style.filter = `drop-shadow(${-calcShadowX}px ${-calcShadowY}px 15px ${dropShadowColor})`;
  };
  document.querySelectorAll(".card2").forEach(function (item) {
    if (item.querySelector(".flip") !== null) {
      item.querySelector(".flip").addEventListener("click", function () {
        item.classList.add("flipped");
      });
    }
    if (item.querySelector(".unflip") !== null) {
      item.querySelector(".unflip").addEventListener("click", function () {
        item.classList.remove("flipped");
      });
    }
    item.addEventListener("mouseenter", function (e) {
      calculateAngle(e, this.querySelector(".inner-card"), this);
    });

    item.addEventListener("mousemove", function (e) {
      calculateAngle(e, this.querySelector(".inner-card"), this);
    });

    item.addEventListener("mouseleave", function (e) {
      let dropShadowColor = `rgba(0, 0, 0, 0.3)`;
      if (item.getAttribute("data-filter-color") !== null) {
        dropShadowColor = item.getAttribute("data-filter-color");
      }
      item.classList.remove("animated");
      item.querySelector(
        ".inner-card"
      ).style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
      item.querySelector(
        ".inner-card-backface"
      ).style.transform = `rotateY(0deg) rotateX(0deg) scale(1.01) translateZ(-4px)`;
      item.querySelector(
        ".inner-card"
      ).style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`;
    });
  });
  document.querySelectorAll(".card3").forEach(function (item) {
    if (item.querySelector(".flip") !== null) {
      item.querySelector(".flip").addEventListener("click", function () {
        item.classList.add("flipped");
      });
    }
    if (item.querySelector(".unflip") !== null) {
      item.querySelector(".unflip").addEventListener("click", function () {
        item.classList.remove("flipped");
      });
    }
    item.addEventListener("mouseenter", function (e) {
      calculateAngle(e, this.querySelector(".inner-card"), this);
    });

    item.addEventListener("mousemove", function (e) {
      calculateAngle(e, this.querySelector(".inner-card"), this);
    });

    item.addEventListener("mouseleave", function (e) {
      let dropShadowColor = `rgba(0, 0, 0, 0.3)`;
      if (item.getAttribute("data-filter-color") !== null) {
        dropShadowColor = item.getAttribute("data-filter-color");
      }
      item.classList.remove("animated");
      item.querySelector(
        ".inner-card"
      ).style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
      item.querySelector(
        ".inner-card-backface"
      ).style.transform = `rotateY(0deg) rotateX(0deg) scale(1.01) translateZ(-4px)`;
      item.querySelector(
        ".inner-card"
      ).style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`;
    });
  });

  const [state, actions] = useCustomState();
  const [randomColor, setRandomColor] = useState("#0d2240");

  //liquid logo animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomColor(Math.floor(Math.random() * 16777215).toString(16));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // get window dimensions
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowDimensions;
  }
  const { height, width } = useWindowDimensions();

  //get mouse position
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });
  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  const mouseX = mousePosition.x;
  const mouseY = mousePosition.y;

  //teams animation
  const teamsSection = useRef();
  useEffect(() => {
    gsap.to(teamsSection.current, { x: -mouseX / 20, y: -mouseY / 20 });
  }, [mouseX, mouseY]);

  return (
    <div
      className="parallax"
      style={{
        backgroundImage: "url(" + state.data.parallax.bg + ")",
      }}
    >
      <Layout col="1">
        <section className="about" id="about">
          {/* <div  className="fade">
            <div className="card2 user" style={{height:'fit-content'}}>
              <span className="inner-card-backface" style={{background:'transparent'}}>
                <span className="flip-inner-card">
                </span>
              </span>
              <span className="inner-card" style={{background:'transparent'}}>
                <svg className="liquidlogo"  imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 841.9 543" xmlns="http://www.w3.org/2000/svg"><path d="m316.6 286.6c-4.5 5.4-9.9 11.5-16 18 4.8 4.5 10.2 8.8 16.1 13 3.6 2.5 7.6 5 11.7 7.5-4.9-13.4-8.8-26.2-11.8-38.5zm-7.4-62.7c-11.3 5.6-26.4 12.2-43 18 3 12.7 7 24 12.5 34.3 12.5-7.9 23.5-15.9 32-22.6-1.2-10.4-1.7-20.3-1.5-29.7zm28-92.9c-21.1-8.4-52.6-23.5-78.9-43.3v45c24.6 9.3 49.8 15.1 67.6 18.2 3.4-7.2 7.2-13.8 11.3-19.9zm29.6-33.5c-14.6-15-34.9-38.7-50.5-64.9l-40.2 13.9c22.2 28.3 53.9 52.8 74.7 66.7 5.2-5.8 10.6-11 16-15.7zm18.5-13.8c7.4-4.8 14.6-8.5 21.1-11.4-6-16.3-13.2-39.9-17.6-64.8l-35.8 12.5c9.6 25 22.5 48.1 32.3 63.7zm-68.1 89.1c-15.4.6-36.5.4-58.5-2.1.4 12.8 1 24.7 2 35.8 19.4-2.2 37.4-5.9 50.8-9.3 1.5-8.7 3.4-16.8 5.7-24.4zm171.2-34c3.6 3 13 .2 13 .2l-6.8-8.1-14.5-9.7c0 .1 4.7 14.7 8.3 17.6zm47.4 80.7-8.7-7 5 12.1 14.1-1.1zm-104.7-219.5c-6 19.2-7.9 42.8-1.1 66h-.2.2c2.4-2.5 20.9-21.9 37.6-40.1 0 0 21.9 25.2-8.7 51.1 0 0 54.7 38.2 58.2 39.8 0 0-2.8 11.9-.1 22l43 83.3-21.7 25.6-31.8-17.9 15.3 24.6s-17.3 2.1-22.6-.4c-3-15.6-16.8-40.9-16.8-40.9l-32.4-13.1s-14.1-17.4-13.2-42.6c0 0-16.1 66.2 27.4 82.8l60.9 77.5c56.3-38.9 58.6-93 58.6-200.8v-64.2zm-369.8 412.1h-35.3v-22.1h-13.8v22.1h-12.2v11.1h12.2v53.8c0 21.4 4.9 27.5 26.3 27.5 18.8 0 26.3-8.5 26.3-26.6v-6.8h-13v6.8c0 8.7 0 15.5-12.9 15.5-10.1 0-12.7-2.3-12.9-12.2v-58h35.3zm29.8 37.6c1.1-21.1 1.9-27.5 26.8-27.5 20.9 0 24 1.5 24.7 27.5zm51.7 26.1v3.5c0 12.9-6.1 14.1-24.9 14.1-24.7 0-26.8-3.6-26.8-32.6h65.8v-9.2c0-33.8-9.4-40.5-39-40.5-32.7 0-41.1 8.9-41.1 46.8 0 34.8 5.4 46.6 41.1 46.6 20.4 0 39-1.2 39-25.4v-3.3zm109.5 27.7v-62.3c.2-27.9-16.7-30.3-39.7-30.1-20.4-.2-36.5 1.4-36.5 24.9v1.9h14.3v-3.2c-.2-12.5 13.1-12.5 23.8-12.5 15.5 0 24.4 1.5 24.4 18.3v16.9h-.9c-1.9-8.3-19.6-9.2-28.7-9.2-22.6 0-35.7 3.5-35.7 28.7 0 23.8 14.3 27.7 34.8 27.7 11.5 0 24.9-.3 30.1-10.8l.4.3v9.4zm-41.8-10.1c-15.8 0-23-.9-23-18.3 0-14.8 6.6-15.8 23-15.8 17.4 0 27.7-.2 27.7 17.1-.1 16.7-14 17-27.7 17zm76.3-81.3h-13.8v91.4h13.8v-55c0-18.6 9.4-26.3 27.5-26.3 19.8 0 19.8 7.8 20.4 20v61.3h13.7v-56c0-19.7 8.4-25.2 27.9-25.2 17.8 0 20 7 20 22.4v58.8h13.7v-60.2c0-22.6-8.2-32.2-31.7-32.2-12.3 0-26.5 3-32.6 15.1-3.2-12-17.2-15.1-28.2-15.1-11.7 0-25.6 3.3-30.5 15.1h-.3v-14.1zm150.4 91.4h21.9v-130.6h-21.9zm40.1 0h21.9v-91.4h-21.9zm0-112h21.9v-18.6h-21.9zm123.1 20.6h-21.9l.9 13.8h-.7c-5.6-12-15.7-14.8-28.5-14.8-34 0-35 21.4-35 49.4 0 26.8 3.6 44.1 35 44.1 11.1 0 22.8-2.1 27.5-13.2h.9v51.6h21.9v-130.9zm-43.8 15.6c18.9 0 21.9 7.9 21.9 27.3 0 21.8.5 32.8-21.9 32.8-20 0-19.5-12-19.5-32.8 0-22.9 4.3-27.3 19.5-27.3zm144.1 75.8v-91.4h-21.9v52.8c0 15.8-5.4 23-22.3 23-14.1 0-15.3-5.1-15.3-18.1v-57.6h-21.9v66.2c.2 20 12.3 26.3 30.7 26.3 12.5 0 23.8-3 28.9-15.1h.7v14.1h21.1zm18.4 0h21.9v-91.4h-21.9zm0-112h21.9v-18.6h-21.9zm100.8 112h21.9v-130.6h-21.9v51.3h-.9c-4.7-11.1-16.4-13.2-27.5-13.2-31.3 0-35 17.2-35 44 0 28 1.1 49.4 35 49.4 12.9 0 23-2.8 28.5-14.8h.7zm-21.9-75.8c18.9 0 21.6 7.9 21.6 27.3 0 21.8.9 32.8-21.6 32.8-20 0-19.5-12-19.5-32.8 0-22.9 4.4-27.3 19.5-27.3z" fill={'#'+ randomColor}/></svg>
                <span className="glare"></span>
              </span>
            </div>
          </div> */}
          <h1 style={{ marginBottom: "3%" }}>About Us</h1>
          <div className="intro">
            {/* <img className="dragon" src={dragon} alt="Computer man" /> */}
            <h4 style={{ fontWeight: "200", lineHeight: "normal" }}>
              Mist is a multi-teamed, cutting-edge guild focused on mythic progression. Our
              guild prides itself on always improving. We seek raiders who want
              to improve their play, improve their fellow raiders, and improve the
              culture we foster here. We value solid mechanical play over
              individual parses. Team Windbridge focuses on Top US 250 progression, while
              Team Clear Comms focuses on earning CE.
            </h4>
            <div
              className="about-buttons"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <Button
                click={(e) => {
                  e.preventDefault();
                  window.open('https://www.wowprogress.com/guild/us/illidan/mist');
                }}
                hoverType="solid-white-tb"
              >
                WOW PROGRESS
              </Button>
              <Button
                click={(e) => {
                  e.preventDefault();
                  window.open('https://raider.io/guilds/us/illidan/Mist');
                }}
                hoverType="solid-white-tb"
              >
                RAIDER.IO
              </Button>
              <Button
                click={(e) => {
                  e.preventDefault();
                  window.open('https://www.warcraftlogs.com/guild/us/illidan/mist');
                }}
                hoverType="solid-white-tb"
              >
                WARCRAFTLOGS
              </Button>
            </div>
          </div>
        </section>
        <section id="teams">
          <div
            ref={teamsSection}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <h1>Teams</h1>
            <HomeTeams data={state.data.teams} />
          </div>
        </section>
        {/* <div style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', marginTop:'50px'}}>
          <h1 style={{textAlign:'center', fontSize: '10vw', color:'white'}}>Overview</h1>
          <iframe width="100%" height={window.innerHeight*0.8} src="https://www.youtube.com/embed/UANuDDQTNKY" title="Dragonflight Date Announce Trailer | World of Warcraft" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> */}
        <section
          id="highlights"
          style={width <= 992 ? { height: "fit-content" } : {}}
        >
          <h1>Highlights (WIP)</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "1%",
              flexWrap: "wrap",
            }}
          >
            <VideoHeader
              autoPlay={false}
              width={width > 992 ? "45%" : "80%"}
              height={width > 992 ? "45%" : "40vh"}
            />
            <VideoHeader
              autoPlay={false}
              width={width > 992 ? "45%" : "80%"}
              height={width > 992 ? "45%" : "40vh"}
            />
            <VideoHeader
              autoPlay={false}
              width={width > 992 ? "45%" : "80%"}
              height={width > 992 ? "45%" : "40vh"}
            />
            <VideoHeader
              autoPlay={false}
              width={width > 992 ? "45%" : "80%"}
              height={width > 992 ? "45%" : "40vh"}
            />
          </div>
        </section>
        <section
          className="goals"
          id="goals"
          style={{
            height: "fit-content",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Guild Philosophy</h1>
          <div
            className="card3 user"
            style={{ height: "fit-content", width: "100%" }}
          >
            <span
              className="inner-card-backface"
              style={{ background: "transparent" }}
            >
              <span className="flip-inner-card"></span>
            </span>
            <span
              className="inner-card"
              style={{ background: "transparent", width: "100%" }}
            >
              <div
                className="intro"
                style={{
                  maxWidth: "unset",
                  padding: "100px",
                  borderRadius: "25px",
                }}
              >
                <div className="goals">
                  <p style={{ padding: "2vw" }}>
                    Mist is a CE driven guild that focuses on mechanical gameplay above all else.
                    All members of Mist are expected to help fellow guildmates and teammates improve; this
                    is a team effort. We hope to build our teams and guild centered around 3 core principles:
                    hard work, friendly atmosphere, and ambition to improve. These principles promote growth
                    amongst our teams and enables consistent performance tier after tier. We have been gaming
                    together a long time, and we want to continue this history in Dragonflight and beyond! 
                    Mist is a place where you can improve while still meeting your personal, in-game goals and
                    great friends.
                  </p>
                  <img src="https://i.ibb.co/wCR7NmS/logo.png" alt="" />
                </div>
              </div>
              <span className="glare"></span>
            </span>
          </div>
        </section>
      </Layout>
      <div className="form"></div>
    </div>
  );
};
