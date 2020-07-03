import React, { Component } from 'react'
import bg from '../../images/home-search-bg.jpg'
import './css/showcase.css'
import ShowCaseTab from './ShowCaseTab'
export default class Showcase extends Component {
    render() {
        return (
            <div className="topshowcase">
                <img src={bg} alt=""/>
                <div className="showcase-content">
                    <div className="container">
                        <h1>Find your dream house!</h1>
                        <h3>We are offering the best Real Estate Deals</h3>
                    </div>
                    <div className="container liston">
                        <ul>
                            <li>
                                <i className="fa fa-map-marker"></i>
                                We sell a property every 45 minutes
                            </li>
                            <li>
                                <i className="fa fa-user"></i>
                                We abide by the strictest codes of practice
                            </li>
                            <li>
                                <i className="fa fa-file-text"></i>
                                11,300 buyers registered each month
                            </li>
                        </ul>
                    </div>
                    

                </div>
                <ShowCaseTab/>
            </div>
        )
    }
}
