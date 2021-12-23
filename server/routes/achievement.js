const router = require('express').Router();
const controller = require('../controllers/achievement');

router.get('/:userId', controller.get);
router.post('/:userId', controller.post);

module.exports = router;
