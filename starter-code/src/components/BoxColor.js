import React, { Component } from 'react';

class BoxColor extends Component {
  render() {

    let r = () => {
        return Math.floor(Math.random() * 255)
    };

    let g = () => {
        return Math.floor(Math.random() * 255)
    };

    let b = () => {
        return Math.floor(Math.random() * 255)
    };

    let color = "";
      if (this.props.r ===255) color = "white"
      else color = "black";

    const divStyle = {
        color: `${color}`,
        backgroundColor: `rgb(${r()},${g()},${b()})`,
    };

    return (
        <div className="box" style={divStyle}>
        <p>rgb({r()},{g()},{b()})</p>
        </div>
    )
    }
}

export default BoxColor;