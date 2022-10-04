const Categoria = require('../models/categorias');

const obtenerCatgoria = async (id) => {
  const categoria = await Categoria.findOne({
    where: {
      id,
    },
  });
  if (!categoria) {
    throw new Error(`La categoria ${id}, no existe`);
  }
  return categoria;
};
// eslint-disable-next-line consistent-return
const getCategoria = async (req, res) => {
  const { params: { id } } = req;
  try {
    const categoria = await obtenerCatgoria(id);
    res.send(categoria);
  } catch (error) {
    return res.status(404).send({ msg: error.message });
  }
};

const getCategorias = async (req, res) => {
  const categorias = await Categoria.findAll();
  res.send(categorias);
};

const createCategorias = async (req, res) => {
  const { body: { categoria } } = req;
  const categoriaDB = await Categoria.create({ categoria });
  res.send(categoriaDB);
};

const updateCategorias = async (req, res) => {
  const { body: { categoria }, params: { id } } = req;

  try {
    let categoriaDB = await obtenerCatgoria(id);
    categoriaDB.categoria = categoria;
    categoriaDB = await categoriaDB.save();
    return res.send(categoriaDB);
  } catch (error) {
    return res.status(404).send({ msg: error.message });
  }
};
const deleteCategorias = async (req, res) => {
  const { params: { id } } = req;

  try {
    const categoria = await obtenerCatgoria(id);
    await categoria.destroy();
    return res.send({ msg: 'Destruido' });
  } catch (error) {
    return res.status(404).send({ msg: error.message });
  }
};

module.exports = {
  getCategoria,
  getCategorias,
  createCategorias,
  updateCategorias,
  deleteCategorias,
};
