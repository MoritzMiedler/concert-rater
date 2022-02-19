const express = require('express');
const { getConcerts, getConcert, deleteConcert, postConcert } = require('../controllers/concerts');

const router = express.Router();

router.get('/concerts', getConcerts);
router.get('/concerts/:id', getConcert);
router.delete('/concerts/:id', deleteConcert);
router.post('/concerts', postConcert);

module.exports = router;
