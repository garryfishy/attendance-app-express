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
			"clients",
			[
				{
					name: "Anthony Ginting",
					age: 25,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Pam Michael",
					age: 29,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Thomas Moite",
					age: 18,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Loki Lomiki",
					age: 18,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Crew Matthew",
					age: 24,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Jordanio Lacota",
					age: 25,
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
