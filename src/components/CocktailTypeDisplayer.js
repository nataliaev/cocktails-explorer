import React from 'react';

export default class CocktailTypeDisplayer extends React.Component {

  displayCocktailImg(cocktail) {
    return (
      <div key={cocktail.idDrink}>
        <p>{cocktail.strDrink}</p>
        <img src={ cocktail.strDrinkThumb } alt="Cocktail" />)
      </div>
    )
  }

  render() {
    return ( 
      <div>
        <h1>{this.props.category}</h1>
        <div>
          {this.props.cocktailsOfTheType === null ? 'Loading...' : this.props.cocktailsOfTheType.map(cocktail => this.displayCocktailImg(cocktail))}
        </div>
      </div> 
    )
  }
}