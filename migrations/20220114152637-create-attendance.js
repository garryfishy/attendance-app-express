"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("attendances", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			absensi_id: {
				type: Sequelize.STRING,
			},
			photo: {
				type: Sequelize.STRING,
			},
			long: {
				type: Sequelize.STRING,
			},
			lat: {
				type: Sequelize.STRING,
			},
			notes: {
				type: Sequelize.STRING,
			},
			DateTime: {
				type: Sequelize.DATE,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("attendances");
	},
};
