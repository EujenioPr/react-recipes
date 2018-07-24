import React, { Component } from 'react';
import propTypes from 'prop-types';
import '../styles/AddRecipe.css';
import ThemeContext from '../themes';

export default class AddRecipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: ''
        }
        this.onChange = this.onChange.bind(this);
        this.addRecipe = this.addRecipe.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addRecipe(e) {
        e.preventDefault();
        this.props.addRecipeRequest(this.state);
        this.setState({
            title: '',
            description: ''
        });
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <div style={theme} className='ui segment'>
                        <h2 style={theme} className='header addrecipe-header'>Add Recipe</h2>
                        <div className='ui input addrecipe-input'>
                            <input 
                                type='text' 
                                name='title' 
                                onChange={this.onChange} 
                                value={this.state.title} 
                                placeholder="Recipe Title"
                                style={theme.backgroundColor === '#333' ? { backgroundColor: '#212121', color: '#ccc' } : null}
                            />
                        </div>
                        <div className='ui form'>
                            <textarea 
                                type='text' 
                                name='description' 
                                onChange={this.onChange} 
                                value={this.state.description} 
                                placeholder="Recipe Description"
                                style={theme.backgroundColor === '#333' ? { backgroundColor: '#212121', color: '#ccc' } : null}
                            ></textarea>
                        </div>
                        <button className='ui button blue addrecipe-button' onClick={this.addRecipe}>
                            <i className='icon check'></i>
                            Add Recipe
                        </button>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}

AddRecipe.propTypes = {
    addRecipeRequest: propTypes.func.isRequired
}