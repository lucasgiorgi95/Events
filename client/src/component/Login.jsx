import React from 'react'
import {useState} from 'react'
import axios from 'axios'
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
            <input onChange={update} type="text" name='email' placeholder='Email'/>
            <input onChange={update} type="password" name='password' placeholder='Password' />
            <input type="submit" />
        </form>

    </div>
  )
}

export default Login