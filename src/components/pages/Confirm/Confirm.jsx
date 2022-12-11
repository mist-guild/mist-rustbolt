import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./Confirm.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Button } from "../../elements";
import { Fragment } from "react";
import tick from '../../../assets/checked.png';


import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
          <article >
            <Layout
              style={{
                background: "url(" + 'https://raw.githubusercontent.com/zakpruitt/mist-website/master/src/assets/df_render_2.png' + ") center/cover",
                height:'100vh'
              }}
              col="1"
              mode="dark"
            >
              <div className={styles.slide}>
                <div className={styles.intro}>
                  <img src={tick} alt="" />
                  <h1>Your application has been submitted successfully!</h1>
                  <p>You should hear back in 2-3 days or less via Discord.</p>
                  <Button to={"/home"} hoverType="solid-white-tb">
                    Back to Home
                  </Button>
                </div>
              </div>
            </Layout>
          </article>
    </Fragment>
  );
};
