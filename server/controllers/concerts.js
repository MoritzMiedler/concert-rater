const asyncHandler = require('express-async-handler');
const concertModel = require('../model/concerts.js');

const getConcerts = asyncHandler(async (req, res) => {
  const { code, data } = await concertModel.getConcerts();
  res.status(code).json(data);
});

const getConcert = asyncHandler(async (req, res) => {
  await concertModel.getConcert(req.params.id);
});

const deleteConcert = asyncHandler(async (req, res) => {
  const { code, data } = await concertModel.deleteConcert(req.params.id);
  res.status(code).json(data);
});

module.exports = {
  getConcerts,
  getConcert,
  deleteConcert,
};
