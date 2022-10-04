const express = require('express');

const router = express.Router();
const cuentasControllers = require('../controllers/cuentas');
const authMiddleware = require('../middlewares/auth');

router
  .route('/')
  .get(authMiddleware, cuentasControllers.getCuentas);

module.exports = router;
