'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await Promise.all([
      await queryInterface.addColumn('reseps', 'nutrisi', {
        type: Sequelize.STRING,
        allowNull: true
      }),
      await queryInterface.addColumn('bahan_reseps', 'nutrisi_per_ons', {
        type: Sequelize.INTEGER,
        allowNull: true
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await Promise.all([
      await queryInterface.removeColumn('reseps', 'nutrisi'),
      await queryInterface.removeColumn('bahan_reseps', 'nutrisi_per_ons')
    ])
  }
};
