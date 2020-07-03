import React, { Component } from 'react'
import MinNav from '../HomeSubComps/MinNav'
import Nav from '../HomeSubComps/Nav'
import Showcase from '../HomeSubComps/Showcase'
import Properties from '../HomeSubComps/Properties'
import Pageslink from '../HomeSubComps/Pages_link'
import Illustrate from '../HomeSubComps/Illustrate'
import Slider from '../HomeSubComps/Slider'
import Footer from '../HomeSubComps/Footer'
import PropertyTop from '../HomeSubComps/PropertyTop'
class Home extends Component {
    render() {
        return (
            <div>
                <MinNav/>
                <Nav/>
                <Showcase/>
                <PropertyTop/>
                <Properties/>
                <Pageslink/>
                <Illustrate/>

                <Slider/>
                <Footer/>
            </div>
        )
    }
}
export default Home