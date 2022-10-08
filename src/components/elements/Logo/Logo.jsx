import React from "react";
import styles from "./Logo.module.scss";
import logo from "../../../assets/logo.png";

export default ({ dark }) => (
  <figure
    className={[styles.logo, dark ? styles.dark : styles.light].join(" ")}
    style={{ borderColor: '#62C8E8', padding:'10px'}}
  >
    <img src={logo} alt="logo" width={48}/>
    <span style={{marginLeft:'15px'}}>
      <b style={{marginRight:'0px'}}>MIST</b> Illidan
    </span>
  </figure>
);
