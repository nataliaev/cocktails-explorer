import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import CocktailsListContainer from './components/CocktailsListContainer'
import CocktailTypeContainer from './components/CocktailTypeContainer'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={CocktailsListContainer} />
      <Route path="/cocktails-types/:category" component={CocktailTypeContainer} />
    </div>
  );
}

export default App;
