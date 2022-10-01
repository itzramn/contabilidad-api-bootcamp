const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const { headers: { token } } = req;
  if (!token) {
    return res.status(401).send({ msg: 'No se propociono token' });
  }

  try {
    const usuario = jwt.verify(token, process.env.SECRET);
    req.session = usuario;
    return next();
  } catch (error) {
    return res.status(401).send({ msg: 'El token no es valido' });
  }
};

module.exports = auth;
