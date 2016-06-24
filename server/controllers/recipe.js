import Recipe from '../models/recipe';

exports.fetchRecipes = function(req, res, next) {
  // Check for existence of recipe collection in mongodb
  Recipe.findOne({}, function(err, existingRecipe) {
    if (err) { return next(err); }

    if (!existingRecipe) {
      // Populate the database with some sample data if none exists
      Recipe.create([
        {
          id: 1,
          name: 'Coors Light',
          imageUrl: 'http://res.cloudinary.com/lightspeed-retail/image/upload/c_pad,h_256,q_100,w_256/l61g9uimorlqfncztkxa.jpg',
          ingredients: [ 'Hops', 'Oats', 'Water', "Grain"]
        },
        {
          id: 2,
          name: 'Blue Moon',
          imageUrl: 'http://www.beer-universe.com/images/articles/172/blue-moon-250.jpg',
          ingredients: [ 'Malt', 'Oats', 'Water', 'Cinnamon', "Grain"]
        },
        {
          id: 3,
          name: 'Lone Star',
          imageUrl: 'http://drinks.seriouseats.com/images/2012/04/20120425lonestarbeer.jpg',
          ingredients: [ 'Grain', 'Oats', 'Hops', 'Wort', "Caramel Pils Malt"]
        }
      ], err => {
        return next(err);
      });
    }

    // Find and return all recipes
    Recipe.find({}, function(err, docs) {
      if (err) { res.status(500).send(err) }
      res.send(docs);
    });
  })
}

exports.createRecipe = function({ body: {id, name, imageUrl, ingredients}}, res, next) {
  Recipe.create({ id, name, imageUrl, ingredients});
  res.send({message: "Successfully created " + name});
}

exports.deleteRecipe = function( {params:  { id } }, res ) {
  Recipe.remove({ id: id });
  res.send({ message: "Successfully deleted recipe #" + id});
}
