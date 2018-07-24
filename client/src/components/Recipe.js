import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import '../styles/Recipe.css';
import ThemeContext from '../themes';

export default ({ details, deleteRecipe }) => {
    let rate;
    if(!details.rating) {
        rate = 0;
    } else {
        rate = details.rating;
    }
    return(
        <ThemeContext.Consumer>
            {({ theme }) => (
                <div style={{ backgroundColor: theme.backgroundColor, color: theme.color, borderBottom: theme.color === '#fff' ? '3px solid #2f2f2f' : '3px solid transparent' }} className='ui very padded segment recipe-wrapper'>
                    <div className='image'>
                        <img className='floated left small ui image' src='../images/dish.png'/>
                    </div>
                    <div className='content'>
                        <h2 style={theme} className='ui header'>{details.title}</h2>
                        <span className='description'>{details.description}</span>
                    </div>
                    <br/>
                    <strong>
                        <Rating rating={rate}/>
                    </strong>
                    {/* Recipe Action Button Set Below */}
                    <div className='recipe-button-set'>
                        <Link className={'circular ui basic button icon' + (theme.color === '#fff' ? ' recipe-button-dark' : '')} to={'/recipes/'+details._id}>
                            <i className="eye icon"></i>
                        </Link>
                        <Link className={'circular ui basic button icon' + (theme.color === '#fff' ? ' recipe-button-dark' : '')} to={'/recipes/edit/'+details._id}>
                            <i className="pencil icon"></i>
                        </Link>
                        <button className={'circular ui basic button icon' + (theme.color === '#fff' ? ' recipe-button-dark' : '')} onClick={() => deleteRecipe(details._id)}>
                            <i className="trash alternate outline icon"></i>
                        </button>
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}