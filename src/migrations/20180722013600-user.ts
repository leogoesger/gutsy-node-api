"use strict";
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
    up: (queryInterface: QueryInterface, dataTypes: DataTypes) => {
        return queryInterface.createTable("User", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            firstName: {
                type: dataTypes.TEXT,
                allowNull: false,
            },
            lastName: {
                type: dataTypes.TEXT,
                allowNull: false,
            },
            email: {
                type: dataTypes.TEXT,
                allowNull: false,
                unique: true,
            },
            password: {
                type: dataTypes.TEXT,
                allowNull: false,
            },
            sex: {
                type: dataTypes.ENUM,
                values: ["MALE", "FEMALE", "OTHER"],
                allowNull: true,
            },
            birth: {
                type: dataTypes.DATE,
                allowNull: false,
            },
            height: {
                type: dataTypes.TEXT,
                allowNull: false,
            },
            apIndex: {
                type: dataTypes.FLOAT,
                allowNull: false,
            },
            startDate: {
                type: dataTypes.DATE,
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
        return queryInterface.dropTable("User");
    },
};
