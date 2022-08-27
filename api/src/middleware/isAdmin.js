const { User } = require('../db.js')

const isAdmin = async (req, res, next) => {
  try {
    const { rol,  email } = req.body
    if (!rol) return res.status(400).send({ error: 'No se envio un rol' })
    if (!email) return res.status(400).send({ error: 'Token invalido' })
    const user = await User.findOne({ where: { email } })
    if (user === null) return res.status(400).send({ error: 'Usuario no encontrado' })
    user.rol === 'admin'
      ? next()
      : res.send({ error: 'El usuario no es admin' })
  } catch (e) {
    console.log(e.message)
    res.status(400).send({ error: e.message })
  }
}

module.exports = {
  isAdmin
}
