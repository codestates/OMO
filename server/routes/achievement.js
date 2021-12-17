const router = require('express').Router();
const controller = require('../controllers/achievement');

router.get('/:userId', controller.get);

module.exports = router;
