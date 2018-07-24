import {
    FETCH_RECIPES,
    SET_RECIPES,
    FETCH_ONE_RECIPE,
    SET_ONE_RECIPE,
    CREATE_RECIPE,
    EDIT_ONE_RECIPE,
    DELETE_ONE_RECIPE
} from './types';

//  ALL RECIPES DATA:

export const fetchRecipes = () => {                 // FETCH ALL RECIPES
    return {
        type: FETCH_RECIPES
    }
}

export const setRecipes = (recipes) => {            // SHOW ALL RECIPES ON PAGE
    return {
        type: SET_RECIPES,
        recipes
    }
}

// RECIPE DATA:

export const addRecipeRequest = (recipeData) => {   // CREATE RECIPE
    return {
        type: CREATE_RECIPE,
        recipeData
    }
}

export const fetchRecipeData = (recipeId) => {      // FETCH RECIPE
    return {
        type: FETCH_ONE_RECIPE,
        recipeId
    }
}

export const setRecipe = (recipe) => {              // SHOW RECIPE ON PAGE
    return {
        type: SET_ONE_RECIPE,
        recipe
    }
}

export const editRecipeData = (recipe) => {         // EDIT RECIPE
    return {
        type: EDIT_ONE_RECIPE,
        recipe
    }
}

export const deleteRecipeRequest = (recipeId) => {
    return {
        type: DELETE_ONE_RECIPE,
        recipeId
    }
}

// 