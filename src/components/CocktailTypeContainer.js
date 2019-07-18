import React from 'react';
import CocktailTypeDisplayer from './CocktailTypeDisplayer';
import superagent from 'superagent'

export default class CocktailTypeContainer extends React.Component {
  state = {
    cocktailsOfTheType : null
  }
  
  updateCocktails(cocktailsOfTheType) {
    this.setState({
      cocktailsOfTheType
    })
  }

  componentDidMount() {
    const category = this.props.match.params.category
    console.log('category', category)
    return superagent
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(result => this.updateCocktails(result.body.drinks))
      .catch(console.error)
  }

  render() {
    
    const category = decodeURIComponent(this.props.match.params.category)
    return <CocktailTypeDisplayer
        cocktailsOfTheType={this.state.cocktailsOfTheType}
        category={category}
    />
  }
}