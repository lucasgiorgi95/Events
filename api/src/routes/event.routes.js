const { Router } = require('express');
const { getEvent, postEvent, suscribeEvent, putEvent } = require('../controllers/controller.event');
const {isAdmin} = require('../middleware/isAdmin.js')
const router = Router();

router.get('/',  getEvent)
router.post('/suscribe',  suscribeEvent)
router.post('/', isAdmin, postEvent)
router.put('/:id', isAdmin, putEvent)

module.exports = router;