'use strict';
module.exports = (req, res, next) => {
  if (req.query.name) {
    next();
  } else {
    throw new Error('theres no querey');
  }
};
