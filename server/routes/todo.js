const router = require('express').Router();
const controller = require('../controllers/todo');

router.get('/todos/:userId', controller.get);
router.post('/todo/:userId', controller.post);
router.delete('/todo', controller.delete);
module.exports = router;
