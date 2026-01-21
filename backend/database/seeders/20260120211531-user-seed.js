'use strict';

const { User } = require("../../app/models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await User.create({
      firstName: "Jeevan",
      lastName: "Vaishnav",
      email: "jeevan@gmail.com",
      password: "123456"
    })
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('users', null, {});
  }
};
