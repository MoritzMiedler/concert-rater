const express = require('express');
const { getConcerts, getConcert, deleteConcert } = require('../controllers/concerts');

const router = express.Router();

router.get('/concerts', getConcerts);
router.get('/concerts/:id', getConcert);
router.delete('/concerts/:id', deleteConcert);

module.exports = router;
