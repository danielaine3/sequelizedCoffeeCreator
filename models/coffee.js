'use strict';
module.exports = function(sequelize, DataTypes) {
  var Coffee = sequelize.define("Coffee", {
    name: {
    	type: DataTypes.STRING,
    	validate: {
    		len: [1]
    	}
    },
    drank: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
    }
  });
  return Coffee;
};