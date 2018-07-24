import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipeData, editRecipeData } from '../actions/index';
import RatingEdit from './RatingEdit';
import propTypes from 'prop-types';
import '../styles/EditRecipe.css';
import ThemeContext from '../themes';

class EditRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: '',
            description: '',
            rating: 0,
            changed: false
        }
        this.updateRating = this.updateRating.bind(this);
        this.saveRecipe = this.saveRecipe.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        this.props.fetchRecipeData(this.state.id);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(!prevState.changed) {
            return {
                ...nextProps.recipe
            }
        } else {
            return null;
        }
    }

    updateRating(newRating) {
        this.setState({
            rating: newRating,
            changed: true
        });
    }

    saveRecipe() {
        const recipe = {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            rating: this.state.rating
        }
        console.log(recipe);
        this.props.editRecipeData(recipe);
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value,
            changed: true
        });
    }
    
    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <div style={theme} className='ui segment'>
                        <div className='ui input editrecipe-input'>
                            <input
                                value={this.state.title}
                                onChange={this.handleInput}
                                type='text'
                                name='title'
                                style={theme.backgroundColor === '#333' ? { backgroundColor: '#212121', color: '#ccc' } : null}
                            />
                        </div>
                        <div className='ui form editrecipe-ta'>
                            <textarea
                                value={this.state.description}
                                onChange={this.handleInput}
                                type='text' 
                                name='description'
                                style={theme.backgroundColor === '#333' ? { backgroundColor: '#212121', color: '#ccc' } : null}
                            ></textarea>
                        </div>
                        <RatingEdit rating={this.state.rating} updateRating={this.updateRating}/>
                        <button className='ui green button' onClick={this.saveRecipe}>Save</button>
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

EditRecipe.propTypes = {
    fetchRecipeData: propTypes.func.isRequired,
    editRecipeData: propTypes.func.isRequired
}

export default connect(mapStateToProps, {fetchRecipeData, editRecipeData})(EditRecipe);