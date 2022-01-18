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
					keterangan: "Kasus 1",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					client_id: 1,
					keterangan: "Kasus 2",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					client_id: 2,
					keterangan: "Kasus 3",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					client_id: 4,
					keterangan: "Kasus 4",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					client_id: 5,
					keterangan: "Kasus 5",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					client_id: 6,
					keterangan: "Kasus 6",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					client_id: 3,
					keterangan: "Kasus 7",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					client_id: 1,
					keterangan: "Kasus 8",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					client_id: 2,
					keterangan: "Kasus 9",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					client_id: 4,
					keterangan: "Kasus 10",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					client_id: 5,
					keterangan: "Kasus 11",
					surat: "Test",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					client_id: 6,
					keterangan: "Kasus 12",
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
