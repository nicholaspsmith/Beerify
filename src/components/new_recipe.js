import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';

class NewRecipe extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      ingredients: [],
      imageUrl: '',
      ingredientInputs: 1
    };

    this.ingredientTyped = this.ingredientTyped.bind(this);
  }

  componentWillMount() {
    this.props.fetchRecipes();
  }

  idInput(e) {
    this.setState({
      id: e.target.value
    });
  }

  nameInput(e) {
    this.setState({
      name: e.target.value
    });
  }

  imageUrlInput(e) {
    this.setState({
      imageUrl: e.target.value
    });
  }

  printInput(id) {
    return (
      <div key={id}>
        <input onInput={this.ingredientTyped} id={id} type="text"/>
      </div>
    );
  }

  ingredientTyped(e) {
    const id = e.target.getAttribute('id');
    const ingredients = this.state.ingredients.slice();
    ingredients[id] = e.target.value;
    console.log(ingredients);
    this.setState({
      ingredients: ingredients
    })
  }

  incrementIngredients(e) {
    e.preventDefault();
    this.setState({
      ingredientInputs: this.state.ingredientInputs + 1
    });
  }

  decrementIngredients(e) {
    e.preventDefault();
    const currentNumber = this.state.ingredientInputs
    if (currentNumber > 1) {
      this.setState({
        ingredientInputs: currentNumber - 1
      });
    }
  }

  createRecipe(e) {
    e.preventDefault();
    const id = this.state.id;
    const name = this.state.name;
    const imageUrl = this.state.imageUrl;

    const ingredients = this.state.ingredients.filter( i => {
      if (typeof i !== 'undefined' && i.length > 0) {
        return true;
      }
    });

    if (id.length < 1 || name.length < 1 || imageUrl.length < 1 || this.state.ingredients.length < 1) {
      return;
    }
    const newRecipe = { id, name, ingredients, imageUrl };
    this.props.createRecipe(newRecipe);
    this.context.router.push("/");
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.createRecipe.bind(this)}>
          <div>
            <label>id:
              <input type="text" onChange={this.idInput.bind(this)} value={this.state.id}/>
            </label>
          </div>
          <div>
            <label>name:
              <input type="text" onChange={this.nameInput.bind(this)} value={this.state.name}/>
            </label>
          </div>
          <div>
            <label>image url:
              <input type="text" onChange={this.imageUrlInput.bind(this)} value={this.state.imageUrl}/>
            </label>
          </div>
          <label>ingredients:
            {_.times(this.state.ingredientInputs, this.printInput.bind(this))}
            <button onClick={this.incrementIngredients.bind(this)}>+</button>
            <button onClick={this.decrementIngredients.bind(this)}>-</button>
          </label>
          <button type="submit">Create recipe</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, actions)(NewRecipe);
