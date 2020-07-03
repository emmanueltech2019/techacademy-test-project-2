import React, { Component } from 'react'
import './css/PropertyTop.css'
export default class PropertyTop extends Component {
    render() {
        return (
            <div className="PropertyTop container">
                <div>
                  <h2>Featured Properties</h2>
                  <div>
                  <li class="tab130190321 active"><span><a data-toggle="tab" href="#tab130190321"> Featured For Sale</a></span></li>
                        <li class="tab130190322 "><span><a data-toggle="tab" href="#tab130190322">Featured To Rent</a></span></li>
                  </div>
                </div>
                <div>
                    <button className="showmoreproperty">Show  More Property</button>
                </div>
            </div>
        )
    }
}
