import Ingredient from '../models/ingredient';

exports.fetchIngredients = function(req, res, next) {
  // Check for existence of ingredient collection in mongodb
  Ingredient.findOne({}, function(err, existingIngredient) {
    if (err) { return next(err); }

    if (!existingIngredient) {
      Ingredient.create([
        { id: 101, name: 'Hops' },
        { id: 102, name: 'Barley' },
        { id: 103, name: 'Oats' },
        { id: 104, name: 'Water' },
        { id: 105, name: 'Dry Malt Extract' },
        { id: 106, name: 'Instant Starter Wort' },
        { id: 107, name: 'Malt' },
        { id: 108, name: 'Starter Wort' },
        { id: 109, name: 'Yeast' },
        { id: 110, name: 'Pilsner Malt' },
        { id: 111, name: 'Caramel Pils Malt' },
        { id: 112, name: 'Grain' },
        { id: 113, name: 'Cinnamon' },
        { id: 114, name: 'Vanilla Bean' },
        { id: 115, name: 'Coffee Beans' },
        { id: 116, name: 'Wheat' },
        { id: 117, name: 'Honey' }
      ], err => {
        return next(err);
      });
    }

    // Find and return all ingredients
    Ingredient.find({}, function(err,docs) {
      if (err) { res.status(500).send(err) }
      res.send(docs);
    });
  })
}

