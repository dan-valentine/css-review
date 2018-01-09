import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav>
          <div>Title</div>
          <div>
        <div>Home</div>
        <div>About</div>
        <div>
          dropDown 1
          <ul>
            <li>option 1</li>
            <li>option 1</li>
            <li>option 1</li>
            <li>option 1</li>
            <li>option 1</li>
          </ul>
        </div>
        <div>
          dropDown 2
          <ul>
            <li>option 1</li>
            <li>option 1</li>
            <li>option 1</li>
            <li>option 1</li>
            <li>option 1</li>
          </ul>
        </div>
        
        <div>
            <span>
                <img src='http://www.stickpng.com/assets/images/588a64e7d06f6719692a2d11.png' alt='HAMburgur'/>
            </span>
      </nav>
    );
  }
}
