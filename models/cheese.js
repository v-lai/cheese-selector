const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const typeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  hardness: {
    type: String
  },
  flavor: {
    type: String
  },
  texture: {
    type: String
  },
  color: {
    type: String
  },
  animalMilk: {
    type: String
  },
  countryOrState: {
    type: String
  },
  fatContent: {
    type: String
  },
  aging: {
    type: String
  },
  hasRennet: {
    type: Boolean
  },
  hasRawMilk: {
    type: Boolean
  },
  goesWellWith: {
    type: String
  },
  ingredientIn: {
    type: String
  }
});

typeSchema.plugin(findOrCreate);
const Cheese = mongoose.model('Cheese', typeSchema);
module.exports = Cheese;
