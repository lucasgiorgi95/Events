import React, {useState, useEffect} from 'react'
import CardEvent from './CardEvent'
import axios from 'axios'


function Card() {
    const [event , setEvent]=useState([])
    console.log()
    useEffect(() => {
      axios.get('http://localhost:4000/event/')
      .then((r)=>setEvent(r.data))
      .then((r)=>console.log(r))
    }, [])

    useEffect(() => {
     
    }, [event])
    

  return (
    <div>
           {console.log(event)}
        <div>
        { event.length !== 0 ? event.map(r => <CardEvent
        data={r}
        />) : null }
        </div>
    </div>
  )
}

export default Card