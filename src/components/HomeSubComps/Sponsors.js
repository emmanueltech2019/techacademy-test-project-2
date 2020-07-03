import React, { Component } from 'react'
import './css/Sponsors.css'
import p1 from '../../images/p1.png'
import p2 from '../../images/p2.png'
import p3 from '../../images/p3.png'
import p4 from '../../images/p4.png'
import p5 from '../../images/p5.png'
import p6 from '../../images/p6.png'
import p7 from '../../images/p7.png'
import p8 from '../../images/p8.png'
import p9 from '../../images/p9.png'
import p10 from '../../images/p10.png'

export default class Sponsors extends Component {
    render() {
        return (
            <div className="Sponsors">
                <img src={p1} alt="sponsor"/>
                <img src={p2} alt="sponsor"/>
                <img src={p3} alt="sponsor"/>
                <img src={p4} alt="sponsor"/>
                <img src={p5} alt="sponsor"/>
                <img src={p6} alt="sponsor"/>
                <img src={p7} alt="sponsor"/>
                <img src={p8} alt="sponsor"/>
                <img src={p9} alt="sponsor"/>
                <img src={p10} alt="sponsor"/>
            </div>
        )
    }
}
