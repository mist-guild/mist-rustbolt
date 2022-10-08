import React, { Fragment } from "react";
import {
  VideoHeader,
} from "../../widgets";

export default () => {
  return (
    <Fragment>
      <div  style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
          <VideoHeader autoPlay={true}/>
          <div style={{display:'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center', gap:'2%'}}>
            <VideoHeader autoPlay={false} width='45%' height='45%'/>
            <VideoHeader autoPlay={false} width='45%' height='45%'/>
          </div>
          </div>
    </Fragment>
  );
};
