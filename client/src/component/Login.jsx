import React from 'react'
import {useState} from 'react'
import axios from 'axios'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Login({login}) {

const  [data, setData] = useState({})

 function update(e) {
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
}
function register(e){
    e.preventDefault()
    axios.post('http://localhost:4000/sign/signin', data)
    .then((r)=>{
        localStorage.setItem("userInfo", JSON.stringify(r.data))
        login(r.data)})
}


  return (
    <div>
    <form onSubmit={register}>
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Ingresar
                    <div>
                        <input onChange={update} type="text" name='email' placeholder='Email'/>
                        <input onChange={update} type="password" name='password' placeholder='Password' />
                        <br />
                        <input type="submit" />
                    </div>
                </Typography>
            </CardContent>

        </Card>
    </form>

    </div>
  )
}

export default Login