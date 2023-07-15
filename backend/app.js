const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');

const routes = require('./routes/index');
const customErrorsHandler = require('./middlewares/customErrorsHandler');
const { PORT, host } = require('./utils/consctants');

const app = express();

//app.use(express.static('../frontend/build'));

mongoose
  .connect(`mongodb://${host}:27017/MestoDB`, {
    useNewUrlParser: true,
    family: 4,
  })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Connected to DB');
  });

app.use(express.json());

app.use('/api', require('./routes'));

app.use(errors());

app.use(customErrorsHandler);

app.listen(PORT, host, () => {
  // eslint-disable-next-line no-console
  console.log(`Cервер запущен на http://${host}:${PORT}/`);
});
