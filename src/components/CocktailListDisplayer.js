import React from 'react';
import { Link } from 'react-router-dom'

export default class CocktailListDisplayer extends React.Component {
  
  renderCocktail(category) {
    const component = encodeURIComponent(category)
    return (
      <li key={category}>
        <Link to={ `/cocktails-types/${component}` }>{category}</Link>
      </li>
    )
  }

  render() {
    return (
      <div>
        <h1>List of the cocktails:</h1>
        <ul>
          {this.props.name === null ? 'Loading...' : this.props.name.map(category => this.renderCocktail(category))}
        </ul>
      </div>
    )
  }
}