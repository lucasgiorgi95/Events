import React, {useState} from 'react'
import Login from './Login';
import Register from './Register';
import CardE from './CardE'

const Home = () => {
   
  const [session, setSession]=useState(window.localStorage.getItem('userInfo') || null)
  function logout(){
    localStorage.removeItem("userInfo");
    setSession(null)
  }

  function login (data){
    setSession(data)
  }

  return (
    <div>
     {
          !session? <div>
            <div>
              <Register/>
            </div>
            <br />
            <div>
              <Login login={login}/>{console.log(session)}
            </div>
          </div>:
          <div>
            <button onClick={logout}>Salir</button>
            <CardE/>
          </div>
        }
        
    </div>
  )
}

export default Home