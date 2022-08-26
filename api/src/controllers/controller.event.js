const {Event} = require('../db.js')

 const getEvent = async (req, res)=>{
   try {
    const events = await Event.findAll()
    res.status(200).json(events)
   } catch (error) {
    return res.status(500).json({message: error.message})
   }
} 


 const postEvent = async (req, res)=>{
    const {titulo, descripcion, descripcionLarga, organizador, lugar, estado, fecha} = req.body
    try {
        const newEvent = await Event.create({
            titulo, descripcion, descripcionLarga, organizador, lugar, estado, fecha
        })
    
       res.status(200).json(newEvent)
      } catch (error) {
        return res.status(500).json({message: error.message})
      }
} 

 const deleteEvent = async (req, res)=>{
//   try {
//     const { id, state } = req.params
//     const stateEvent=await Event.update(
//         {state},
//         {
//             where:{
//                 id
//             }
//         }
//     )
//         res.status(200).send(stateEvent)
//   } catch (error) {
//     console.log(error)
//     return res.status(500).json({message: error.message})
//   }

try {
    const {id}=req.params
    const event = await Event.destroy({
        where:{
            id,
        }
    })
    res.status(200).json({message:'event distroy'})
} catch (error) {
    return res.status(500).json({message: error.message})
}

} 

 const putEvent = async (req, res)=>{
    try {
     const {id}=req.params
     const {titulo, descripcion, descripcionLarga, organizador, lugar, estado, fecha} = req.body 
     const event = await Event.findByPk(id)
     event.titulo=titulo
     event.descripcion=descripcion
     event.descripcionLarga=descripcionLarga
     event.organizador=organizador
     event.lugar=lugar
     event.estado=estado
     event.fecha=fecha

     await event.save()
     res.status(200).json(event)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
} 

module.exports = {
    getEvent,
    postEvent,
    deleteEvent,
    putEvent
}