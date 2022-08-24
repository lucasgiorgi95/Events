const {Event} = require('../db.js')

 const getEvent = async (req, res)=>{
   try {
    const events = await Event.findAll()
    res.json(events)
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
    
       res.json(newEvent)
      } catch (error) {
        return res.status(500).json({message: error.message})
      }
} 

 const deleteEvent = async (req, res)=>{
    console.log("Holi")
    res.send('soy un delete')
} 

 const putEvent = async (req, res)=>{
    console.log("Holi")
    res.send('soy un put')
} 

module.exports = {
    getEvent,
    postEvent,
    deleteEvent,
    putEvent
}