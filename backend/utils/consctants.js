const host = 'localhost';

const { PORT = 3000 } = process.env;

const saltRounds = 10;

const jwtSecret = 'p@ssw0rd';

module.exports = {
  host, PORT, saltRounds, jwtSecret,
};
