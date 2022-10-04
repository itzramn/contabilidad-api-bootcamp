const Cuentas = require('../models/cuentas');

const getCuentas = async (req, res) => {
  const cuentas = await Cuentas.findAll();
  return res.send(cuentas);
};

module.exports = {
  getCuentas,
};
