import React, { Component } from 'react'
import './css/Properties.css'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
class Properties extends Component {
    render() {
        return (
            <div>
               
                <div className="card-holder">
                <div className="cards">
                    <div className="cardimg">
                    <img src={img1} alt="" />
                        <div className="imgicons">
                            <div className="hovericons">
                            <li><i className="fa fa-book"></i></li>
                                <li><i className="fa fa-film"></i></li>
                            </div>
                            <div className="steadyicons">
                                <li><i className="fa fa-heart"></i></li>
                                <li><i className="fa fa-film"></i></li>
                                <li><i className="fa fa-camera"><span style={{paddingLeft:"8px"}}>5</span></i></li>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-text">
                    <div className="price">
                    <span style={{fontWeight:"bold",margin:"0px 0px 7px",font:"18px"}}>$21,500  <span style={{fontSize:"13px",fontWeight:'normal',marginLeft:"30px"}}>Guide Price</span></span>
                   
                    </div>
                    <div className="post-title">
                                <h4 itemProp="name"><a href="http://homevillas.chimpgroup.com/properties/new-superior-quality-house-for-sale/">New Superior Quality House For Sale</a></h4>
                            </div>
                    
                    <div>
                        <p><i className="fa fa-map-marker"></i>London, United Kingdom</p>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                        <p><i className="fa fa-bed">Bedrooms 4</i></p>
                        <p><i className="fa fa-users"></i>Bathrooms 2</p>
                        <p> <i className="fa fa-car"></i>Garage 2</p>
                        <p><i className="fa fa-transform"></i>SqFt 11050</p>
                    </div>
                    </div>
                   
                </div>
                <div className="cards">
                    <div className="cardimg">
                    <img src={img2} alt="" />
                    <div className="imgicons">
                            <div className="hovericons">
                            <li><i className="fa fa-book"></i></li>
                                <li><i className="fa fa-film"></i></li>
                            </div>
                            <div className="steadyicons">
                                <li><i className="fa fa-heart"></i></li>
                                <li><i className="fa fa-film"></i></li>
                                <li><i className="fa fa-camera"><span style={{paddingLeft:"8px"}}>5</span></i></li>
                            </div>
                        </div>
                    
                    </div>
                    
                    <div className="card-text">
                    <div className="price">
                    <span style={{fontWeight:"bold",margin:"0px 0px 7px",font:"18px"}}>$21,500  <span style={{fontSize:"13px",fontWeight:'normal',marginLeft:"30px"}}>Guide Price</span></span>
                   
                    </div>
                    <div className="post-title">
                                <h4 itemProp="name"><a href="http://homevillas.chimpgroup.com/properties/new-superior-quality-house-for-sale/">New Superior Quality House For Sale</a></h4>
                            </div>
                    
                    <div>
                        <p><i className="fa fa-map-marker"></i>London, United Kingdom</p>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                        <p><i className="fa fa-bed">Bedrooms 4</i></p>
                        <p><i className="fa fa-users"></i>Bathrooms 2</p>
                        <p> <i className="fa fa-car"></i>Garage 2</p>
                        <p><i className="fa fa-transform"></i>SqFt 11050</p>
                    </div>
                    </div>
                   
                </div>
                <div className="cards">
                    <div className="cardimg">
                    <img src={img3} alt="" />
                    <div className="imgicons">
                            <div className="hovericons">
                            <li><i className="fa fa-book"></i></li>
                                <li><i className="fa fa-film"></i></li>
                            </div>
                            <div className="steadyicons">
                                <li><i className="fa fa-heart"></i></li>
                                <li><i className="fa fa-film"></i></li>
                                <li><i className="fa fa-camera"><span style={{paddingLeft:"8px"}}>5</span></i></li>
                            </div>
                        </div>
                    <div className="sold-out">
                        <span>Sold</span>
                    </div>
                    </div>
                    
                    <div className="card-text">
                    <div className="price">
                    <span style={{fontWeight:"bold",margin:"0px 0px 7px",font:"18px"}}>$21,500  <span style={{fontSize:"13px",fontWeight:'normal',marginLeft:"30px"}}>Guide Price</span></span>
                   
                    </div>
                    <div className="post-title">
                                <h4 itemProp="name"><a href="http://homevillas.chimpgroup.com/properties/new-superior-quality-house-for-sale/">New Superior Quality House For Sale</a></h4>
                            </div>
                    
                    <div>
                        <p><i className="fa fa-map-marker"></i>London, United Kingdom</p>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                        <p><i className="fa fa-bed">Bedrooms 4</i></p>
                        <p><i className="fa fa-users"></i>Bathrooms 2</p>
                        <p> <i className="fa fa-car"></i>Garage 2</p>
                        <p><i className="fa fa-transform"></i>SqFt 11050</p>
                    </div>
                    </div>
                   
                </div>
                <div className="cards">
                    <div className="cardimg">
                    <img src={img4} alt="" />
                    <div className="imgicons">
                            <div className="hovericons">
                            <li><i className="fa fa-book"></i></li>
                                <li><i className="fa fa-film"></i></li>
                            </div>
                            <div className="steadyicons">
                                <li><i className="fa fa-heart"></i></li>
                                <li><i className="fa fa-film"></i></li>
                                <li><i className="fa fa-camera"><span style={{paddingLeft:"8px"}}>5</span></i></li>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-text">
                    <div className="price">
                    <span style={{fontWeight:"bold",margin:"0px 0px 7px",font:"18px"}}>$21,500  <span style={{fontSize:"13px",fontWeight:'normal',marginLeft:"30px"}}>Guide Price</span></span>
                   
                    </div>
                    <div className="post-title">
                                <h4 itemProp="name"><a href="http://homevillas.chimpgroup.com/properties/new-superior-quality-house-for-sale/">New Superior Quality House For Sale</a></h4>
                            </div>
                    
                    <div>
                        <p><i className="fa fa-map-marker"></i>London, United Kingdom</p>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                        <p><i className="fa fa-bed">Bedrooms 4</i></p>
                        <p><i className="fa fa-users"></i>Bathrooms 2</p>
                        <p> <i className="fa fa-car"></i>Garage 2</p>
                        <p><i className="fa fa-transform"></i>SqFt 11050</p>
                    </div>
                    </div>
                   
                </div>
                <div className="cards">
                    <div className="cardimg">
                    <img src={img5} alt="" />
                    <div className="imgicons">
                            <div className="hovericons">
                            <li><i className="fa fa-book"></i></li>
                                <li><i className="fa fa-film"></i></li>
                            </div>
                            <div className="steadyicons">
                                <li><i className="fa fa-heart"></i></li>
                                <li><i className="fa fa-film"></i></li>
                                <li><i className="fa fa-camera"><span style={{paddingLeft:"8px"}}>5</span></i></li>
                            </div>
                        </div>
                    
                    </div>
                    
                    <div className="card-text">
                    <div className="price">
                    <span style={{fontWeight:"bold",margin:"0px 0px 7px",font:"18px"}}>$21,500  <span style={{fontSize:"13px",fontWeight:'normal',marginLeft:"30px"}}>Guide Price</span></span>
                   
                    </div>
                    <div className="post-title">
                                <h4 itemProp="name"><a href="http://homevillas.chimpgroup.com/properties/new-superior-quality-house-for-sale/">New Superior Quality House For Sale</a></h4>
                            </div>
                    
                    <div>
                        <p><i className="fa fa-map-marker"></i>London, United Kingdom</p>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                        <p><i className="fa fa-bed">Bedrooms 4</i></p>
                        <p><i className="fa fa-users"></i>Bathrooms 2</p>
                        <p> <i className="fa fa-car"></i>Garage 2</p>
                        <p><i className="fa fa-transform"></i>SqFt 11050</p>
                    </div>
                    </div>
                   
                </div>
                <div className="cards">
                    <div className="cardimg">
                    <img src={img6} alt="" />
                    <div className="imgicons">
                            <div className="hovericons">
                            <li><i className="fa fa-book"></i></li>
                                <li><i className="fa fa-film"></i></li>
                            </div>
                            <div className="steadyicons">
                                <li><i className="fa fa-heart"></i></li>
                                <li><i className="fa fa-film"></i></li>
                                <li><i className="fa fa-camera"><span style={{paddingLeft:"8px"}}>5</span></i></li>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-text">
                    <div className="price">
                    <span style={{fontWeight:"bold",margin:"0px 0px 7px",font:"18px"}}>$21,500  <span style={{fontSize:"13px",fontWeight:'normal',marginLeft:"30px"}}>Guide Price</span></span>
                   
                    </div>
                    <div className="post-title">
                                <h4 itemProp="name"><a href="http://homevillas.chimpgroup.com/properties/new-superior-quality-house-for-sale/">New Superior Quality House For Sale</a></h4>
                            </div>
                    
                    <div>
                        <p><i className="fa fa-map-marker"></i>London, United Kingdom</p>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                        <p><i className="fa fa-bed">Bedrooms 4</i></p>
                        <p><i className="fa fa-users"></i>Bathrooms 2</p>
                        <p> <i className="fa fa-car"></i>Garage 2</p>
                        <p><i className="fa fa-transform"></i>SqFt 11050</p>
                    </div>
                    </div>
                   
                </div>
            </div>
            </div>
            
        )
    }
}
export default  Properties