import React, { Component } from 'react';

class Greetings extends Component {
  render() {

    let str ="";

    if (this.props.lang === "de") {
        str = "Hallo"
    } else {
        str = "Bonjour"
    };

    return (
        <div className="greets">
        <p> {str} {this.props.children}</p>
        </div>
    )
    }
}

export default Greetings;