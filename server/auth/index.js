const jwt = require('jsonwebtoken');
const { ApolloError } = require('apollo-server-express');

const JWT_SECRET = 'jsonwebtoken secret string, super duper secret';

module.exports = {
  authMiddleware({ req }) {
    let token = req.headers.authorization;

    if (!token) return req;

    if (!token.includes('Verify')) {
      throw new ApolloError('invalid token');
    }

    token = token.split(' ').pop().trim();

    try {
      const { data } = jwt.decode(token, JWT_SECRET, {
        maxAge: '8h'
      });

      req.user = data;
      return req;
    } catch (err) {
      throw new ApolloError('invalid');
    }
  },

  signToken(user_data) {
    return jwt.sign({ data: user_data }, JWT_SECRET, {
      expiresIn: '8h'
    });
  }
}