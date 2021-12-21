const router = require('express').Router();
const controller = require('../controllers/quote');

router.get('/', controller.get);

module.exports = router;
