const { Router } = require('express');
const {signUp,signIn, allUser}=require('../controllers/auth.controller')
const router = Router();


router.get('/',allUser)
router.post('/signup', signUp)
router.post('/signin',signIn)

module.exports = router;