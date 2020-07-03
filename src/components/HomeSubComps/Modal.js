import React,{ Component } from 'react';
import './css/Modal.css'

class Modal extends Component {
    state={
        first:"",
        second:"isactive",
        tog:false
    }
    ch1=()=>{
        this.setState({
            first:"isactive",
            second:"",
            tog:true
        })
    }
    ch2=()=>{
        this.setState({
            first:"",
            second:"isactive",
           
            tog:false
        })
    }
    render(){
        const {first,second,tog}=this.state
        return(
            <div className="mymodal">
                 <div className="f-modal">
                    <div className="modal-tab-switch">
                        
                           <ul>
                               <li className={first} onClick={this.ch1}>Sign In</li>
                               <li className={second} onClick={this.ch2}>Register</li>
                           </ul>
                        
                        <div className="close-modal" onClick={this.props.togglemodal}>
                            <i className="fa fa-close"></i>

                        </div>
                    </div>
                    <div className="mymodal-contents">
                        {
                            tog ? (
                                <div>
                                <div className="signup">
                                    <div className="signup-1">
                                        <div className="demo-user">
                                                {/* <div>
                                                    <p>Click to login with<br/> Demo User</p>
                                                    <input type="checkbox"/>
                                                </div> */}
                                            <div>
                                                <p>demo user</p>
                                            </div>
                                        
                                        </div>
                                        <div class="myinput-filed">
                                            <i class="fa fa-user"></i>
                                            <input type="text" placeholder="Username"/> 
                                            </div>
                                            <div class="myinput-filed">
                                            <i class="fa fa-lock"></i>
                                            <input type="password" placeholder="Password"/> 
                                            </div>
                                            <div className="rember-me">
                                            <input class="input-field" type="checkbox" id="remember" />
                                            <label for="remember">Remember me</label>
                                            </div>
                                    </div>
                                    <div className="signup-2">
                                        <div className="social-media">
                                    <p className><span>You Can Login using your <br/>facebook Profile or Google <br/>account</span></p>
                                        <ul>
                                            <li><i className="fa fa-facebook"></i>Connect With Facebook</li>
                                            <li><i className="fa fa-twitter"></i>Connect With Facebook</li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            ):(
                               <div>
                                    reg
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>
           
        )
    }
}

export default Modal;