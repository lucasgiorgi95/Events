import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function Register() {

const  [data, setData] = useState({})

 function update(e) {
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
}
function register(e){
    e.preventDefault()
    axios.post('http://localhost:4000/sign/signup', data).then((r)=>console.log(r))
}

  return (
    <div>
    <form onSubmit={register}>
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Registrarse
        <input onChange={update} type="text" name='name' placeholder='Nombre' />
            <input onChange={update} type="text" name='lastname' placeholder='Apellido'/>
            <input onChange={update} type="text" name='email' placeholder='Email'/>
            <input onChange={update} type="password" name='password' placeholder='Password'/>
            <div>
            <select onChange={update} name="rol" >
                <option value="">Seleccione Rol</option>
                <option value="admin">Administrador</option>
                <option value="user">Usuario</option>
            </select>
            </div>
            <input type="submit" name='Registro'/>
        </Typography>
      </CardContent>

    </Card>
    </form>



    </div>
  )
}

export default Register