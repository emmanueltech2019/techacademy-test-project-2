import React, { Component } from 'react'
import './css/illustrate.css'
import icon1 from '../../images/icom1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import News from './News'
class Illustrate extends Component {
    render() {
        return (
            <div>
                 <div className="ill container">
                <div className="container">
                    <div>
                        <img src={icon1} alt=""/>
                        <p>
                        HomeVillas have theme search, user can manually draw lines on map,
                         all ads property listings in that area show up as a result.
                        </p>
                    </div>
                    

                </div>
                <div className="container">
                    <div>
                        <img src={icon2} alt=""/>
                        <p>
                        User can schedule a viewing date and time for property with agent as per 
                        convenience. Agent can respond the schedule as per choice.
                        </p>
                    </div>
                    

                </div>
                <div className="container">
                    <div>
                        <img src={icon3} alt=""/>
                        <p>
                        Home Villa built for the best SEO practices. All links and elements are SEO 
                        friendly, yet putting your site high in ranks.
                        </p>
                    </div>
                    

                </div>
            </div>
                <div className="container title2">
                <h2 style={{color:"#5a2e8a !important"}}>NEWS AND STORIES</h2>
                </div>
                <div>
                    <News/>
                </div>
            </div>
           
        )
    }
}
export default  Illustrate;
