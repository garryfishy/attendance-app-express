"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class log extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	log.init(
		{
			name: DataTypes.STRING,
			status: DataTypes.STRING,
			activity: DataTypes.STRING,
			photo: DataTypes.STRING,
			long: DataTypes.STRING,
			lat: DataTypes.STRING,
			notes: DataTypes.STRING,
			user_id: DataTypes.INTEGER,
			date: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "log",
		}
	);
	return log;
};
