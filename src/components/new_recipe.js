import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import {
  FormGroup,
  ControlLabel,
  Button,
  FormControl
} from 'react-bootstrap';
import FileReaderInput from 'react-file-reader-input';

class NewRecipe extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      ingredients: [],
      imageUrl: '',
      ingredientInputs: 1
    };

    this.ingredientTyped = this.ingredientTyped.bind(this);
  }

  componentWillMount() {
    this.props.fetchRecipes();
    if (this.props.ingredients.length == 0) {
      // dont re-fetch ingredients if we already have them
      this.props.fetchIngredients();
    }
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
      <FormControl data-id={id} key={id} onInput={this.ingredientTyped} type="text"/>
    );
  }

  ingredientTyped(e) {
    const id = e.target.getAttribute('data-id');
    const ingredients = this.state.ingredients.slice();
    ingredients[id] = e.target.value;
    this.setState({
      ingredients: ingredients
    });
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

  imageSet(e, results) {
    e.preventDefault();
    results.forEach(result => {
      const [e, file] = result;
      console.log(e.target.result);
      // this.props.dispatch(uploadFile(e.target.result));
      this.setState({
        imageUrl: e.target.result
      });
      console.log(`Successfully uploaded ${file.name}!`);
    });
  }

  createRecipe(e) {
    e.preventDefault();

    const latestRecipe = this.props.recipes.reduce( (a,b) => {
      if (a.id > b.id) {
        return a;
      }
      return b;
    });

    const id = latestRecipe.id + 1;
    const name = this.state.name;
    const imageUrl = this.state.imageUrl || "/images/blankbeer.jpg";

    const ingredients = this.state.ingredients.filter( i => {
      if (typeof i !== 'undefined' && i.length > 0) {
        return true;
      }
    });

    // check if all the ingredients exist in our state.ingredients
    var ingredientsArray = this.props.ingredients.map( ing => ing.name);
    var newIngredients = ingredients.filter( used => {
      if (ingredientsArray.indexOf(used) === -1) {
        return used
      }
    });

    // Find index to start numbering our id's

    let index = this.props.ingredients.reduce( (a,b) => {
      if (a.id > b.id) { return a; }
      return b;
    }).id;

    // the array of our new ingredients
    const newElementsArray = newIngredients.map( ing => {
      return { id: ++index, name: ing }
    });

    this.props.createIngredients(newElementsArray);

    if (name.length < 1 || imageUrl.length < 1 || this.state.ingredients.length < 1) {
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
          <div className="container">
            <FormGroup className="col-sm-12">
              <ControlLabel>name:</ControlLabel>
              <FormControl type="text" onChange={this.nameInput.bind(this)} value={this.state.name}/>
            </FormGroup>
            <FormGroup className="col-sm-12">
              <ControlLabel>image url:</ControlLabel>
              <FileReaderInput as="binary" id="my-file-input"
                               onChange={this.imageSet.bind(this)} >
               <button>Select a file!</button>
             </FileReaderInput>
            </FormGroup>
            <FormGroup className="col-sm-12">
              <ControlLabel>ingredients:</ControlLabel>
              {_.times(this.state.ingredientInputs, this.printInput.bind(this))}
              <Button onClick={this.incrementIngredients.bind(this)}>+</Button>
              <Button onClick={this.decrementIngredients.bind(this)}>-</Button>
            </FormGroup>
          </div>
          <Button className="pull-right" bsStyle="success" type="submit">Create recipe</Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    ingredients: state.ingredients
  }
}

export default connect(mapStateToProps, actions)(NewRecipe);
