import axios from 'axios';
import { URLS } from '../data/urls';

export const api = {
    recipes: {
        fetch: () => {
            return axios.get(URLS.api.recipes)
                .then((response) => response.data);
        }
    },
    recipe: {
        fetch: (path) => {
            return axios.get(URLS.api.recipes + '/' + path)
                .then((response) => response.data);
        },
        post: (data) => {
            axios.post(URLS.api.recipes, data);
        },
        patch: (path, data) => {
            return axios.patch(URLS.api.recipes + '/' + path, data)
                .then((response) => response.data);
        },
        delete: (path) => {
            return axios.delete(URLS.api.recipes + '/' + path)
                .then((response) => response.data);
        }
    }
}