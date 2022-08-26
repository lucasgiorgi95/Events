
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import {useEffect, useState}  from 'react'

function App() {
  const [session, setSession]=useState(window.localStorage.getItem('userInfo') || null)
  function logout(){
    localStorage.removeItem("userInfo");
    setSession(null)
  }
  // useEffect(() => {
    
  // }, [])
  function login (data){
    setSession(data)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {
          !session? <div>
            <Register/>
            <Login login={login}/>{console.log(session)}
          </div>:<button onClick={logout}>Salir</button>
        }
        
      </header>
    </div>
  );
}

export default App;
