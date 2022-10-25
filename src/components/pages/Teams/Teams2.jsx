import React, { Fragment, useState, useEffect, useRef } from "react";
import {
  Team,
  Slider2,
} from "../../widgets";
import { useCustomState } from "../../../state/state";
import CastleCard from "../../widgets/CastleCard/CastleCard";
import { Layout } from "../../layouts";
import ScrollContainer from 'react-indiana-drag-scroll'

export default ({ data = [] }) => {
  const state = useCustomState()[0];
  const scrollToref = useRef(null);

  const item = state.data.castles;

  return (
    <Fragment>
      <Slider2 data={state.data.teams} teamID={1} scrollto={scrollToref} />
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
              <CastleCard name={item[0].name} bg={item[0].bg} icon={item[0].icon} description={item[0].description} progress="0/8 M" world="1" region="1" realm="1" />
              <CastleCard name={item[1].name} bg={item[1].bg} icon={item[1].icon} description={item[1].description} progress="7/11 M" world="1" region="1" realm="1" />
              <CastleCard name={item[2].name} bg={item[2].bg} icon={item[2].icon} description={item[2].description} progress="6/11 M Fated" world="1" region="1" realm="1" />
              <CastleCard name={item[3].name} bg={item[3].bg} icon={item[3].icon} description={item[3].description} progress="8/10 M Fated" world="1" region="1" realm="1" />
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
                    <li style={{ marginBottom: '20px' }}>Achieve CE every tier </li>
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
            <Team data={state.data.members2} />
          </section>
        </Layout>

      </div>

    </Fragment>
  );
};
