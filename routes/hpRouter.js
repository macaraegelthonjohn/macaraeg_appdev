const express = require('express');
const router = express.Router();
const ph = require('../controller/HpController');


router.get('/about', ph.about);
router.get('/create', ph.create);
router.get('/update/:id', ph.update);
router.get('/delete/:id', ph.delete);
router.get('/list', ph.list);

module.exports = router;