import React, { Component } from 'react'
import newsimg1 from '../../images/newsimg1.jpg'
export default class News extends Component {
    render() {
        return (
            <div className="newsbody container" style={{marginBottom:"70px"}}>
                <div className="news-card">
                    <img src={newsimg1} alt=""/>
                    <div className="newscontents">
                        <span className="post-dets">
                        <ul className="post-options">
                                <li>February 1, 2020</li>
                                <li> 0 comment </li>
                            </ul>
                        </span>
                        <span>
                        <div className="post-title">
                                <h4><a href="http://homevillas.chimpgroup.com/the-leader-in-real-estate-information-systems/" title="the leader in real estate information systems">the leader in real estate ...</a></h4>
                            </div>
                        </span>
                        <span>
                        <p> Integer mattis magna volutpat euismod habitant mi faucibus elementum proin mi, lobortis iaculis dolor torquent...</p>
                        </span>
                        <span>
                        <div className="button-holder">
                                <a style={{color:"black"}}href="http://homevillas.chimpgroup.com/the-leader-in-real-estate-information-systems/" 
                                className="btn-readmore">Read Article<i className=" fa fa-arrow-right " style={{paddingLeft:"60%"}}></i></a>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="news-card">
                    <img src={newsimg1} alt=""/>
                    <div className="newscontents">
                        <span className="post-dets">
                        <ul className="post-options">
                                <li>February 1, 2020</li>
                                <li> 0 comment </li>
                            </ul>
                        </span>
                        <span>
                        <div className="post-title">
                                <h4><a href="http://homevillas.chimpgroup.com/the-leader-in-real-estate-information-systems/" title="the leader in real estate information systems">the leader in real estate ...</a></h4>
                            </div>
                        </span>
                        <span>
                        <p> Integer mattis magna volutpat euismod habitant mi faucibus elementum proin mi, lobortis iaculis dolor torquent...</p>
                        </span>
                        <span>
                        <div className="button-holder">
                                <a style={{color:"black"}}href="http://homevillas.chimpgroup.com/the-leader-in-real-estate-information-systems/" 
                                className="btn-readmore">Read Article<i className=" fa fa-arrow-right " style={{paddingLeft:"60%"}}></i></a>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="news-card">
                    <img src={newsimg1} alt=""/>
                    <div className="newscontents">
                        <span className="post-dets">
                        <ul className="post-options">
                                <li>February 1, 2020</li>
                                <li> 0 comment </li>
                            </ul>
                        </span>
                        <span>
                        <div className="post-title">
                                <h4><a href="http://homevillas.chimpgroup.com/the-leader-in-real-estate-information-systems/" title="the leader in real estate information systems">the leader in real estate ...</a></h4>
                            </div>
                        </span>
                        <span>
                        <p> Integer mattis magna volutpat euismod habitant mi faucibus elementum proin mi, lobortis iaculis dolor torquent...</p>
                        </span>
                        <span>
                        <div className="button-holder">
                                <a style={{color:"black"}}href="http://homevillas.chimpgroup.com/the-leader-in-real-estate-information-systems/" 
                                className="btn-readmore">Read Article<i className=" fa fa-arrow-right " style={{paddingLeft:"60%"}}></i></a>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
