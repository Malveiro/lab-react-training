import React, { Component } from 'react';

class CreditCard extends Component {
  render() {

    let logo;
    if (this.props.type==="Visa") {
      logo = <img className="logo" src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo.png" alt="visaii"/>
    } else {
      logo = <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJZhkjNvY3sdAu7W1BMmKiDW_8vjVcs60VSBkKdB1MS1Q2HChE" alt="visaii"/>
    }

    return (
        <div className="creditCard" style={{backgroundColor: this.props.bgColor, color: this.props.color}}>
        {logo}
        <p>.... .... .... {this.props.number.substring(this.props.number.length-4)}</p>
        <p>Expires {this.props.expirationMonth}/{this.props.expirationYear} {this.props.bank}</p>
        
        <p>{this.props.owner}</p>
        </div>
    )
    }
}

export default CreditCard;