const sequelize = require('sequelize');

const programa_social_model = conexion => {
    let programaSocial = conexion.define('programaSocial',
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: sequelize.INTEGER
        },
        nombre: {
            type: sequelize.TEXT,
            allowNull: false
        },
        descripcion: {
            type: sequelize.TEXT,
            allowNull: true
        }
    },
    {
        tableName: 'programa_social',
        timestamps: true
    });
    return programaSocial;
}

module.exports = programa_social_model;