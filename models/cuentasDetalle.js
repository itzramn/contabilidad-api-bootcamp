const { DataTypes } = require('sequelize');
const sequelize = require('./index')();
const Categorias = require('./categorias');
const Clientes = require('./clientes');
const Proveedores = require('./proveedores');
const Usuarios = require('./usuarios');
const Cuentas = require('./cuentas');

const CuentasDetalle = sequelize.define('CuentasDetalle', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    field: 'idcuentadetalle',
    primaryKey: true,
  },
  idCategoria: {
    type: DataTypes.INTEGER,
    references: {
      model: Categorias,
      key: 'id',
    },
  },
  idProveedor: {
    type: DataTypes.INTEGER,
    references: {
      model: Proveedores,
      key: 'id',
    },
  },
  idCuenta: {
    type: DataTypes.INTEGER,
    references: {
      model: Cuentas,
      key: 'id',
    },
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuarios,
      key: 'id',
    },
  },
  idCliente: {
    type: DataTypes.INTEGER,
    references: {
      model: Clientes,
      key: 'id',
    },
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  cargo: {
    type: DataTypes.FLOAT,
  },
  abono: {
    type: DataTypes.FLOAT,
  },
  fecha: {
    type: DataTypes.DATE,
  },
  saldo: {
    type: DataTypes.FLOAT,
  },
  timestamps: false,
  tableName: 'PROVEEDORES',
});

CuentasDetalle.belongsTo(Categorias, { foreignkey: 'idCategoria' });
CuentasDetalle.belongsTo(Proveedores, { foreignkey: 'idProveedor' });
CuentasDetalle.belongsTo(Cuentas, { foreignkey: 'idCuentas' });
CuentasDetalle.belongsTo(Usuarios, { foreignkey: 'idUsuario' });
CuentasDetalle.belongsTo(Clientes, { foreignkey: 'idCliente' });

module.exports = CuentasDetalle;
