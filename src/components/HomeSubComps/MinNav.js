import React, { Component } from 'react'
import logo from '../../images/homevillas-logo.png'
import './css/minnav.css'
class MinNav extends Component {
    render() {
        return (
            <header id="header" className="header1">
                 <div className="container minnav">
                     <div className="hv-logo">
                     <img src={logo} alt=""/>
                     </div>
                
                <div className="header-1-cont">
                <select>
                                
                                <option>USD($)</option>
                                <option>POUNDS(&pound;)</option>
                                <option>EURO(&euro;)</option>
                                
                            </select>
                            <span className="contact-info"> 
                            <span>Call for Enquiry</span><br/>
 <span><strong>202-555-0182</strong></span></span>
                            
                    <button className="property-btn">Create Property</button>
                </div>
                <div className="clear"></div>
                
            </div>
            
            </header>
           
        )
    }
}
export default MinNav