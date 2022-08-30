import React, {useState} from 'react'


function CardEvent({data}) {
  const [session, setSession]=useState(JSON.parse(window.localStorage.getItem('userInfo')) || null)


  return (
    <div>
      {console.log(session)}
        <div>
          <h1>{data.titulo}</h1>
          {
          session.rol === 'admin'?
            <div>
              <button>eliminar</button>
               <button>editar</button>
            </div>:
            null
          }
            <button>inscribir</button>
        </div>
    </div>
  )
}

export default CardEvent