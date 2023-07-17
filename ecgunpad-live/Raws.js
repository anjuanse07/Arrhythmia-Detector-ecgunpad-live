const { DataTypes } = require("sequelize");

module.exports = {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    classified_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    data: {
        type: DataTypes.DOUBLE(8,2),
        allowNull: false,
    },
}