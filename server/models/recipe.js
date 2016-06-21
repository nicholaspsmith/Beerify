import mongoose from 'mongoose';

const Schema = mognoose.schema;

const recipeSchema = new Schema({
  id: Number,
  name: String,
  imageUrl: String,
  ingredients: Array
});
