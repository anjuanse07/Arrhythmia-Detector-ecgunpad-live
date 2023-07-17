const { DataTypes } = require("sequelize");

module.exports = {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    rr: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    rr_stdev: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    pr: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    pr_stdev: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    qs: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    qs_stdev: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    qt: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    qt_stdev: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    st: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    st_stdev: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    heartrate: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    classification_result: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}