'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cartitemlists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cartitemlists.init({
    productname: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    grandtotal: DataTypes.INTEGER,
    productid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cartitemlists',
  });
  return cartitemlists;
};