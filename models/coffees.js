module.exports = function(sequelize, DataTypes) {
  var Coffees = sequelize.define('Coffees', {
    name: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate: {
    		len: [1]
    	}
    },
    drank: {
		  type: DataTypes.BOOLEAN,
		  allowNull: false,
		  defaultValue: false
    }
  });
  // Coffees.associate = function(models) {
  // 	Coffees.belongsTo(models.Customer, {
  // 		onDelete: "CASCADE",
  // 		foreignKey: {
  // 			allowNull:false
  // 		}
  // 	});
  // };

  return Coffees;
};