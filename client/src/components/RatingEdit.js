import React from 'react';
import '../styles/RatingEdit.css';

export default ({ rating, updateRating }) => {    
    function onChange(e) {
        updateRating(e.target.id);
    }

    return (
        <div className='rating-star-wrapper'>
            <button id='5' onClick={(e) => onChange(e)} style={rating >= 5  ? { 'opacity': '1' } : {}} className='rating-star rs-1'><i className='star icon'></i></button>
            <button id='4' onClick={(e) => onChange(e)} style={rating >= 4  ? { 'opacity': '1' } : {}} className='rating-star rs-1 rs-2'><i className='star icon'></i></button>
            <button id='3' onClick={(e) => onChange(e)} style={rating >= 3  ? { 'opacity': '1' } : {}} className='rating-star rs-1 rs-2 rs-3'><i className='star icon'></i></button>
            <button id='2' onClick={(e) => onChange(e)} style={rating >= 2  ? { 'opacity': '1' } : {}} className='rating-star rs-1 rs-2 rs-3 rs-4'><i className='star icon'></i></button>
            <button id='1' onClick={(e) => onChange(e)} style={rating >= 1  ? { 'opacity': '1' } : {}} className='rating-star rs-1 rs-2 rs-3 rs-4 rs-5'><i className='star icon'></i></button>
        </div>
    )
}