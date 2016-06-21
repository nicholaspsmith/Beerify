import mongoose from 'mongoose';

const Schema = mognoose.schema;

const ingredientSchema = new Schema({
  name: String,
  id: Number
});

