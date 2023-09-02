'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bahan_resep extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.reseps, {
        foreignKey: 'resep_id',
      })

      this.belongsTo(models.bahan_baku, {
        foreignKey: 'bahan_id',
      })
    }
  }
  bahan_resep.init({
    resep_id: DataTypes.INTEGER,
    bahan_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bahan_resep',
  });
  return bahan_resep;
};