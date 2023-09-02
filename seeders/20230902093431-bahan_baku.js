'use strict';

const listBahan = [
  'lamb meat', 'potate', 'sawi', 'wortel', 'cucumber', 'bean sprouts', 'orange', 'sausage', 'susu', 'ginger', 'salmon meat', 'meat', 'nasi', 'keju', 'pisang', 'chicken meat', 'apple'
]

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
    await queryInterface.bulkInsert('bahan_bakus', listBahan.map(bahan => ({
      nama: bahan,
      createdAt: new Date(),
      updatedAt: new Date()
    })), {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('bahan_bakus', null, {})

  }
};
