import React, { Component } from 'react';

class Rating extends Component {
    render() {

    // const Rating = ({ rate }) => {
        let rating;
        switch (Math.round(this.props.children)) {
            case 0:
                rating = "☆ ☆ ☆ ☆ ☆";
                break;
            case 1:
                rating = "★ ☆ ☆ ☆ ☆";
                break;
            case 2:
                rating = "★ ★ ☆ ☆ ☆";
                break;
            case 3:
                rating = "★ ★ ★ ☆ ☆";
                break;
            case 4:
                rating = "★ ★ ★ ★ ☆";
                break;
            case 5:
                rating = "★ ★ ★ ★ ★";
                break;
            default:
                rating = "☆ ☆ ☆ ☆ ☆";
        }
    
        return (
            <div>
                {rating}
            </div>
        );
    };
};

export default Rating;