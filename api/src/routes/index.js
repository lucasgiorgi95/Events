const { Router } = require('express');
const event = require('./event.routes')
const user = require('./user.routes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/event', event)
router.use('/user', user)


module.exports = router;
