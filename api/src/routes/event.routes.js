const { Router } = require('express');
const { getEvent, postEvent, deleteEvent, putEvent } = require('../controllers/controller.event');

const router = Router();

router.get('/', getEvent)
router.post('/', postEvent)
router.delete('/:id', deleteEvent)
router.put('/:id', putEvent)

module.exports = router;