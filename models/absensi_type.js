"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Absensi_type extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Absensi_type.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Absensi_type",
		}
	);
	return Absensi_type;
};
