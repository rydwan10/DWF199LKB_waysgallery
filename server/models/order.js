"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        as: "orderedBy",
        foreignKey: "orderBy",
      });
      Order.belongsTo(models.User, {
        as: "orderedTo",
        foreignKey: "orderTo",
      });

      Order.hasOne(models.Project, {
        as: "project",
      });
    }
  }
  Order.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      startDate: DataTypes.DATEONLY,
      endDate: DataTypes.DATEONLY,
      price: DataTypes.INTEGER,
      orderBy: DataTypes.INTEGER,
      orderTo: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
