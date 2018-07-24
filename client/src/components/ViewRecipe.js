import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipeData } from '../actions/index';
import propTypes from 'prop-types';
import Rating from './Rating';
import '../styles/ViewRecipe.css';
import ThemeContext from '../themes';

class ViewRecipe extends Component {   // match.params.id
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: '',
            description: '',
            rating: 0 
        }
    }

    componentDidMount() {
        this.props.fetchRecipeData(this.state.id);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(prevState != nextProps) {
            return {
                ...nextProps.recipe
            }
        } else {
            return null;
        }
    } 

    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <div style={theme} className='ui segment very padded'>
                        <h2 style={{ color: theme.color }} className='ui dividing header'>{this.state.title}</h2>
                        <span style={{ color: theme.color }} className='view-recipe-text'>{this.state.description}</span>
                        <br/>
                        <strong className='rating-stars'>
                            <Rating rating={this.state.rating}/>
                        </strong>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}

function mapStateToProps(state) {
    return {
        recipe: state.recipe
    }
}

ViewRecipe.propTypes = {
    fetchRecipeData: propTypes.func.isRequired
}

export default connect(mapStateToProps, {fetchRecipeData})(ViewRecipe);