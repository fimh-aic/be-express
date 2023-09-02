'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bahan_baku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.bahan_resep, {
        foreignKey: 'bahan_id',
      })
      
      this.hasMany(models.receipt_user_alergi, {
        foreignKey: 'bahan_id',
      })

    }
  }
  bahan_baku.init({
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bahan_baku',
  });
  return bahan_baku;
};