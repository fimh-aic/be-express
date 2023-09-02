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
      this.belongsTo(models.bahan_baku, {
        foreignKey: 'bahan_id',
      })
      this.belongsTo(models.user, {
        foreignKey: 'user_id',
      })
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