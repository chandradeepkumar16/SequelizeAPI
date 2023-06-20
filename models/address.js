'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Address.init({
    user_id: DataTypes.INTEGER,
    address_line_1: DataTypes.STRING,
    address_line_2: DataTypes.STRING,
    city: DataTypes.STRING,
    pincode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'address',
    tableName: "addresses",
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
    underscored: true
  });
  return Address;
};