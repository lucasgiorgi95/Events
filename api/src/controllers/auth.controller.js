const { User }=require('../db.js');

const signUp = async (req,res)=>{
    const {username, email, password, rol} = req.body
   

    const user = new User ({
        username, 
        email, 
        password,
    })
    console.log(user)
    res.json("saliendo")

    // try {
    //     const { email, name } = req.body
    //     const user = await User.findOne({ where: { email } }).catch((error) => {
    //       console.log(error)
    //     })
    //     if (user) {
    //       return res.json({ error: 'Email existente' })
    //     }
    
    //     // ACA SE HASEA EL PASSWORD.
    //     const info = { ...req.body }
    //     await User.create(info).catch((error) => {
    //       console.log(error)
    //     })
    //     console.log(req.body)
    //     console.log(user)
    //     return res.json({ message: 'Usuario Registrado!' })
    // } catch (error) {
    //   res.status(400).send({ error: error.message })
    // }

}


const signIn = (req,res)=>{
    res.json("entrando")
}



module.exports = {
    signUp,
    signIn
}
