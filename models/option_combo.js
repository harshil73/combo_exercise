'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class option_combo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      option_combo.belongsTo(models.select_combo,{foreignKey:'selectId', constraints:false})
    }
  }
  option_combo.init({
    option: DataTypes.STRING,
    selectId:DataTypes.INTEGER  
  }, {
    sequelize,
    modelName: 'option_combo',
  });
  return option_combo;
};