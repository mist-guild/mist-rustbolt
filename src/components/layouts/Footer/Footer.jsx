import React from "react";
import styles from "./Footer.module.scss";
import Layout from "../Layout/Layout";
import { Logo, Link, Subscribe } from "../../elements";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  const linkList = state.data.fast_links.map((item, index) => (
    <Link key={index} url={item.url} hoverStyle={{ color: '#62C8E8' }}>
      <i className="las la-angle-right" />
      {item.title}
    </Link>
  ));
  return (
    <Layout col="1" padding style={{ background: "rgb(40,40,50" }}>
      <div className={styles.footer}>
        <div className={styles.logo_area}>
          <Logo dark />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime debitis numquam recusandae inventore mollitia sapiente doloremque quas quam doloribus pariatur.
          </p>
          <div className={styles.social}>
            <a href="#"><i className="lab la-twitter"/></a>
            <a href="#"><i className="lab la-youtube" /></a>
            <a href="#"><i className="lab la-discord" /></a>
          </div>
        </div>

        <div className={styles.link_area}>
          <div className={styles.links}>
            <h4>Teams</h4>
            <Link
              url={"/teams/windbridge"}
              hoverStyle={{ color: '#62C8E8' }}
            >
              <i className="las la-angle-right" />
              Team Windbridge
            </Link>
            <Link
              url={"/teams/clear-comms"}
              hoverStyle={{ color: '#62C8E8' }}
            >
              <i className="las la-angle-right" />
              Team Clear Comms
            </Link>
          </div>
          <div className={styles.links}>
            <h4>Fast Links</h4>
            {linkList}
          </div>
        </div>

        <div className={styles.subscribe}>
          <h4>Newsletter</h4>
          <Subscribe />
          <p>
            Get our latest news and updates. Subscribe to our newsletter.
          </p>
        </div>
      </div>
    </Layout>
  );
};
