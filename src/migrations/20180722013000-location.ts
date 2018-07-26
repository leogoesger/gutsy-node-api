"use strict";
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
    up: (queryInterface: QueryInterface, dataTypes: DataTypes) => {
        return queryInterface.createTable("Location", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            name: {
                type: dataTypes.TEXT,
                allowNull: false,
            },
            open: {
                type: dataTypes.BOOLEAN,
                defaultValue: true,
                allowNull: false,
            },
            description: {
                type: dataTypes.TEXT,
            },
            geoCode: {
                type: dataTypes.TEXT,
            },
            type: {
                type: dataTypes.ENUM,
                allowNull: false,
                values: [
                    "COUNTRY",
                    "STATE",
                    "REGION",
                    "PLACE",
                    "AREA",
                    "SECTION",
                ],
            },
            countryId: {
                type: dataTypes.INTEGER,
            },
            stateId: {
                type: dataTypes.INTEGER,
            },
            regionId: {
                type: dataTypes.INTEGER,
            },
            placeId: {
                type: dataTypes.INTEGER,
            },
            areaId: {
                type: dataTypes.INTEGER,
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
        return queryInterface.dropTable("Location");
    },
};
