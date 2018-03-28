'use strict';
module.exports = function(sequelize, DataTypes) {
	var Customer = sequelize.define('Customer', {
		customer_name: DataTypes.STRING
	});
	Customer.associate =function(models) {
		Customer.hasOne(models.Coffees, {
			onDelete: "CASCADE"
		});
	};
	return Customer;
};