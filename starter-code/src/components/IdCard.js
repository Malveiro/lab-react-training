import React, { Component } from 'react';

class IdCard extends Component {
  render() {
    return (
        <div className="person">
            <img src={this.props.picture} alt="bilder"/>
        <div className="details">
            <span><b>First name: </b>{this.props.firstName}</span><br />
            <span><b>Last Name: </b>{this.props.lastName}</span><br />
            <span><b>Gender: </b>{this.props.gender}</span><br />
            <span><b>Height </b>{this.props.height.toString()}</span><br />
            <span><b>Birth </b>{this.props.birth.toDateString()}</span><br />
        </div>
        </div>
        );
    }
}

export default IdCard;