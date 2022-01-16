"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class kegiatan extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	kegiatan.init(
		{
			case: DataTypes.STRING,
			photo: DataTypes.STRING,
			subject: DataTypes.STRING,
			client: DataTypes.STRING,
			notes: DataTypes.STRING,
			long: DataTypes.STRING,
			lat: DataTypes.STRING,
			kegiatan_type_id: DataTypes.INTEGER,
			lawyer_id: DataTypes.INTEGER,
			client_id: DataTypes.INTEGER,
			case_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "kegiatan",
		}
	);
	return kegiatan;
};
