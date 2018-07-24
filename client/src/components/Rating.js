import React from 'react';

export default ({ rating }) => {
    let rate = [];
    for(let i = 0; i < rating; i++) {
        rate.push(<i className="rating-icon star icon" key={i}></i>);
    }
    if(rating == 0) {
        rate = <i className="rating-icon star icon"></i>;
    }
    return (
        <React.Fragment>
            {rating > 0 ? rate.map((el, i) => el) : rate}
        </React.Fragment>
    )
}