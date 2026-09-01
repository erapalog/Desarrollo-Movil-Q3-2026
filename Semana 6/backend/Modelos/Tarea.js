const sequelize = require('../db/connection');

const { DataTypes } = require('sequelize');


const Tarea = sequelize.define('Tarea', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'Tarea',
    timestamps: false
});

module.exports = Tarea;