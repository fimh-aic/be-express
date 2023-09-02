'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reseps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasMany(models.bahan_resep, {
        foreignKey: 'resep_id',
      })

      
    }
  }
  reseps.init({
    judul: DataTypes.STRING,
    bahan: DataTypes.STRING,
    prosedur: DataTypes.STRING,
    gambar_utama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reseps',
  });
  return reseps;
};