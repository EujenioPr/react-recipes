import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import propTypes from 'prop-types';

import Recipe from "./Recipe";
import { deleteRecipeRequest } from '../actions';
import '../styles/Recipes.css'
import ThemeContext from '../themes';

class Recipes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            searchValue: '',
            rateSelected: 0 
        }

        this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchRecipes();
    }

    static handleSearchSort(recipes, searchValue) {
        const searchedRecipes = recipes.filter((recipe) => {
            if(recipe.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return recipe;
            }
        });
        return searchedRecipes;
    }

    static handleSelectSort(recipes, sortType) {        // (sortType:0) Descending | (sortType:1) Ascending  }= Orders
        const sortedRecipes = recipes.sort((a, b) => {
            return sortType == 0 ? b.rating - a.rating : a.rating - b.rating;
        });
        return sortedRecipes;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.recipes != prevState.recipes && prevState.searchValue.length < 1) {            
            return {
                recipes: Recipes.handleSelectSort(nextProps.recipes, prevState.rateSelected)
            }
        } else if(prevState.searchValue.length > 0) {            
            return {
                recipes: Recipes.handleSearchSort(nextProps.recipes, prevState.searchValue)
            }
        } else {            
            return null;
        }
    }

    handleDeleteRecipe(id) {
        this.props.deleteRecipeRequest(id);
    }

    handleSearch(e) {
        this.setState({
            searchValue: e.target.value
        });
    }

    handleSelectChange(e) {
        this.setState({
            rateSelected: e.target.value * 1,
            recipes: []
        })
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {(context) => (
                    <div>
                        <div style={context.theme} className='ui secondary segment'>
                            <div className='ui left labeled button allrecipes-button-recipes'>
                                <a className='ui basis blue label'>{this.state.recipes.length}</a>
                                <Link className='ui blue button' to='/recipes'>All Recipes</Link>
                            </div>
        
                            <div className='ui left icon input allrecipes-search'>
                                <i className='search icon'></i>
                                <input 
                                    className='allrecipes-input' 
                                    onChange={this.handleSearch} 
                                    value={this.state.searchValue} 
                                    placeholder="Search Recipe"
                                    style={context.theme.backgroundColor === '#333' ? { backgroundColor: '#212121', color: '#ccc' } : null}
                                />
                            </div>
                            
                            <Link className='ui positive button allrecipes-button' to='/recipes/add'>
                                <i className="plus icon"></i>
                                Add Recipe
                            </Link>
        
                            <select className='ui simple dropdown item allrecipes-select' onChange={this.handleSelectChange}>
                                <option value={0}>Rating Descending</option>
                                <option value={1}>Rating Ascending</option>
                            </select>
                        </div>
                        <hr style={context.theme.color === '#fff' ? { backgroundColor: context.theme.backgroundColor + '6' } : null}/>
                        <div style={context.theme}>
                            {this.state.recipes.map((recipe, ind) => <Recipe deleteRecipe={this.handleDeleteRecipe} details={recipe} key={ind}/>)}
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes
    }
}

Recipes.propTypes = {
    fetchRecipes: propTypes.func.isRequired,
    recipes: propTypes.array.isRequired,
    deleteRecipeRequest: propTypes.func
}

export default connect(mapStateToProps, {deleteRecipeRequest})(Recipes);