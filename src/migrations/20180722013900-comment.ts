"use strict";
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
    up: (queryInterface: QueryInterface, dataTypes: DataTypes) => {
        return queryInterface.createTable("Comment", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            comment: {
                type: dataTypes.TEXT,
                allowNull: false,
            },
            userId: {
                type: dataTypes.INTEGER,
                allowNull: false,
            },
            climbId: {
                type: dataTypes.INTEGER,
                allowNull: true,
            },
            bookId: {
                type: dataTypes.INTEGER,
                allowNull: true,
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
        return queryInterface.dropTable("Comment");
    },
};
