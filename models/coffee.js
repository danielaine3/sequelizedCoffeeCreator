module.exports = function(sequelize, DataTypes) {
  var Coffee = sequelize.define("Coffee", {
    name: DataTypes.STRING,
    drank: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
    }
  });
  return Coffee;
};