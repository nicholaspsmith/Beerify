import Recipe from './models/recipe';
import recipeController from './controllers/recipe';
import ingredientsController from './controllers/ingredient';

export default function(app) {
  app.get('/', function(req, res) {
    res.send({ "hello": "success" });
  });
  app.get('/recipes', recipeController.fetchRecipes);
  app.post('/recipes', recipeController.createRecipe);
  app.get('/ingredients', ingredientsController.fetchIngredients);
  app.post('/ingredients', ingredientsController.createIngredients);
}
