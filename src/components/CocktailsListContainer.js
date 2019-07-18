import React from 'react';
import CocktailListDisplayer from './CocktailListDisplayer';
import superagent from 'superagent'

export default class CocktailListContainer extends React.Component {
  state = {cocktails : null}
  
  componentDidMount() {
    return superagent
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(result => this.updateState(result.body.drinks.map(category => category.strCategory)))
      .catch(err => console.error)
  }

  updateState(cocktails) {
    return this.setState({
      cocktails 
    })
  }

  render() {
    return (  
      <CocktailListDisplayer name={this.state.cocktails} />
    )
  }
}