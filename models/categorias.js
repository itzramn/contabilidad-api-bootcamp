const { DataTypes } = require('sequelize');
const sequelize = require('./index')();

const Categoria = sequelize.define('Categoria', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    field: 'IDCATEGORIA',
    primaryKey: true,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'CATEGORIAS',
});

module.exports = Categoria;
