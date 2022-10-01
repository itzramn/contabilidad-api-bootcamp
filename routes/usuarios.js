const express = require('express');

const router = express.Router();
const usuariosControllers = require('../controllers/usuarios');
const authMiddleware = require('../middlewares/auth');

router
  .route('/')
  .get(authMiddleware, usuariosControllers.getUsuarios);

module.exports = router;
