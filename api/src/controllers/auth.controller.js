const { User }=require('../db.js');

const allUser = async(req,res)=>{
    User.findAll().then((r) => {
        res.send(r)
      })
}


const signUp = async (req,res)=>{
    try {
        const { email, name } = req.body
        const user = await User.findOne({ where: { email } }).catch((error) => {
          console.log(error)
        })
        if (user) {
          return res.json({ error: 'Email existente' })
        }
        const info = { ...req.body }
       const newUser= await User.create(info).catch((error) => {
          console.log(error)
        })
        
        console.log(newUser)
        return res.json({ message: 'Usuario Registrado!' })
    } catch (error) {
      res.status(400).send({ error: error.message })
    }

}


const signIn = async(req,res)=>{
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } }).catch((error) => {
      res.status(404).json({message: "Error"})
    })
    // if (user) {
    //   return res.json({ error: 'Email existente' })
    // }
    if(user.dataValues.password === password){
        return res.json({rol:user.dataValues.rol, email:user.dataValues.email})
    }
    res.send(user)
}



module.exports = {
    signUp,
    signIn,
    allUser
}
