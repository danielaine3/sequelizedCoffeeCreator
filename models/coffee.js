module.exports = function(sequelize, DataTypes) {
  var Coffee = sequelize.define("Coffee", {
    name: DataTypes.STRING,
    drank: DataTypes.BOOLEAN
  });
  return Coffee;
};
