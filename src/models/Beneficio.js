const sequelize = require('sequelize');

const beneficio_model = conexion => {
    let beneficio = conexion.define('beneficio',
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
        tableName: 'beneficio',
        timestamps: true
    });
    return beneficio;
}

module.exports = beneficio_model;