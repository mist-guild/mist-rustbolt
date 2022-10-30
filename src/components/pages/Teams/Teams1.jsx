import React, { Fragment, useState, useEffect, useRef } from "react";
import {
  Team,
  Slider2,
} from "../../widgets";
import { useCustomState } from "../../../state/state";
import './Teams.css';
import CastleCard from "../../widgets/CastleCard/CastleCard";
import { Layout } from "../../layouts";
import ScrollContainer from 'react-indiana-drag-scroll'

export default ({ data = [] }) => {
  const state = useCustomState()[0];
  const scrollToref = useRef(null);

  let calculateAngle = function (e, item, parent) {
    let dropShadowColor = `rgba(0, 0, 0, 0.3)`
    if (parent.getAttribute('data-filter-color') !== null) {
      dropShadowColor = parent.getAttribute('data-filter-color');
    }

    parent.classList.add('animated');
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

    let gX = (1 - (x / (halfWidth * 2))) * 100;
    let gY = (1 - (y / (halfHeight * 2))) * 100;

    item.querySelector('.glare').style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgb(199 198 243), transparent)`;
    // And set its container's perspective.
    parent.style.perspective = `${halfWidth * 6}px`
    item.style.perspective = `${halfWidth * 6}px`

    // Set the items transform CSS property
    item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04)`;
    parent.querySelector('.inner-card-backface').style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04) translateZ(-4px)`;

    if (parent.getAttribute('data-custom-perspective') !== null) {
      parent.style.perspective = `${parent.getAttribute('data-custom-perspective')}`
    }

    // Reapply this to the shadow, with different dividers
    let calcShadowX = (x - halfWidth) / 3;
    let calcShadowY = (y - halfHeight) / 6;

    // Add a filter shadow - this is more performant to animate than a regular box shadow.
    item.style.filter = `drop-shadow(${-calcShadowX}px ${-calcShadowY}px 15px ${dropShadowColor})`;
  }
  document.querySelectorAll('.card2').forEach(function (item) {
    if (item.querySelector('.flip') !== null) {
      item.querySelector('.flip').addEventListener('click', function () {
        item.classList.add('flipped');
      });
    }
    if (item.querySelector('.unflip') !== null) {
      item.querySelector('.unflip').addEventListener('click', function () {
        item.classList.remove('flipped');
      });
    }
    item.addEventListener('mouseenter', function (e) {
      calculateAngle(e, this.querySelector('.inner-card'), this);
    });

    item.addEventListener('mousemove', function (e) {
      calculateAngle(e, this.querySelector('.inner-card'), this);
    });

    item.addEventListener('mouseleave', function (e) {
      let dropShadowColor = `rgba(0, 0, 0, 0.3)`
      if (item.getAttribute('data-filter-color') !== null) {
        dropShadowColor = item.getAttribute('data-filter-color')
      }
      item.classList.remove('animated');
      item.querySelector('.inner-card').style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
      item.querySelector('.inner-card-backface').style.transform = `rotateY(0deg) rotateX(0deg) scale(1.01) translateZ(-4px)`;
      item.querySelector('.inner-card').style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`;
    });
  })

  const item = state.data.castles;

  return (
    <Fragment>
      <Slider2 data={state.data.teams} teamID={0} scrollto={scrollToref} />
      {/* <Team data={state.data.members} /> */}
      <div
        className="parallax"
        style={{
          backgroundImage: "url(" + state.data.parallax.bg + ")",
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <section style={{ height: 'fit-content', flexDirection: 'column', margin: '30px' }} ref={scrollToref}>
          <h1>Our Progress</h1>
          <Layout col="1" style={{ background: 'rgba(0,0,0,0.4)', height: 'fit-content', borderRadius: '50px' }}>
            <ScrollContainer className="scroll-container" hideScrollbars={false} vertical={false}>
              <CastleCard name={item[0].name} bg={item[0].bg} icon={item[0].icon} description={item[0].description} progress="0/8 M" world="" region="" realm="" />
              <CastleCard name={item[1].name} bg={item[1].bg} icon={item[1].icon} description={item[1].description} progress="11/11 M" world="1" region="1" realm="1" />
              <CastleCard name={item[2].name} bg={item[2].bg} icon={item[2].icon} description={item[2].description} progress="10/10 M" world="1" region="1" realm="1" />
              <CastleCard name={item[3].name} bg={item[3].bg} icon={item[3].icon} description={item[3].description} progress="10/10 M" world="1" region="1" realm="1" />
            </ScrollContainer>
          </Layout>
        </section>
        <Layout col="1">
          <section className="goals" id="goals" style={{ height: 'fit-content', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ textAlign: 'center' }}>
              Our Goals
            </h1>
            <div className="card2 user" style={{ height: 'fit-content', width: '100%' }}>
              <span className="inner-card-backface" style={{ background: 'transparent' }}>
                <span className="flip-inner-card">
                </span>
              </span>
              <span className="inner-card" style={{ background: 'transparent', width: '100%' }}>
                <div className="intro" style={{ maxWidth: 'unset', padding: '100px', borderRadius: '25px' }}>

                  <div className="goals">
                    <ul>
                      <li style={{ marginBottom: '20px' }}>Achieve top US 250 every tier </li>
                      <li style={{ marginBottom: '20px' }}>Improve our team each tier </li>
                      <li style={{ marginBottom: '20px' }}>Foster a friendly yet competetive environment </li>
                      <li style={{ marginBottom: '20px' }}>Remain a competetive mythic team </li>
                    </ul>
                    <img src="https://i.ibb.co/wCR7NmS/logo.png" alt="" />
                  </div>
                </div>
                <span className="glare"></span>
              </span>
            </div>
          </section>
        </Layout>
        <Layout col="1">
          <section style={{ height: 'fit-content', flexDirection: 'column' }}>
            <h1>Meet Our Team</h1>
            <Team data={state.data.members1} />
          </section>
        </Layout>

      </div>

    </Fragment>
  );
};
