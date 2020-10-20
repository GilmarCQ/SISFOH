const sequelize = require('sequelize');

const persona_model = conexion => {
    let persona = conexion.define('persona', 
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: sequelize.INTEGER,
            allowNull: false
        },
        nombres: {
            type: sequelize.STRING(25),
            allowNull: false
        },
        apPaterno: {
            type: sequelize.STRING(25),
            allowNull: false
        },
        apMaterno: {
            type: sequelize.STRING(25),
            allowNull: false
        },
        tipoDoc: {
            type: sequelize.STRING(20),
            allowNull: false
        },
        numDoc: {
            type: sequelize.STRING(12),
            allowNull: false
        },
        edad: {
            type: sequelize.INTEGER,
            allowNull: false
        },
        direccion: {
            type: sequelize.TEXT,
            allowNull: false
        },
        telefono: {
            type: sequelize.STRING(12),
            allowNull: false
        }
    },
    {
        tableName: 'persona',
        timestamps: true
    });
    return persona;
};

module.exports = persona_model;