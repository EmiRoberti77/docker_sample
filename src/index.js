const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 8080;

const getDateTimeStamp = () => {
  return new Date().toISOString();
};

app.get('/', (req, res) => {
  res.status(200).json(`${getDateTimeStamp()} docker is easy`);
});

app.get('/test', (req, res) => {
  res.status(200).json({
    dateTime: getDateTimeStamp(),
    service: 'emi-service',
  });
});

app.listen(PORT, () => {
  console.info(process.env.APP_NAME);
  console.info(`http://localhost:${PORT}/`);
  console.info(`${getDateTimeStamp()} server started on ${PORT}`);
});
