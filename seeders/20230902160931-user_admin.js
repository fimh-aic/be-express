'use strict'
const models = require('../models')
const userModel = models.user
const userServices = require('../services/userServices')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let userLactose = await userModel.create({
      username: 'lactose',
      password: 'lactose',
      createdAt: new Date(),
      updatedAt: new Date()
    })

    let userDiet = await userModel.create({
      username: 'diet',
      password: 'diet',
      createdAt: new Date(),
      updatedAt: new Date()
    })

    let admin = await userModel.create({
      username: 'admin',
      password: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    })

    await userServices.updatePreferences(userLactose.id, {isLactoseIntolerant: true})
    await userServices.updatePreferences(userDiet.id, {isDiet: true})

    },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // bulk delete user and receipt_user_alergi

    await queryInterface.bulkDelete('users', null, {})
    await queryInterface.bulkDelete('receipt_user_alergis', null, {})

  }
};
