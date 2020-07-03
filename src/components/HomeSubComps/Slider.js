import React, { Component } from 'react'
import './css/Slider.css'
import {Carousel} from 'react-bootstrap'
import img from '../../images/testimonial-bg-1 (1).jpg'
import Sponsors from './Sponsors'
import testimonialimg from '../../images/testimonial-thumbnail1.jpg'
export default class Slider extends Component {
  render() {
    return (
      <div className="sideContainer">
         <div class="section-title" >
             <h2 style={{color:"#5a2e8a"}}>Testimonails</h2>
             <span >We have the right properties needs.</span>
        </div>
        <div className=" slider-section">
        <Carousel controls={false} indicators={false}>
      
          <Carousel.Item>
          <div style={{
            width:"120vw",
        display:"grid",
        gridTemplateColumns:"20% 40% 30%",
        gridGap:"2em"
        }}>
          <div className="carslidimgdiv">
              <img
                className="d-block w-100"
                src={img}
                alt="First slide"
              />
              
              
          </div>
          <div className="carslidimgdiv">
              <img
                className="d-block w-100"
                src={img}
                alt="First slide"
              />
              <div className="carslidimgdiv-content">
                <div className="container testimonialgrid">
                  <div>
                    <img src={testimonialimg} alt="yb"/>
                  </div>
                  <div className="testimonialgrid-2">
                  <p><span style={{color: "#ffffff"}}>Without doubt the best and most up to date method of selling a
                   house. Everything has been user friendly and fits modern busy lifestyles. So impressed.</span></p>
                   <div class="authore-detail"><span class="authore-name">Stuart Jarvis, </span>
                   <address style={{color: "#99c522"}}>Streets Ahead, Croydon Central</address></div>
                  </div>
                </div>
              </div>
          </div>
          <div>
              <img
                className="d-block w-100"
                src={img}
                alt="First slide"
              />
              
          </div>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div style={{
        width:"120vw",
        display:"grid",
        gridTemplateColumns:"20% 40% 30%",
        gridGap:"2em"
        }}>
          <div>
              <img
                className="d-block w-100"
                src={img}
                alt="First slide"
              />
          </div>
          <div className="carslidimgdiv">
              <img
                className="d-block w-100"
                src={img}
                alt="First slide"
              />
              <div className="carslidimgdiv-content">
                <div className="container testimonialgrid">
                  <div>
                    <img src={testimonialimg} alt="yb"/>
                  </div>
                  <div className="testimonialgrid-2">
                  <p><span style={{color: "#ffffff"}}>Without doubt the best and most up to date method of selling a
                   house. Everything has been user friendly and fits modern busy lifestyles. So impressed.</span></p>
                   <div class="authore-detail"><span class="authore-name">Stuart Jarvis, </span>
                   <address style={{color: "#99c522"}}>Streets Ahead, Croydon Central</address></div>
                  </div>
                </div>
              </div>
          </div>
          <div>
              <img
                className="d-block w-100"
                src={img}
                alt="First slide"
              />
          </div>
         
          </div>
          </Carousel.Item>
         
         
</Carousel>
      </div>
      <Sponsors/>
      </div>
      
    )
  }
}
