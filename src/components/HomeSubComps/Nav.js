import React, { Component } from 'react'
import './css/Nav.css'
import Modal from './Modal'
export default class Nav extends Component {
    state={
        isopem:false
    }
    showmodal=()=>{
        this.setState({
            isopem:!this.state.isopem
        })
    }
    render() {
        return (
            <div className="navbar-main" sticky="top">
                <div className="container">
                    <div>
                        <ul className="navlist">
                           <li>Demos <span className="navlistdiverders">|</span></li>
                           <li>Listings<span className="navlistdiverders">|</span></li>
                           <li>Property<span className="navlistdiverders">|</span></li>
                           <li>Menbers<span className="navlistdiverders">|</span></li>
                           <li>Pages<span className="navlistdiverders">|</span></li>
                           <li>Features<span className="navlistdiverders">|</span></li>
                           <li>Blog<span className="navlistdiverders">|</span></li>
                           <li>Contact2</li>
                        </ul>
                    </div>
                    <div className="navicons">
                        <ul>
                            <li><i className="fa fa-twitter"></i></li>
                            <li><i className="fa fa-linkedin"></i></li>
                            <li><i className="fa fa-vimeo"></i></li>
                            <li><i className="fa fa-facebook"></i></li><span className="navlistdiverders">|</span>
                        </ul>
                        <div className="join-sect" onClick={this.showmodal}>
                            <i className="fa fa-user" style={{color:"#fff",paddingRight:"10px"}}></i>
                            <a>SIGN IN</a>/
                            <a>REGISTER</a>
                        </div>
                        {
                            this.state.isopem ? <Modal togglemodal={this.showmodal}/>: null
                        }
                        
                    </div>
                   {/* { <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <div className="main-nav">
                                <ul>
                                    <li>Demos</li>
                                    <li>Listings</li>
                                    <li>Property</li>
                                    <li>Menbers</li>
                                    <li>Pages</li>
                                    <li>Features</li>
                                    <li>Blog</li>
                                    <li>Contact2</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="login-area">
                                    <ul class="social-media"><li><a href="#" data-original-title="Twitter" data-placement="top" class="colrhover" target="_blank"><i class="fa fa-twitter"></i></a>
                            </li><li><a href="#" data-original-title="Linked In" data-placement="top" class="colrhover" target="_blank"><i class="fa fa-linkedin"></i></a>
                            </li><li><a href="#" data-original-title="Vimeo" data-placement="top" class="colrhover" target="_blank"><i class="fa fa-vimeo"></i></a>
                            </li><li><a href="#" data-original-title="Facebook" data-placement="top" class="colrhover" target="_blank"><i class="fa fa-facebook"></i></a>
                            </li></ul>                                        <div class="login-option">
                                                            
                                        
                        <i class="icon-user2"></i><a id="btn-header-main-login" data-target="#sign-in" data-toggle="modal" class="cs-popup-login-btn login-popup-btn wp-rem-open-signin-button user-tab-login" href="#user-login-tab-20691">Sign in</a><span>/</span><a class="cs-color cs-popup-joinus-btn login-popup-btn wp-rem-open-register-button user-tab-register" data-target="#sign-in" data-toggle="modal" href="#user-register-20691">Register</a>                                        </div>
                                                                        </div>
                        </div>
                    </div>} */}
                </div>
            </div>
        )
    }
}
