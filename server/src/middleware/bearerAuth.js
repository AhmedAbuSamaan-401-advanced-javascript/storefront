const User = require('../models/users')

function bearerAuth (req, res, next) {
  // check if we have an authorization header
  if (!req.headers.authorization) {
    next(new Error('No authorization header'))
  }
  const token = req.headers.authorization.split(' ').pop()

  User.authenticateToken(token)
    .then(validUser => {
      req.user = validUser
      next()
    })
    .catch(err => {
      next(err)
    })
}

module.exports = bearerAuth