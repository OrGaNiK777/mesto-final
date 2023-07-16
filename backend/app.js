const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const helmet = require('helmet');
const cors = require('./middlewares/cors');
const routes = require('./routes/index');
const customErrorsHandler = require('./middlewares/customErrorsHandler');
const { PORT, host } = require('./utils/consctants');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

app.use(express.static('../frontend/build'));

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

app.use(requestLogger);

//app.use(cors);

app.use(helmet());

//app.use(routes);

app.use(errorLogger);

app.use(errors());

app.use(customErrorsHandler);

app.listen(PORT, host, () => {
  // eslint-disable-next-line no-console
  console.log(`Cервер запущен на http://${host}:${PORT}/`);
});
