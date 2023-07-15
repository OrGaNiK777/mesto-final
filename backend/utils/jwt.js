const jwt = require('jsonwebtoken');

const { jwtSecret } = require('./consctants');

const generateToken = (id) => jwt.sign({ id }, jwtSecret, { expiresIn: '7d' });

const verifyToken = (token) => jwt.verify(token.replace('Bearer ', ''), jwtSecret);
module.exports = { generateToken, verifyToken };
