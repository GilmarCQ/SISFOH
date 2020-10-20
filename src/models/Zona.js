const sequelize = require('sequelize');

const zona_model = conexion => {
    let zona = conexion.define('zona',
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
        },
        estado: {
            type: sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    },
    {
        tableName: 'zona',
        timestamps: true
    });
    return zona;
}

module.exports = zona_model;