"use strict";
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
    up: (queryInterface: QueryInterface, dataTypes: DataTypes) => {
        return queryInterface.createTable("Attempt", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            status: {
                type: dataTypes.ENUM,
                values: ["TODO", "PROGRESS", "COMPLETE"],
            },
            userClimbId: {
                type: dataTypes.INTEGER,
                allowNull: false,
            },

            createdAt: {
                allowNull: false,
                type: dataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: dataTypes.DATE,
            },
        });
    },
    down: (queryInterface: any) => {
        return queryInterface.dropTable("Attempt");
    },
};
