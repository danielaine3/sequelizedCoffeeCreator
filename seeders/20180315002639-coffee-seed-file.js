'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Coffees', [{
      name:'Chai',
      drank:false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Coffees', [{
      name:'Chai'
  }
};