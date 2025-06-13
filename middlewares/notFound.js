const notFound = (req, res, next) => {
  res.status(404);
  res.json({
    error: "Endpoint inesistente",
  });
};

module.exports = notFound;
