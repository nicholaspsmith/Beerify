import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  id: Number,
  name: String,
  imageUrl: String,
  ingredients: Array
});

const RecipeClass = mongoose.model('recipe', recipeSchema);

export default RecipeClass;
