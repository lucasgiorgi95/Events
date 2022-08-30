const {Event} = require('../db.js')
const {User} = require ('../db.js')

 const getEvent = async (req, res)=>{
    const {rol, fecha, publicado, titulo}=req.body

    try {
       let config ={...req.body}
       delete config.rol
       let options = {where:{...config, stateBinary:true}, include: User}
       console.log(options)
    let events = []
    if(rol == 'admin'){
        events = await Event.findAll(options) 
    }else{
        options.where.publicado="publicado"
        events = await Event.findAll(options)
    }
    res.status(200).json(events)
   } catch (error) {
    console.log(error)
    return res.status(500).json({message: error.message})
   }


} 

const stateEvent = async (req, res) =>{
   const {estado} = req.body
   let state = estado? estado : true
    const events = await Event.findAll({where:{...req.body, stateBinary:true},include:User})
    let filterEvents = events.filter((e)=>e.dataValues.Users.length !==0 && 
    (e.dataValues.estado === state || estado))
    res.send(filterEvents)
}

 const postEvent = async (req, res)=>{
    const {titulo, descripcionCorta, descripcionLarga, organizador, lugar, estado, fecha, publicado} = req.body
    try {
        const newEvent = await Event.create({
            titulo, descripcionCorta, descripcionLarga, organizador, lugar, estado, fecha, publicado
        })
    
       res.status(200).json(newEvent)
      } catch (error) {
        return res.status(500).json({message: error.message})
      }
} 

 const putEvent = async (req, res)=>{
    try {
     const {id}=req.params
     const {titulo, descripcion, descripcionLarga, organizador, lugar, estado, fecha, publicado} = req.body 
     const event = await Event.findByPk(id)
     event.titulo=titulo
     event.descripcion=descripcion
     event.descripcionLarga=descripcionLarga
     event.organizador=organizador
     event.lugar=lugar
     event.estado=estado
     event.fecha=fecha
     event.publicado=publicado

     await event.save()
     res.status(200).json(event)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
} 

const suscribeEvent = async (req, res)=>{
  const {rol, email, id}=req.body
   try {
    if(!rol || !email) throw new Error("Sesion no iniciada")
    const newSub = await User.findOne({where:{
      email:email
    }})
    const event = await Event.findByPk(id)
    const fecha = Date.parse(event.dataValues.fecha)
    const fechaActual = new Date()
    if(fecha < fechaActual){
        throw new Error("Expirado")
    }
   await event.setUsers(newSub)
    res.status(200).send("Sub")
   } catch (error) {
    return res.status(500).json({message: error.message})
   }
}

const eventDelete = async (req, res, next) => {
    try {
      const { id } = req.body
      await Event.update(
        { stateBinary: false },
        {
          where: {
            id
          }
        }
      )
      res.status(200).send('event removed successfully')
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
  }


module.exports = {
    getEvent,
    postEvent,
    putEvent,
    suscribeEvent,
    stateEvent,
    eventDelete

}