"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("kegiatans", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			case: {
				type: Sequelize.STRING,
			},
			photo: {
				type: Sequelize.STRING,
			},
			subject: {
				type: Sequelize.STRING,
			},
			client: {
				type: Sequelize.STRING,
			},
			notes: {
				type: Sequelize.STRING,
			},
			kegiatan_type_id: {
				type: Sequelize.INTEGER,
			},
			lawyer_id: {
				type: Sequelize.INTEGER,
			},
			client_id: {
				type: Sequelize.INTEGER,
			},
			case_id: {
				type: Sequelize.INTEGER,
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
		await queryInterface.dropTable("kegiatans");
	},
};
