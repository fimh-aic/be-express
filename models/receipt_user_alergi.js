'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class receipt_user_alergi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  receipt_user_alergi.init({
    user_id: DataTypes.INTEGER,
    bahan_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'receipt_user_alergi',
  });
  return receipt_user_alergi;
};