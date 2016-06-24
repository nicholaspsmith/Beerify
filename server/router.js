import Recipe from './models/recipe';
import recipeController from './controllers/recipe';
import ingredientsController from './controllers/ingredient';
import uploadsController from './controllers/uploads';

export default function(app) {
  app.get('/', function(req, res) {
    res.send({ "hello": "success" });
  });
  app.get('/recipes', recipeController.fetchRecipes);
  app.post('/recipes', recipeController.createRecipe);
  app.delete('/recipes/:id', recipeController.deleteRecipe);
  app.get('/ingredients', ingredientsController.fetchIngredients);
  app.post('/ingredients', ingredientsController.createIngredients);
  app.post('/uploads', uploadsController.uploadImage);
}
