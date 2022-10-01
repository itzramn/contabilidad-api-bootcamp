require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const { getUsuarios, login } = require('./controllers/usuarios');
const router = require('./routes');

const app = express();
app.use(bodyParser.json());

/* app.get('/', (req, res) => {
  res.send('Hola Mundo');
}); */

app.use('/', router);
// app.get('/usuarios', getUsuarios);
// app.post('/login', login);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
