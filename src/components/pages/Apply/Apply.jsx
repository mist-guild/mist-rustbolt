import React, { Fragment, useEffect, useRef} from "react";
import {
  Slider3,
} from "../../widgets";
import { useCustomState } from "../../../state/state";
import { Layout } from "../../layouts";
import './Apply.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { gsap } from "gsap";;

export default ({ data = [] }) => {
  //gsap init
  gsap.defaults({ease: "none"});
  const state = useCustomState()[0];

  //card animation
  let calculateAngle = function(e, item, parent) {
    let dropShadowColor = `rgba(0, 0, 0, 0.3)`
    if(parent.getAttribute('data-filter-color') !== null) {
        dropShadowColor = parent.getAttribute('data-filter-color');
    }

    parent.classList.add('animated');
    // Get the x position of the users mouse, relative to the button itself
    let x = Math.abs(item.getBoundingClientRect().x - e.clientX);
    // Get the y position relative to the button
    let y = Math.abs(item.getBoundingClientRect().y - e.clientY);

    // Calculate half the width and height
    let halfWidth  = item.getBoundingClientRect().width / 2;
    let halfHeight = item.getBoundingClientRect().height / 2;

    // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
    // Changing these numbers will change the depth of the effect.
    let calcAngleX = (x - halfWidth) / 36;
    let calcAngleY = (y - halfHeight) / 34;
  
    let gX = (1 - (x / (halfWidth * 2))) * 100;
    let gY = (1 - (y / (halfHeight * 2))) * 100;
  
    item.querySelector('.glare').style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgb(199 198 243), transparent)`;
    // And set its container's perspective.
    parent.style.perspective = `${halfWidth * 6}px`
    item.style.perspective = `${halfWidth * 6}px`

    // Set the items transform CSS property
    item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04)`;
    parent.querySelector('.inner-card-backface').style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04) translateZ(-4px)`;
  
    if(parent.getAttribute('data-custom-perspective') !== null) {
        parent.style.perspective = `${parent.getAttribute('data-custom-perspective')}`
    }

    // Reapply this to the shadow, with different dividers
    let calcShadowX = (x - halfWidth) / 3;
    let calcShadowY = (y - halfHeight) / 6;
    
    // Add a filter shadow - this is more performant to animate than a regular box shadow.
    item.style.filter = `drop-shadow(${-calcShadowX}px ${-calcShadowY}px 15px ${dropShadowColor})`;
  }
  document.querySelectorAll('.card2').forEach(function(item) {
      if(item.querySelector('.flip') !== null) {
        item.querySelector('.flip').addEventListener('click', function() {
          item.classList.add('flipped');
        });
      }
      if(item.querySelector('.unflip') !== null) {
        item.querySelector('.unflip').addEventListener('click', function() {
          item.classList.remove('flipped');
        });
      }
      item.addEventListener('mouseenter', function(e) {
          calculateAngle(e, this.querySelector('.inner-card'), this);
      });

      item.addEventListener('mousemove', function(e) {
          calculateAngle(e, this.querySelector('.inner-card'), this);
      });

      item.addEventListener('mouseleave', function(e) {
          let dropShadowColor = `rgba(0, 0, 0, 0.3)`
          if(item.getAttribute('data-filter-color') !== null) {
              dropShadowColor = item.getAttribute('data-filter-color')
          }
          item.classList.remove('animated');
          item.querySelector('.inner-card').style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
          item.querySelector('.inner-card-backface').style.transform = `rotateY(0deg) rotateX(0deg) scale(1.01) translateZ(-4px)`;
          item.querySelector('.inner-card').style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`;
      });
  })

    //get mouse position
    const [mousePosition,setMousePosition] = React.useState({ x: null, y: null });
    useEffect(() => {const updateMousePosition = ev => {setMousePosition({ x: ev.clientX, y: ev.clientY });};window.addEventListener('mousemove', updateMousePosition);return () => {window.removeEventListener('mousemove', updateMousePosition);};}, []);
    const mouseX = mousePosition.x; const mouseY = mousePosition.y;
  
    
    const scrollToref = useRef(null);

    //submit animation
    const submitButton = useRef();
    useEffect(() => {gsap.to(submitButton.current, {x: -mouseX/50, y: mouseY/30,});}, [mouseX, mouseY]);

  return (
    <Fragment>
          <Slider3 data={state.data.requirements} scrollto={scrollToref}/>

          {/* <Team data={state.data.members} /> */}
          <div
            className="parallax"
            style={{
              backgroundImage: "url(" + state.data.parallax.bg + ")",
              flexDirection:'column',
              alignItems:'center',
            }}
          >
            <Layout col="1">
              <section className="apply" id="apply" style={{height:'fit-content', flexDirection:'column', padding:'100px 0px'}} ref={scrollToref}>
                {/* <h1 style={{textAlign:'center'}}> Apply Now</h1> */}
                <Form action="https://mistguild.pythonanywhere.com/applicant" method="POST" className="apply-form" style={{width:'80%', fontSize:'max(2vw, 36px)'}}>
                  <Form.Group className="form-group mb-3">
                    <Form.Label>Character Name</Form.Label>
                    <Form.Control name="character_name" type="text" />
                  </Form.Group>
                  <Form.Group className="form-group mb-3">
                    <Form.Label>Discord Contact</Form.Label>
                    <Form.Control name="discord_contact" type="text"/>
                  </Form.Group>
                  <Form.Group className="form-group mb-3">
                    <Form.Label>Battlenet Id</Form.Label>
                    <Form.Control name="battlenet_contact" type="text" />
                  </Form.Group>
                  <Form.Group className="form-group mb-3">
                    <Form.Label>Armory Link</Form.Label>
                    <Form.Control name="armory_link" type="url" />
                  </Form.Group>
                  <Form.Group className="form-group mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control name="age" type="number" />
                  </Form.Group>
                  <Form.Group className="form-group mb-3">
                    <Form.Label>Class</Form.Label>
                    <Form.Select name="wow_class" aria-label="Default select example">
                      <option value="Warrior">Warrior</option>
                      <option value="Hunter">Hunter</option>
                      <option value="Mage">Mage</option>
                      <option value="Warlock">Warlock</option>
                      <option value="Druid">Druid</option>
                      <option value="Monk">Monk</option>
                      <option value="Priest">Priest</option>
                      <option value="Paladin">Paladin</option>
                      <option value="Shaman">Shaman</option>
                      <option value="Rogue">Rogue</option>
                      <option value="Demon Hunter">Demon Hunter</option>
                      <option value="Death Knight">Death Knight</option>
                      <option value="Evoker">Evoker</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="form-group mb-3">
                    <Form.Label>What Raid Team Are You Applying To?</Form.Label>
                    <Form.Select name="team_choice" aria-label="Default select example">
                      <option value="Windbridge">Windbridge</option>
                      <option value="Clear Comms">Clear Comms</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="form-group mb-3">
                    <Form.Label>Primary Spec</Form.Label>
                    <Form.Control name="primary_spec" type="text"/>
                  </Form.Group>
                  <Form.Group className="form-group mb-3">
                    <Form.Label>Raider.io Link</Form.Label>
                    <Form.Control name="raiderio_link" type="url" />
                  </Form.Group>
                  <Form.Group className="form-group mb-3">
                    <Form.Label>Warcraftlogs Link</Form.Label>
                    <Form.Control name="warcraftlogs_link" type="url" />
                  </Form.Group>
                  <Form.Group className="form-group mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Tell Us About Yourself (Real Life)</Form.Label>
                    <Form.Control name="real_life_summary" as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="form-group mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>What experience, skill, and attitude will you bring to the guild?</Form.Label>
                    <Form.Control name="skills_summary" as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="form-group mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>How often do you play WoW? We're looking to build a community of people that play the game often, not people who exclusively raid log. </Form.Label>
                    <Form.Control name="proclivity_summary" as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="form-group mb-3">
                    <Form.Label>Does Pineapple Belong On Pizza?</Form.Label>
                    <Form.Control name="pizza_question" type="text"/>
                  </Form.Group>
                  <Button variant="primary" type="submit" ref={submitButton}>
                    Submit
                  </Button>


                </Form>
                {/* <form action="">
                  <div className="form-group">
                    <label htmlFor="name" className="">Character Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                </form> */}
              </section>
            </Layout>
            
          </div>
        
    </Fragment>
  );
};
