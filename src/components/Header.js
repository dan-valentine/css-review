import React, { Component } from "react";
import logo from "../logo.svg";
import "./Header.css";

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuShow: false
        }
    }

    toggleShow(){
        this.setState({
            menuShow: !this.state.menuShow
        })
    }
  render() {
    return (
      <nav>
        <div className="menu">
          <span onClick={_=>this.toggleShow()}>
            <img
              className="ham-img"
              src="http://www.stickpng.com/assets/images/588a64e7d06f6719692a2d11.png"
              alt="HAMburgur"
            />
          </span>
          <div 
          
          className={this.state.menuShow ? 'show mobile-slide' : 'mobile-slide'}>
            <div>Home</div>
            <div>About</div>
            <div className='dropDown'>
              dropDown 1
              <ul>
                <li>option 1</li>
                <li>option 1</li>
                <li>option 1</li>
                <li>option 1</li>
                <li>option 1</li>
              </ul>
            </div>
            <div className='dropDown'>
              dropDown 2
              <ul>
                <li>option 1</li>
                <li>option 1</li>
                <li>option 1</li>
                <li>option 1</li>
                <li>option 1</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </nav>
    );
  }
}
