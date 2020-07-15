function accessControlList (permission) {
    return function (req, res, next) {
      try {
        if (req.user.role.permissions.includes(permission)) {
          next() // allow the user to go on
        } else {
          next(new Error('You shall not pass'))
        }
      } catch (error) {
        next(error)
      }
    }
  }
  
  module.exports = accessControlList