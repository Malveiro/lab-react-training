import React, { Component } from 'react';

class Random extends Component {
  render() {

    let rd = () => {
        return Math.floor(Math.random() * 6) + 1
    };

    let rdn = () => {
        return Math.floor(Math.random() * 100) + 1
    };

    return (
        <div>
        <div className="random">
        <p>Random value between 1 and 6 => {rd()} </p>
        </div>
        <div className="random">
        <p>Random value between 1 and 100 => {rdn()} </p>
        </div>
        </div>
    )
    }
}

export default Random;