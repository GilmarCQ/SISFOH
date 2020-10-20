const sequelize = require('sequelize');

const condicion_model = conexion => {
    let condicion = conexion.define('condicion',
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
        tableName: 'condicion',
        timestamps: true
    });
    return condicion;
}

module.exports = condicion_model;