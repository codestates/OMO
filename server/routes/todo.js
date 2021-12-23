const router = require('express').Router();
const controller = require('../controllers/todo');

router.get('/:userId', controller.get);
router.get('/undolist/:userId', controller.show);
router.post('/:userId', controller.post);
router.delete('/:userId', controller.delete);
router.put('/:userId', controller.put);

module.exports = router;
