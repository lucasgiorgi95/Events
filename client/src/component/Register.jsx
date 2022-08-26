import React from 'react'
import { useState } from 'react'
import axios from 'axios'
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
            <input onChange={update} type="text" name='name' placeholder='Nombre' />
            <input onChange={update} type="text" name='lastname' placeholder='Apellido'/>
            <input onChange={update} type="text" name='email' placeholder='Email'/>
            <input onChange={update} type="password" name='password' placeholder='Password'/>
            <select onChange={update} name="rol" >
                <option value="admin">Administrador</option>
                <option value="user">Usuario</option>
            </select>
            <input type="submit" name='Registro'/>
        </form>
    </div>
  )
}

export default Register