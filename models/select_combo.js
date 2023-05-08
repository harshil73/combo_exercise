'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class select_combo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      select_combo.hasMany(models.option_combo,{foreignKey:'selectId',constraints:false})
    }
  }
  select_combo.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'select_combo',
  });
  return select_combo;
};