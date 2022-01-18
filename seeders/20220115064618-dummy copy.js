"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			"cases",
			[
				{
					client_id: 3,
					keterangan: "Contoh Kasus",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					client_id: 1,
					keterangan: "Contoh Kasus",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					client_id: 2,
					keterangan: "Contoh Kasus",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					client_id: 4,
					keterangan: "Contoh Kasus",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					client_id: 5,
					keterangan: "Contoh Kasus",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					client_id: 6,
					keterangan: "Contoh Kasus",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
