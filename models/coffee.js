'use strict';
module.exports = (sequelize, DataTypes) => {
  var Coffee = sequelize.define('Coffee', {
    name: {
    	type:DataTypes.STRING,
    	validate: {
    		len: [1]
    	}
    },
    drank: {
    	type:DataTypes.BOOLEAN,
    	defaultValue: false
    },
    createdAt: DataTypes.DATE,
    updatedAt:DataTypes.DATE
  }, {
    timestamps:false
  }, {});
  Coffee.associate = function(models) {
    // associations can be defined here
  };
  return Coffee;
};