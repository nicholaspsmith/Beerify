import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: String,
  id: Number
});

const IngredientClass = mongoose.model('ingredient', ingredientSchema);

export default IngredientClass;
