import { combineReducers } from 'redux';

import { SET_RECIPES, SET_ONE_RECIPE } from '../actions/types';

export const recipes = (state = [], action = {}) => {
    switch (action.type) {
        case SET_RECIPES:
            return action.recipes;
        default: return state;
    }
}

export const recipe = (state = {}, action = {}) => {
    switch(action.type) {
        case SET_ONE_RECIPE:
            return action.recipe;
        default: return state;
    }
}

export default combineReducers({
    recipes,
    recipe
});