import { 
    FETCH_RECIPES, 
    FETCH_ONE_RECIPE, 
    CREATE_RECIPE,
    EDIT_ONE_RECIPE,
    DELETE_ONE_RECIPE
} from '../actions/types';
import { takeLatest } from 'redux-saga/effects';
import { 
    fetchRecipesSaga, 
    fetchRecipeSaga, 
    createRecipeSaga, 
    editRecipeSaga, 
    deleteRecipeSaga
} from './recipesSaga';

export default function* rootSaga() {
    yield takeLatest(FETCH_RECIPES, fetchRecipesSaga);
    yield takeLatest(FETCH_ONE_RECIPE, fetchRecipeSaga);
    yield takeLatest(CREATE_RECIPE, createRecipeSaga);
    yield takeLatest(EDIT_ONE_RECIPE, editRecipeSaga);
    yield takeLatest(DELETE_ONE_RECIPE, deleteRecipeSaga);
}