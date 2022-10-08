import React, { Fragment } from "react";
import {
  Slider,
  ParallaxHeader,
} from "../../widgets";


import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
          <Slider data={state.data.posts} />
          <div style={{margin:'0'}}>
            <ParallaxHeader />
          </div>
          
    </Fragment>
  );
};
