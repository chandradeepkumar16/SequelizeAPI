'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('addresses', [{
      user_id: 1,
       address_line_1: 'Shastri nagar , ghaziabad',
       city: "ghaziabad",
       pincode: "201002",
       created_at: new Date(),
       updated_at :new Date(),
     }], {});
  
  },

  async down (queryInterface, Sequelize) {

  }
};
