import React, { useState, useEffect, useRef } from "react";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";
import { Button } from "../../elements";
import './HomeTeams.css'

export default ({ data = [] }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    window.addEventListener("resize", resizeListener);
    return window.removeEventListener("resize", resizeListener);
  }, []);

  const resizeListener = () => {
    setHeight(ref.current.clientHeight);
  };

  let listStatistic = data
    .map((item, index) => (
      <div
        key={index}
        className='wrapper'
        style={{
          borderColor: THEME.color,
        }}
      >
        <div className='card'>
          <div className='icon'>
            <img src={item.icon} alt="card_icon" />
            <h3
            style={{
              color: THEME.color,
            }}
          >
            {item.name}
          </h3>
          </div>

          <p>{item.description.replace(/^(.{60}[^\s]*).*/, "$1")}</p>
          <div className='button'>
            <Button
              to={item.link}
              type="solid-color-tb"
              hoverType="solid-color-tb"
              // round
              before="&#xf105;"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    ))
    .slice(0, 2);

  listStatistic.unshift(
    <div
      key={-1}
      className="list_header"
      style={{ background: THEME.color }}
    >
      <div className={'list_front'}>
        <h3>
          Here is what you <b>should know</b>
        </h3>
        <i className="las la-long-arrow-alt-down" />
      </div>
      <div className='list_back'>
        <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );

  return (
    <div className='stat_area'>
      <Layout
        style={{
          // transform: "translateY(-50%)",
        }}
        col="1"
      >
        <div className='statistic' ref={ref}>
          {listStatistic}
        </div>
      </Layout>
    </div>
  );
};
