import React, { useRef, useState } from "react";
import styles from "./VideoHeader.module.scss";
import THEME from "../../../state/theme";
import video from "./1.mp4";

export default (props) => {
  const [isPlay, setPlay] = useState(props.autoPlay);
  const ref = useRef();
  const ref2 = useRef();

  const playToogle = () => {
    isPlay ? ref.current.pause() : ref.current.play();
    setPlay(!isPlay);
  };


 
  return (
    <div className={styles.video} style={{width: props.width, height: props.height}}>
      <video ref={ref}  autoPlay={props.autoPlay} controls>
        <source src={video} type="video/mp4" ></source>
      </video>
      <div className={styles.intro} >
        <button
          ref={ref2}
          className={isPlay ? styles.pause : styles.play}
          style={{ borderColor: THEME.color }}
          onClick={playToogle}
        >
          <div className={styles.icon_wrapper}>
            <span
              style={{ background: '#62C8E8' }}
              className={[styles.bar, styles.bar_1].join(" ")}
            />
            <span
              style={{ background: THEME.color }}
              className={[styles.bar, styles.bar_2].join(" ")}
            />
          </div>
        </button>
      </div>
    </div>
  );
  
};
