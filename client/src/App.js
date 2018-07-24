import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { connect } from 'react-redux';

import propTypes from 'prop-types';

import { addRecipeRequest, fetchRecipes } from './actions/index';

import Recipes from './components/Recipes';
import Header from './components/Header';
import AddRecipe from './components/AddRecipe';
import ViewRecipe from './components/ViewRecipe';
import EditRecipe from './components/EditRecipe';

import ThemeContext, { light, dark } from './themes/index';

class App extends Component {
  state = {
    theme: light
  }

  toggleTheme() {
    this.setState({
      theme: this.state.theme == light ? dark: light
    });
  }

  render() {
    const { addRecipeRequest, fetchRecipes } = this.props;
    return (
      <BrowserRouter>
        <ThemeContext.Provider value={{theme:this.state.theme, toggleTheme:this.toggleTheme.bind(this)}}>
          <div style={{ backgroundColor: this.state.theme.backgroundColor + '9', minHeight: '100%' }}>
            <div className='main-wrapper ui text container'>
              <Header />
              <hr style={this.state.theme == dark ? { backgroundColor: this.state.theme.backgroundColor + '6' } : null}/>
              <Switch>
                <Route exact path='/' render={() => <Redirect to='/recipes' /> }/>
                <Route exact path='/recipes' render={() => <Recipes  fetchRecipes={fetchRecipes} /> }/>
                <Route exact path='/recipes/add' render={() => <AddRecipe addRecipeRequest={addRecipeRequest} /> }/>
                <Route exact path='/recipes/:id' render={(props) => <ViewRecipe {...props} /> }/>
                <Route exact path='/recipes/edit/:id' render={(props) => <EditRecipe {...props} />}/>
              </Switch>
            </div>
          </div>
        </ThemeContext.Provider>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  addRecipeRequest: propTypes.func.isRequired,
  fetchRecipes: propTypes.func.isRequired
}

export default connect(null, {addRecipeRequest, fetchRecipes})(App);