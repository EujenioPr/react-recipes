import { api } from '../data/api';
import { call, put } from 'redux-saga/effects';
import { fetchRecipes, setRecipes, setRecipe } from '../actions';

export function* fetchRecipesSaga() {
    try {
        const recipes = yield call(api.recipes.fetch);
        yield put(setRecipes(recipes));
    } catch (error) {
        console.log(error);
    }
}

export function* fetchRecipeSaga(action) {
    try {
        const recipe = yield call(api.recipe.fetch, action.recipeId);
        yield put(setRecipe(recipe));
    } catch (error) {
        console.log(error);
    }
}

export function* createRecipeSaga(action) {
    try {
        yield call(api.recipe.post, action.recipeData);
    } catch (error) {
        console.log(error);
    }
}

export function* editRecipeSaga(action) {
    try {
        yield call(api.recipe.patch, action.recipe.id, action.recipe);
    } catch (error) {
        console.log(error);
    }
}

export function* deleteRecipeSaga(action) {
    try {
        const response = yield call(api.recipe.delete, action.recipeId);
        if(response.ok == 1) {
            yield put(fetchRecipes())
        }
    } catch (error) {
        console.log(error);
    }
}