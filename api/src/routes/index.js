const { Router } = require('express');
const event = require('./event.routes')
const user = require('./user.routes')
const sign = require('./auth.routes')

const router = Router();

router.use('/event', event)
router.use('/user', user)
router.use('/sign', sign)

module.exports = router;
