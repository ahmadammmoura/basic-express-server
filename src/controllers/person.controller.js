const person = (req, res) => {
  const { name } = req.query;
  res.status(200).send({ name: name });
};

module.exports = person;
