import React, { Component } from 'react'
import './css/Footer.css'
import App from '../../images/app-store.png'
import google from '../../images/google-store.png'
export default class Footer extends Component {
    render() {
        return (
            <div className="myfooter">
                <footer className="container">


                    <div className="myfooter-1">
                        <ul>
                            <li>Home</li>
                            <li>Members</li>
                            <li>Faqs</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                        <div className="socialicon">
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-linkedin"></i>
                            <i className="fa fa-vimeo"></i>
                            <i className="fa fa-facebook"></i>
                        </div>
                        
                    </div>
                    <div className="clear"></div>
                   

                    <div className="myfooter-2">
                        <div className="copy-right">
                                <p>© 2020 realestate. All Rights Reserved.<a href="&quot;#&quot;">chimpstudio</a> </p>
                        </div>

                        <div>
                            <div class="thestoreimg">
                                <select>
                                    
                                    <option>USD($)</option>
                                    <option>POUNDS(&pound;)</option>
                                    <option>EURO(&euro;)</option>
                                    
                                </select>
                                
                                <img src={App} alt="ref"/>
                                <img src={google} alt="ref"/>
                            </div>
                        </div>
                    </div>
                    
                </footer>
            </div>
        )
    }
}
