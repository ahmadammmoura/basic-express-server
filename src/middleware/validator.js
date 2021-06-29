'use strict';
module.exports = (req, res, next) => {
  req.query.name ? next() : next('theres no querey');
};
