import React, { Component } from 'react'
import './css/ShowCaseTab.css'
export default class ShowCaseTab extends Component {
    state={
        colored:"tabact",
        notcollored:"",
        all:"",
        catedro:false
    }
    sale=()=>{
        this.setState({
            colored:"tabact",
            notcolored:""
        })
    }
    rent=()=>{
        this.setState({
            colored:"",
            notcolored:"tabact"
        })
    }
    showmydrop=()=>{
        this.setState({
            catedro:!this.state.catedro
        })
    }
    render() {
        return (
            <div className="container">
                
                <div className="ShowCaseTab">
                <div>
                    <span className="Whatsthis">What's this</span>
                </div>
                <div className="themainconts">
                <label className="lookfor">
                        <i class="fa fa-search" style={{color:"#ccc"}}></i>
                        <input type="text" placeholder="What are you looking for?" class="input-field" name="search_title"/>  
                    </label>
                    <div className="salerent">
                        <label className={this.state.colored} onClick={this.sale}>For Sale</label>
                        <label className={this.state.notcolored} onClick={this.rent}>To Rent</label>
                    </div>
                    <label className="locat">
                        
                        <i class="fa fa-map-marker"></i>
                        <input type="text" placeholder=""  name="search_title"/> 
                        <i class="fa fa-map-marker "></i> 
                    </label>
                    <div className="catedro">
                         
                         <div className="catedro-contents">
                            <i className="fa fa-home"></i>
                            <span>Categories</span>
                            <i className="fa fa-arrow-down" onClick={this.showmydrop}></i>
                         </div>
                       
                       {
                       this.state.catedro ? <div className="catedro-dropdown">
                            <ul>
                                <li>Categories</li>
                                <li>bungalow</li>
                                <li>Commercial</li>
                                <li>Flats</li>
                                <li>Others</li>
                            </ul>
                        </div>
                        :""}
                    </div>
                    <button className="srcbtn">SEARCH</button>
                </div>
                
                </div>
            </div>
        )
    }
}
