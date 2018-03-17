'use strict';
module.exports = (sequelize, DataTypes) => {
  var Coffees = sequelize.define('Coffees', {
    name: DataTypes.STRING,
    drank: DataTypes.BOOLEAN
  }, {});
  console.log("Coffees are here" + Coffees);
  Coffees.associate = function(models) {
    // associations can be defined here
  };
  return Coffees;
};