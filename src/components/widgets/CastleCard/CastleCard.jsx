import React from "react";

export default (props) => {

  return (
    <div className="card3 user bosscard" style={{height:'fit-content', width:'80%'}}>
      <span className="inner-card-backface" style={{background:'transparent'}}>
        <span className="flip-inner-card">
        </span>
      </span>
      <span className="inner-card" style={{background:'transparent', width:'80%', overflow:'visible'}}>
        <div className="clash-card barbarian">
          <div className="clash-card__image clash-card__image--barbarian" style={props.bg!==''?{backgroundImage: "url(" + props.bg + ")"}: {}}>
            <img src={props.icon} height='90%' />
          </div>
          <div className="clash-card__level clash-card__level--barbarian" style={{fontSize:'16px'}}>{props.progress}</div>
          <div className="clash-card__unit-name" style={{fontSize:'26px'}}>{props.name}</div>
          <div className="clash-card__unit-description" style={{fontSize:'15px', letterSpacing:'unset', fontWeight:'unset', lineHeight:'unset'}}>
            You can learn more about this raid using the following links:
            <div style={{display:'flex', justifyContent:'center', alignItems: 'center', gap:'25%', margin:'0px 0px'}}>
              <a href="#" style={{color:'rgba(85,26,139,1)', float:'unset', fontSize:'48px', width:'fit-content'}}><i className="lab la-youtube"></i> <div style={{fontSize:'15px', letterSpacing:'unset', fontWeight:'unset', lineHeight:'unset', color:'#9E9E9E'}}>Kill VoD</div></a>
              <a href="#" style={{color:'rgba(85,26,139,1)', float:'unset', fontSize:'48px', width:'fit-content', padding:'10px 5px'}}> <img src="https://i.ibb.co/nfCw7NX/Asset-1.png" alt="" width='40px'/><div style={{fontSize:'15px', letterSpacing:'unset', fontWeight:'unset', lineHeight:'unset', color:'#9E9E9E', marginTop:'5px'}}>Kill log</div></a>
            </div>
          </div>
          <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
            <div className="one-third">
              <div className="stat">#{props.world}</div>
              <div className="stat-value">World</div>
            </div>

            <div className="one-third">
              <div className="stat">#{props.region}</div>
              <div className="stat-value">Region</div>
            </div>

            <div className="one-third no-border">
              <div className="stat">#{props.realm}</div>
              <div className="stat-value">Realm</div>
            </div>
          </div>
        </div>
        <span className="glare"></span>
      </span>
    </div>
      
  );
};
