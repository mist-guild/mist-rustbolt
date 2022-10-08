import React from "react";
import Layout from "../../layouts/Layout/Layout";
import { CardImage } from "../../ui";
import logo from './logo.png';
import './Team.css';
export default ({ data = [] }) => {

  const officerList = data.map((item, index) => (
      item.officer?
        <article key={index} style={{flexBasis: 'calc(25% - 3rem)', minWidth:'200px'}}>
          <CardImage image={item.class} label={logo} user={item.user} item={item} discord={item.discord}>
          </CardImage>
        </article>
      : null
  ));

  const teamList = data.map((item, index) => (
    !item.officer?
        <article key={index} style={{flexBasis: 'calc(25% - 3rem)', minWidth:'200px'}}>
          <CardImage image={item.class} label={logo} user={item.user} item={item} discord={item.discord}>
          </CardImage>
        </article>
      : null
  ));

  return (
    <Layout
      style={{background:'rgba(0,0,0,0.4)', height:'fit-content', padding:'50px 0px', borderRadius:'50px'}}
      // mode="dark"
      col="1"
      // padding
      // blur
    >
      <div style={{display:'flex', flexDirection:'column', gap:'50px'}}>
        <div>
          <h1> Officers </h1>
          <div style={{display:'flex', gap:'20px', flexWrap:'wrap', justifyContent:'center'}}>
            {officerList}
          </div>
        </div>
        <div>
          <h1> Raiders </h1>
          <div style={{display:'flex', gap:'20px', flexWrap:'wrap', justifyContent:'center'}}>
            {teamList}
          </div>
        </div>
      </div>
      {/* <div className={["layout-footer", styles.footer].join(" ")}>
        <span>
          <b style={{ color: THEME.color }}>Let's start do business. </b>
          <br />
          Make arrangement and get discount.
        </span>
        <Button
          hoverType="solid-white-tb"
          click={() =>
            actions.toogleRequest("Make arrangement and get discount")
          }
        >
          Make request
        </Button>
      </div> */}
    </Layout>
  );
};
