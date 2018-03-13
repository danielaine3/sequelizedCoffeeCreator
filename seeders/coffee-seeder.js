'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    // Add seeded burgers to database (note that the date needs to be manually added here)
    return queryInterface.bulkInsert('coffee', [
      {name: "Mocha", drank: false, createdAt: new Date(), updatedAt: new Date()},
      {name: "Dirty Chai", drank: true, createdAt: new Date(), updatedAt: new Date()},
      {name: "Latte", drank: false, createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },
  down: function (queryInterface, Sequelize) {
    // Remove the seeded burgers (note the "{truncate: true}", which resets the primary keys)
    return queryInterface.bulkDelete('coffee', null, {truncate : true}); 
  }
};