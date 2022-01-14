"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class cases extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	cases.init(
		{
			client_id: DataTypes.INTEGER,
			keterangan: DataTypes.STRING,
			surat: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "cases",
		}
	);
	return cases;
};
