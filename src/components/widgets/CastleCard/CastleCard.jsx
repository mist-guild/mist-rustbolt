import React from "react";

export default (props) => {

  return (
    <div className="card2 user" style={{height:'fit-content', width:'80%'}}>
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
            {props.description}
            <a href={props.link}>
              Click here
            </a>
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
