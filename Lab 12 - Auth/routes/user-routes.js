var express = require('express');
var router = express.Router();
const controller = require('../controllers/user-controllers');
router.get('/', controller.getIndex);
router.get('/login', controller.getLogin);
router.get('/register', controller.getRegister);
router.post('/login', controller.postLogin);
router.post('/register', controller.postRegister)
module.exports = router;